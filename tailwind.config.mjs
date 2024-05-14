/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#182c6c",
        Fondo: "#ffffff",
        FooterF: "#f8f4ec",
        cardBg: "#f7f7f7",
        subTitle: "#4779bb",
        textColor: "#222222",
      },
      backgroundImage: {
        heroMain:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('/src/assets/images/Imagen1.webp')",
      },
    },
  },
  plugins: [require("daisyui")],
};
