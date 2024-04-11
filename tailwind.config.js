/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        gelion_bold: ["Gelion Bold"],
        gelion_black: ["Gelion Black"],
        gelion_semibold: ["Gelion Semibold"],
        gelion_medium: ["Gelion Medium"],
        gelion_light: ["Gelion Light"],
        gelion_thin: ["Gelion Thin"],
        gelion_regular: ["Gelion Regular"],
      },
    },
  },
  plugins: [],
};
