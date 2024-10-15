/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ELECT: "#77C02E",
        NAV: "#393939",
        BG: "#212121",
      },
    },
  },
  plugins: [],
};
