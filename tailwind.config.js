/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: `"IBM Plex Sans", sans-serif`,
        title: `"DM Serif Display", serif`,
        arabic: `"Amiri Quran", serif`,
        surahname: `surahnames`,
        uthmani: `UthmanicHafs`,
      },
      backgroundImage: {
        "hero-light": "url('/src/assets/hero-light.png')",
      },
    },
  },
  plugins: [],
};
