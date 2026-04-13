/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // Hijau Emerald Fresh
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        secondary: {
            DEFAULT: '#F59E0B', // Oranye/Emas Ceria
            light: '#FBBF24',
            dark: '#D97706'
        }
      },
      backgroundImage: {
        'gradient-nusa': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      }
    },
  },
  plugins: [],
}