(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IERC20/read/balanceOf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FN_SELECTOR",
    ()=>FN_SELECTOR,
    "balanceOf",
    ()=>balanceOf,
    "decodeBalanceOfResult",
    ()=>decodeBalanceOfResult,
    "encodeBalanceOf",
    ()=>encodeBalanceOf,
    "encodeBalanceOfParams",
    ()=>encodeBalanceOfParams,
    "isBalanceOfSupported",
    ()=>isBalanceOfSupported
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/read-contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$bytecode$2f$detectExtension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/bytecode/detectExtension.js [app-client] (ecmascript)");
;
;
;
;
const FN_SELECTOR = "0x70a08231";
const FN_INPUTS = [
    {
        name: "_address",
        type: "address"
    }
];
const FN_OUTPUTS = [
    {
        type: "uint256"
    }
];
function isBalanceOfSupported(availableSelectors) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$bytecode$2f$detectExtension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectMethod"])({
        availableSelectors,
        method: [
            FN_SELECTOR,
            FN_INPUTS,
            FN_OUTPUTS
        ]
    });
}
function encodeBalanceOfParams(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeAbiParameters"])(FN_INPUTS, [
        options.address
    ]);
}
function encodeBalanceOf(options) {
    // we do a "manual" concat here to avoid the overhead of the "concatHex" function
    // we can do this because we know the specific formats of the values
    return FN_SELECTOR + encodeBalanceOfParams(options).slice(2);
}
function decodeBalanceOfResult(result) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeAbiParameters"])(FN_OUTPUTS, result)[0];
}
async function balanceOf(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])({
        contract: options.contract,
        method: [
            FN_SELECTOR,
            FN_INPUTS,
            FN_OUTPUTS
        ],
        params: [
            options.address
        ]
    });
} //# sourceMappingURL=balanceOf.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/extensions/erc20/read/getBalance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBalance",
    ()=>getBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/units.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc20$2f$_$5f$generated_$5f2f$IERC20$2f$read$2f$balanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IERC20/read/balanceOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc20$2f$read$2f$getCurrencyMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/extensions/erc20/read/getCurrencyMetadata.js [app-client] (ecmascript)");
;
;
;
async function getBalance(options) {
    const [balanceWei, currencyMetadata] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc20$2f$_$5f$generated_$5f2f$IERC20$2f$read$2f$balanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["balanceOf"])(options),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc20$2f$read$2f$getCurrencyMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrencyMetadata"])(options)
    ]);
    return {
        ...currencyMetadata,
        chainId: options.contract.chain.id,
        displayValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTokens"])(balanceWei, currencyMetadata.decimals),
        tokenAddress: options.contract.address,
        value: balanceWei
    };
} //# sourceMappingURL=getBalance.js.map
}),
]);

//# sourceMappingURL=13e8b_thirdweb_dist_esm_extensions_erc20_f71c56cc._.js.map