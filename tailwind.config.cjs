/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nineties': ["Nineties Display", "sans-serif"],
        'neutral': ["Neutral Face", "sans-serif"],
        'neutralBold': ["Neutral Face Bold", "sans-serif"],
      },
      backgroundImage: {
        'noise': "url('/src/assets/noise.gif')"
      },
      opacity: {
        '8': '0.08',
      },
      colors: {
        seccondary: 'rgba(243, 219, 199)'
      },
      animation: {
        'spin-slow': 'spin 16s linear infinite',
      },
      backgroundColor: {
        'dark': '#131313'
      }
    },
  },
  plugins: [],
}
