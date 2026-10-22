import type { NextConfig } from "next";
import path from "path";

/**
 * GitHub Pages serves this project from https://<owner>.github.io/<repo>/, so the
 * Pages build is a static export mounted under a base path. The Pages workflow
 * sets GITHUB_PAGES=true and NEXT_PUBLIC_BASE_PATH; a plain `next build` (or
 * `next dev`) is unaffected and keeps the Node server behaviour.
 */
const isStaticExport = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // A stray bun.lock in the home directory makes Next.js misdetect the
  // workspace root as C:\Users\wonfi. Pin tracing to the pnpm workspace root.
  // (Turbopack production builds hang on the same misdetection — the build
  // script therefore uses `next build --webpack`; `next dev` is unaffected.)
  outputFileTracingRoot: path.resolve(__dirname, "../.."),

  // fabric.js lists `canvas` (a native Node addon) and `jsdom` as optional
  // dependencies for headless rendering. Its "browser" field drops them in
  // browser bundles, but the server compilation of the photo editor still
  // resolved them and died on the unbuilt canvas.node binary — breaking
  // `next build` and the /photo route in dev. Alias both to an empty stub.
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
      jsdom: false,
    };
    return config;
  },
  turbopack: {
    resolveAlias: {
      canvas: "./stubs/empty.js",
      jsdom: "./stubs/empty.js",
    },
  },

  ...(isStaticExport
    ? {
        // Fully static site: no Node server, so no image optimizer and no
        // response headers (see the note below). Trailing slashes make every
        // route resolve to <route>/index.html, which is what Pages serves.
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
        ...(basePath ? { basePath, assetPrefix: basePath } : {}),
      }
    : {
        // Cross-origin isolation enables SharedArrayBuffer, which the
        // multi-threaded ffmpeg core can use. It is a server-only feature:
        // `output: "export"` rejects headers() and a static host cannot send
        // them. The renderer pins the single-threaded @ffmpeg/core build, which
        // does not require isolation, so the Pages deploy renders video too —
        // single-threaded encoding is simply slower.
        async headers() {
          return [
            {
              source: "/(.*)",
              headers: [
                { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
                { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
              ],
            },
          ];
        },
      }),
};

export default nextConfig;
