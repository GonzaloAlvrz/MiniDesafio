module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '360px',
        'mobileM': '475px',
        'mobileL': '595px',
        // => @media (min-width: 360px) { ... }
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
        'lap_tablet': '800px',
        // => @media (min-width: 768px) { ... }
        'laptop': '1000px',
        // => @media (min-width: 768px) { ... }
        'desktop-one': '1110px',
        // => @media (min-width: 1024px) { ... }
      /*   'desktop-one': '1230px', */
        // => @media (min-width: 1280px) { ... }
        'desktop-two': '1500px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
