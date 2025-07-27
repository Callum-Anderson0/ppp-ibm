/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'bg-lgray': 'fff',
        'card-gray': '#303030',
        'bg-gray': '#212121',
        'button-gray': '#FFFFFF',
        'button-text': '#000000',
        'card-border': '#414141',
      }
    },
  },
  plugins: [],
}

