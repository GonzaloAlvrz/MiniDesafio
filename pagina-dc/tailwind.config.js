module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        yellow: '#FFEB33',
        green: '#0BA4A0',
        blue:'#2E384D',
        letrafooter: '#1EC5BB',
        lightgray: '#8798AD',
        graybackground:'#DADEEB',
        imgheader: '#DADEEB',
        bordergray: '#E4E8F0',
        inputbackground: '#F9FBFD',
        backgroundGray:'#E9F9F8',
        hoverlogout:'#F8FAFC',
        colorList:'#0088ff',
        disabledbutton: '#AFAFAF',
        bgTable:'#E8EFF6',
        bgStudents: '#F4F7FB'
      },
      screens: {
        'mobile': '360px',
        'mobileM': '475px',
        'mobileL': '595px',
        // => @media (min-width: 360px) { ... }
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
        'lap_tablet': '768px',
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
