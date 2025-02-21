/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#03070f',
        secondary: '#253878',
        text: '#d3dde6',
        gray: '#7a7a7a',
        blue: '#44b0de',
        yellow: '#f7d16e',
        'primary-alpha': 'rgba(3, 7, 15, 0.81)',
      },
      fontFamily: {
        sans: ['Federo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};