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
        blue4: 'hsl(223, 64%, 98%)',
        black2: 'rgba(0, 0, 0, 0.7)'
      },
      zIndex: {
        '-10':'-10',
        '-5': '-5',
        '1': '1',
        '5': '5',
        '8': '8'
      },
      width: {
        '90': '22.5rem',
        '120': '30rem'
      },
      height: {
        '120': '30rem'
      },
      screens: {
        'xs': '400px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
