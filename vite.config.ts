import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// SPA / static prerender mode — outputs static HTML for each route, hydrates client-side.
// Resulting `dist/` can be deployed to any static host (Netlify, Vercel static, GitHub Pages…).
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    spa: { enabled: true },
  },
});
