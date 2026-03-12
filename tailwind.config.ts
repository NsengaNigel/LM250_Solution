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
    },
  },
  plugins: [],
};

export default config;
