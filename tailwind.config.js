/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sz: {
          navy: "#0a2540",
          "navy-dark": "#071a2d",
          "navy-light": "#0f3360",
          blue: "#0066cc",
          "blue-dark": "#004d99",
          "blue-light": "#e6f0fa",
          gold: "#f59e0b",
          "gold-light": "#fbbf24",
          "gold-dark": "#d97706",
          green: "#16a34a",
          "green-dark": "#15803d",
          "green-light": "#dcfce7",
          sky: "#0284c7",
          card: "#ffffff",
          bg: "#f8fafc",
        },
      },
      fontFamily: {
        sans: [
          "Cairo",
          "Tajawal",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.04)",
        card: "0 4px 20px rgba(10, 37, 64, 0.06)",
        hover: "0 8px 30px rgba(10, 37, 64, 0.12)",
      },
    },
  },
  plugins: [],
};
