/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{html,js,jsx,ts,tsx}",
  "./utils/**/*.{html,js,jsx,ts,tsx}"], // Like this

  theme: {
    extend: {},
  },
  plugins: [],
}

// const { join } = require('path');

// module.exports = {
//   content: [join(__dirname, 'src/**/*.{js,ts,jsx,tsx}')],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
