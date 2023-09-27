import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      assets: path.resolve(__dirname, "./src/assets"),
      components: path.resolve(__dirname, "./src/components"),
      constant: path.resolve(__dirname, "./src/constant"),
      routers: path.resolve(__dirname, "./src/routers"),
      schema: path.resolve(__dirname, "./src/schema"),
      types: path.resolve(__dirname, "./src/types"),
      utils: path.resolve(__dirname, "./src/utils"),
      pages: path.resolve(__dirname, "./src/pages"),
      store: path.resolve(__dirname, "./src/store"),
      services: path.resolve(__dirname, "./src/services"),
      hooks: path.resolve(__dirname, "./src/hooks")
    },
  },
});
