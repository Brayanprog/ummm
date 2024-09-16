/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f6f7f5',
          100: '#e3e5e1',
          200: '#c5c9c0',
          300: '#a1a89b',
          400: '#7e8778',
          500: '#636c5c',
          600: '#4d5447',
          700: '#3f443a',
          800: '#343830',
          900: '#2c2f29',
        },
        beige: {
          50: '#fbfaf8',
          100: '#f5f1eb',
          200: '#ebe2d5',
          300: '#dccdb6',
          400: '#c9b190',
          500: '#ba9871',
          600: '#ad855f',
          700: '#956f50',
          800: '#795a44',
          900: '#634b3a',
        },
      },
    },
  },
  plugins: [],
}