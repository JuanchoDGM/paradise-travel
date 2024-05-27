/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
      },
      colors:{
        'principal': '#0979b0',
      }
    },
  },
  plugins: [],
}

