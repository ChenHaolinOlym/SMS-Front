module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['even'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
