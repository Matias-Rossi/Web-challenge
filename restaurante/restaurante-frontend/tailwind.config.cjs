/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#9B4F2C',
      'secondary': '#6c3c1f',
      'alternate': '#9b2c32',
      'error': '#d91414',
      'black': '#292522',
      'black-75': '#5f5c5a',
      'black-50': '#959291',
      'black-25': '#c9c8c8',
      'black-10': '#eaeae9',
      'black-5': '#f4f4f4',
      'white': '#f8f8f8',
    },
    extend: {},
  },
  plugins: [],
}
