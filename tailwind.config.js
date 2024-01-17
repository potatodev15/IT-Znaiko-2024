/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        default: '#F8F8FF'
      },
      colors: {
        primary: '#333333',
        default: '#F8F8FF'
      },
      fontFamily: {
        'header': ['Rubik Dirt', 'system-ui'],
        'text': ['IBM Plex Serif', 'serif']
      },
      scale: {
        '-100': '-1',
      }
    },
  },
  plugins: [],
}