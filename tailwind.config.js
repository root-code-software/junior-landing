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
      },
      width: {
        '2/7': '320px',
        '5/6': '980px',
        '7/5':'90%',
        '2/4': '240px'
      },
      height: {
        '34': '34px' 
      }
    },
  },
  plugins: [],
}
