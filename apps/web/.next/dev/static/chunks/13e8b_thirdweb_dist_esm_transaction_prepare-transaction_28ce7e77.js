(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/prepare-transaction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionTypeMap",
    ()=>TransactionTypeMap,
    "prepareTransaction",
    ()=>prepareTransaction
]);
const TransactionTypeMap = {
    eip1559: 1,
    eip2930: 2,
    eip4844: 3,
    eip7702: 4,
    legacy: 0
};
function prepareTransaction(options, info) {
    if (info) {
        // biome-ignore lint/suspicious/noExplicitAny: TODO: fix later
        options.__preparedMethod = info.preparedMethod;
        // biome-ignore lint/suspicious/noExplicitAny: TODO: fix later
        options.__contract = info.contract;
    }
    return options;
} //# sourceMappingURL=prepare-transaction.js.map
}),
]);

//# sourceMappingURL=13e8b_thirdweb_dist_esm_transaction_prepare-transaction_28ce7e77.js.map