import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
// import imgit from "imgit/astro";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // imgit({ width: 800, plugins: [imgit()] }),
    react(),
    tailwind(),
    icon(),
  ],
});
