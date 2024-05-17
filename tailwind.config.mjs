/** @type {import('tailwindcss').Config} */
const { nextui, commonColors } = require("@nextui-org/react");

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#182c6c",
        Fondo: "#ffffff",
        FooterF: "#f8f4ec",
        cardBg: "#f7f7f7",
        subTitle: "#4779bb",
        textColor: "#222222",
        YellowPrimary: "#edc81b",
      },
      backgroundImage: {
        heroMain:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('/src/assets/images/cabecera.webp')",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#182c6c",
            background: "#ffffff",
            footerBackground: "#f8f4ec",
            cardBackground: "#f7f7f7",
            subtitle: "#4779bb",
            text: "#222222",
          },
        },
        dark: {
          colors: {
            primary: "#182c6c",
            background: "#ffffff",
            footerBackground: "#f8f4ec",
            cardBackground: "#f7f7f7",
            subtitle: "#4779bb",
            text: "#222222",
          },
        },
      },
      addCommonColors: true,
    }),
  ],
};
