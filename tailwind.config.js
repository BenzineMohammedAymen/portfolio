/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        bg2: "rgb(var(--color-bg2) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
        card2: "rgb(var(--color-card2) / <alpha-value>)",
        border: "var(--color-border)",
        fg: "rgb(var(--color-fg) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        indigo: "#6366f1",
        violet: "#8b5cf6",
        cyan: "#06b6d4",
        emerald: "#10b981",
        amber: "#f59e0b",
        rose: "#f43f5e",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
