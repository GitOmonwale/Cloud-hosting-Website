 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg-image': 'url("./src/assets/images/bg.jpg")',
        'banner': 'url("./src/assets/images/banner.png")',
      },
      maxWidth:{
        '400': '400px',
        '1000': '1000px',
      },
      height:{
        '500':'500px'
      },
colors:{
  'logo':'#dddddd',
  'hover-logo':'#c7d2fe',
  'blue':'#1f2737'
}
    },
  },
  plugins: [],
}