module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: '#ff6363',
        secondary: '#ffbd69',
        accent: '#a29bfe',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
