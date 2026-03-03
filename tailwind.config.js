/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0C101A',
        electric: '#4285F4',
        'electric-light': '#6AA3F8',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #00D2FF 0%, #7B2FBE 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(66,133,244,0.15) 0%, rgba(123,47,190,0.15) 100%)',
      },
      boxShadow: {
        'glow-white': '0 0 20px rgba(255,255,255,0.15)',
        'glow-blue': '0 0 25px rgba(66,133,244,0.4)',
        'glow-card': '0 8px 32px rgba(0,0,0,0.4)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out infinite 1s',
        'float-delayed-2': 'float 3s ease-in-out infinite 2s',
        'scroll-dot': 'scrollDot 1.8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scrollDot: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(48px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
