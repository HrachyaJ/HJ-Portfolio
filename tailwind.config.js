/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f5fa',
          100: '#dae3f2',
          200: '#b9c9e4',
          300: '#8ea6d3',
          400: '#637fbf',
          500: '#445ea9',
          600: '#34498a',
          700: '#2a3a6e',
          800: '#24325a',
          900: '#232d4c',
          950: '#141a2d',
        },
      },
      spacing: {
        '9xl': '96rem',
        '8xl': '88rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      }
    },
  },
  plugins: [],
};