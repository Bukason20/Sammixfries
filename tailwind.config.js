/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        heroImg: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url('images/hero-bg.png')"
      },
      fontFamily:{
        body:["Nunito"]
      }
    },
  },
  plugins: [],
}

