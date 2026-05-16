import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

function sitemapDatePlugin(): Plugin {
  return {
    name: "sitemap-date",
    closeBundle() {
      const sitemapPath = path.resolve(__dirname, "dist/sitemap.xml");
      try {
        const content = fs.readFileSync(sitemapPath, "utf-8");
        const today = new Date().toISOString().split("T")[0];
        fs.writeFileSync(
          sitemapPath,
          content.replace(/<lastmod>[^<]+<\/lastmod>/, `<lastmod>${today}</lastmod>`),
        );
      } catch {
        // sitemap not emitted — skip
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), sitemapDatePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
