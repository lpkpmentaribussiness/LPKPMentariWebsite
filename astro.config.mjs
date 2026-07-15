import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://lpkpmentari.id",
  output: "static",
  build: {
    format: "file",
  },
  compressHTML: true,
});
