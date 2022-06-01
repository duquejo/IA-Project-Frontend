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
        'fade-in': 'fade-in 0.3s ease-in',
        'wiggle': 'wiggle 3s linear infinite',
        'wiggle-soft': 'wiggle-soft 5s linear infinite',
        'wiggle-hard': 'wiggle 1s linear infinite',
        'slide-l-r': 'slide-l-r 0.5s ease',
      },
      keyframes: {
        'background-color': {
          '0%'  : {},
          '100%': { 'background-position': '0% 50%' },
          '50%' : { 'background-position': '100% 0%' },
        },
        'fade-in': {
          '0%'  : { opacity : '0' },
          '100%': { opacity : '1' },
        },
        'slide-l-r': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0.7',
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: '1'
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'wiggle-soft': {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      },
    },
  },
  plugins: [
    require('tailwindcss-animation-delay')
  ],
}
