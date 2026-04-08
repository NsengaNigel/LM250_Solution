import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          300: '#CDB87A',
          400: '#C0A86A',
          500: '#B4975A',
          600: '#9A7E48',
          700: '#7D6639',
        },
        warm: {
          300: '#C0BBB5',
          400: '#ABA5A0',
          500: '#918B85',
          600: '#77716B',
        },
      },
      animation: {
        'shimmer':     'shimmer 3s linear infinite',
        'glow-pulse':  'glow-pulse 4s ease-in-out infinite',
        'float-slow':  'float-slow 6s ease-in-out infinite',
        'fade-up':     'fade-up 0.7s ease-out forwards',
        'line-grow':   'line-grow 1s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.04)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'line-grow': {
          from: { transform: 'scaleX(0)' },
          to:   { transform: 'scaleX(1)' },
        },
      },
      backgroundImage: {
        'gold-sheen': 'linear-gradient(135deg, #CDB87A, #B4975A, #C0A86A, #9A7E48)',
        'gold-subtle': 'linear-gradient(135deg, rgba(180,151,90,0.12), rgba(192,187,181,0.06))',
      },
      boxShadow: {
        'gold-sm':  '0 0 20px rgba(180,151,90,0.1)',
        'gold-md':  '0 0 35px rgba(180,151,90,0.15), 0 0 70px rgba(180,151,90,0.06)',
        'gold-lg':  '0 0 50px rgba(180,151,90,0.2), 0 0 100px rgba(180,151,90,0.08)',
        'gold-btn': '0 4px 20px rgba(180,151,90,0.3), 0 1px 0 rgba(255,255,255,0.08) inset',
      },
    },
  },
  plugins: [],
};

export default config;
