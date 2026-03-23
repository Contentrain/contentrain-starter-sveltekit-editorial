import { fileURLToPath } from "node:url";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      "#contentrain": fileURLToPath(new URL("./.contentrain/client/index.mjs", import.meta.url)),
    },
  },
});
