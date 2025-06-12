import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://sam25549.github.io/WinStar",
  base: "/",
  trailingSlash: "never",
  outDir: "docs",
  vite: {
    plugins: [tailwindcss()]
  },
  typescript: {
    strict: false,
    check: false
  }
});