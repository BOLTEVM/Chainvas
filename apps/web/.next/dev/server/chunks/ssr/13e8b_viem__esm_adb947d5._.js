module.exports = [
"[project]/Documents/BOLTChainvas/node_modules/viem/_esm/celo/fees.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fees",
    ()=>fees
]);
const fees = {
    /*
     * Estimates the fees per gas for a transaction.
  
     * If the transaction is to be paid in a token (feeCurrency is present) then the fees
     * are estimated in the value of the token. Otherwise falls back to the default
     * estimation by returning null.
     *
     * @param params fee estimation function parameters
     */ estimateFeesPerGas: async (params)=>{
        if (!params.request?.feeCurrency) return null;
        const [gasPrice, maxPriorityFeePerGas] = await Promise.all([
            estimateFeePerGasInFeeCurrency(params.client, params.request.feeCurrency),
            estimateMaxPriorityFeePerGasInFeeCurrency(params.client, params.request.feeCurrency)
        ]);
        // eth_gasPrice for cel2 returns baseFeePerGas + maxPriorityFeePerGas
        const maxFeePerGas = params.multiply(gasPrice - maxPriorityFeePerGas) + maxPriorityFeePerGas;
        return {
            maxFeePerGas,
            maxPriorityFeePerGas
        };
    }
};
/*
 * Estimate the fee per gas in the value of the fee token

 *
 * @param client - Client to use
 * @param feeCurrency -  Address of a whitelisted fee token
 * @returns The fee per gas in wei in the value of the  fee token
 *
 */ async function estimateFeePerGasInFeeCurrency(client, feeCurrency) {
    const fee = await client.request({
        method: 'eth_gasPrice',
        params: [
            feeCurrency
        ]
    });
    return BigInt(fee);
}
/*
 * Estimate the max priority fee per gas in the value of the fee token

 *
 * @param client - Client to use
 * @param feeCurrency -  Address of a whitelisted fee token
 * @returns The fee per gas in wei in the value of the  fee token
 *
 */ async function estimateMaxPriorityFeePerGasInFeeCurrency(client, feeCurrency) {
    const feesPerGas = await client.request({
        method: 'eth_maxPriorityFeePerGas',
        params: [
            feeCurrency
        ]
    });
    return BigInt(feesPerGas);
} //# sourceMappingURL=fees.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/viem/_esm/celo/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isCIP64",
    ()=>isCIP64,
    "isEIP1559",
    ()=>isEIP1559,
    "isEmpty",
    ()=>isEmpty,
    "isPresent",
    ()=>isPresent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/data/trim.js [app-ssr] (ecmascript)");
;
function isEmpty(value) {
    return value === 0 || value === 0n || value === undefined || value === null || value === '0' || value === '' || typeof value === 'string' && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(value).toLowerCase() === '0x' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(value).toLowerCase() === '0x00');
}
function isPresent(value) {
    return !isEmpty(value);
}
function isEIP1559(transaction) {
    return typeof transaction.maxFeePerGas !== 'undefined' && typeof transaction.maxPriorityFeePerGas !== 'undefined';
}
function isCIP64(transaction) {
    /*
     * Enable end user to force the tx to be considered as a CIP-64.
     *
     * The preliminary type will be determined as "eip1559" by src/utils/transaction/getTransactionType.ts
     * and so we need the logic below to check for the specific value instead of checking if just any
     * transaction type is provided. If that's anything else than "cip64" then we need to reevaluate the
     * type based on the transaction fields.
     *
     * Modify with caution and according to https://github.com/celo-org/celo-proposals/blob/master/CIPs/cip-0064.md
     */ if (transaction.type === 'cip64') {
        return true;
    }
    return isEIP1559(transaction) && isPresent(transaction.feeCurrency);
} //# sourceMappingURL=utils.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/viem/_esm/celo/formatters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatters",
    ()=>formatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/formatters/block.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/formatters/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/celo/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
const formatters = {
    block: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineBlock"])({
        format (args) {
            const transactions = args.transactions?.map((transaction)=>{
                if (typeof transaction === 'string') return transaction;
                const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransaction"])(transaction);
                return {
                    ...formatted,
                    ...transaction.gatewayFee ? {
                        gatewayFee: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(transaction.gatewayFee),
                        gatewayFeeRecipient: transaction.gatewayFeeRecipient
                    } : {},
                    feeCurrency: transaction.feeCurrency
                };
            });
            return {
                transactions
            };
        }
    }),
    transaction: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineTransaction"])({
        format (args) {
            if (args.type === '0x7e') return {
                isSystemTx: args.isSystemTx,
                mint: args.mint ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.mint) : undefined,
                sourceHash: args.sourceHash,
                type: 'deposit'
            };
            const transaction = {
                feeCurrency: args.feeCurrency
            };
            if (args.type === '0x7b') transaction.type = 'cip64';
            else {
                if (args.type === '0x7c') transaction.type = 'cip42';
                transaction.gatewayFee = args.gatewayFee ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.gatewayFee) : null;
                transaction.gatewayFeeRecipient = args.gatewayFeeRecipient;
            }
            return transaction;
        }
    }),
    transactionRequest: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineTransactionRequest"])({
        format (args) {
            const request = {};
            if (args.feeCurrency) request.feeCurrency = args.feeCurrency;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCIP64"])(args)) request.type = '0x7b';
            return request;
        }
    })
}; //# sourceMappingURL=formatters.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/viem/_esm/celo/serializers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertTransactionCIP42",
    ()=>assertTransactionCIP42,
    "assertTransactionCIP64",
    ()=>assertTransactionCIP64,
    "serializeTransaction",
    ()=>serializeTransaction,
    "serializers",
    ()=>serializers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/constants/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/errors/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/errors/chain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/errors/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$op$2d$stack$2f$serializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/op-stack/serializers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/encoding/toRlp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeAccessList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/transaction/serializeAccessList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/celo/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
