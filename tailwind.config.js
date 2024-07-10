/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-main": "#1492E6",
        "primary-white": "#fff",
        "primary-black": "#000",
        "primary-gray": "#777777",
        "sp1-gray1": "#929292",
        "sp1-lightGray": "#EDEDED",
        "sp1-red": "#FF0413",
      },
    },
  },
  plugins: [],
};
