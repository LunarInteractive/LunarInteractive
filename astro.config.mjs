import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://lunarinteractive.github.io",
  trailingSlash: "ignore",
  output: "server",
  integrations: [tailwind(), icon(), sentry()],
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});