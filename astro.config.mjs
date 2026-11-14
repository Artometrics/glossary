import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import { SITE } from "./lib/site.mjs";

/** Static site. Firebase Hosting serves `dist/` with cleanUrls. */
export default defineConfig({
  site: SITE,
  srcDir: "./site",
  publicDir: "./public",
  outDir: "./dist",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./", import.meta.url)),
      },
    },
  },
});
