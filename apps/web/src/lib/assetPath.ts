/**
 * Prefix a file served from /public with the deployment base path.
 *
 * `next/image` rewrites `src` through the image optimizer, which applies
 * `basePath` automatically — but the GitHub Pages build sets
 * `images.unoptimized`, and the pass-through loader hands the `src` to the
 * browser untouched. Under a project Pages site that resolves against the
 * domain root (/icon.png) instead of the repo (/Chainvas/icon.png) and 404s.
 *
 * NEXT_PUBLIC_BASE_PATH is inlined at build time and is empty for a normal
 * build, so this is a no-op outside the Pages deploy. Routes handled by
 * `next/link` and the router do not need it.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const assetPath = (publicPath: string) =>
    `${BASE_PATH}${publicPath.startsWith("/") ? publicPath : `/${publicPath}`}`;
