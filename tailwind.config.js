/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        logoRed: '#EB1C22'
      },
      backgroundImage: {
        'hero-home': "url('./assets/img/Hero-Home.png')",
        "map": "url('./assets/img/map-white.png')"
      },
    },
  },
  plugins: [],
}

