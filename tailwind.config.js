/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      spline: ["Spline Sans Mono"],
      instrumental: ["Instrument Serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["synthwave","bumblebee"],
    
  },
};