function serializeTransaction(transaction, signature) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCIP64"])(transaction)) return serializeTransactionCIP64(transaction, signature);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$op$2d$stack$2f$serializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeTransaction"])(transaction, signature);
}
const serializers = {
    transaction: serializeTransaction
};
function serializeTransactionCIP64(transaction, signature) {
    assertTransactionCIP64(transaction);
    const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, feeCurrency, data } = transaction;
    const serializedTransaction = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(chainId),
        nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(nonce) : '0x',
        maxPriorityFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(maxFeePerGas) : '0x',
        gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(gas) : '0x',
        to ?? '0x',
        value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(value) : '0x',
        data ?? '0x',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeAccessList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAccessList"])(accessList),
        feeCurrency,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toYParitySignatureArray"])(transaction, signature)
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        '0x7b',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])(serializedTransaction)
    ]);
}
// maxFeePerGas must be less than maxUint256
const MAX_MAX_FEE_PER_GAS = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxUint256"];
function assertTransactionCIP42(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, feeCurrency, gatewayFee, gatewayFeeRecipient } = transaction;
    if (chainId <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId
    });
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
    if (gasPrice) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`gasPrice` is not a valid CIP-42 Transaction attribute.');
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(maxFeePerGas) && maxFeePerGas > MAX_MAX_FEE_PER_GAS) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(maxPriorityFeePerGas) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(maxFeePerGas) && maxPriorityFeePerGas > maxFeePerGas) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TipAboveFeeCapError"]({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(gatewayFee) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmpty"])(gatewayFeeRecipient) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(gatewayFeeRecipient) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmpty"])(gatewayFee)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`gatewayFee` and `gatewayFeeRecipient` must be provided together.');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(feeCurrency) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(feeCurrency)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`feeCurrency` MUST be a token address for CIP-42 transactions.');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(gatewayFeeRecipient) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(gatewayFeeRecipient)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"](gatewayFeeRecipient);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmpty"])(feeCurrency) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmpty"])(gatewayFeeRecipient)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('Either `feeCurrency` or `gatewayFeeRecipient` must be provided for CIP-42 transactions.');
    }
}
function assertTransactionCIP64(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, feeCurrency } = transaction;
    if (chainId <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId
    });
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
    if (gasPrice) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`gasPrice` is not a valid CIP-64 Transaction attribute.');
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(maxFeePerGas) && maxFeePerGas > MAX_MAX_FEE_PER_GAS) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(maxPriorityFeePerGas) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(maxFeePerGas) && maxPriorityFeePerGas > maxFeePerGas) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TipAboveFeeCapError"]({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(feeCurrency) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(feeCurrency)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`feeCurrency` MUST be a token address for CIP-64 transactions.');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmpty"])(feeCurrency)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`feeCurrency` must be provided for CIP-64 transactions.');
    }
} //# sourceMappingURL=serializers.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/viem/_esm/celo/chainConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chainConfig",
    ()=>chainConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$op$2d$stack$2f$contracts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/op-stack/contracts.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/celo/fees.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/celo/formatters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$serializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/celo/serializers.js [app-ssr] (ecmascript)");
;
;
;
;
const chainConfig = {
    blockTime: 1_000,
    contracts: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$op$2d$stack$2f$contracts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contracts"],
    formatters: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatters"],
    serializers: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$serializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializers"],
    fees: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fees"]
}; //# sourceMappingURL=chainConfig.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/viem/_esm/linea/actions/estimateGas.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "estimateGas",
    ()=>estimateGas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/errors/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getCallError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/errors/getCallError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/formatters/extract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
async function estimateGas(client, args) {
    const { account: account_ = client.account } = args;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]();
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    try {
        const { accessList, blockNumber, blockTag, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = args;
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertRequest"])(args);
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransactionRequest"];
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extract"])(rest, {
                format: chainFormat
            }),
            account,
            accessList,
            data,
            gas,
            gasPrice,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value
        }, 'estimateGas');
        const { baseFeePerGas, gasLimit, priorityFeePerGas } = await client.request({
            method: 'linea_estimateGas',
            params: block ? [
                request,
                block
            ] : [
                request
            ]
        });
        return {
            baseFeePerGas: BigInt(baseFeePerGas),
            gasLimit: BigInt(gasLimit),
            priorityFeePerGas: BigInt(priorityFeePerGas)
        };
    } catch (err) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getCallError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCallError"])(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
} //# sourceMappingURL=estimateGas.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/viem/_esm/linea/chainConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chainConfig",
    ()=>chainConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$linea$2f$actions$2f$estimateGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/linea/actions/estimateGas.js [app-ssr] (ecmascript)");
