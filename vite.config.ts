import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// SPA mode — outputs static client bundle that hydrates on load.
// Deployable to any static host (Netlify, Vercel static, GitHub Pages…).
export default defineConfig({
  tanstackStart: {
    spa: { enabled: true },
  },
});
