/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
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
