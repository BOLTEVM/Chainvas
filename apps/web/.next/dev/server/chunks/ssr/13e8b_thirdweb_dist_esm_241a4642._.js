module.exports = [
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/insight/get-transactions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get transactions for a wallet
 * @example
 * ```ts
 * import { Insight } from "thirdweb";
 *
 * const transactions = await Insight.getTransactions({
 *   client,
 *   walletAddress: "0x1234567890123456789012345678901234567890",
 *   chains: [sepolia],
 * });
 * ```
 * @insight
 */ __turbopack_context__.s([
    "getTransactions",
    ()=>getTransactions
]);
async function getTransactions(args) {
    const [{ getV1WalletsByWalletAddressTransactions }, { getThirdwebDomains }, { getClientFetch }, { assertInsightEnabled }, { stringify }] = await Promise.all([
        __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/@thirdweb-dev/insight/dist/esm/exports/thirdweb.js [app-ssr] (ecmascript, async loader)"),
        __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/domains.js [app-ssr] (ecmascript, async loader)"),
        __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/fetch.js [app-ssr] (ecmascript, async loader)"),
        __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/insight/common.js [app-ssr] (ecmascript, async loader)"),
        __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/json.js [app-ssr] (ecmascript, async loader)")
    ]);
    await assertInsightEnabled(args.chains);
    const threeMonthsAgoInSeconds = Math.floor((Date.now() - 3 * 30 * 24 * 60 * 60 * 1000) / 1000);
    const { client, walletAddress, chains, queryOptions } = args;
    const defaultQueryOptions = {
        chain: chains.map((chain)=>chain.id),
        filter_block_timestamp_gte: threeMonthsAgoInSeconds,
        limit: 100
    };
    const result = await getV1WalletsByWalletAddressTransactions({
        baseUrl: `https://${getThirdwebDomains().insight}`,
        fetch: getClientFetch(client),
        path: {
            wallet_address: walletAddress
        },
        query: {
            ...defaultQueryOptions,
            ...queryOptions
        }
    });
    if (result.error) {
        throw new Error(`${result.response.status} ${result.response.statusText} - ${result.error ? stringify(result.error) : "Unknown error"}`);
    }
    return result.data.data || [];
} //# sourceMappingURL=get-transactions.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/transaction-store.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addTransactionToStore",
    ()=>addTransactionToStore,
    "getPastTransactions",
    ()=>getPastTransactions,
    "getTransactionStore",
    ()=>getTransactionStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$insight$2f$get$2d$transactions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/insight/get-transactions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/reactive/store.js [app-ssr] (ecmascript)");
;
;
const transactionsByAddress = new Map();
function getTransactionStore(address) {
    const existingStore = transactionsByAddress.get(address);
    if (existingStore) {
        return existingStore;
    }
    const newStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])([]);
    transactionsByAddress.set(address, newStore);
    return newStore;
}
function addTransactionToStore(options) {
    const { address, transactionHash, chainId } = options;
    const tranasctionStore = getTransactionStore(address);
    tranasctionStore.setValue([
        ...tranasctionStore.getValue(),
        {
            chainId,
            transactionHash
        }
    ]);
    transactionsByAddress.set(address, tranasctionStore);
}
async function getPastTransactions(options) {
    const { walletAddress, chain, client } = options;
    const oneMonthsAgoInSeconds = Math.floor((Date.now() - 1 * 30 * 24 * 60 * 60 * 1000) / 1000);
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$insight$2f$get$2d$transactions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactions"])({
        chains: [
            chain
        ],
        client,
        queryOptions: {
            filter_block_timestamp_gte: oneMonthsAgoInSeconds,
            limit: 20,
            decode: true
        },
        walletAddress
    });
    return result.map((tx)=>({
            chainId: typeof tx.chain_id === "string" ? Number(tx.chain_id) : tx.chain_id,
            receipt: {
                status: tx.status === 0 ? "failed" : "success",
                to: tx.to_address
            },
            transactionHash: tx.hash,
            decoded: tx.decoded
        }));
} //# sourceMappingURL=transaction-store.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/gasless/send-gasless-transaction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendGaslessTransaction",
    ()=>sendGaslessTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$transaction$2d$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/transaction-store.js [app-ssr] (ecmascript)");
;
async function sendGaslessTransaction({ account, transaction, serializableTransaction, gasless }) {
    // TODO: handle special case for mutlicall transactions!
    // Steps:
    // 1. check if the method is `multicall` by comparing the 4bytes data with the `multicall` selector
    // 2. split the rest of the data into its "parts"
    // 3. solidityPack the parts with the part data + the `account.address`
    // see v4: `core/classes/transactions.ts>Transaction>prepareGasless:L551`
    if (serializableTransaction.value && serializableTransaction.value > 0n) {
        throw new Error("Gasless transactions cannot have a value");
    }
    // TODO: multiply gas by 2 for some reason(?) - we do in v4, *should* we?
    let result;
    // biconomy
    if (gasless.provider === "biconomy") {
        const { relayBiconomyTransaction } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/gasless/providers/biconomy.js [app-ssr] (ecmascript, async loader)");
        result = await relayBiconomyTransaction({
            account,
            gasless,
            serializableTransaction,
            transaction
        });
    }
    // openzeppelin
    if (gasless.provider === "openzeppelin") {
        const { relayOpenZeppelinTransaction } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/gasless/providers/openzeppelin.js [app-ssr] (ecmascript, async loader)");
        result = await relayOpenZeppelinTransaction({
            account,
            gasless,
            serializableTransaction,
            transaction
        });
    }
    if (gasless.provider === "engine") {
        const { relayEngineTransaction } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/gasless/providers/engine.js [app-ssr] (ecmascript, async loader)");
        result = await relayEngineTransaction({
            account,
            gasless,
            serializableTransaction,
            transaction
        });
    }
    if (!result) {
        throw new Error("Unsupported gasless provider");
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$transaction$2d$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addTransactionToStore"])({
        address: account.address,
        chainId: transaction.chain.id,
        transactionHash: result.transactionHash
    });
    return result;
} //# sourceMappingURL=send-gasless-transaction.js.map
}),
];

//# sourceMappingURL=13e8b_thirdweb_dist_esm_241a4642._.js.map