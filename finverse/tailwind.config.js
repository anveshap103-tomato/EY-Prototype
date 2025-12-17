/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a192f',
          800: '#112240',
          700: '#233554',
        },
        primary: {
          DEFAULT: '#64ffda', // Electric Teal/Green
          hover: '#00ccaa',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'bounce-crazy': 'bounceCrazy 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'morph': 'morph 4s ease-in-out infinite',
        'glitch': 'glitch 0.3s infinite',
        'matrix': 'matrix 20s linear infinite',
        'neon-flicker': 'neonFlicker 1.5s infinite alternate',
        'hologram': 'hologram 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 20px rgba(100, 255, 218, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(100, 255, 218, 0.8), 0 0 60px rgba(100, 255, 218, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceCrazy: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '40%, 43%': { transform: 'translateY(-30px) rotate(5deg)' },
          '70%': { transform: 'translateY(-15px) rotate(-5deg)' },
          '90%': { transform: 'translateY(-4px) rotate(2deg)' },
        },
        wiggle: {
          '0%, 7%': { transform: 'rotateZ(0)' },
          '15%': { transform: 'rotateZ(-15deg)' },
          '20%': { transform: 'rotateZ(10deg)' },
          '25%': { transform: 'rotateZ(-10deg)' },
          '30%': { transform: 'rotateZ(6deg)' },
          '35%': { transform: 'rotateZ(-4deg)' },
          '40%, 100%': { transform: 'rotateZ(0)' },
        },
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        neonFlicker: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
        },
        hologram: {
          '0%, 100%': { transform: 'rotateY(0deg)', opacity: '0.8' },
          '50%': { transform: 'rotateY(180deg)', opacity: '0.4' },
        },
      }
    },
  },
  plugins: [],
}
