/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f3',
          100: '#fce0e3',
          200: '#fac7cc',
          300: '#f5a1aa',
          400: '#ee6e7e',
          500: '#e24259',
          600: '#cf2542',
          700: '#A31621', // Deep red
          800: '#91141f',
          900: '#7d161f',
          950: '#450a0f',
        },
        secondary: {
          50: '#f9f7f2',
          100: '#f3eee1',
          200: '#e8dbc2',
          300: '#D9A566', // Warm gold
          400: '#d1984c',
          500: '#c78533',
          600: '#b36d2a',
          700: '#945325',
          800: '#794425',
          900: '#653a23',
          950: '#391e11',
        },
        accent: {
          50: '#f0f5fa',
          100: '#dce8f4',
          200: '#c1d7ec',
          300: '#97bee0',
          400: '#679dd0',
          500: '#4881bf',
          600: '#3669b2',
          700: '#1D3557', // Dark blue
          800: '#1e2d4d',
          900: '#1c2742',
          950: '#121a29',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/7474247/pexels-photo-7474247.jpeg')",
        'pattern': "url('https://images.pexels.com/photos/4621441/pexels-photo-4621441.jpeg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'inner-light': 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.05)',
        'glow': '0 0 15px rgba(211, 171, 97, 0.5)',
      },
    },
  },
  plugins: [],
};