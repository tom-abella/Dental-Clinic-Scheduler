/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
        
    extend: {
      colors: {
        darkBlue: "#0f1d97"
      },
      fontFamily:{
        'pop':['Poppins','sans-serif']
      },
      spacing: {
        '128': '32rem',
        '130': '44rem',
      }
    },
  },
  plugins: [],
}
