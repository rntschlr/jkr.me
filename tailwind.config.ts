import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "monospace"],
      },
      maxWidth: {
        site: "1280px",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        pulse: "pulse 2s infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
