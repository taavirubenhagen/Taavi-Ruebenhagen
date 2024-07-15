/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'mono'],
        sans: ['Lexend', 'Nunito', 'sans-serif'],
        serif: ['Domine', 'serif'],
      },}
  },
  plugins: []
};