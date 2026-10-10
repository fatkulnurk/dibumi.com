import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Merah Sang Saka Merah Putih (bendera Indonesia), brand-600 = #CE1126
        brand: {
          50: "#fef4f4",
          100: "#fde3e4",
          200: "#fbc9cb",
          300: "#f79a9e",
          400: "#ef5a61",
          500: "#dc2e38",
          600: "#ce1126",
          700: "#ac0e20",
          800: "#8a0b1b",
          900: "#6e0917",
          950: "#3e040d",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        ar: ["var(--font-sans-ar)", "var(--font-sans)", "system-ui", "sans-serif"],
        zh: ["var(--font-sans-zh)", "var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono-plex)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(0.75rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
      },
      animation: {
        "fade-up": "fade-up 650ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "slow-zoom": "slow-zoom 24s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
