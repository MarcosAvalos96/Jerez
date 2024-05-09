import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
    routing: { prefixDefaultLocale: false },
    fallback: { en: "es" },
  },

  integrations: [tailwind()],
  output: "server",
  adapter: vercel(),
});
