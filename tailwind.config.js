/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          100: '#F1F5F9',
        },
        sky: {
          600: '#3B82F6',
        },
        emerald: {
          600: '#10B981',
        },
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
      },
    },
  },
  plugins: [],
};
