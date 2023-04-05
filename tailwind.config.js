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
        'poppy-orange-50': '#fec7a7',
        'poppy-orange-100': '#feb489',
        'poppy-orange-200': '#fda16b',
        'poppy-orange-300': '#fd8e4c',
        'poppy-orange-400': '#fc7b2e',
        'poppy-orange-500': '#fc6810',
        'poppy-orange-600': '#ea5903',
        'poppy-orange-700': '#cc4e03',
        'poppy-orange-800': '#ae4202',
        'poppy-orange-900': '#903702',
        'poppy-orange-base': '#FC6810',
      },
      backgroundImage: {
        'idx': "url('/background.svg')",
      },
    },
  },
  plugins: [],
}
