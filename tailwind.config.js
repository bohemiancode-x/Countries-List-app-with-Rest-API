/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito Sans']
      },
      colors: {
        darkModeElements: '#2b3945',
        darkModeBg: '#202c37',
        lightModeText: '#111517',
        lightModeInput: '#858585',
        lightModeBg: '#fafafa',
      },
      backgroundImage: {
        'header-sm': "url('../public/images/bg-header-mobile.svg')",
        'header-lg': "url('../public/images/bg-header-desktop.svg')",
      }
    },
  },
  plugins: [],
}
