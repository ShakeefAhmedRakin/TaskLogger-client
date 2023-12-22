/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#18120f",
        background: "#ffffff",
        primary: "#025464",
        secondary: "#E8AA42",
        accent: "#E57C23",
      },
      fontFamily: {
        heading: ["Work Sans", "sans-serif"],
        text: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
