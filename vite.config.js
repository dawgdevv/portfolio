import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import process from "node:process";

const plugins = [react()];

if (process.env.ANALYZE) {
  plugins.push(visualizer({ open: true }));
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  base: "/",
  build: {
    chunkSizeWarningLimit: 500,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    target: "es2020",
    cssMinify: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
});
