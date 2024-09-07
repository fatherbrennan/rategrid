import { colorMap } from './src/constants';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        sketch: '255px 15px 15px 255px / 15px 225px 225px 15px',
      },
      colors: {
        paper: '#f9f7f1',
        ink: '#2f2f2f',
        rating: colorMap,
      },
      fontFamily: {
        serif: ["'Times New Roman'", 'Times', 'serif'],
      },
      height: {
        screen: ['100vh', '100dvh'],
      },
      spacing: {
        header: '3rem',
        footer: '2rem',
      },
      width: {
        screen: ['100vw', '100dvw'],
      },
    },
  },
  plugins: [],
  safelist: [{ pattern: /^bg-rating-[0-9]0?/ }, { pattern: /^text-(paper|ink)/ }],
};
