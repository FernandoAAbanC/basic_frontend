module.exports = {
  content: [
    './app/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {   
        pink: {
          550: '#ec199c'
        },
        primary :"#00BFFF"
                
      },
      borderWidth: {
        3: '3px',
      },
      height: {
        128: '32rem',
        180: '45rem',
        'screen-3/5': '70vh',
        'screen-4/5': '80vh',
        'screen-50': '50vh',
        'screen-55': '55vh',
        'screen-70': '70vh',
        'screen-115': '115vh',
        '1/3': '33.33%',
        '3/6': '50%',
        full: '100%',
      },
      width: {
        7: '1.75rem',
        11: '3.75rem',
        48: '12rem',
        80: '20rem',
        '1/10': '10%',
        '9/10': '90%',
        '9/12': '75%',
        76: '19rem',
        '1/9': '11.11%',
        '8/9': '88.8888%',
        '3/10': '30%',
        '7/10': '70%',
        '5/11': '45.454545%',
        '6/11': '54.545454%',
        '9/20': '45%',
      },
      minWidth: {
        10: '2.5rem',
        28: '7rem',
        76: '19rem',
        92: '23rem',
        25: '6.25rem',
      },
      maxWidth: {
        '1/2': '50%',
      },
      minHeight: {
        'screen-90': '90vh',
        'screen-130': '130vh',
      },
      borderRadius: {
        '1/2': '50%',
        '6/11': '54.545454%',
        '5/12': '41.666667%',
      },
      inset: {
        '-16': '-4rem',
        '-6': '-1.5rem',
        '-2': '-.5rem',
        4: '1rem',
        6: '1.5rem',
        16: '4rem',
        20: '5rem',
        '1/2': '50%',
        '1/3': '33.33%',
        '1/5': '20%',
        'minus-4': '-1rem',
        '11/25': '44%',
      },
      fontSize: {
        sx2: '.935rem',
        xxs: '0.5rem',
        tiny: '.65rem',
        '5sm': '3.5rem',
        '7xl': '5rem',
        '8xl': '6rem',
        xxl: '8rem',
      },
      boxShadow: {
        card: '0px 0px 15px -2px #888888',
      },
      zIndex: {
        60: '60',
      },
      margin: {
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
        '-14': '-3.5rem',
        26: '6.5rem',
        28: '7rem',
        30: '7.5rem',
        48: '12rem',
        52: '13rem',
        68: '17rem',
        80: '20rem',
        176: '44rem',
        '1/12': '8.33%',
        '1/20': '5%',
        '1/30': '3.333%',
      },
      padding: {
        14: '3.5rem',
        '-14': '-3.5rem',
        '1/12': '8.33%',
        '1/20': '5%',
        '1/30': '3.333%',
        26: '6.5rem',
        30: '7.5rem',
        68: '17rem',
        88: '23rem',
        176: '44rem',
      },
      padding: {
        14: '3.5rem',
        '1/6': '16.666667%',
        '1/10': '10%',
      },
      spacing: {
        7: '1.75rem',
      },
      fontFamily: {
        arial: ['Arial Black, Arial, sans-serif'],
        cinzel: ['Cinzel, serif'],
        garamond: ['Cormorant Garamond, serif'],
      },
      screens: {
        hd: '1680px',
      },
      backgroundSize: {
        full: '100%',
      },
    },
  },
};
