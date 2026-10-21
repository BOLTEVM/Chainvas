import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // A stray bun.lock in the home directory makes Next.js misdetect the
  // workspace root as C:\Users\wonfi. Pin tracing to the pnpm workspace root.
  // (Turbopack production builds hang on the same misdetection — the build
  // script therefore uses `next build --webpack`; `next dev` is unaffected.)
  outputFileTracingRoot: path.resolve(__dirname, "../.."),
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
