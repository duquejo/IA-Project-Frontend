module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {  
    extend: {
      fontFamily: {
        dosis: [ 'Dosis', 'sans-serif' ]
      },
      backgroundSize: {
        '400%': '400%',
      },
      animation: {
        'background-animate': 'background-color 10s ease infinite',
      },  
      keyframes: {
        'background-color': {
          '0%'  : {},
          '100%': { 'background-position': '0% 50%' },
          '50%' : { 'background-position': '100% 0%' },
        }
      },
    },
  },
  plugins: [],
}