;
const chainConfig = {
    fees: {
        estimateFeesPerGas,
        async maxPriorityFeePerGas ({ block, client, request }) {
            const response = await estimateFeesPerGas({
                block,
                client,
                multiply: (x)=>x,
                request,
                type: 'eip1559'
            });
            // Returning `null` will trigger the base `estimateMaxPriorityFeePerGas` to perform
            // fallback mechanisms to estimate priority fee.
            if (!response?.maxPriorityFeePerGas) return null;
            return response.maxPriorityFeePerGas;
        }
    }
};
///////////////////////////////////////////////////////////////////////////
// Internal
///////////////////////////////////////////////////////////////////////////
async function estimateFeesPerGas({ client, multiply, request, type }) {
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$linea$2f$actions$2f$estimateGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateGas"])(client, {
            ...request,
            account: request?.account
        });
        const { priorityFeePerGas: maxPriorityFeePerGas } = response;
        const baseFeePerGas = multiply(BigInt(response.baseFeePerGas));
        const maxFeePerGas = baseFeePerGas + maxPriorityFeePerGas;
        if (type === 'legacy') return {
            gasPrice: maxFeePerGas
        };
        return {
            maxFeePerGas,
            maxPriorityFeePerGas
        };
    } catch  {
        // Returning `null` will trigger the base `estimateFeesPerGas` to perform
        // fallback mechanisms to estimate fees.
        return null;
    }
} //# sourceMappingURL=chainConfig.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/encoding/fromRlp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromRlp",
    ()=>fromRlp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/errors/encoding.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/cursor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
;
;
;
function fromRlp(value, to = 'hex') {
    const bytes = (()=>{
        if (typeof value === 'string') {
            if (value.length > 3 && value.length % 2 !== 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidHexValueError"](value);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(value);
        }
        return value;
    })();
    const cursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCursor"])(bytes, {
        recursiveReadLimit: Number.POSITIVE_INFINITY
    });
    const result = fromRlpCursor(cursor, to);
    return result;
}
function fromRlpCursor(cursor, to = 'hex') {
    if (cursor.bytes.length === 0) return to === 'hex' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(cursor.bytes) : cursor.bytes;
    const prefix = cursor.readByte();
    if (prefix < 0x80) cursor.decrementPosition(1);
    // bytes
    if (prefix < 0xc0) {
        const length = readLength(cursor, prefix, 0x80);
        const bytes = cursor.readBytes(length);
        return to === 'hex' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(bytes) : bytes;
    }
    // list
    const length = readLength(cursor, prefix, 0xc0);
    return readList(cursor, length, to);
}
function readLength(cursor, prefix, offset) {
    if (offset === 0x80 && prefix < 0x80) return 1;
    if (prefix <= offset + 55) return prefix - offset;
    if (prefix === offset + 55 + 1) return cursor.readUint8();
    if (prefix === offset + 55 + 2) return cursor.readUint16();
    if (prefix === offset + 55 + 3) return cursor.readUint24();
    if (prefix === offset + 55 + 4) return cursor.readUint32();
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('Invalid RLP prefix');
}
function readList(cursor, length, to) {
    const position = cursor.position;
    const value = [];
    while(cursor.position - position < length)value.push(fromRlpCursor(cursor, to));
    return value;
} //# sourceMappingURL=fromRlp.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/hash/isHash.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHash",
    ()=>isHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/data/isHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/data/size.js [app-ssr] (ecmascript)");
;
;
function isHash(hash) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(hash) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(hash) === 32;
} //# sourceMappingURL=isHash.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/transaction/getSerializedTransactionType.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSerializedTransactionType",
    ()=>getSerializedTransactionType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/data/slice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
