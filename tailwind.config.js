/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Roboto", "sans-serif"], // Replace 'Roboto' with your custom font name
      },
    },
  },
  plugins: [],
};
