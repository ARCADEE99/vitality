/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      nav: ['20px', '20px'],
      h1: ['55px', '60px'],
      h1small: ['45px', '50px'],
      h2: ['50px', '55px'],
      h2small: ['40px', '45px'],
      h3: ['40px', '45px'],
      button: ['21px', '32px'],
      description: ['20px', '30px']
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '585px'},
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      button: ['Monsterrat', 'sans-serif']
    },
    extend: {
      colors: {
        'text': '#101010',
        'orange': '#FF4747',
        'pink': '#FF4880',
        'dark': '#08080d',
        'soft': '#1B1B1B'
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/bg.webp')"
      }
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'orange': '#FF4747',
      'pink': '#FF4880',
     })
  },
  plugins: [],
}
