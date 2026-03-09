module.exports = [
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/actions/eth_estimateGas.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "eth_estimateGas",
    ()=>eth_estimateGas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-ssr] (ecmascript) <locals>");
;
async function eth_estimateGas(request, transactionRequest) {
    const estimateResult = await request({
        method: "eth_estimateGas",
        params: [
            transactionRequest
        ]
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(estimateResult);
} //# sourceMappingURL=eth_estimateGas.js.map
}),
];

//# sourceMappingURL=13e8b_thirdweb_dist_esm_rpc_actions_eth_estimateGas_2718b04c.js.map