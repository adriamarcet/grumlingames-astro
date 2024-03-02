import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.grumlingames.com',
  i18n: {
    defaultLocale: "ca",
    locales: ["ca", "es", "en"]
  },
  integrations: [tailwind(),icon({
    iconDir: "src/assets/icons",
  }),]
});