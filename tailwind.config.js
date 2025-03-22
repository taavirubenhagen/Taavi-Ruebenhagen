/** @type {import('tailwindcss').Config} */
export default {
  //content: ['./src/**/*.{html,js,svelte,ts}'],
  content: ['./src/**'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['DM Mono', 'mono'],
        sans: ['Lexend', 'Nunito', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
    }
  },
  plugins: []
};