module.exports = [
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/encode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encode",
    ()=>encode,
    "getDataFromTx",
    ()=>getDataFromTx,
    "getExtraCallDataFromTx",
    ()=>getExtraCallDataFromTx
]);
const encodeWeakMap = new WeakMap();
async function encode(transaction) {
    if (encodeWeakMap.has(transaction)) {
        // biome-ignore lint/style/noNonNullAssertion: the `has` above ensures that this will always be set
        return encodeWeakMap.get(transaction);
    }
    const promise = (async ()=>{
        const [data, extraData, { concatHex }] = await Promise.all([
            getDataFromTx(transaction),
            getExtraCallDataFromTx(transaction),
            __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/helpers/concat-hex.js [app-ssr] (ecmascript, async loader)")
        ]);
        if (extraData) {
            return concatHex([
                data,
                extraData
            ]);
        }
        return data;
    })();
    encodeWeakMap.set(transaction, promise);
    return promise;
}
async function getDataFromTx(transaction) {
    if (transaction.data === undefined) {
        return "0x";
    }
    if (typeof transaction.data === "function") {
        const data = await transaction.data();
        if (!data) {
            return "0x";
        }
        return data;
    }
    return transaction.data;
}
async function getExtraCallDataFromTx(transaction) {
    if (!transaction.extraCallData) {
        return undefined;
    }
    if (typeof transaction.extraCallData === "function") {
        const extraData = await transaction.extraCallData();
        if (!extraData) return undefined;
        if (!extraData.startsWith("0x")) {
            throw Error("Invalid extra calldata - must be a hex string");
        }
        if (extraData === "0x") {
            return undefined;
        }
        return extraData;
    }
    if (!transaction.extraCallData.startsWith("0x")) {
        throw Error("Invalid extra calldata - must be a hex string");
    }
    return transaction.extraCallData;
} //# sourceMappingURL=encode.js.map
}),
];

//# sourceMappingURL=13e8b_thirdweb_dist_esm_transaction_actions_encode_8c0df097.js.map