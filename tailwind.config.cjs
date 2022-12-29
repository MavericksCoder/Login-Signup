/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(60px)' },
        },
        downup: {
          '0%, 100%': { transform: 'translateY(40px)' },
          '50%': { transform: 'translateY(0px)' }
        },
        leftright: {
          '0%, 100%': { transform: '-translateX(260px)' },
          '50%': { transform: 'translateX(50px)' }
        }
      },
      animation: {
        'upDown': 'updown 4s linear infinite',
        'downUp': 'downup 4s linear infinite',
        'leftRight': 'leftright 4s linear infinite'
      },
      width: {
        '40-r': '40rem',
        '35-r': '35rem'
      },
      height: {
        '40-r': '40rem',
        '35-r': '35rem'
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}
