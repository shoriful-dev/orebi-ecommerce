/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '577px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        xs: { min: '320px', max: '576px' },
      },
      maxWidth: {
        headerWidth: '1500px',
      },
      fontFamily: {
        DM_Sans: ['DM Sans'],
      },
      colors: {
        categoryBg: '#F5F5F3',
        placeHolderTC: '#C4C4C4',
      },
    },
  },
  plugins: [],
};
