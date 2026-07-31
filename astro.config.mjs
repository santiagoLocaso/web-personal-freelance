// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sltweb.com.ar",

  integrations: [
    sitemap({
      filter: (page) => !page.includes("/gracias"),
    }),
  ],
});