;
;
;
function getSerializedTransactionType(serializedTransaction) {
    const serializedType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceHex"])(serializedTransaction, 0, 1);
    if (serializedType === '0x04') return 'eip7702';
    if (serializedType === '0x03') return 'eip4844';
    if (serializedType === '0x02') return 'eip1559';
    if (serializedType === '0x01') return 'eip2930';
    if (serializedType !== '0x' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(serializedType) >= 0xc0) return 'legacy';
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSerializedTransactionTypeError"]({
        serializedType
    });
} //# sourceMappingURL=getSerializedTransactionType.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/transaction/parseTransaction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseAccessList",
    ()=>parseAccessList,
    "parseTransaction",
    ()=>parseTransaction,
    "toTransactionArray",
    ()=>toTransactionArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/errors/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$toBlobSidecars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/blob/toBlobSidecars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/data/isHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/data/pad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/data/trim.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/encoding/fromRlp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$isHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/hash/isHash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/transaction/assertTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$getSerializedTransactionType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/transaction/getSerializedTransactionType.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function parseTransaction(serializedTransaction) {
    const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$getSerializedTransactionType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSerializedTransactionType"])(serializedTransaction);
    if (type === 'eip1559') return parseTransactionEIP1559(serializedTransaction);
    if (type === 'eip2930') return parseTransactionEIP2930(serializedTransaction);
    if (type === 'eip4844') return parseTransactionEIP4844(serializedTransaction);
    if (type === 'eip7702') return parseTransactionEIP7702(serializedTransaction);
    return parseTransactionLegacy(serializedTransaction);
}
function parseTransactionEIP7702(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to, value, data, accessList, authorizationList, v, r, s] = transactionArray;
    if (transactionArray.length !== 10 && transactionArray.length !== 13) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSerializedTransactionError"]({
        attributes: {
            chainId,
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gas,
            to,
            value,
            data,
            accessList,
            authorizationList,
            ...transactionArray.length > 9 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip7702'
    });
    const transaction = {
        chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(chainId),
        type: 'eip7702'
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(to) && to !== '0x') transaction.to = to;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(gas) && gas !== '0x') transaction.gas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(gas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(data) && data !== '0x') transaction.data = data;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(nonce);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(value) && value !== '0x') transaction.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(value);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(maxFeePerGas) && maxFeePerGas !== '0x') transaction.maxFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(maxFeePerGas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(maxPriorityFeePerGas) && maxPriorityFeePerGas !== '0x') transaction.maxPriorityFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(maxPriorityFeePerGas);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    if (authorizationList.length !== 0 && authorizationList !== '0x') transaction.authorizationList = parseAuthorizationList(authorizationList);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionEIP7702"])(transaction);
    const signature = transactionArray.length === 13 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionEIP4844(serializedTransaction) {
    const transactionOrWrapperArray = toTransactionArray(serializedTransaction);
    const hasNetworkWrapper = transactionOrWrapperArray.length === 4;
    const transactionArray = hasNetworkWrapper ? transactionOrWrapperArray[0] : transactionOrWrapperArray;
    const wrapperArray = hasNetworkWrapper ? transactionOrWrapperArray.slice(1) : [];
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to, value, data, accessList, maxFeePerBlobGas, blobVersionedHashes, v, r, s] = transactionArray;
    const [blobs, commitments, proofs] = wrapperArray;
    if (!(transactionArray.length === 11 || transactionArray.length === 14)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSerializedTransactionError"]({
        attributes: {
            chainId,
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gas,
            to,
            value,
            data,
            accessList,
            ...transactionArray.length > 9 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip4844'
    });
    const transaction = {
        blobVersionedHashes: blobVersionedHashes,
        chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(chainId),
        to,
        type: 'eip4844'
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(gas) && gas !== '0x') transaction.gas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(gas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(data) && data !== '0x') transaction.data = data;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(nonce);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(value) && value !== '0x') transaction.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(value);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(maxFeePerBlobGas) && maxFeePerBlobGas !== '0x') transaction.maxFeePerBlobGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(maxFeePerBlobGas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(maxFeePerGas) && maxFeePerGas !== '0x') transaction.maxFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(maxFeePerGas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(maxPriorityFeePerGas) && maxPriorityFeePerGas !== '0x') transaction.maxPriorityFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(maxPriorityFeePerGas);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    if (blobs && commitments && proofs) transaction.sidecars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$toBlobSidecars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBlobSidecars"])({
        blobs: blobs,
        commitments: commitments,
        proofs: proofs
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionEIP4844"])(transaction);
    const signature = transactionArray.length === 14 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionEIP1559(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to, value, data, accessList, v, r, s] = transactionArray;
    if (!(transactionArray.length === 9 || transactionArray.length === 12)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSerializedTransactionError"]({
        attributes: {
            chainId,
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gas,
            to,
            value,
            data,
            accessList,
            ...transactionArray.length > 9 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip1559'
    });
    const transaction = {
        chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(chainId),
        type: 'eip1559'
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(to) && to !== '0x') transaction.to = to;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(gas) && gas !== '0x') transaction.gas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(gas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(data) && data !== '0x') transaction.data = data;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(nonce);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(value) && value !== '0x') transaction.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(value);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(maxFeePerGas) && maxFeePerGas !== '0x') transaction.maxFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(maxFeePerGas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(maxPriorityFeePerGas) && maxPriorityFeePerGas !== '0x') transaction.maxPriorityFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(maxPriorityFeePerGas);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionEIP1559"])(transaction);
    const signature = transactionArray.length === 12 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionEIP2930(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, gasPrice, gas, to, value, data, accessList, v, r, s] = transactionArray;
    if (!(transactionArray.length === 8 || transactionArray.length === 11)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSerializedTransactionError"]({
        attributes: {
            chainId,
            nonce,
            gasPrice,
            gas,
            to,
            value,
            data,
            accessList,
            ...transactionArray.length > 8 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip2930'
    });
    const transaction = {
        chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(chainId),
        type: 'eip2930'
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(to) && to !== '0x') transaction.to = to;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(gas) && gas !== '0x') transaction.gas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(gas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(data) && data !== '0x') transaction.data = data;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(nonce);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(value) && value !== '0x') transaction.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(value);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(gasPrice) && gasPrice !== '0x') transaction.gasPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(gasPrice);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionEIP2930"])(transaction);
    const signature = transactionArray.length === 11 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionLegacy(serializedTransaction) {
    const transactionArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromRlp"])(serializedTransaction, 'hex');
    const [nonce, gasPrice, gas, to, value, data, chainIdOrV_, r, s] = transactionArray;
    if (!(transactionArray.length === 6 || transactionArray.length === 9)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSerializedTransactionError"]({
        attributes: {
            nonce,
            gasPrice,
            gas,
            to,
            value,
            data,
            ...transactionArray.length > 6 ? {
                v: chainIdOrV_,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'legacy'
    });
    const transaction = {
        type: 'legacy'
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(to) && to !== '0x') transaction.to = to;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(gas) && gas !== '0x') transaction.gas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(gas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(data) && data !== '0x') transaction.data = data;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(nonce);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(value) && value !== '0x') transaction.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(value);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(gasPrice) && gasPrice !== '0x') transaction.gasPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(gasPrice);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionLegacy"])(transaction);
    if (transactionArray.length === 6) return transaction;
    const chainIdOrV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(chainIdOrV_) && chainIdOrV_ !== '0x' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(chainIdOrV_) : 0n;
    if (s === '0x' && r === '0x') {
        if (chainIdOrV > 0) transaction.chainId = Number(chainIdOrV);
        return transaction;
    }
    const v = chainIdOrV;
    const chainId = Number((v - 35n) / 2n);
    if (chainId > 0) transaction.chainId = chainId;
    else if (v !== 27n && v !== 28n) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidLegacyVError"]({
        v
    });
    transaction.v = v;
    transaction.s = s;
    transaction.r = r;
    transaction.yParity = v % 2n === 0n ? 1 : 0;
    return transaction;
}
function toTransactionArray(serializedTransaction) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromRlp"])(`0x${serializedTransaction.slice(4)}`, 'hex');
}
function parseAccessList(accessList_) {
    const accessList = [];
    for(let i = 0; i < accessList_.length; i++){
        const [address, storageKeys] = accessList_[i];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(address, {
            strict: false
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
            address
        });
        accessList.push({
            address: address,
            storageKeys: storageKeys.map((key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$isHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHash"])(key) ? key : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(key))
        });
    }
    return accessList;
}
function parseAuthorizationList(serializedAuthorizationList) {
    const authorizationList = [];
    for(let i = 0; i < serializedAuthorizationList.length; i++){
        const [chainId, address, nonce, yParity, r, s] = serializedAuthorizationList[i];
        authorizationList.push({
            address,
            chainId: chainId === '0x' ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(chainId),
            nonce: nonce === '0x' ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(nonce),
            ...parseEIP155Signature([
                yParity,
                r,
                s
            ])
        });
    }
    return authorizationList;
}
function parseEIP155Signature(transactionArray) {
    const signature = transactionArray.slice(-3);
    const v = signature[0] === '0x' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(signature[0]) === 0n ? 27n : 28n;
    return {
        r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padHex"])(signature[1], {
            size: 32
        }),
        s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padHex"])(signature[2], {
            size: 32
        }),
        v,
        yParity: v === 27n ? 0 : 1
    };
} //# sourceMappingURL=parseTransaction.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/abi/encodePacked.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encodePacked",
    ()=>encodePacked
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/errors/abi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/errors/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/data/pad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/regex.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function encodePacked(types, values) {
    if (types.length !== values.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiEncodingLengthMismatchError"]({
        expectedLength: types.length,
        givenLength: values.length
    });
    const data = [];
    for(let i = 0; i < types.length; i++){
        const type = types[i];
        const value = values[i];
        data.push(encode(type, value));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])(data);
}
function encode(type, value, isArray = false) {
    if (type === 'address') {
        const address = value;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(address)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
            address
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(address.toLowerCase(), {
            size: isArray ? 32 : null
        });
    }
    if (type === 'string') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToHex"])(value);
    if (type === 'bytes') return value;
    if (type === 'bool') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolToHex"])(value), {
        size: isArray ? 32 : 1
    });
    const intMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integerRegex"]);
    if (intMatch) {
        const [_type, baseType, bits = '256'] = intMatch;
        const size = Number.parseInt(bits, 10) / 8;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(value, {
            size: isArray ? 32 : size,
            signed: baseType === 'int'
        });
    }
    const bytesMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesRegex"]);
    if (bytesMatch) {
        const [_type, size] = bytesMatch;
        if (Number.parseInt(size, 10) !== (value.length - 2) / 2) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BytesSizeMismatchError"]({
            expectedSize: Number.parseInt(size, 10),
            givenSize: (value.length - 2) / 2
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(value, {
            dir: 'right',
            size: isArray ? 32 : null
        });
    }
    const arrayMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayRegex"]);
    if (arrayMatch && Array.isArray(value)) {
        const [_type, childType] = arrayMatch;
        const data = [];
        for(let i = 0; i < value.length; i++){
            data.push(encode(childType, value[i], true));
        }
        if (data.length === 0) return '0x';
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])(data);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsupportedPackedAbiType"](type);
} //# sourceMappingURL=encodePacked.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/viem/_esm/tempo/Transaction.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deserialize",
    ()=>deserialize,
    "getType",
    ()=>getType,
    "isTempo",
    ()=>isTempo,
    "serialize",
    ()=>serialize
]);
// TODO: Find opportunities to make this file less duplicated + more simplified with Viem v3.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Secp256k1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/node_modules/ox/_esm/core/Secp256k1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/node_modules/ox/_esm/core/Signature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$SignatureEnvelope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureEnvelope$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/node_modules/ox/_esm/tempo/SignatureEnvelope.js [app-ssr] (ecmascript) <export * as SignatureEnvelope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$TxEnvelopeTempo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TxEnvelopeTempo$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/node_modules/ox/_esm/tempo/TxEnvelopeTempo.js [app-ssr] (ecmascript) <export * as TxEnvelopeTempo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$getTransactionType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/transaction/getTransactionType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$parseTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/transaction/parseTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function getType(transaction) {
    const account = transaction.account;
    if (account?.keyType && account.keyType !== 'secp256k1' || typeof transaction.calls !== 'undefined' || typeof transaction.feePayer !== 'undefined' || typeof transaction.feeToken !== 'undefined' || typeof transaction.keyAuthorization !== 'undefined' || typeof transaction.nonceKey !== 'undefined' || typeof transaction.signature !== 'undefined' || typeof transaction.validBefore !== 'undefined' || typeof transaction.validAfter !== 'undefined') return 'tempo';
    if (transaction.type) return transaction.type;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$getTransactionType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionType"])(transaction);
}
function isTempo(transaction) {
    try {
        const type = getType(transaction);
        return type === 'tempo';
    } catch  {
        return false;
    }
}
function deserialize(serializedTransaction) {
    const type = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"](serializedTransaction, 0, 1);
    if (type === '0x76' || type === '0x78') return deserializeTempo(serializedTransaction);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$parseTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseTransaction"])(serializedTransaction);
}
async function serialize(transaction, signature) {
    // If the transaction is not a Tempo transaction, route to Viem serializer.
    if (!isTempo(transaction)) {
        if (signature && 'type' in signature && signature.type !== 'secp256k1') throw new Error('Unsupported signature type. Expected `secp256k1` but got `' + signature.type + '`.');
        if (signature && 'type' in signature) {
            const { r, s, yParity } = signature?.signature;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeTransaction"])(transaction, {
                r: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"](r, {
                    size: 32
                }),
                s: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"](s, {
                    size: 32
                }),
                yParity
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeTransaction"])(transaction, signature);
    }
    const type = getType(transaction);
    if (type === 'tempo') return serializeTempo(transaction, signature);
    throw new Error('Unsupported transaction type');
}
////////////////////////////////////////////////////////////////////////////////////
// Internal
/** @internal */ function deserializeTempo(serializedTransaction) {
    const { feePayerSignature, nonce, ...tx } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$TxEnvelopeTempo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TxEnvelopeTempo$3e$__["TxEnvelopeTempo"].deserialize(serializedTransaction);
    return {
        ...tx,
        nonce: Number(nonce ?? 0n),
        feePayerSignature: feePayerSignature ? {
            r: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"](feePayerSignature.r, {
                size: 32
            }),
            s: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"](feePayerSignature.s, {
                size: 32
            }),
            yParity: feePayerSignature.yParity
        } : feePayerSignature
    };
}
/** @internal */ async function serializeTempo(transaction, sig) {
    const signature = (()=>{
        if (transaction.signature) return transaction.signature;
        if (sig && 'type' in sig) return sig;
        if (sig) return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$SignatureEnvelope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureEnvelope$3e$__["SignatureEnvelope"].from({
            r: BigInt(sig.r),
            s: BigInt(sig.s),
            yParity: Number(sig.yParity)
        });
        return undefined;
    })();
    const { chainId, feePayer, feePayerSignature, nonce, ...rest } = transaction;
    const transaction_ox = {
        ...rest,
        calls: rest.calls?.length ? rest.calls : [
            {
                to: rest.to || (!rest.data || rest.data === '0x' ? '0x0000000000000000000000000000000000000000' : undefined),
                value: rest.value,
                data: rest.data
            }
        ],
        chainId: Number(chainId),
        feePayerSignature: feePayerSignature ? {
            r: BigInt(feePayerSignature.r),
            s: BigInt(feePayerSignature.s),
            yParity: Number(feePayerSignature.yParity)
        } : feePayer ? null : undefined,
        type: 'tempo',
        ...nonce ? {
            nonce: BigInt(nonce)
        } : {}
    };
    // If we have marked the transaction as intended to be paid
    // by a fee payer (feePayer: true), we will not use the fee token
    // as the fee payer will choose their fee token.
    if (feePayer === true) delete transaction_ox.feeToken;
    if (signature && typeof transaction.feePayer === 'object') {
        const tx = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$TxEnvelopeTempo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TxEnvelopeTempo$3e$__["TxEnvelopeTempo"].from(transaction_ox, {
            signature
        });
        const sender = (()=>{
            if (transaction.from) return transaction.from;
            if (signature.type === 'secp256k1') return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Secp256k1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recoverAddress"]({
                payload: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$TxEnvelopeTempo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TxEnvelopeTempo$3e$__["TxEnvelopeTempo"].getSignPayload(tx),
                signature: signature.signature
            });
            throw new Error('Unable to extract sender from transaction or signature.');
        })();
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$TxEnvelopeTempo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TxEnvelopeTempo$3e$__["TxEnvelopeTempo"].getFeePayerSignPayload(tx, {
            sender
        });
        const feePayerSignature = await transaction.feePayer.sign({
            hash
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$TxEnvelopeTempo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TxEnvelopeTempo$3e$__["TxEnvelopeTempo"].serialize(tx, {
            feePayerSignature: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"](feePayerSignature)
        });
    }
    if (feePayer === true) {
        if (signature) return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$TxEnvelopeTempo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TxEnvelopeTempo$3e$__["TxEnvelopeTempo"].serialize(transaction_ox, {
            format: 'feePayer',
            sender: transaction.from,
            signature
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$TxEnvelopeTempo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TxEnvelopeTempo$3e$__["TxEnvelopeTempo"].serialize(transaction_ox, {
            feePayerSignature: null
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$TxEnvelopeTempo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TxEnvelopeTempo$3e$__["TxEnvelopeTempo"].serialize(// If we have specified a fee payer, the user will not be signing over the fee token.
    // Defer the fee token signing to the fee payer.
    {
        ...transaction_ox,
        ...feePayer ? {
            feeToken: undefined
        } : {}
    }, {
        feePayerSignature: undefined,
        signature
    });
}
;
 //# sourceMappingURL=Transaction.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/viem/_esm/tempo/Formatters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatTransaction",
    ()=>formatTransaction,
    "formatTransactionReceipt",
    ()=>formatTransactionReceipt,
    "formatTransactionRequest",
    ()=>formatTransactionRequest
]);
// TODO: Find opportunities to make this file less duplicated + more simplified with Viem v3.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Transaction$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/node_modules/ox/_esm/tempo/Transaction.js [app-ssr] (ecmascript) <export * as Transaction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$TransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TransactionRequest$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/node_modules/ox/_esm/tempo/TransactionRequest.js [app-ssr] (ecmascript) <export * as TransactionRequest>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/formatters/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/formatters/transactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$tempo$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/tempo/Transaction.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
function formatTransaction(transaction) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$tempo$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isTempo"])(transaction)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransaction"])(transaction);
    const { feePayerSignature, gasPrice: _, nonce, ...tx } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Transaction$3e$__["Transaction"].fromRpc(transaction);
    return {
        ...tx,
        accessList: tx.accessList,
        feePayerSignature: feePayerSignature ? {
            r: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"](feePayerSignature.r, {
                size: 32
            }),
            s: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"](feePayerSignature.s, {
                size: 32
            }),
            v: BigInt(feePayerSignature.v ?? 27),
            yParity: feePayerSignature.yParity
        } : undefined,
        nonce: Number(nonce),
        typeHex: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Transaction$3e$__["Transaction"].toRpcType[tx.type],
        type: tx.type
    };
}
function formatTransactionReceipt(receipt) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransactionReceipt"])(receipt);
}
function formatTransactionRequest(r, action) {
    const request = r;
    const account = request.account ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(request.account) : undefined;
    // If the request is not a Tempo transaction, route to Viem formatter.
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$tempo$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isTempo"])(request)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransactionRequest"])(r, action);
    if (action) request.calls = request.calls ?? [
        {
            to: r.to || (!r.data || r.data === '0x' ? '0x0000000000000000000000000000000000000000' : undefined),
            value: r.value,
            data: r.data
        }
    ];
    // If we have marked the transaction as intended to be paid
    // by a fee payer (feePayer: true), we will not use the fee token
    // as the fee payer will choose their fee token.
    if (request.feePayer === true) delete request.feeToken;
    const rpc = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$TransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TransactionRequest$3e$__["TransactionRequest"].toRpc({
        ...request,
        type: 'tempo'
    });
    if (action === 'estimateGas') {
        rpc.maxFeePerGas = undefined;
        rpc.maxPriorityFeePerGas = undefined;
    }
    rpc.to = undefined;
    rpc.data = undefined;
    rpc.value = undefined;
    const [keyType, keyData] = (()=>{
        const type = account && 'keyType' in account ? account.keyType : account?.source;
        if (!type) return [
            undefined,
            undefined
        ];
        if (type === 'webAuthn') // TODO: derive correct bytes size of key data based on webauthn create metadata.
        return [
            'webAuthn',
            `0x${'ff'.repeat(1400)}`
        ];
        if ([
            'p256',
            'secp256k1'
        ].includes(type)) return [
            type,
            undefined
        ];
        return [
            undefined,
            undefined
        ];
    })();
    const keyId = account && 'accessKeyAddress' in account ? account.accessKeyAddress : undefined;
    return {
        ...rpc,
        ...keyData ? {
            keyData
        } : {},
        ...keyId ? {
            keyId
        } : {},
        ...keyType ? {
            keyType
        } : {},
        ...request.feePayer ? {
            feePayer: typeof request.feePayer === 'object' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(request.feePayer) : request.feePayer
        } : {}
    };
} //# sourceMappingURL=Formatters.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/viem/_esm/tempo/internal/concurrent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detect",
    ()=>detect
]);
const concurrentCounts = new Map();
async function detect(key) {
    concurrentCounts.set(key, (concurrentCounts.get(key) ?? 0) + 1);
    await Promise.resolve();
    const isConcurrent = (concurrentCounts.get(key) ?? 0) > 1;
    queueMicrotask(()=>{
        const count = concurrentCounts.get(key) ?? 0;
        if (count <= 1) concurrentCounts.delete(key);
        else concurrentCounts.set(key, count - 1);
    });
    return isConcurrent;
} //# sourceMappingURL=concurrent.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/viem/_esm/tempo/chainConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chainConfig",
    ()=>chainConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$SignatureEnvelope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureEnvelope$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/node_modules/ox/_esm/tempo/SignatureEnvelope.js [app-ssr] (ecmascript) <export * as SignatureEnvelope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/actions/public/getCode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/actions/public/verifyHash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/constants/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/chain/defineChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/formatters/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/formatters/transactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$tempo$2f$Formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/tempo/Formatters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$tempo$2f$internal$2f$concurrent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/tempo/internal/concurrent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$tempo$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/viem/_esm/tempo/Transaction.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
