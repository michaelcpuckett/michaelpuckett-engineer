import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import { renderStaticPage } from "./src/renderStatic";

function staticHtmlPlugin(): Plugin {
  let server: ViteDevServer | undefined;

  return {
    name: "static-html-generation",
    configureServer(viteServer) {
      server = viteServer;
    },
    async transformIndexHtml(html) {
      const renderer = server
        ? await server.ssrLoadModule("/src/renderStatic.tsx")
        : { renderStaticPage };
      const { head, body } = renderer.renderStaticPage();

      return html
        .replace("<!--app-head-->", head)
        .replace("<!--app-body-->", body);
    },
  };
}

export default defineConfig({
  publicDir: "dist",
  plugins: [react(), tailwindcss(), staticHtmlPlugin()],
  build: {
    copyPublicDir: false,
    emptyOutDir: false,
    outDir: "dist",
    rollupOptions: {
      output: {
        assetFileNames(assetInfo) {
          return assetInfo.name?.endsWith(".css") ? "styles.css" : "[name][extname]";
        },
      },
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
