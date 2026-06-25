/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'scroll-y': 'scrollY 15s linear infinite',
      },
      keyframes: {
        scrollY: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }, 
        }
      }
    },
  },
  plugins: [],
}