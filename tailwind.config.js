/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "primaryBackground":"#F6F8FA",
      "secondaryBackground":"#fff",
      "AccentBlueBackground":"#DDEDFF",
      "AccentPurpleBackground":"#EBE8FD",
      "AccentPinkBackground":"#FCE8EF",
      "AccentRedBackground":"#FBEBEA",
      "AccentRed":"#D63500",
      "AccentBlue":"#0073E6",
      "AccentPurple":"#6548EE",
      "AccentGreen":"#05C165",
      "AccentPink":"#E9407A",
      "primaryText":"#1C4980",
      "secondaryText":"#8DA4BF",
      "primaryBorder":"#DADCE0",
      "transparent":"#ffffff00"
    },
    fontFamily:{
      "font-inter":"Inter, sans-serif",
    },
    extend: {},
  },
  plugins: [],
}