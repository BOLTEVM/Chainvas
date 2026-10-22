// Stub for optional Node-only dependencies of fabric.js (`canvas`, `jsdom`).
// fabric's package.json maps them to `false` via its "browser" field, but that
// only applies to browser-targeted bundles: the server compilation of the photo
// editor still resolved them and crashed on the unbuilt `canvas.node` binding.
// Fabric only touches these when running headless under Node, which this app
// never does — it always draws into a real <canvas>.
module.exports = {};
