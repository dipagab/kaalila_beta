/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#6A746C', // Updated to greenish gray
        cream: '#ffffff', // Changed to white for minimalism
        accent: '#525252', // Dark gray accent instead of blue/purple
        text: '#1a1a1a', // Darker gray/black for text
        subtle: '#f5f5f5', // Light gray for backgrounds
        // Removed colorful accents
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}