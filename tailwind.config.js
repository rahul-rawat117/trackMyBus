/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-high': '#0f172a',
        'text-medium': '#1e293b', 
        'text-low': '#334155',
        'text-light': '#475569'
      }
    },
  },
  plugins: [],
}