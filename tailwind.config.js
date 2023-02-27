/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'rubik-MonoOne': ['Rubik Mono One', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
    },
    extend: {
      colors:{
        'cream': '#FBF3E8',
        'cocoa': '#443C42',
        'cocoa-light': '#7C6C77',
        'cocoa-dark': '#201B1B',
        'brand-orange': '#FD7E14',
        'brand-green': '#479F76',
      },
      backgroundImage: {
        'index' : "url('/public/images/index.jpg')",
      },
    },
  },
  plugins: [],
}
