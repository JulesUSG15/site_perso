import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#044477",
          night: "#031a2a",
          deep: "#053a67",
        },
        ink: "#0e1b2c",
        muted: "#5a6b82",
        line: "#e4e8ee",
        surface: "#f7f9fc",
        accent: {
          DEFAULT: "#38bdf8",
          soft: "#e8f4fa",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      boxShadow: {
        brand: "0 30px 60px -30px rgba(4, 68, 119, 0.35)",
        card: "0 12px 30px -12px rgba(4, 68, 119, 0.18)",
        ring: "0 0 0 4px rgba(4, 68, 119, 0.12)",
      },
      backgroundImage: {
        "brand-fade":
          "radial-gradient(1200px 600px at 15% -10%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(900px 500px at 90% 0%, rgba(4,68,119,0.12), transparent 55%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 500ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
