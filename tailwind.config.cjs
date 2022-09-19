/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'playFair': ['Playfair Display', 'sans-serif']
      },
    }
  },
  plugins: [],
}
