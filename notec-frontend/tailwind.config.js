/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple-dark": "#72369D",
        "custom-purple-light": "#B67BE6",
        "custom-yellow-dark": "#FA8C02",
        "custom-yellow-light": "#FFC242",
      },
    },
  },
  plugins: [],
};
