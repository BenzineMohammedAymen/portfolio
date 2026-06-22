/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080810",
        bg2: "#0c0c18",
        card: "#0e0e1e",
        card2: "#131325",
        border: "rgba(255,255,255,0.08)",
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
