/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        lg: '40rem'
      },
      colors: {
        'darkgreen': '#125C13',
      }
    },
  },
  plugins: [],
}
