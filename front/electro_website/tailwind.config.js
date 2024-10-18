/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ELECT: "#77C02E",
        NAV: "#393939",
        BG: "#212121",
        BG2: "#2E2E2E",
        BODY: "#D2D2D2"
      },
      // tailwind.config.js
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
