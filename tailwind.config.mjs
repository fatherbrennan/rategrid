const paperPalette = ['#fbfcf8', '#fafbf6', '#f9faf3', '#f8f9f1', '#f7f7ef', '#f6f6ed', '#f5f5ea', '#f4f4e8', '#f2f2e6', '#f1f0e4'];
const inkPalette = ['#dedac4', '#cbc3a8', '#b7a98e', '#a18e76', '#867362', '#695a51', '#4c433f', '#312d2c', '#181716', '#000000'];
const ratingPalette = ['#fbfcf8', '#e7ead3', '#d5d4b0', '#beb68f', '#a59571', '#83715b', '#5e5148', '#3c3533', '#1d1b1b', '#000000'];

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: paperPalette,
        ink: inkPalette,
        rating: ratingPalette,
      },
      fontFamily: {
        serif: ["'Times New Roman'", 'Times', 'serif'],
      },
      spacing: {
        header: '3rem',
        footer: '1.5rem',
        main: ["calc(100vh - theme('space.header') - theme('space.footer'))", "calc(100dvh - theme('space.header') - theme('space.footer'))"],
        'screen-h-full': ['100vh', '100dvh'],
        'screen-w-full': ['100vw', '100dvw'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'base' })],
};
