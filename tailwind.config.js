/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '480px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1300px',
      // => @media (min-width: 1536px) { ... }
    },
    container:{
      center:true,
      padding:'2rem',
    },
    extend: {
      fontFamily:{
        'font-primary':["Poppins", "serif"]
      },
      colors:{
        'primary':'#C53A49',
        'secondary':'#E8F434',
        'overlay-bg':'rgba(0, 0, 0, 0.7)'
      }
    },
  },
  plugins: [],
}

