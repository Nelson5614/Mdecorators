/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],  // This tells Tailwind which files to scan for classes
  theme: {
    extend: {
      colors: {
        'corporate-gold': '#D4AF37',  // Classic gold color
        'corporate-black': '#1A1A1A'  // Soft black for better readability
      }
    },
  },
  plugins: [],
}