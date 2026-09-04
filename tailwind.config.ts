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
        slate: {
          850: "#152238",
          900: "#0f172a",
          950: "#080c14",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "ticker": "ticker 38s linear infinite",
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        }
      },
      boxShadow: {
        "soft-sm": "0 2px 8px -2px rgba(13, 148, 136, 0.08), 0 1px 4px -1px rgba(15, 23, 42, 0.04)",
        "soft-md": "0 12px 30px -8px rgba(13, 148, 136, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.05)",
        "soft-lg": "0 24px 50px -12px rgba(13, 148, 136, 0.16), 0 8px 24px -4px rgba(15, 23, 42, 0.06)",
        "soft-xl": "0 32px 64px -16px rgba(13, 148, 136, 0.22), 0 12px 32px -6px rgba(15, 23, 42, 0.08)",
      }
    },
  },
  plugins: [],
} satisfies Config;
