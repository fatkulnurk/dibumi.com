import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
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
