const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}"],
  // should use more specificity to tell tailwind where styling components are used
  theme: {
    screens: {
      'xs': '361px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'primary-color': '#0fa'
      }
    },
  },
  plugins: [],
}
// npx tailwindcss.init creates the config file for you