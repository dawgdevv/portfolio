import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    process.env.ANALYZE && visualizer({ open: true }),
  ].filter(Boolean),
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'pdf-viewer': ['react-pdf', 'pdfjs-dist'],
          'github': ['react-github-calendar'],
          'vendor': ['framer-motion', 'lucide-react'],
        }
      }
    },
    chunkSizeWarningLimit: 500,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    target: 'es2020',
    cssMinify: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
});
