/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { primary: "#1e53a1", secondary: "#fefeff", Fondo: "#F7F9FF" },
      backgroundImage: {
        heroMain:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('/src/assets/images/mundos.webp')",
      },
    },
  },
  plugins: [],
};
