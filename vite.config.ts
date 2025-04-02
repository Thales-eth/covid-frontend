import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@/components": "/src/components",
      "@/consts": "/src/consts",
      "@/config": "/src/config",
      "@/services": "/src/services",
      "@/types": "/src/types",
      "@/utils": "/src/utils",
      "@/routes": "/src/routes",
      "@/pages": "/src/pages",
      "@/assets": "/src/assets",
      "@/hooks": "/src/hooks",
    },
  },
});
