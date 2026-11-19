import localFont from "next/font/local";

// Body font — Inter (clean, highly legible modern sans for dense coverage copy)
export const bodyFont = localFont({
  src: [
    { path: "./fonts/Inter-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

// Headline font — Playfair Display (was loaded via a CSS @import CDN link; now one self-hosted font)
export const headlineFont = localFont({
  src: [
    { path: "./fonts/PlayfairDisplay-italic-variable.woff2", weight: "400", style: "italic" },
    { path: "./fonts/PlayfairDisplay-italic-variable.woff2", weight: "600", style: "italic" },
    { path: "./fonts/PlayfairDisplay-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/PlayfairDisplay-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/PlayfairDisplay-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-headline",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

// Label font — Public Sans (was loaded via the same CSS @import CDN link)
export const labelFont = localFont({
  src: [
    { path: "./fonts/PublicSans-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/PublicSans-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/PublicSans-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-label",
  display: "swap",
  preload: false,
});
