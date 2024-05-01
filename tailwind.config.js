/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      textColor: {
        orangeColor: ["rgb(255 135 51)"],
        blueColor: ["rgb(20 27 77)"],
        skyColor: ["rgb(33, 150, 243)"],
      },
      fill: {
        orangeColor: ["rgb(255 135 51)"],
        blueColor: ["rgb(20 27 77)"],
        skyColor: ["rgb(33, 150, 243)"],
      },
      backgroundColor: {
        orangeColor: ["rgb(255 135 51)"],
        blueColor: ["rgb(20 27 77)"],
        skyColor: ["rgb(33, 150, 243)"],
      },
      borderColor: {
        blueColor: ["rgb(20 27 77)"],
        skyColor: ["rgb(33, 150, 243)"],
      },
      placeholderColor: {
        blueColor: ["rgb(20 27 77)"],
        skyColor: ["rgb(33, 150, 243)"],
      },
    },
  },
  plugins: [],
};
