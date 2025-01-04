/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "rgb(15,23,42)",
      },
      // fontFamily: {
      //   jersey: ["Jersey 10", "serif"],
      // }
    },
  },
  plugins: [],
}