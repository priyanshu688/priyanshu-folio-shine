import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

// Bun's process.stdin lacks .off(); Vite's SIGTERM teardown calls it after
// prerender finishes, crashing an otherwise successful build.
if (typeof (process.stdin as { off?: unknown }).off !== "function") {
  (process.stdin as { off: (...args: unknown[]) => unknown }).off = () => process.stdin;
}


// SPA mode prerenders the shell by spinning up a preview server that imports
// `dist/server/<entry>.js`. The Cloudflare Vite plugin emits the worker as
// `index.js` regardless of entry name, so we copy it to the expected name.
const aliasServerOutput = () => ({
  name: "alias-server-output",
  closeBundle() {
    const dir = join(process.cwd(), "dist", "server");
    const src = join(dir, "index.js");
    const dest = join(dir, "server.js");
    if (existsSync(src) && !existsSync(dest)) copyFileSync(src, dest);
  },
});

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    spa: { enabled: true },
  },
  plugins: [aliasServerOutput()],
});
