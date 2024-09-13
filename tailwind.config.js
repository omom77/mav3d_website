/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./js/*.{html,js}",
    "./js/main.js"
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      // WARNING!! Below is INCORRECT!
      // backgroundImage:{
      //   'main_bg':"url('../img/3_background_img.jpg)"
      // }
      minHeight: {
        '128': '32rem',
      }
  },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1200px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'darkcyan': '#BFD1D5',
      'lightcyan': '#DFE7EA',
      'white': '#ffffff'
    },
    fontFamily: {
        sans: ['Outfit', 'sans-serif']
    },
    // borderRadius: {
    //     '4xl': '2rem',
    //   }
  },
  plugins: [],
}

