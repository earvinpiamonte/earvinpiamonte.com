const defaultTheme = require('tailwindcss/defaultTheme');

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
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        mono: ['DM Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/aspect-ratio')],
};
