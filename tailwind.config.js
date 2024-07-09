/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-main": "#1492E6",
        "primary-gray": "#777777",
      },
    },
  },
  plugins: [],
};
