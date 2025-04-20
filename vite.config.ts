import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    port: 3000,
    strictPort: true,
    hmr: {
      overlay: true
    }
  },
  plugins: [
    react(),
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
  }
});
