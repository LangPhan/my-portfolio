/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors:{
        bgColor:"#D9981E",
        textColor:"#FFFFFF",
        fGradientColor:"#200122",
        sGradientColor:"#6F0000",
      },
      dropShadow:{
        text:"0px 4px 4px rgba(0, 0, 0, 0.25)"
      },
    },
  },
  plugins: [],
};
