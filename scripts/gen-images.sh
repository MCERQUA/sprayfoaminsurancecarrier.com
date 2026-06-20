#!/usr/bin/env bash
# Generate all images for sprayfoaminsurancecarrier.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/sprayfoaminsurancecarrier.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — SPRAY FOAM INSURANCE CARRIER ===

gen "hero.jpg" \
  "Photorealistic dark corporate wide shot of modern glass skyscraper at night with deep navy blue tones, institutional insurance company headquarters, moody dramatic lighting, professional corporate photography, no text" 4

gen "coverage.jpg" \
  "Photorealistic aerial view of spray foam insulation project at night with industrial lighting, dark atmospheric corporate photography, insurance carrier perspective, no text" 4

gen "about.jpg" \
  "Photorealistic portrait of a senior insurance underwriter in dark navy suit at modern corporate office, institutional authority, professional headshot style, dark background, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide dark corporate insurance office scene at night, navy blue tones, premium institutional setting, gold accent lighting, professional photography, no text" 4 1216 640

gen "general-liability.jpg" \
  "Photorealistic dark premium photo of spray foam contractor at work, moody industrial lighting, insurance carrier perspective, no text" 4

gen "off-ratio-coverage.jpg" \
  "Photorealistic dark industrial photo of spray foam proportioner equipment with dramatic lighting, professional corporate photography, no text" 4

gen "contractor-pollution-liability.jpg" \
  "Photorealistic dark atmospheric industrial photo of spray foam applicator in PPE, moody dramatic lighting, corporate insurance aesthetic, no text" 4

gen "workers-compensation.jpg" \
  "Photorealistic dark premium photo of spray foam crew at work in industrial setting, dramatic lighting, professional corporate photography, no text" 4

gen "commercial-auto.jpg" \
  "Photorealistic dark photo of professional spray foam contractor fleet vehicles at night, moody industrial photography, no text" 4

gen "tools-equipment.jpg" \
  "Photorealistic dark close-up of spray foam proportioner equipment with dramatic industrial lighting, premium corporate aesthetics, no text" 4

gen "umbrella.jpg" \
  "Photorealistic dark premium corporate boardroom at night, insurance executives at table, navy blue tones, gold accent lighting, professional photography, no text" 4

gen "bonds.jpg" \
  "Photorealistic dark corporate contract signing scene, dark wood desk, institutional setting, dramatic lighting, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
