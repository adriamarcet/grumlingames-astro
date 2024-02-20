import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://www.grumlingames.com',  
    i18n: {
      defaultLocale: "ca",
      locales: ["ca", "es", "en"],
      routing: {
        prefixDefaultLocale: false
      }
    }
  })