import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f8f8f8",
        sand: "#e5e7eb",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#c9972c",
          dark: "#a87a22",
          light: "#e0a832",
          50: "#fdf6e3",
          100: "#faecc6",
          200: "#f4d98e",
          300: "#edc256",
          400: "#e0a832",
          500: "#c9972c",
          600: "#a87a22",
          700: "#7d5b19",
          800: "#533c10",
          900: "#2a1e08",
        },
        sage: {
          DEFAULT: "#1e2a3a",
          dark: "#0d1626",
          light: "#2c3e50",
          50: "#e8edf3",
          100: "#c5d1de",
          200: "#9fb3c8",
          300: "#7895b2",
          400: "#4d6f8e",
          500: "#2c3e50",
          600: "#1e2a3a",
          700: "#0d1626",
        },
        gold: {
          DEFAULT: "#e0a832",
          dark: "#c9972c",
          light: "#f0c060",
          50: "#fef9ec",
          100: "#fdefc8",
          200: "#fbd98e",
          300: "#f5c054",
          400: "#e0a832",
          500: "#c9972c",
          600: "#a87a22",
        },
        espresso: "#0a0f1e",
        cocoa: "#111827",
        mocha: "#9ca3af",
        adobe: "#374151",
        adobeDark: "#1f2937",
      },
      fontFamily: {
        headline: ["var(--font-headline)", "Playfair Display", "Georgia", "serif"],
        heading: ["var(--font-headline)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        label: ["var(--font-label)", "Public Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #0a0f1e 0%, #0d1626 40%, #1e2a3a 70%, #0a0f1e 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(201,151,44,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(30,42,58,0.20) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #c9972c 0%, #e0a832 100%)",
        "sage-gradient": "linear-gradient(135deg, #1e2a3a 0%, #2c3e50 100%)",
        "gold-gradient": "linear-gradient(135deg, #e0a832 0%, #f0c060 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(201,151,44,0.30), 0 4px 12px -6px rgba(10,15,30,0.40)",
        "warm-lg": "0 30px 70px -20px rgba(201,151,44,0.35), 0 10px 30px -10px rgba(10,15,30,0.50)",
        card: "0 2px 8px -2px rgba(10,15,30,0.30), 0 1px 3px -1px rgba(10,15,30,0.20)",
        "card-hover": "0 20px 50px -15px rgba(201,151,44,0.25), 0 8px 20px -8px rgba(10,15,30,0.40)",
        arch: "inset 0 -8px 30px -10px rgba(201,151,44,0.15)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
