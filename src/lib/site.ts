// Centralized site data — Spray Foam Insurance Carrier
// Specialized E&S and admitted market underwriting for spray foam contractors

export const SITE = {
  name: "Spray Foam Insurance Carrier",
  legalName: "Spray Foam Insurance Carrier (by Contractors Choice Agency)",
  domain: "sprayfoaminsurancecarrier.com",
  url: "https://sprayfoaminsurancecarrier.com",
  tagline: "The Spray Foam Underwriting Authority",
  description:
    "Specialized E&S and admitted market underwriting for spray foam contractor insurance — GL, pollution liability, off-ratio coverage, workers' comp, commercial auto, and more. A-rated carriers. All 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const BRAND = {
  brandShort: "Spray Foam",
  brandSub: "Insurance Carrier",
  nicheShort: "spray foam contractor",
  nicheShortCap: "Spray Foam Contractor",
  nichePlural: "spray foam contractors",
  nichePluralCap: "Spray Foam Contractors",
  operator: "spray foam operation",
  operatorCap: "Spray Foam Operation",
  industry: "spray foam insulation",
  industryCap: "Spray Foam Insulation",
  audience: "spray foam contractors",
  audienceCap: "Spray Foam Contractors",
  ownerTitle: "spray foam contractor",
  regionPill: "Texas · Southeast · National",
  serviceSuffix: "Spray Foam Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability for Spray Foam",
    short: "A-rated GL built for spray foam applicators",
    description:
      "Carrier-placed general liability designed for spray foam contractors — covering completed operations, property damage from overspray, off-gassing claims, and the subcontractor exposures standard markets won't write.",
    icon: "ShieldCheck",
    keywords: ["spray foam general liability", "spray foam contractor insurance", "spray foam GL", "foam insulation liability insurance"],
  },
  {
    slug: "off-ratio-coverage",
    title: "Off-Ratio Coverage",
    short: "Coverage for improper-mix and off-ratio claims",
    description:
      "Specialized endorsements and standalone policies for off-ratio spray foam applications — the #1 exclusion that leaves contractors exposed when an improper mix causes adhesion failure, odor, or structural damage.",
    icon: "Gauge",
    keywords: ["off-ratio spray foam insurance", "improper mix spray foam coverage", "spray foam adhesion failure insurance", "off-ratio foam endorsement"],
  },
  {
    slug: "contractor-pollution-liability",
    title: "Contractor Pollution Liability",
    short: "Chemical release and off-gassing coverage",
    description:
      "CPL coverage for spray foam chemical exposures — isocyanate and polyol off-gassing, chemical spill cleanup, and third-party bodily injury or property damage from foam vapors and chemical releases.",
    icon: "Droplets",
    keywords: ["contractor pollution liability spray foam", "spray foam chemical exposure insurance", "isocyanate coverage", "foam off-gassing liability"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "For spray foam crews and applicators",
    description:
      "Workers' comp written for the real injury patterns of spray foam work — chemical exposure, respiratory claims, equipment injuries, and fall hazards. Proper class codes. Competitive A-rated markets.",
    icon: "HardHat",
    keywords: ["spray foam workers compensation", "foam insulation workers comp", "spray foam crew insurance", "spray foam applicator workers comp"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto & Spray Rigs",
    short: "Trucks, spray rigs, and equipment trailers",
    description:
      "Commercial auto coverage for spray foam contractor vehicles — service trucks, spray rigs, equipment trailers, and hired/non-owned auto. Built for contractors running equipment on job sites and public roads.",
    icon: "Truck",
    keywords: ["spray foam commercial auto", "spray rig insurance", "foam contractor truck insurance", "spray foam vehicle coverage"],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment",
    short: "Proportioners, guns, hoses & foam systems",
    description:
      "Coverage for spray foam proportioners, spray guns, heated hoses, transfer pumps, generators, and other contractor equipment — at job sites, in transit, and in storage. Replacement cost available.",
    icon: "Wrench",
    keywords: ["spray foam equipment insurance", "proportioner insurance", "foam equipment coverage", "spray foam tools coverage"],
  },
  {
    slug: "umbrella",
    title: "Commercial Umbrella",
    short: "Excess limits above GL and CPL",
    description:
      "Commercial umbrella coverage providing excess limits above your general liability, CPL, and auto — giving spray foam contractors the higher limits required by GCs and building owners on commercial projects.",
    icon: "Umbrella",
    keywords: ["spray foam umbrella insurance", "foam contractor excess liability", "spray foam umbrella coverage", "contractor umbrella policy"],
  },
  {
    slug: "bonds",
    title: "Contractor Bonds",
    short: "License, permit, and performance bonds",
    description:
      "License and permit bonds, performance bonds, and payment bonds for spray foam contractors — required for state licensing, commercial contracts, and public works projects. Fast placement, A-rated surety markets.",
    icon: "FileCheck",
    keywords: ["spray foam contractor bonds", "foam contractor license bond", "spray foam performance bond", "insulation contractor bond"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas-southwest", name: "Texas & Southwest", region: "TX · NM · AZ · OK", blurb: "Spray foam demand is highest in the high-heat Southwest. We write programs for Texas and Southwest contractors — residential and commercial new construction, retrofit insulation, and metal building foam." },
  { slug: "southeast", name: "Southeast", region: "FL · GA · AL · SC · NC · TN", blurb: "Humid-climate spray foam markets across the Southeast. Coverage for Florida, Georgia, and Carolina contractors — including hurricane-zone projects, residential foam roofing, and high-humidity crawlspace applications." },
  { slug: "midwest", name: "Midwest", region: "OH · IN · IL · MI · MN · WI", blurb: "Cold-climate spray foam programs for Midwest contractors — energy efficiency retrofits, metal building foam insulation, and industrial facility spray foam applications." },
  { slug: "northeast", name: "Northeast", region: "NY · PA · NJ · CT · MA · VT", blurb: "High-value commercial and residential spray foam markets in the Northeast. Programs for New York, Pennsylvania, and New England contractors — including historic retrofits and code-compliance projects." },
  { slug: "california", name: "California", region: "CA — all regions", blurb: "California's strict contractor licensing and building codes create unique spray foam insurance requirements. We write admitted and E&S programs for CA foam contractors — residential, commercial, and Title 24 compliance projects." },
  { slug: "mountain-states", name: "Mountain States", region: "CO · UT · NV · ID · MT · WY", blurb: "Mountain-region spray foam programs for contractors working in high-altitude and extreme-temperature environments — energy retrofit, agricultural, and commercial building applications." },
  { slug: "mid-atlantic", name: "Mid-Atlantic", region: "MD · VA · DC · DE · WV", blurb: "Mid-Atlantic spray foam contractor programs — residential and commercial new construction, retrofit insulation, and government building projects across Maryland, Virginia, and the DC corridor." },
  { slug: "pacific-northwest", name: "Pacific Northwest", region: "WA · OR · AK", blurb: "Pacific Northwest programs for spray foam contractors — wet-climate building envelope applications, energy code compliance, and commercial/industrial foam insulation in Washington, Oregon, and Alaska." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Spray foam specialists", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Spray foam contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring specialty contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "We'd been declined three times for off-ratio coverage before finding this program. They understood the underwriting appetite, placed an A-rated carrier, and had us bound in two days. No other broker came close.", name: "Marcus T.", role: "Owner, Spray Foam Contractor", location: "Texas" },
  { quote: "A completed-operations claim from an off-gassing complaint hit us two years after the job. Our old carrier denied it. Spray Foam Insurance Carrier had us in a program with proper completed-ops tail coverage — the claim was handled.", name: "Sandra R.", role: "Operations Director", location: "Florida" },
  { quote: "When a GC required $5M umbrella for a commercial project, most insurers couldn't stack the limits. These specialists built the tower — GL plus CPL plus umbrella — exactly as the contract required. We got the job.", name: "Derek M.", role: "President, Foam Systems LLC", location: "Ohio" },
] as const;
