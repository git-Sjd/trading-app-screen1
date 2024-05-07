// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      hind: ["Hind Guntur", "sans-serif"],
      futur: []
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

