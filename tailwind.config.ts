import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ink: "#12343b",
        mist: "#f4fffd",
        tosca: {
          50: "#effefa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        surface: {
          50: "#18181b",
          100: "#121214",
          200: "#0c0c0e",
          300: "#080809",
        },
        accent: {
          teal: "#14b8a6",
          emerald: "#10b981",
          cyan: "#06b6d4",
          purple: "#8b5cf6",
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      animation: {
        "marquee": "marquee 25s linear infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.4" },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
