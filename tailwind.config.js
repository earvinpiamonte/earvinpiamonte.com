const { fontFamily } = require('tailwindcss/defaultTheme');
const { sans, mono } = fontFamily;

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './templates/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...sans],
        mono: ['DM Mono', ...mono],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/aspect-ratio')],
};
