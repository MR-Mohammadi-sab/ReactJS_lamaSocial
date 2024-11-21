/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage:(them)=>({
        "login-img":"url('./images/login.avif')",
        "register-img":"url('./images/register.jpg')"
      })
    },
  },
  
  plugins: [],
}