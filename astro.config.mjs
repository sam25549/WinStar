import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://sam25549.github.io/WinStar",
  base: "/WinStar",
  trailingSlash: "never",
  outDir: "docs",
  integrations: [tailwind()],
  typescript: {
    strict: false,
    check: false
  }
});