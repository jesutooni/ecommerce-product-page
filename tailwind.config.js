const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["'Kumbh Sans'", 'sans-serif']
      },
      colors: {
        orange: 'hsl(26, 100%, 55%)',
        orange2: 'hsl(25, 100%, 94%)',
        blue1: 'hsl(220, 13%, 13%)',
        blue2: 'hsl(219, 9%, 45%)',
        blue3: 'hsl(220, 14%, 75%)',
        blue4: 'hsl(223, 64%, 98%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
