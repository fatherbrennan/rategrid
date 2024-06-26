/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        sketch: '255px 15px 15px 255px / 15px 225px 225px 15px',
      },
      colors: {
        paper: '#fbfbf8',
        ink: '#4d4d4d',
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
};
