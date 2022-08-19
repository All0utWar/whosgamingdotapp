const { url } = require('inspector')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/whosGamingLogo/cover.png')",
        'logo': "url('../public/whosGamingLogo/logo.png')",
      },
    },
  },
  plugins: [],
}
