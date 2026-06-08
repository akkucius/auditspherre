/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: '#0C1220',
          surface: '#131C2E',
          card: '#1A2540',
          border: '#2A3550',
        },
        gold: '#C9A84C',
        teal: '#3EB8A0',
        cream: '#F2F0EB',
        slate: '#8B9CB5',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
