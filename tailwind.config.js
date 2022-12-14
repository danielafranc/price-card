/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'DM-sans': ['DM Sans', 'sans-serif'],
      'Inter': ['Inter', 'sans-serif'],
    },
    screens : {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
    }

  },
  plugins: [],
}