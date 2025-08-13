/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'portfolio-deep': '#0c070f',
        'portfolio-dark': '#150a1a',
        'portfolio-base': '#1a0f20',
        'portfolio-medium': '#2a1530',
        'portfolio-accent': '#3a2540',
        'portfolio-gradient-1': '#4a2560',
        'portfolio-gradient-2': '#5a3570',
        'portfolio-gradient-3': '#6a3590',
        'portfolio-gradient-4': '#7a45a0',
        'portfolio-text': '#c8b8d8',
        // Mantener algunos colores compatibles para transición
        primary: '#1a0f20', // portfolio-base
        text: '#c8b8d8', // portfolio-text
        blue: '#7a45a0', // portfolio-gradient-4
        'primary-alpha': 'rgba(26, 15, 32, 0.81)',
      },
      fontFamily: {
        sans: ['Federo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};