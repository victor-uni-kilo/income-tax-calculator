/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'green': '#34c249',
      'light-green': '#c0edc8',
      'yellow': '#e8b942',
      'light-yellow': '#fcefd8',
      'dark-yellow': '#e2b26c',
      'gray': '#d6d5d6',
      'light-gray': '#e6e5e6',
      'dark-gray': '#aaa8aa',
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {},

  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
};