;
;
;
const maxExpirySecs = 25;
const chainConfig = {
    blockTime: 1_000,
    extendSchema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendSchema"])(),
    formatters: {
        transaction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineTransaction"])({
            exclude: [
                'aaAuthorizationList'
            ],
            format: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$tempo$2f$Formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransaction"]
        }),
        transactionReceipt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineTransactionReceipt"])({
            format: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$tempo$2f$Formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransactionReceipt"]
        }),
        transactionRequest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineTransactionRequest"])({
            format: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$tempo$2f$Formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransactionRequest"]
        })
    },
    prepareTransactionRequest: [
        async (r, { phase })=>{
            const request = r;
            // FIXME: node does not account for fee payer + key authorization combinartion; bump gas for now.
            if (phase === 'afterFillParameters') {
                if (request.feePayer && request.keyAuthorization?.signature.type === 'webAuthn') request.gas = (request.gas ?? 0n) + 20000n;
                return request;
            }
            // Use expiring nonces for concurrent transactions (TIP-1009).
            // When nonceKey is 'expiring', feePayer is specified, or concurrent requests
            // are detected, we use expiring nonces (nonceKey = uint256.max) with a
            // validBefore timestamp.
            const useExpiringNonce = await (async ()=>{
                if (request.nonceKey === 'expiring') return true;
                if (request.feePayer && typeof request.nonceKey === 'undefined') return true;
                const address = request.account?.address;
                if (address && typeof request.nonceKey === 'undefined') return await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$tempo$2f$internal$2f$concurrent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detect"](address);
                return false;
            })();
            if (useExpiringNonce) {
                request.nonceKey = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxUint256"];
                request.nonce = 0;
                if (typeof request.validBefore === 'undefined') request.validBefore = Math.floor(Date.now() / 1000) + maxExpirySecs;
            } else if (typeof request.nonceKey !== 'undefined') {
                // Explicit nonceKey provided (2D nonce mode)
                request.nonce = typeof request.nonce === 'number' ? request.nonce : 0;
            }
            if (!request.feeToken && request.chain?.feeToken) request.feeToken = request.chain.feeToken;
            return request;
        },
        {
            runAt: [
                'beforeFillTransaction',
                'afterFillParameters'
            ]
        }
    ],
    serializers: {
        // TODO: casting to satisfy viem – viem v3 to have more flexible serializer type.
        transaction: (transaction, signature)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$tempo$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["serialize"](transaction, signature)
    },
    async verifyHash (client, parameters) {
        const { address, hash, signature } = parameters;
        // `verifyHash` supports "signature envelopes" (a Tempo proposal) to natively verify arbitrary
        // envelope-compatible (WebAuthn, P256, etc.) signatures.
        // We can directly verify stateless, non-keychain signature envelopes without a
        // network request to the chain.
        if (typeof signature === 'string' && signature.endsWith(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$SignatureEnvelope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureEnvelope$3e$__["SignatureEnvelope"].magicBytes.slice(2))) {
            const envelope = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$SignatureEnvelope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureEnvelope$3e$__["SignatureEnvelope"].deserialize(signature);
            if (envelope.type !== 'keychain') {
                const code = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCode"])(client, {
                    address,
                    blockNumber: parameters.blockNumber,
                    blockTag: parameters.blockTag
                });
                // Check if EOA, if not, we want to go down the ERC-1271 flow.
                if (// not a contract (EOA)
                !code || // default delegation (tempo EOA)
                code === '0xef01007702c00000000000000000000000000000000000') return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$tempo$2f$SignatureEnvelope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureEnvelope$3e$__["SignatureEnvelope"].verify(envelope, {
                    address,
                    payload: hash
                });
            }
        }
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyHash"], 'verifyHash')({
            ...parameters,
            chain: null
        });
    }
}; //# sourceMappingURL=chainConfig.js.map
}),
];

//# sourceMappingURL=13e8b_viem__esm_adb947d5._.js.map