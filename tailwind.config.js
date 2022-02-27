const Chance = require ('chance');
const chance = new Chance(new Date(Date.now()).toLocaleDateString());
const winningColorCode = chance.color({ format: 'hex' });

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        winner: winningColorCode
      }
    },
  },
  plugins: [],
}
