/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        facuFont: ["Covered By Your Grace", 'sans-serif'],
        manrope: ["Manrope", 'sans-serif'],
      }
    },
  },
  plugins: [],
}
