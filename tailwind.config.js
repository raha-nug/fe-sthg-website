/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      scale: {
        110: "1.10",
      },
      textAlign: {
        justify: "justify",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "custom-image": "url('/gambar/bg-staf.jpg')",
        "staf-bg": "url('/gambar/staf.jpg')",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [
    // eslint-disable-next-line no-undef
    require("flowbite/plugin"),
    // eslint-disable-next-line no-undef
    require("daisyui"),
    // eslint-disable-next-line no-undef
    require("@tailwindcss/line-clamp"),
  ],
});
