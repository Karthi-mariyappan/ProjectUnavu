/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend Deca', 'sans-serif'],
      },
      screens: {
        'max-xl': { 'max': '1279px' },
        'xl': '1280px',       
        'laptop':'960px'         
      }
    },
  },
  plugins: [],
}
