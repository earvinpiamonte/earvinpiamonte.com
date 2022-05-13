const { fontFamily } = require('tailwindcss/defaultTheme');
const { sans, mono } = fontFamily;

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './templates/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...sans],
        mono: ['DM Mono', ...mono],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
