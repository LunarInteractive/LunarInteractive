import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  site: "https://lunarinteractive.github.io",
  base: "/LunarInteractive",
  integrations: [tailwind()]
});