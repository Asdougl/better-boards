const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'princeton-orange': '#EE8434',
      'indian-red': '#C95D63',
      'english-lavender': '#AE8799',
      'glaucous': '#717EC3',
      'royal-blue-light': '#496DDB',
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      transparent: 'transparent'
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    },
  },
  plugins: [],
}
