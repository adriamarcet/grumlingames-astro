import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.grumlingames.com',
  i18n: {
    defaultLocale: "ca",
    locales: ["ca", "es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [tailwind()]
});