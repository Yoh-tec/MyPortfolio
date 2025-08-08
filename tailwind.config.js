/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f8f7',
          100: '#eef1ee',
          200: '#dde3dd',
          300: '#c2ccc2',
          400: '#9db09d',
          500: '#627962',
          600: '#5a6d5a',
          700: '#4c5a4c',
          800: '#404b40',
          900: '#363f36',
        },
        base: {
          50: '#fefefe',
          100: '#fdfcfc',
          200: '#faf8f8',
          300: '#f6f2f2',
          400: '#f1eceb',
          500: '#e8e0df',
          600: '#d1c7c6',
          700: '#b3a7a6',
          800: '#958a89',
          900: '#7a7170',
        },
        text: {
          50: '#f7f6f5',
          100: '#efedea',
          200: '#dfdbd7',
          300: '#c7c1bb',
          400: '#a8a19a',
          500: '#8a827a',
          600: '#6f6861',
          700: '#5a544e',
          800: '#4a4540',
          900: '#363427',
        }
      },
      fontFamily: {
        sans: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Source Sans Pro', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
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
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 