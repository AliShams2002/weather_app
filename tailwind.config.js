/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        // 'black-100': 'rgba(27, 22, 43, 0.5)',
        'black-100': '#1b162b',
        'black-200': '#191525',
        'black-300': '#110e1b',
        'blue-100': '#2513eb',
        'white-100': '#f3f3f3',
        'white-200': '#a7a7a7',
      },
      boxShadow: {
        'xl': '0px 1px 10px 3px rgba(17, 14, 27, 1)',
      },
      screens: {
        's': '350px',

        'sm': '550px',

        'md': '700px',

        'lg': '850px',

        'xl': '1000px',

        '2xl': '1200px',
      }
    },
  },
  plugins: [],
}