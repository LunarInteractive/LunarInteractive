import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://lunarinteractive.github.io",
  trailingSlash: "ignore",
  output: "server",
  integrations: [tailwind(), icon()],
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});