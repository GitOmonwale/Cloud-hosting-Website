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
      },
      maxWidth:{
        '400': '400px',
        '1000': '1000px',
      },
colors:{
  'logo':'#dddddd',
  'hover-logo':'#c7d2fe'
}
    },
  },
  plugins: [],
}