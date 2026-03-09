module.exports = [
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/insight/common.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertInsightEnabled",
    ()=>assertInsightEnabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-ssr] (ecmascript)");
;
async function assertInsightEnabled(chains) {
    const chainIds = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInsightEnabledChainIds"])();
    const insightEnabled = chains.every((c)=>chainIds.includes(c.id));
    if (!insightEnabled) {
        throw new Error(`Insight is not available for chains ${chains.filter((c)=>!chainIds.includes(c.id)).map((c)=>c.id).join(", ")}`);
    }
} //# sourceMappingURL=common.js.map
}),
];

//# sourceMappingURL=13e8b_thirdweb_dist_esm_insight_common_5d712eba.js.map