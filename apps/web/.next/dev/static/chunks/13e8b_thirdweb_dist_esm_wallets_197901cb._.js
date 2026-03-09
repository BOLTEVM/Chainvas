(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/utils/getTokenBalance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTokenBalance",
    ()=>getTokenBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/contract/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$actions$2f$eth_getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/actions/eth_getBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/units.js [app-client] (ecmascript)");
;
;
;
;
;
async function getTokenBalance(options) {
    const { account, client, chain, tokenAddress } = options;
    // erc20 case
    if (tokenAddress) {
        // load balanceOf dynamically to avoid circular dependency
        const { getBalance } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/extensions/erc20/read/getBalance.js [app-client] (ecmascript, async loader)");
        return getBalance({
            address: account.address,
            contract: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
                address: tokenAddress,
                chain,
                client
            })
        });
    }
    // native token case
    const rpcRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRpcClient"])({
        chain,
        client
    });
    const [nativeSymbol, nativeDecimals, nativeName, nativeBalance] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainSymbol"])(chain),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainDecimals"])(chain),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainNativeCurrencyName"])(chain),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$actions$2f$eth_getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eth_getBalance"])(rpcRequest, {
            address: account.address
        })
    ]);
    return {
        decimals: nativeDecimals,
        displayValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTokens"])(nativeBalance, nativeDecimals),
        name: nativeName,
        symbol: nativeSymbol,
        value: nativeBalance
    };
} //# sourceMappingURL=getTokenBalance.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/utils/getWalletBalance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWalletBalance",
    ()=>getWalletBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/constants/addresses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/contract/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$actions$2f$eth_getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/actions/eth_getBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/units.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
async function getWalletBalance(options) {
    const { address, client, chain } = options;
    // Scipper chain (42429) uses a wrapped native token for balance queries
    const tokenAddress = options.tokenAddress || (chain.id === 42429 ? "0x20c0000000000000000000000000000000000000" : undefined);
    // erc20 case
    if (tokenAddress && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(tokenAddress) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NATIVE_TOKEN_ADDRESS"])) {
        // load balanceOf dynamically to avoid circular dependency
        const { getBalance } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/extensions/erc20/read/getBalance.js [app-client] (ecmascript, async loader)");
        return getBalance({
            address,
            contract: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
                address: tokenAddress,
                chain,
                client
            })
        });
    }
    // native token case
    const rpcRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRpcClient"])({
        chain,
        client
    });
    const [nativeSymbol, nativeDecimals, nativeName, nativeBalance] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainSymbol"])(chain),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainDecimals"])(chain),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainNativeCurrencyName"])(chain),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$actions$2f$eth_getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eth_getBalance"])(rpcRequest, {
            address
        })
    ]);
    return {
        chainId: chain.id,
        decimals: nativeDecimals,
        displayValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTokens"])(nativeBalance, nativeDecimals),
        name: nativeName,
        symbol: nativeSymbol,
        tokenAddress: tokenAddress ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NATIVE_TOKEN_ADDRESS"],
        value: nativeBalance
    };
} //# sourceMappingURL=getWalletBalance.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Constants for most common wallets
__turbopack_context__.s([
    "BASE_ACCOUNT",
    ()=>BASE_ACCOUNT,
    "COINBASE",
    ()=>COINBASE,
    "METAMASK",
    ()=>METAMASK,
    "NON_SEARCHABLE_WALLETS",
    ()=>NON_SEARCHABLE_WALLETS,
    "RAINBOW",
    ()=>RAINBOW,
    "ZERION",
    ()=>ZERION
]);
const COINBASE = "com.coinbase.wallet";
const BASE_ACCOUNT = "org.base.account";
const METAMASK = "io.metamask";
const RAINBOW = "me.rainbow";
const ZERION = "io.zerion.wallet";
const NON_SEARCHABLE_WALLETS = [
    "inApp",
    "embedded",
    "smart",
    "xyz.abs"
]; //# sourceMappingURL=constants.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/getWalletInfo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWalletInfo",
    ()=>getWalletInfo
]);
// This file is auto-generated by the `scripts/wallets/generate.ts` script.
// Do not modify this file manually.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$is$2d$ecosystem$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/ecosystem/is-ecosystem-wallet.js [app-client] (ecmascript)");
;
async function getWalletInfo(id, image) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$is$2d$ecosystem$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEcosystemWallet"])(id)) {
        const { getEcosystemWalletInfo } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/ecosystem/get-ecosystem-wallet-info.js [app-client] (ecmascript, async loader)");
        return image ? getEcosystemWalletInfo(id).then((info)=>info.image_id) : getEcosystemWalletInfo(id);
    }
    switch(id){
        case "smart":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/custom/smart/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/custom/smart/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "inApp":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/custom/inApp/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/custom/inApp/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "walletConnect":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/custom/walletConnect/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/custom/walletConnect/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "embedded":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/custom/embedded/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/custom/embedded/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "adapter":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/custom/adapter/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/custom/adapter/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.1inch.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.1inch.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.1inch.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.binance.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.binance.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.binance.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.ledger":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.ledger/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.ledger/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.bitpay":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bitpay/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bitpay/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.bestwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bestwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bestwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.metamask":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.metamask/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.metamask/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.trustwallet.app":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.trustwallet.app/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.trustwallet.app/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.fireblocks":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.fireblocks/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.fireblocks/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.bitget.web3":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bitget.web3/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bitget.web3/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "pro.tokenpocket":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/pro.tokenpocket/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/pro.tokenpocket/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.safepal":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.safepal/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.safepal/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.uniswap":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.uniswap/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.uniswap/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.zerion.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.zerion.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.zerion.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.elrond.maiar.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.elrond.maiar.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.elrond.maiar.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.crypto.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.crypto.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.crypto.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.bitcoin":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bitcoin/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bitcoin/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.bifrostwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bifrostwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bifrostwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "jp.co.rakuten-wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/jp.co.rakuten-wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/jp.co.rakuten-wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.bybit":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bybit/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bybit/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.blockchain.login":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.blockchain.login/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.blockchain.login/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.trezor":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.trezor/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.trezor/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "im.token":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/im.token/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/im.token/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "global.safe":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/global.safe/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/global.safe/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.ctrl":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.ctrl/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.ctrl/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "co.arculus":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/co.arculus/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/co.arculus/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.roninchain.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.roninchain.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.roninchain.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.okex.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.okex.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.okex.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.wemixplay":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.wemixplay/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.wemixplay/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.tangem":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.tangem/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.tangem/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.exodus":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.exodus/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.exodus/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.hashpack.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.hashpack.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.hashpack.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "id.co.pintu":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/id.co.pintu/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/id.co.pintu/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "network.blackfort":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.blackfort/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.blackfort/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.wigwam.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.wigwam.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.wigwam.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.backpack":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.backpack/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.backpack/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.subwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.subwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.subwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "cc.avacus":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/cc.avacus/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/cc.avacus/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "me.rainbow":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/me.rainbow/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/me.rainbow/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "so.onekey.app.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/so.onekey.app.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/so.onekey.app.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "me.haha":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/me.haha/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/me.haha/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.bee":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bee/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bee/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "ag.jup":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/ag.jup/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/ag.jup/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.keplr":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.keplr/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.keplr/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.hot-labs":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.hot-labs/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.hot-labs/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.dcentwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.dcentwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.dcentwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.kraken":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.kraken/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.kraken/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.kucoin":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.kucoin/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.kucoin/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.magiceden.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.magiceden.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.magiceden.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.tomi":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.tomi/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.tomi/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.ibvm":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ibvm/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ibvm/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.mewwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.mewwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.mewwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.socios.app":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.socios.app/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.socios.app/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.argent":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.argent/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.argent/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.thorwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.thorwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.thorwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.internetmoney":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.internetmoney/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.internetmoney/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.mathwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.mathwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.mathwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.cypherhq":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.cypherhq/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.cypherhq/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.novawallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.novawallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.novawallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.yowallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.yowallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.yowallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.flowfoundation.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.flowfoundation.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.flowfoundation.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.kabila":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.kabila/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.kabila/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.opera":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.opera/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.opera/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.valoraapp":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.valoraapp/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.valoraapp/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.robinhood.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.robinhood.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.robinhood.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.chain":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.chain/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.chain/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.huddln":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.huddln/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.huddln/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.core.extension":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.core.extension/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.core.extension/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "world.freedom":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/world.freedom/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/world.freedom/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "money.unstoppable":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/money.unstoppable/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/money.unstoppable/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "pk.modular":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/pk.modular/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/pk.modular/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.wombat":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.wombat/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.wombat/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.klipwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.klipwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.klipwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.gemwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.gemwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.gemwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.sabay.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.sabay.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.sabay.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.zengo":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.zengo/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.zengo/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.joeywallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.joeywallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.joeywallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.tokoin":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.tokoin/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.tokoin/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.alpha-u.wallet.web":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.alpha-u.wallet.web/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.alpha-u.wallet.web/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "network.cvl":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.cvl/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.cvl/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.leapwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.leapwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.leapwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.xenea":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.xenea/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.xenea/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.oasys-wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.oasys-wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.oasys-wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.bitso":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bitso/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bitso/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.enjin":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.enjin/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.enjin/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.coldwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coldwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coldwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.creditcoin.app":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.creditcoin.app/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.creditcoin.app/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.everspace":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.everspace/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.everspace/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.zeal":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.zeal/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.zeal/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.whitewallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.whitewallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.whitewallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "ai.purewallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/ai.purewallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/ai.purewallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.fastex.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.fastex.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.fastex.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.kriptomat":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.kriptomat/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.kriptomat/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.ullapay":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.ullapay/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.ullapay/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.atomicwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.atomicwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.atomicwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.pionewallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.pionewallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.pionewallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.oxalus":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.oxalus/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.oxalus/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.uniultra.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.uniultra.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.uniultra.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.frontier.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.frontier.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.frontier.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.coolbitx.cwsapp":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coolbitx.cwsapp/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coolbitx.cwsapp/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.gooddollar":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.gooddollar/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.gooddollar/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.cakewallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.cakewallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.cakewallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.ellipal":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.ellipal/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.ellipal/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.krystal":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.krystal/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.krystal/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.monarchwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.monarchwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.monarchwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.burritowallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.burritowallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.burritowallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "co.family.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/co.family.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/co.family.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.mtpelerin":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.mtpelerin/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.mtpelerin/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.keyring":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.keyring/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.keyring/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "cc.localtrade.lab":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/cc.localtrade.lab/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/cc.localtrade.lab/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "tech.okto":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/tech.okto/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/tech.okto/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.xcapit":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.xcapit/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.xcapit/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.gayawallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.gayawallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.gayawallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.nightly":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.nightly/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.nightly/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.coin98":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coin98/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coin98/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.coca":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.coca/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.coca/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.linen":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.linen/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.linen/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "dev.auroracloud":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/dev.auroracloud/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/dev.auroracloud/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.coinomi":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coinomi/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coinomi/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "my.mone":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/my.mone/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/my.mone/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.alephium":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.alephium/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.alephium/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.alicebob":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.alicebob/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.alicebob/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.koalawallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.koalawallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.koalawallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.veworld":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.veworld/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.veworld/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.withpaper":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.withpaper/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.withpaper/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.noone":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.noone/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.noone/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "network.haqq":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.haqq/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.haqq/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.ricewallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ricewallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ricewallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "me.iopay":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/me.iopay/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/me.iopay/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.walletnow":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.walletnow/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.walletnow/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.okse":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.okse/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.okse/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "network.over":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.over/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.over/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.aktionariat":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.aktionariat/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.aktionariat/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.paybolt":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.paybolt/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.paybolt/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.plasma-wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.plasma-wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.plasma-wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.bytebank":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.bytebank/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.bytebank/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.ethermail":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ethermail/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ethermail/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.optowallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.optowallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.optowallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "finance.openwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/finance.openwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/finance.openwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.sequence":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.sequence/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.sequence/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.foxwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.foxwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.foxwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.hbwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.hbwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.hbwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "it.airgap":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/it.airgap/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/it.airgap/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.holdstation":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.holdstation/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.holdstation/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.universaleverything":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.universaleverything/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.universaleverything/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.abra":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.abra/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.abra/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.thepulsewallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.thepulsewallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.thepulsewallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.premanft":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.premanft/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.premanft/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.timelesswallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.timelesswallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.timelesswallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.bitizen":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.bitizen/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.bitizen/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.ultimate":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.ultimate/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.ultimate/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.compasswallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.compasswallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.compasswallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.fizzwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.fizzwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.fizzwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.xovawallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.xovawallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.xovawallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.nicegram":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.nicegram/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.nicegram/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.zelcore":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.zelcore/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.zelcore/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.freighter":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.freighter/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.freighter/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.stickey":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.stickey/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.stickey/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.coinstats":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.coinstats/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.coinstats/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.harti":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.harti/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.harti/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.dttd":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.dttd/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.dttd/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.tellaw":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.tellaw/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.tellaw/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.klever":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.klever/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.klever/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.unstoppabledomains":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.unstoppabledomains/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.unstoppabledomains/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "is.callback":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/is.callback/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/is.callback/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "ai.pundi":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/ai.pundi/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/ai.pundi/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.summonersarena":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.summonersarena/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.summonersarena/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.fizen":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.fizen/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.fizen/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "fi.pillar":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/fi.pillar/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/fi.pillar/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "world.ixo":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/world.ixo/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/world.ixo/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.thetatoken":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.thetatoken/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.thetatoken/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "net.gateweb3":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/net.gateweb3/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/net.gateweb3/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.ammer":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.ammer/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.ammer/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "us.binance":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/us.binance/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/us.binance/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.yusetoken":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.yusetoken/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.yusetoken/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "co.muza":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/co.muza/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/co.muza/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.hyperpay":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.hyperpay/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.hyperpay/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.cosmostation":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.cosmostation/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.cosmostation/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.ryipay":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.ryipay/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.ryipay/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.wallet3":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.wallet3/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.wallet3/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.dota168":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.dota168/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.dota168/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.bitpie":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bitpie/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bitpie/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.coininn":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coininn/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coininn/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "me.easy":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/me.easy/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/me.easy/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.shido":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.shido/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.shido/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.neonwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.neonwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.neonwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.secuxtech":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.secuxtech/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.secuxtech/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.unitywallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.unitywallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.unitywallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.miraiapp":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.miraiapp/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.miraiapp/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.beexo":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.beexo/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.beexo/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "social.halo":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/social.halo/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/social.halo/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.gemspocket":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.gemspocket/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.gemspocket/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.status":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.status/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.status/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.midoin":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.midoin/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.midoin/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "id.competence":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/id.competence/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/id.competence/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.safemoon":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.safemoon/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.safemoon/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "llc.besc":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/llc.besc/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/llc.besc/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "baby.smart":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/baby.smart/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/baby.smart/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.onto":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.onto/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.onto/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.ivirse":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.ivirse/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.ivirse/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "one.mixin.messenger":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/one.mixin.messenger/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/one.mixin.messenger/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "cash.abpay":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/cash.abpay/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/cash.abpay/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "ch.dssecurity":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/ch.dssecurity/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/ch.dssecurity/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.concordium.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.concordium.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.concordium.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.zkape":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.zkape/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.zkape/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.paliwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.paliwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.paliwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.pitaka":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.pitaka/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.pitaka/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.saitamatoken":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.saitamatoken/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.saitamatoken/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.mugambo":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.mugambo/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.mugambo/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "fi.stablez":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/fi.stablez/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/fi.stablez/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.legacynetwork":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.legacynetwork/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.legacynetwork/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.meld.app":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.meld.app/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.meld.app/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.bladewallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.bladewallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.bladewallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.authentrend":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.authentrend/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.authentrend/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.webauth":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.webauth/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.webauth/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.tucop":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.tucop/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.tucop/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "pro.fintoken":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/pro.fintoken/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/pro.fintoken/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.nash":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.nash/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.nash/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "vc.uincubator.api":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/vc.uincubator.api/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/vc.uincubator.api/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.unagi.unawallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.unagi.unawallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.unagi.unawallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.nonbank":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.nonbank/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.nonbank/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.armana.portal":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.armana.portal/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.armana.portal/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.x9wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.x9wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.x9wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.kigo":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.kigo/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.kigo/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.alphawallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.alphawallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.alphawallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.getcogni":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.getcogni/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.getcogni/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.sinum":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.sinum/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.sinum/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "finance.soulswap.app":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/finance.soulswap.app/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/finance.soulswap.app/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.loopring.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.loopring.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.loopring.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.shapeshift":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.shapeshift/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.shapeshift/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.trinity-tech":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.trinity-tech/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.trinity-tech/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "money.keychain":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/money.keychain/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/money.keychain/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.superhero.cordova":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.superhero.cordova/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.superhero.cordova/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.bettatrade":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bettatrade/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bettatrade/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "online.puzzle":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/online.puzzle/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/online.puzzle/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "gg.indi":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/gg.indi/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/gg.indi/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.tradestrike":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.tradestrike/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.tradestrike/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.echooo":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.echooo/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.echooo/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.kryptogo":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.kryptogo/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.kryptogo/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.trustasset":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.trustasset/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.trustasset/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.utorg":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.utorg/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.utorg/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.dfinnwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.dfinnwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.dfinnwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.rezor":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.rezor/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.rezor/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.legionnetwork":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.legionnetwork/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.legionnetwork/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "cc.maxwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/cc.maxwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/cc.maxwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.ripio":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.ripio/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.ripio/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.fxwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.fxwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.fxwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "inc.tomo":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/inc.tomo/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/inc.tomo/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "me.komet.app":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/me.komet.app/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/me.komet.app/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.guardiianwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.guardiianwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.guardiianwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.hacken.hai":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.hacken.hai/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.hacken.hai/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.zypto":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.zypto/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.zypto/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.nabox":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.nabox/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.nabox/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.tastycrypto":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.tastycrypto/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.tastycrypto/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.ballet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.ballet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.ballet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.talken":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.talken/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.talken/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.wallacy":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.wallacy/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.wallacy/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "network.mrhb":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.mrhb/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.mrhb/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.pockie":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.pockie/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.pockie/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "me.astrox":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/me.astrox/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/me.astrox/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.thirdweb":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.thirdweb/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.thirdweb/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.poolsmobility.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.poolsmobility.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.poolsmobility.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.roam.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.roam.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.roam.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.gamic":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.gamic/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.gamic/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.m1nty":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.m1nty/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.m1nty/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "network.trustkeys":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.trustkeys/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.trustkeys/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.caesiumlab":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.caesiumlab/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.caesiumlab/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.catecoin":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.catecoin/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.catecoin/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.hootark":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.hootark/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.hootark/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.crossmint":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.crossmint/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.crossmint/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.coincircle":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coincircle/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coincircle/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.bharatbox":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.bharatbox/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.bharatbox/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "nl.greenhood.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/nl.greenhood.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/nl.greenhood.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "co.swopme":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/co.swopme/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/co.swopme/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.kresus":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.kresus/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.kresus/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.dolletwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.dolletwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.dolletwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "net.shinobi-wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/net.shinobi-wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/net.shinobi-wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.azcoiner":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.azcoiner/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.azcoiner/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.passwallet.app":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.passwallet.app/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.passwallet.app/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.qubic.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.qubic.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.qubic.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.coinex.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coinex.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coinex.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.xverse":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.xverse/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.xverse/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.flash-wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.flash-wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.flash-wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.vgxfoundation":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.vgxfoundation/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.vgxfoundation/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.arianee":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.arianee/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.arianee/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.myabcwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.myabcwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.myabcwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.owallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.owallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.owallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.zelus":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.zelus/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.zelus/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "net.myrenegade":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/net.myrenegade/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/net.myrenegade/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.clingon":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.clingon/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.clingon/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.icewal":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.icewal/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.icewal/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.streakk":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.streakk/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.streakk/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.dokwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.dokwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.dokwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "finance.porta":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/finance.porta/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/finance.porta/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.prettygood.x":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.prettygood.x/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.prettygood.x/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.earthwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.earthwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.earthwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "net.spatium.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/net.spatium.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/net.spatium.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "live.superex":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/live.superex/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/live.superex/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.adftechnology":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.adftechnology/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.adftechnology/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.bscecowallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bscecowallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bscecowallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.wallypto":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.wallypto/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.wallypto/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.reown":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.reown/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.reown/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "finance.voltage":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/finance.voltage/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/finance.voltage/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.walletconnect":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.walletconnect/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.walletconnect/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.passpay":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.passpay/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.passpay/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "technology.obvious":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/technology.obvious/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/technology.obvious/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.plutope":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.plutope/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.plutope/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.buzz-up":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.buzz-up/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.buzz-up/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "co.xellar":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/co.xellar/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/co.xellar/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.kaxaa":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.kaxaa/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.kaxaa/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.shefi":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.shefi/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.shefi/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.orion":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.orion/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.orion/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "world.dosi.vault":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/world.dosi.vault/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/world.dosi.vault/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "network.gridlock":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.gridlock/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.gridlock/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "finance.plena":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/finance.plena/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/finance.plena/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "cc.dropp":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/cc.dropp/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/cc.dropp/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.scramberry":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.scramberry/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.scramberry/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.bonuz":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.bonuz/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.bonuz/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.bmawallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bmawallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bmawallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "co.lifedefi":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/co.lifedefi/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/co.lifedefi/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.get-verso":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.get-verso/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.get-verso/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.blocto":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.blocto/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.blocto/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.pandoshi":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.pandoshi/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.pandoshi/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.getclave":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.getclave/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.getclave/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "technology.jambo":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/technology.jambo/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/technology.jambo/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.edge":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.edge/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.edge/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.banksocial":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.banksocial/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.banksocial/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.konio":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.konio/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.konio/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.qubetics":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.qubetics/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.qubetics/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.imem":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.imem/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.imem/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.purechain":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.purechain/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.purechain/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.ethos":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ethos/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ethos/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.didwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.didwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.didwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.dextrade":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.dextrade/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.dextrade/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.kelp":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.kelp/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.kelp/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.nestwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.nestwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.nestwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.cryptnox":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.cryptnox/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.cryptnox/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "land.liker":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/land.liker/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/land.liker/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.hippowallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.hippowallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.hippowallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.certhis":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.certhis/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.certhis/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.safecryptowallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.safecryptowallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.safecryptowallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.saify":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.saify/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.saify/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.tiduswallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.tiduswallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.tiduswallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.uptn.dapp-web":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.uptn.dapp-web/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.uptn.dapp-web/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.it.onewallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.it.onewallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.it.onewallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.rktechworks":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.rktechworks/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.rktechworks/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.revelator.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.revelator.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.revelator.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.sinohope":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.sinohope/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.sinohope/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "network.dgg":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.dgg/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.dgg/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.up":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.up/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.up/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.lif3":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.lif3/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.lif3/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.bimwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.bimwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.bimwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "pub.dg":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/pub.dg/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/pub.dg/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.wemix":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.wemix/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.wemix/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.pierwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.pierwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.pierwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "net.stasis":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/net.stasis/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/net.stasis/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.peakdefi":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.peakdefi/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.peakdefi/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.3swallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.3swallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.3swallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.example.subdomain":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.example.subdomain/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.example.subdomain/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.reown.appkit-lab":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.reown.appkit-lab/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.reown.appkit-lab/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.opz":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.opz/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.opz/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "ai.spotonchain.platform":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/ai.spotonchain.platform/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/ai.spotonchain.platform/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.dailychain.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.dailychain.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.dailychain.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.omni":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.omni/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.omni/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "id.plumaa":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/id.plumaa/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/id.plumaa/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.ttmwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ttmwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ttmwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.kgen":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.kgen/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.kgen/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.nufinetes":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.nufinetes/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.nufinetes/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.squirrelwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.squirrelwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.squirrelwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "eu.trusteeglobal":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/eu.trusteeglobal/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/eu.trusteeglobal/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.daffione":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.daffione/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.daffione/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.saakuru.app":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.saakuru.app/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.saakuru.app/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.r0ar":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.r0ar/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.r0ar/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.nodle":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.nodle/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.nodle/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.tofee":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.tofee/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.tofee/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.pltwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.pltwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.pltwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.talkapp":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.talkapp/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.talkapp/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.ready":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ready/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ready/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.w3wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.w3wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.w3wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "pro.ds.app":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/pro.ds.app/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/pro.ds.app/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.reown.docs":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.reown.docs/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.reown.docs/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.apollox":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.apollox/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.apollox/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.ipmb":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.ipmb/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.ipmb/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.payperless":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.payperless/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.payperless/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.obliowallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.obliowallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.obliowallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.keeper-wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.keeper-wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.keeper-wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.paraswap":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.paraswap/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.paraswap/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.ecoinwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.ecoinwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.ecoinwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "fi.dropmate":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/fi.dropmate/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/fi.dropmate/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.cryptokara":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.cryptokara/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.cryptokara/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "co.cyber.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/co.cyber.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/co.cyber.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.kriptonio":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.kriptonio/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.kriptonio/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "digital.minerva":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/digital.minerva/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/digital.minerva/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.mpcvault.broswerplugin":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.mpcvault.broswerplugin/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.mpcvault.broswerplugin/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.liberawallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.liberawallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.liberawallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.helixid":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.helixid/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.helixid/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.broearn":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.broearn/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.broearn/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.altme":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.altme/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.altme/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.herewallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.herewallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.herewallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.coinsdo":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coinsdo/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coinsdo/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "trade.flooz.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/trade.flooz.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/trade.flooz.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.tapwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.tapwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.tapwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "fun.tobi":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/fun.tobi/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/fun.tobi/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.bitnovo":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bitnovo/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.bitnovo/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.xucre":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.xucre/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.xucre/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.girin":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.girin/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.girin/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "finance.panaroma":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/finance.panaroma/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/finance.panaroma/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.clot":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.clot/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.clot/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.transi":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.transi/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.transi/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "world.qoin":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/world.qoin/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/world.qoin/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.greengloryglobal":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.greengloryglobal/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.greengloryglobal/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.amazewallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.amazewallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.amazewallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "zone.bitverse":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/zone.bitverse/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/zone.bitverse/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "social.gm2":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/social.gm2/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/social.gm2/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.ozonewallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ozonewallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ozonewallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.ukiss":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ukiss/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ukiss/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "finance.islamicoin":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/finance.islamicoin/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/finance.islamicoin/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.copiosa":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.copiosa/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.copiosa/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "world.fncy":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/world.fncy/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/world.fncy/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.moonstake":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.moonstake/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.moonstake/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.trusteeglobal":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.trusteeglobal/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.trusteeglobal/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "net.spatium":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/net.spatium/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/net.spatium/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "co.filwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/co.filwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/co.filwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "money.snowball":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/money.snowball/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/money.snowball/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.ennowallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.ennowallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.ennowallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.safematrix":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.safematrix/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.safematrix/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "pro.assure":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/pro.assure/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/pro.assure/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.neftipedia":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.neftipedia/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.neftipedia/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.goldbit":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.goldbit/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.goldbit/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.coingrig":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coingrig/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coingrig/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.xfun":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.xfun/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.xfun/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.antiersolutions":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.antiersolutions/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.antiersolutions/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.itoken":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.itoken/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.itoken/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.cardstack":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.cardstack/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.cardstack/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.slavi":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.slavi/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.slavi/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "tech.defiantapp":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/tech.defiantapp/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/tech.defiantapp/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.dexari":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.dexari/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.dexari/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.cfcx":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.cfcx/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.cfcx/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.socjsc":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.socjsc/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.socjsc/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.tokenb":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.tokenb/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.tokenb/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.onyx":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.onyx/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.onyx/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.gk8":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.gk8/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.gk8/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.anchorage":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.anchorage/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.anchorage/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.hashport.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.hashport.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.hashport.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.billionwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.billionwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.billionwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.dlicom":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.dlicom/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.dlicom/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.tychiwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.tychiwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.tychiwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "at.swe":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/at.swe/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/at.swe/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "network.wali":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.wali/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.wali/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.diamante":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.diamante/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.diamante/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "ai.interlinklabs":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/ai.interlinklabs/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/ai.interlinklabs/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.walllet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.walllet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.walllet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.lunascape":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.lunascape/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.lunascape/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.nvxowallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.nvxowallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.nvxowallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "today.paywithcrypto.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/today.paywithcrypto.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/today.paywithcrypto.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "ai.iluminary":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/ai.iluminary/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/ai.iluminary/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.reactwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.reactwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.reactwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.rewardywallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.rewardywallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.rewardywallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.walletv":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.walletv/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.walletv/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.outlawgames":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.outlawgames/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.outlawgames/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.ironwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ironwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.ironwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.mecowallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.mecowallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.mecowallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.onlybulls":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.onlybulls/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.onlybulls/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "me.qiewallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/me.qiewallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/me.qiewallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "fund.lflabs":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/fund.lflabs/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/fund.lflabs/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.walletverse":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.walletverse/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.walletverse/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.berasig":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.berasig/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.berasig/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.phantom":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.phantom/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.phantom/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.coinbase.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coinbase.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.coinbase.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.rabby":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.rabby/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.rabby/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.brave.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.brave.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.brave.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "fi.nu":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/fi.nu/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/fi.nu/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "pro.hinkal.walletconnect":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/pro.hinkal.walletconnect/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/pro.hinkal.walletconnect/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.moongate.one":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.moongate.one/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.moongate.one/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "tech.levain":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/tech.levain/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/tech.levain/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.enkrypt":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.enkrypt/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.enkrypt/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.scramble":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.scramble/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.scramble/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.finoa":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.finoa/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.finoa/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.blazpay.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.blazpay.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.blazpay.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.getjoin.prd":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.getjoin.prd/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.getjoin.prd/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.talisman":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.talisman/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.talisman/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "eu.flashsoft.clear-wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/eu.flashsoft.clear-wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/eu.flashsoft.clear-wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "app.berasig":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.berasig/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/app.berasig/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.wallet.reown":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.wallet.reown/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.wallet.reown/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.runonflux.sspwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.runonflux.sspwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.runonflux.sspwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.blanqlabs.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.blanqlabs.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.blanqlabs.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.hero.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.hero.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.hero.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "network.verified.custody":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.verified.custody/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/network.verified.custody/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "console.utila.io":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/console.utila.io/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/console.utila.io/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.micet.wallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.micet.wallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.micet.wallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "world.dolphinode.chain":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/world.dolphinode.chain/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/world.dolphinode.chain/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "com.lootrush":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.lootrush/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/com.lootrush/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.dawnwallet":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.dawnwallet/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.dawnwallet/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "xyz.abs":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.abs/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/xyz.abs/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "sh.frame":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/sh.frame/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/sh.frame/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "io.useglyph":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.useglyph/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/io.useglyph/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        case "org.base.account":
            {
                return image ? __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.base.account/image.js [app-client] (ecmascript, async loader)").then((img)=>img.default) : __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet/org.base.account/index.js [app-client] (ecmascript, async loader)").then((w)=>w.wallet);
            }
        default:
            {
                throw new Error(`Wallet with id ${id} not found`);
            }
    }
} //# sourceMappingURL=getWalletInfo.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/base-account/base-account-wallet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "baseAccountWalletSDK",
    ()=>baseAccountWalletSDK
]);
/**
 * internal helper functions for Base Account SDK wallet
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/analytics/track/connect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$emitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-emitter.js [app-client] (ecmascript)");
;
;
;
;
function baseAccountWalletSDK(args) {
    const { createOptions } = args;
    const emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$emitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletEmitter"])();
    let account;
    let chain;
    function reset() {
        account = undefined;
        chain = undefined;
    }
    let handleDisconnect = async ()=>{};
    let handleSwitchChain = async (newChain)=>{
        chain = newChain;
    };
    const unsubscribeChainChanged = emitter.subscribe("chainChanged", (newChain)=>{
        chain = newChain;
    });
    const unsubscribeDisconnect = emitter.subscribe("disconnect", ()=>{
        reset();
        unsubscribeChainChanged();
        unsubscribeDisconnect();
    });
    emitter.subscribe("accountChanged", (_account)=>{
        account = _account;
    });
    return {
        autoConnect: async (options)=>{
            const { autoConnectBaseAccountSDK } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/base-account/base-account-web.js [app-client] (ecmascript, async loader)");
            const provider = await args.providerFactory();
            const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await autoConnectBaseAccountSDK(options, emitter, provider);
            // set the states
            account = connectedAccount;
            chain = connectedChain;
            handleDisconnect = doDisconnect;
            handleSwitchChain = doSwitchChain;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackConnect"])({
                chainId: chain.id,
                client: options.client,
                walletAddress: account.address,
                walletType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_ACCOUNT"]
            });
            // return account
            return account;
        },
        connect: async (options)=>{
            const { connectBaseAccountSDK } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/base-account/base-account-web.js [app-client] (ecmascript, async loader)");
            const provider = await args.providerFactory();
            const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await connectBaseAccountSDK(options, emitter, provider);
            // set the states
            account = connectedAccount;
            chain = connectedChain;
            handleDisconnect = doDisconnect;
            handleSwitchChain = doSwitchChain;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackConnect"])({
                chainId: chain.id,
                client: options.client,
                walletAddress: account.address,
                walletType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_ACCOUNT"]
            });
            // return account
            return account;
        },
        disconnect: async ()=>{
            reset();
            await handleDisconnect();
        },
        getAccount: ()=>account,
        getChain () {
            if (!chain) {
                return undefined;
            }
            chain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChainIfExists"])(chain.id) || chain;
            return chain;
        },
        getConfig: ()=>createOptions,
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_ACCOUNT"],
        subscribe: emitter.subscribe,
        switchChain: async (newChain)=>{
            await handleSwitchChain(newChain);
        }
    };
} //# sourceMappingURL=base-account-wallet.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/eip5792/get-calls-status.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCallsStatus",
    ()=>getCallsStatus,
    "toGetCallsStatusResponse",
    ()=>toGetCallsStatusResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-client] (ecmascript) <locals>");
;
async function getCallsStatus({ wallet, client, id }) {
    const account = wallet.getAccount();
    if (!account) {
        throw new Error(`Failed to get call status, no account found for wallet ${wallet.id}`);
    }
    const chain = wallet.getChain();
    if (!chain) {
        throw new Error(`Failed to get call status, no chain found for wallet ${wallet.id}`);
    }
    if (account.getCallsStatus) {
        return account.getCallsStatus({
            id,
            chain,
            client
        });
    }
    throw new Error(`Failed to get call status, wallet ${wallet.id} does not support EIP-5792`);
}
const receiptStatuses = {
    "0x0": "reverted",
    "0x1": "success"
};
function toGetCallsStatusResponse(response) {
    const [status, statusCode] = (()=>{
        const statusCode = response.status;
        if (statusCode >= 100 && statusCode < 200) return [
            "pending",
            statusCode
        ];
        if (statusCode >= 200 && statusCode < 300) return [
            "success",
            statusCode
        ];
        if (statusCode >= 300 && statusCode < 700) return [
            "failure",
            statusCode
        ];
        // @ts-expect-error: for backwards compatibility
        if (statusCode === "CONFIRMED") return [
            "success",
            200
        ];
        // @ts-expect-error: for backwards compatibility
        if (statusCode === "PENDING") return [
            "pending",
            100
        ];
        return [
            undefined,
            statusCode
        ];
    })();
    return {
        ...response,
        atomic: response.atomic,
        // @ts-expect-error: for backwards compatibility
        chainId: response.chainId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToNumber"])(response.chainId) : undefined,
        receipts: response.receipts?.map((receipt)=>({
                ...receipt,
                blockNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(receipt.blockNumber),
                gasUsed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(receipt.gasUsed),
                status: receiptStatuses[receipt.status]
            })) ?? [],
        status,
        statusCode,
        version: response.version
    };
} //# sourceMappingURL=get-calls-status.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/eip5792/get-capabilities.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get the capabilities of a wallet based on the [EIP-5792](https://eips.ethereum.org/EIPS/eip-5792) specification.
 *
 *  This function is dependent on the wallet's support for EIP-5792, but will not throw.
 * **The returned object contains a `message` field detailing any issues with the wallet's support for EIP-5792.**
 *
 * @param {GetCapabilitiesOptions} options
 * @param {Wallet} options.wallet - The wallet to get the capabilities of.
 * @returns {Promise<GetCapabilitiesResult>} - A promise that resolves to the capabilities of the wallet based on the [EIP-5792](https://eips.ethereum.org/EIPS/eip-5792) spec.
 * @beta
 * @example
 * ```ts
 * import { getCapabilities } from "thirdweb/wallets/eip5792";
 *
 * const wallet = createWallet("com.coinbase.wallet");
 * const capabilities = await getCapabilities({ wallet });
 * ```
 *
 * @extension EIP5792
 */ __turbopack_context__.s([
    "getCapabilities",
    ()=>getCapabilities,
    "toGetCapabilitiesResult",
    ()=>toGetCapabilitiesResult
]);
async function getCapabilities({ wallet, chainId }) {
    const account = wallet.getAccount();
    if (!account) {
        return {
            message: `Can't get capabilities, no account connected for wallet: ${wallet.id}`
        };
    }
    if (account.getCapabilities) {
        return account.getCapabilities({
            chainId
        });
    }
    throw new Error(`Failed to get capabilities, wallet ${wallet.id} does not support EIP-5792`);
}
function toGetCapabilitiesResult(result, chainIdFilter) {
    const capabilities = {};
    for (const [chainId, capabilities_] of Object.entries(result)){
        capabilities[Number(chainId)] = {};
        const capabilitiesCopy = {};
        for (const [key, value] of Object.entries(capabilities_)){
            capabilitiesCopy[key] = value;
        }
        capabilities[Number(chainId)] = capabilitiesCopy;
    }
    return typeof chainIdFilter === "number" ? {
        [chainIdFilter]: capabilities[chainIdFilter]
    } : capabilities;
} //# sourceMappingURL=get-capabilities.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/eip5792/send-calls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendCalls",
    ()=>sendCalls,
    "toProviderCallParams",
    ()=>toProviderCallParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/encode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$resolve$2d$promised$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/promise/resolve-promised-value.js [app-client] (ecmascript)");
;
;
;
;
async function sendCalls(options) {
    const { wallet, chain } = options;
    const account = wallet.getAccount();
    if (!account) {
        throw new Error(`Cannot send calls, no account connected for wallet: ${wallet.id}`);
    }
    const firstCall = options.calls[0];
    if (!firstCall) {
        throw new Error("No calls to send");
    }
    const callChain = firstCall.chain || chain;
    if (wallet.getChain()?.id !== callChain.id) {
        await wallet.switchChain(callChain);
    }
    // check internal implementations
    if (account.sendCalls) {
        const { wallet: _, ...optionsWithoutWallet } = options;
        const result = await account.sendCalls(optionsWithoutWallet);
        return {
            ...result,
            wallet
        };
    }
    throw new Error(`Cannot send calls, wallet ${wallet.id} does not support EIP-5792`);
}
async function toProviderCallParams(options, account) {
    const firstCall = options.calls[0];
    if (!firstCall) {
        throw new Error("No calls to send");
    }
    const { calls, capabilities, version = "2.0.0", chain = firstCall.chain } = options;
    const preparedCalls = await Promise.all(calls.map(async (call)=>{
        const { to, value } = call;
        if (to === undefined && call.data === undefined) {
            throw new Error("Cannot send call, `to` or `data` must be provided.");
        }
        const [_to, _data, _value] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$resolve$2d$promised$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePromisedValue"])(to),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(call),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$resolve$2d$promised$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePromisedValue"])(value)
        ]);
        if (_to) {
            return {
                data: _data,
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(_to),
                value: typeof _value === "bigint" || typeof _value === "number" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numberToHex"])(_value) : undefined
            };
        }
        return {
            data: _data,
            to: undefined,
            value: undefined
        };
    }));
    const injectedWalletCallParams = [
        {
            // see: https://eips.ethereum.org/EIPS/eip-5792#wallet_sendcalls
            atomicRequired: options.atomicRequired ?? false,
            calls: preparedCalls,
            capabilities,
            chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numberToHex"])(chain.id),
            from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(account.address),
            version
        }
    ];
    return {
        callParams: injectedWalletCallParams,
        chain
    };
} //# sourceMappingURL=send-calls.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/utils/chains.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TODO - move this to chains subfolder
/**
 * Remove client id from RPC url for given chain
 * @internal
 */ __turbopack_context__.s([
    "getValidPublicRPCUrl",
    ()=>getValidPublicRPCUrl
]);
function getValidPublicRPCUrl(chain) {
    return getValidChainRPCs(chain).map((rpc)=>{
        try {
            const url = new URL(rpc);
            // remove client id from url
            if (url.hostname.endsWith(".thirdweb.com")) {
                url.pathname = "";
                url.search = "";
            }
            return url.toString();
        } catch  {
            return rpc;
        }
    });
}
// TODO - move this to chains/
/**
 * Get valid RPCs for given chain
 * @internal
 */ function getValidChainRPCs(chain, clientId, mode = "http") {
    const processedRPCs = [];
    for (const rpc of chain.rpc){
        // exclude RPC if mode mismatch
        if (mode === "http" && !rpc.startsWith("http")) {
            continue;
        }
        if (mode === "ws" && !rpc.startsWith("ws")) {
            continue;
        }
        // Replace API_KEY placeholder with value
        // biome-ignore lint/suspicious/noTemplateCurlyInString: this is valid
        if (rpc.includes("${THIRDWEB_API_KEY}")) {
            if (clientId) {
                processedRPCs.push(// biome-ignore lint/suspicious/noTemplateCurlyInString: this is what the string to replace looks like in this case
                rpc.replace("${THIRDWEB_API_KEY}", clientId) + (typeof globalThis !== "undefined" && "APP_BUNDLE_ID" in globalThis ? `/?bundleId=${globalThis.APP_BUNDLE_ID}` : ""));
            } else {
                // if no client id, let it through with empty string
                // if secretKey is present, it will be used in header
                // if none are passed, will have reduced access
                // biome-ignore lint/suspicious/noTemplateCurlyInString: this is what the string to replace looks like in this case
                processedRPCs.push(rpc.replace("${THIRDWEB_API_KEY}", ""));
            }
        } else if (rpc.includes("${")) {
        // do nothing (just don't add it to the list)
        } else {
            processedRPCs.push(rpc);
        }
    }
    if (processedRPCs.length === 0) {
        throw new Error(`No RPC available for chainId "${chain.chainId}" with mode ${mode}`);
    }
    return processedRPCs;
} //# sourceMappingURL=chains.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/utils/defaultDappMetadata.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultAppMetadata",
    ()=>getDefaultAppMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/platform.js [app-client] (ecmascript)");
;
function getDefaultAppMetadata() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])()) {
        return {
            description: "thirdweb powered dApp",
            logoUrl: "https://thirdweb.com/favicon.ico",
            name: "thirdweb powered dApp",
            url: "https://thirdweb.com"
        };
    }
    const { protocol, hostname, port } = window.location;
    let baseUrl = `${protocol}//${hostname}`;
    // Add the port if it's not the default HTTP or HTTPS port
    if (port && port !== "80" && port !== "443") {
        baseUrl += `:${port}`;
    }
    const logoUrl = `${baseUrl}/favicon.ico`;
    return {
        description: window.document.title || "thirdweb powered dApp",
        logoUrl,
        name: window.document.title || "thirdweb powered dApp",
        url: baseUrl
    };
} //# sourceMappingURL=defaultDappMetadata.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/utils/normalizeChainId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeChainId",
    ()=>normalizeChainId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$helpers$2f$is$2d$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/helpers/is-hex.js [app-client] (ecmascript)");
;
function normalizeChainId(chainId) {
    if (typeof chainId === "number") {
        return chainId;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$helpers$2f$is$2d$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(chainId)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToNumber"])(chainId);
    }
    if (typeof chainId === "bigint") {
        return Number(chainId);
    }
    return Number.parseInt(chainId, 10);
} //# sourceMappingURL=normalizeChainId.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/base-account/base-account-web.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "autoConnectBaseAccountSDK",
    ()=>autoConnectBaseAccountSDK,
    "connectBaseAccountSDK",
    ()=>connectBaseAccountSDK,
    "getBaseAccountWebProvider",
    ()=>getBaseAccountWebProvider,
    "isBaseAccountSDKWallet",
    ()=>isBaseAccountSDKWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/ox/_esm/core/Hex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$TypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/ox/_esm/core/TypedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/analytics/track/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$signatures$2f$helpers$2f$parse$2d$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/signatures/helpers/parse-typed-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$get$2d$calls$2d$status$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/eip5792/get-calls-status.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$get$2d$capabilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/eip5792/get-capabilities.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$send$2d$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/eip5792/send-calls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$chains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/utils/chains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$defaultDappMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/utils/defaultDappMetadata.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$normalizeChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/utils/normalizeChainId.js [app-client] (ecmascript)");
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
;
;
// Need to keep the provider around because it keeps connection state
// Store both the provider and the options it was created with
let _provider;
let _providerOptions;
async function getBaseAccountWebProvider(options) {
    if (_provider) {
        // Provider already exists - warn if options differ
        if (options && _providerOptions) {
            const currentChainIds = _providerOptions.chains?.map((c)=>c.id) || [];
            const newChainIds = options.chains?.map((c)=>c.id) || [];
            const chainsMatch = currentChainIds.length === newChainIds.length && currentChainIds.every((id, i)=>id === newChainIds[i]);
            const appNameMatch = options.appMetadata?.name === _providerOptions.appMetadata?.name;
            if (!chainsMatch || !appNameMatch) {
                console.warn("[Base Account SDK] Provider already initialized with different options. " + "The Base Account SDK uses a singleton provider - subsequent configurations are ignored. " + "Create only one Base Account wallet instance per application.");
            }
        }
        return _provider;
    }
    const { createBaseAccountSDK } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/@base-org/account/dist/index.js [app-client] (ecmascript, async loader)");
    const defaultMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$defaultDappMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultAppMetadata"])();
    const sdk = createBaseAccountSDK({
        appName: options?.appMetadata?.name || defaultMetadata.name || "thirdweb powered dApp",
        appLogoUrl: options?.appMetadata?.logoUrl || defaultMetadata.logoUrl || null,
        appChainIds: options?.chains?.map((c)=>c.id) || []
    });
    const provider = sdk.getProvider();
    _provider = provider;
    _providerOptions = options;
    return provider;
}
function isBaseAccountSDKWallet(wallet) {
    return wallet.id === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_ACCOUNT"];
}
function createAccount({ provider, address, client }) {
    const account = {
        address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address),
        async sendTransaction (tx) {
            const transactionHash = await provider.request({
                method: "eth_sendTransaction",
                params: [
                    {
                        accessList: tx.accessList,
                        data: tx.data,
                        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address),
                        gas: tx.gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numberToHex"])(tx.gas) : undefined,
                        to: tx.to,
                        value: tx.value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numberToHex"])(tx.value) : undefined
                    }
                ]
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackTransaction"])({
                chainId: tx.chainId,
                client: client,
                contractAddress: tx.to ?? undefined,
                gasPrice: tx.gasPrice,
                transactionHash,
                walletAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address),
                walletType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_ACCOUNT"]
            });
            return {
                transactionHash
            };
        },
        async signMessage ({ message }) {
            if (!account.address) {
                throw new Error("Provider not setup");
            }
            const messageToSign = (()=>{
                if (typeof message === "string") {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stringToHex"])(message);
                }
                if (message.raw instanceof Uint8Array) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["uint8ArrayToHex"])(message.raw);
                }
                return message.raw;
            })();
            const res = await provider.request({
                method: "personal_sign",
                params: [
                    messageToSign,
                    account.address
                ]
            });
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validate"](res)) {
                throw new Error("Invalid signature returned");
            }
            return res;
        },
        async signTypedData (typedData) {
            if (!account.address) {
                throw new Error("Provider not setup");
            }
            const { domain, message, primaryType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$signatures$2f$helpers$2f$parse$2d$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseTypedData"])(typedData);
            const types = {
                EIP712Domain: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$TypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractEip712DomainTypes"](domain),
                ...typedData.types
            };
            // Need to do a runtime validation check on addresses, byte ranges, integer ranges, etc
            // as we can't statically check this with TypeScript.
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$TypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validate"]({
                domain,
                message,
                primaryType,
                types
            });
            const stringifiedData = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$TypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"]({
                domain: domain ?? {},
                message,
                primaryType,
                types
            });
            const res = await provider.request({
                method: "eth_signTypedData_v4",
                params: [
                    account.address,
                    stringifiedData
                ]
            });
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validate"](res)) {
                throw new Error("Invalid signed payload returned");
            }
            return res;
        },
        sendCalls: async (options)=>{
            try {
                const { callParams, chain } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$send$2d$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toProviderCallParams"])(options, account);
                const callId = await provider.request({
                    method: "wallet_sendCalls",
                    params: callParams
                });
                if (callId && typeof callId === "object" && "id" in callId) {
                    return {
                        chain,
                        client,
                        id: callId.id
                    };
                }
                return {
                    chain,
                    client,
                    id: callId
                };
            } catch (error) {
                if (/unsupport|not support/i.test(error.message)) {
                    throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_ACCOUNT"]} errored calling wallet_sendCalls, with error: ${error instanceof Error ? error.message : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(error)}`);
                }
                throw error;
            }
        },
        async getCallsStatus (options) {
            try {
                const rawResponse = await provider.request({
                    method: "wallet_getCallsStatus",
                    params: [
                        options.id
                    ]
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$get$2d$calls$2d$status$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toGetCallsStatusResponse"])(rawResponse);
            } catch (error) {
                if (/unsupport|not support/i.test(error.message)) {
                    throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_ACCOUNT"]} does not support wallet_getCallsStatus, reach out to them directly to request EIP-5792 support.`);
                }
                throw error;
            }
        },
        async getCapabilities (options) {
            const chainId = options.chainId;
            try {
                const result = await provider.request({
                    method: "wallet_getCapabilities",
                    params: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(account.address)
                    ]
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$get$2d$capabilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toGetCapabilitiesResult"])(result, chainId);
            } catch (error) {
                if (/unsupport|not support|not available/i.test(error.message)) {
                    return {
                        message: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_ACCOUNT"]} does not support wallet_getCapabilities, reach out to them directly to request EIP-5792 support.`
                    };
                }
                throw error;
            }
        }
    };
    return account;
}
function onConnect(address, chain, provider, emitter, client) {
    const account = createAccount({
        address,
        client,
        provider
    });
    async function disconnect() {
        provider.off("accountsChanged", onAccountsChanged);
        provider.off("chainChanged", onChainChanged);
        provider.off("disconnect", onDisconnect);
        await provider.disconnect();
    }
    async function onDisconnect() {
        disconnect();
        emitter.emit("disconnect", undefined);
    }
    function onAccountsChanged(accounts) {
        if (accounts[0]) {
            const newAccount = createAccount({
                address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0]),
                client,
                provider
            });
            emitter.emit("accountChanged", newAccount);
            emitter.emit("accountsChanged", accounts);
        } else {
            onDisconnect();
        }
    }
    function onChainChanged(newChainId) {
        const newChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$normalizeChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"])(newChainId));
        emitter.emit("chainChanged", newChain);
    }
    // subscribe to events - the ProviderInterface uses EventEmitter3
    // which has a slightly different signature than the generic event emitter
    provider.on("accountsChanged", onAccountsChanged);
    provider.on("chainChanged", onChainChanged);
    provider.on("disconnect", onDisconnect);
    return [
        account,
        chain,
        onDisconnect,
        (newChain)=>switchChainBaseAccountSDK(provider, newChain)
    ];
}
async function connectBaseAccountSDK(options, emitter, provider) {
    const accounts = await provider.request({
        method: "eth_requestAccounts"
    });
    if (!accounts[0]) {
        throw new Error("No accounts found");
    }
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0]);
    const connectedChainId = await provider.request({
        method: "eth_chainId"
    });
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$normalizeChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"])(connectedChainId);
    let chain = options.chain && options.chain.id === chainId ? options.chain : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])(chainId);
    // Switch to chain if provided
    if (chainId && options?.chain && chainId !== options?.chain.id) {
        await switchChainBaseAccountSDK(provider, options.chain);
        chain = options.chain;
    }
    return onConnect(address, chain, provider, emitter, options.client);
}
async function autoConnectBaseAccountSDK(options, emitter, provider) {
    // connected accounts
    const addresses = await provider.request({
        method: "eth_accounts"
    });
    const address = addresses[0];
    if (!address) {
        throw new Error("No accounts found");
    }
    const connectedChainId = await provider.request({
        method: "eth_chainId"
    });
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$normalizeChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"])(connectedChainId);
    const chain = options.chain && options.chain.id === chainId ? options.chain : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])(chainId);
    return onConnect(address, chain, provider, emitter, options.client);
}
async function switchChainBaseAccountSDK(provider, chain) {
    // check if chain is already connected
    const connectedChainId = await provider.request({
        method: "eth_chainId"
    });
    const connectedChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$normalizeChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"])(connectedChainId));
    if (connectedChain?.id === chain.id) {
        // chain is already connected, no need to switch
        return;
    }
    const chainIdHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numberToHex"])(chain.id);
    try {
        await provider.request({
            method: "wallet_switchEthereumChain",
            params: [
                {
                    chainId: chainIdHex
                }
            ]
        });
    } catch (error) {
        const apiChain = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainMetadata"])(chain);
        // Indicates chain is not added to provider
        // biome-ignore lint/suspicious/noExplicitAny: TODO: fix later
        if (error?.code === 4902) {
            // try to add the chain
            await provider.request({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        blockExplorerUrls: apiChain.explorers?.map((x)=>x.url) || [],
                        chainId: chainIdHex,
                        chainName: apiChain.name,
                        nativeCurrency: apiChain.nativeCurrency,
                        rpcUrls: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$chains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValidPublicRPCUrl"])(apiChain)
                    }
                ]
            });
        }
    }
} //# sourceMappingURL=base-account-web.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/coinbase/coinbase-wallet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "coinbaseWalletSDK",
    ()=>coinbaseWalletSDK
]);
/**
 * internal helper functions
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/analytics/track/connect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$emitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-emitter.js [app-client] (ecmascript)");
;
;
;
;
function coinbaseWalletSDK(args) {
    const { createOptions } = args;
    const emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$emitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletEmitter"])();
    let account;
    let chain;
    function reset() {
        account = undefined;
        chain = undefined;
    }
    let handleDisconnect = async ()=>{};
    let handleSwitchChain = async (newChain)=>{
        chain = newChain;
    };
    const unsubscribeChainChanged = emitter.subscribe("chainChanged", (newChain)=>{
        chain = newChain;
    });
    const unsubscribeDisconnect = emitter.subscribe("disconnect", ()=>{
        reset();
        unsubscribeChainChanged();
        unsubscribeDisconnect();
    });
    emitter.subscribe("accountChanged", (_account)=>{
        account = _account;
    });
    return {
        autoConnect: async (options)=>{
            const { autoConnectCoinbaseWalletSDK } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/coinbase/coinbase-web.js [app-client] (ecmascript, async loader)");
            const provider = await args.providerFactory();
            const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await autoConnectCoinbaseWalletSDK(options, emitter, provider);
            // set the states
            account = connectedAccount;
            chain = connectedChain;
            handleDisconnect = doDisconnect;
            handleSwitchChain = doSwitchChain;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackConnect"])({
                chainId: chain.id,
                client: options.client,
                walletAddress: account.address,
                walletType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COINBASE"]
            });
            // return account
            return account;
        },
        connect: async (options)=>{
            const { connectCoinbaseWalletSDK } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/coinbase/coinbase-web.js [app-client] (ecmascript, async loader)");
            const provider = await args.providerFactory();
            const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await connectCoinbaseWalletSDK(options, emitter, provider);
            // set the states
            account = connectedAccount;
            chain = connectedChain;
            handleDisconnect = doDisconnect;
            handleSwitchChain = doSwitchChain;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackConnect"])({
                chainId: chain.id,
                client: options.client,
                walletAddress: account.address,
                walletType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COINBASE"]
            });
            // return account
            return account;
        },
        disconnect: async ()=>{
            reset();
            await handleDisconnect();
        },
        getAccount: ()=>account,
        getChain () {
            if (!chain) {
                return undefined;
            }
            chain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChainIfExists"])(chain.id) || chain;
            return chain;
        },
        getConfig: ()=>createOptions,
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COINBASE"],
        onConnectRequested: async ()=>{
            if (args.onConnectRequested) {
                const provider = await args.providerFactory();
                return args.onConnectRequested?.(provider);
            }
        },
        subscribe: emitter.subscribe,
        switchChain: async (newChain)=>{
            await handleSwitchChain(newChain);
        }
    };
} //# sourceMappingURL=coinbase-wallet.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/coinbase/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "showCoinbasePopup",
    ()=>showCoinbasePopup
]);
async function showCoinbasePopup(provider) {
    // biome-ignore lint/suspicious/noExplicitAny: based on the latest CB SDK - scary but works
    await provider?.communicator?.waitForPopupLoaded?.();
} //# sourceMappingURL=utils.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/coinbase/coinbase-web.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "autoConnectCoinbaseWalletSDK",
    ()=>autoConnectCoinbaseWalletSDK,
    "connectCoinbaseWalletSDK",
    ()=>connectCoinbaseWalletSDK,
    "getCoinbaseWebProvider",
    ()=>getCoinbaseWebProvider,
    "isCoinbaseSDKWallet",
    ()=>isCoinbaseSDKWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/ox/_esm/core/Hex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$TypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/ox/_esm/core/TypedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/analytics/track/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$signatures$2f$helpers$2f$parse$2d$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/signatures/helpers/parse-typed-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$get$2d$calls$2d$status$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/eip5792/get-calls-status.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$get$2d$capabilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/eip5792/get-capabilities.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$send$2d$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/eip5792/send-calls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$chains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/utils/chains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$defaultDappMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/utils/defaultDappMetadata.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$normalizeChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/utils/normalizeChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$coinbase$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/coinbase/utils.js [app-client] (ecmascript)");
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
;
;
;
// Need to keep the provider around because it keeps a single popup window connection behind the scenes
// this should be ok since all the creation options are provided at build time
let _provider;
async function getCoinbaseWebProvider(options) {
    if (!_provider) {
        let CoinbaseWalletSDK = (await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/@coinbase/wallet-sdk/dist/index.js [app-client] (ecmascript, async loader)")).default;
        // Workaround for Vite dev import errors
        // https://github.com/vitejs/vite/issues/7112
        if (typeof CoinbaseWalletSDK !== "function" && typeof CoinbaseWalletSDK.default === "function") {
            CoinbaseWalletSDK = CoinbaseWalletSDK.default;
        }
        // @ts-expect-error This import error is not visible to TypeScript
        const client = new CoinbaseWalletSDK({
            appChainIds: options?.chains ? options.chains.map((c)=>c.id) : undefined,
            appLogoUrl: options?.appMetadata?.logoUrl || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$defaultDappMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultAppMetadata"])().logoUrl,
            appName: options?.appMetadata?.name || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$defaultDappMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultAppMetadata"])().name
        });
        const provider = client.makeWeb3Provider(options?.walletConfig);
        _provider = provider;
        return provider;
    }
    return _provider;
}
function isCoinbaseSDKWallet(wallet) {
    return wallet.id === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COINBASE"];
}
function createAccount({ provider, address, client }) {
    const account = {
        address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address),
        onTransactionRequested: async ()=>{
            // make sure to show the coinbase popup BEFORE doing any transaction preprocessing
            // otherwise the popup might get blocked in safari
            // but only if using cb smart wallet (web based)
            if (window.localStorage) {
                // this is the local storage key for the signer type in the cb web sdk
                // value can be "scw" (web) or "walletlink" (mobile wallet)
                const signerType = window.localStorage.getItem("-CBWSDK:SignerConfigurator:SignerType");
                if (signerType === "scw") {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$coinbase$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showCoinbasePopup"])(provider);
                }
            }
        },
        async sendTransaction (tx) {
            const transactionHash = await provider.request({
                method: "eth_sendTransaction",
                params: [
                    {
                        accessList: tx.accessList,
                        data: tx.data,
                        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address),
                        gas: tx.gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numberToHex"])(tx.gas) : undefined,
                        to: tx.to,
                        value: tx.value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numberToHex"])(tx.value) : undefined
                    }
                ]
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackTransaction"])({
                chainId: tx.chainId,
                client: client,
                contractAddress: tx.to ?? undefined,
                gasPrice: tx.gasPrice,
                transactionHash,
                walletAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address),
                walletType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COINBASE"]
            });
            return {
                transactionHash
            };
        },
        async signMessage ({ message }) {
            if (!account.address) {
                throw new Error("Provider not setup");
            }
            const messageToSign = (()=>{
                if (typeof message === "string") {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stringToHex"])(message);
                }
                if (message.raw instanceof Uint8Array) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["uint8ArrayToHex"])(message.raw);
                }
                return message.raw;
            })();
            const res = await provider.request({
                method: "personal_sign",
                params: [
                    messageToSign,
                    account.address
                ]
            });
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validate"](res)) {
                throw new Error("Invalid signature returned");
            }
            return res;
        },
        async signTypedData (typedData) {
            if (!account.address) {
                throw new Error("Provider not setup");
            }
            const { domain, message, primaryType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$signatures$2f$helpers$2f$parse$2d$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseTypedData"])(typedData);
            const types = {
                EIP712Domain: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$TypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractEip712DomainTypes"](domain),
                ...typedData.types
            };
            // Need to do a runtime validation check on addresses, byte ranges, integer ranges, etc
            // as we can't statically check this with TypeScript.
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$TypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validate"]({
                domain,
                message,
                primaryType,
                types
            });
            const stringifiedData = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$TypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"]({
                domain: domain ?? {},
                message,
                primaryType,
                types
            });
            const res = await provider.request({
                method: "eth_signTypedData_v4",
                params: [
                    account.address,
                    stringifiedData
                ]
            });
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validate"](res)) {
                throw new Error("Invalid signed payload returned");
            }
            return res;
        },
        sendCalls: async (options)=>{
            try {
                const { callParams, chain } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$send$2d$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toProviderCallParams"])(options, account);
                const callId = await provider.request({
                    method: "wallet_sendCalls",
                    params: callParams
                });
                if (callId && typeof callId === "object" && "id" in callId) {
                    return {
                        chain,
                        client,
                        id: callId.id
                    };
                }
                return {
                    chain,
                    client,
                    id: callId
                };
            } catch (error) {
                if (/unsupport|not support/i.test(error.message)) {
                    throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COINBASE"]} errored calling wallet_sendCalls, with error: ${error instanceof Error ? error.message : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(error)}`);
                }
                throw error;
            }
        },
        async getCallsStatus (options) {
            try {
                const rawResponse = await provider.request({
                    method: "wallet_getCallsStatus",
                    params: [
                        options.id
                    ]
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$get$2d$calls$2d$status$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toGetCallsStatusResponse"])(rawResponse);
            } catch (error) {
                if (/unsupport|not support/i.test(error.message)) {
                    throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COINBASE"]} does not support wallet_getCallsStatus, reach out to them directly to request EIP-5792 support.`);
                }
                throw error;
            }
        },
        async getCallsStatusRaw (options) {
            try {
                const rawResponse = await provider.request({
                    method: "wallet_getCallsStatus",
                    params: [
                        options.id
                    ]
                });
                return rawResponse;
            } catch (error) {
                if (/unsupport|not support/i.test(error.message)) {
                    throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COINBASE"]} does not support wallet_getCallsStatus, reach out to them directly to request EIP-5792 support.`);
                }
                throw error;
            }
        },
        async getCapabilities (options) {
            const chainId = options.chainId;
            try {
                const result = await provider.request({
                    method: "wallet_getCapabilities",
                    params: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(account.address)
                    ]
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$get$2d$capabilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toGetCapabilitiesResult"])(result, chainId);
            } catch (error) {
                if (/unsupport|not support|not available/i.test(error.message)) {
                    return {
                        message: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COINBASE"]} does not support wallet_getCapabilities, reach out to them directly to request EIP-5792 support.`
                    };
                }
                throw error;
            }
        }
    };
    return account;
}
function onConnect(address, chain, provider, emitter, client) {
    const account = createAccount({
        address,
        client,
        provider
    });
    async function disconnect() {
        provider.removeListener("accountsChanged", onAccountsChanged);
        provider.removeListener("chainChanged", onChainChanged);
        provider.removeListener("disconnect", onDisconnect);
        await provider.disconnect();
    }
    async function onDisconnect() {
        disconnect();
        emitter.emit("disconnect", undefined);
    }
    function onAccountsChanged(accounts) {
        if (accounts[0]) {
            const newAccount = createAccount({
                address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0]),
                client,
                provider
            });
            emitter.emit("accountChanged", newAccount);
            emitter.emit("accountsChanged", accounts);
        } else {
            onDisconnect();
        }
    }
    function onChainChanged(newChainId) {
        const newChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$normalizeChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"])(newChainId));
        emitter.emit("chainChanged", newChain);
    }
    // subscribe to events
    provider.on("accountsChanged", onAccountsChanged);
    provider.on("chainChanged", onChainChanged);
    provider.on("disconnect", onDisconnect);
    return [
        account,
        chain,
        onDisconnect,
        (newChain)=>switchChainCoinbaseWalletSDK(provider, newChain)
    ];
}
async function connectCoinbaseWalletSDK(options, emitter, provider) {
    const accounts = await provider.request({
        method: "eth_requestAccounts"
    });
    if (!accounts[0]) {
        throw new Error("No accounts found");
    }
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0]);
    const connectedChainId = await provider.request({
        method: "eth_chainId"
    });
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$normalizeChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"])(connectedChainId);
    let chain = options.chain && options.chain.id === chainId ? options.chain : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])(chainId);
    // Switch to chain if provided
    if (chainId && options?.chain && chainId !== options?.chain.id) {
        await switchChainCoinbaseWalletSDK(provider, options.chain);
        chain = options.chain;
    }
    return onConnect(address, chain, provider, emitter, options.client);
}
async function autoConnectCoinbaseWalletSDK(options, emitter, provider) {
    // connected accounts
    const addresses = await provider.request({
        method: "eth_accounts"
    });
    const address = addresses[0];
    if (!address) {
        throw new Error("No accounts found");
    }
    const connectedChainId = await provider.request({
        method: "eth_chainId"
    });
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$normalizeChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"])(connectedChainId);
    const chain = options.chain && options.chain.id === chainId ? options.chain : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])(chainId);
    return onConnect(address, chain, provider, emitter, options.client);
}
async function switchChainCoinbaseWalletSDK(provider, chain) {
    // check if chain is already connected
    const connectedChainId = await provider.request({
        method: "eth_chainId"
    });
    const connectedChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$normalizeChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"])(connectedChainId));
    if (connectedChain?.id === chain.id) {
        // chain is already connected, no need to switch
        return;
    }
    const chainIdHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numberToHex"])(chain.id);
    try {
        await provider.request({
            method: "wallet_switchEthereumChain",
            params: [
                {
                    chainId: chainIdHex
                }
            ]
        });
    } catch (error) {
        const apiChain = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainMetadata"])(chain);
        // Indicates chain is not added to provider
        // biome-ignore lint/suspicious/noExplicitAny: TODO: fix later
        if (error?.code === 4902) {
            // try to add the chain
            await provider.request({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        blockExplorerUrls: apiChain.explorers?.map((x)=>x.url) || [],
                        chainId: chainIdHex,
                        chainName: apiChain.name,
                        nativeCurrency: apiChain.nativeCurrency,
                        rpcUrls: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$chains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValidPublicRPCUrl"])(apiChain)
                    }
                ]
            });
        }
    }
} //# sourceMappingURL=coinbase-web.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/ecosystem/get-ecosystem-wallet-auth-options.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEcosystemInfo",
    ()=>getEcosystemInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/domains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$withCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/promise/withCache.js [app-client] (ecmascript)");
;
;
async function getEcosystemInfo(walletId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$withCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withCache"])(async ()=>{
        const res = await fetch(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThirdwebBaseUrl"])("inAppWallet")}/api/2024-05-05/ecosystem-wallet`, {
            headers: {
                "x-ecosystem-id": walletId
            }
        });
        const data = await res.json();
        if (!data || data.code === "UNAUTHORIZED") {
            throw new Error(data.message || `Could not find ecosystem wallet with id ${walletId}, please check your ecosystem wallet configuration.`);
        }
        // siwe is the auth option in the backend, but we want to use wallet as the auth option in the frontend
        if (data.authOptions?.includes("siwe")) {
            data.authOptions = data.authOptions.filter((o)=>o !== "siwe");
            data.authOptions.push("wallet");
        }
        return data;
    }, {
        cacheKey: `ecosystem-wallet-options-${walletId}`,
        cacheTime: 1000 * 60 * 5
    });
} //# sourceMappingURL=get-ecosystem-wallet-auth-options.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/in-app-core.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createInAppWallet",
    ()=>createInAppWallet,
    "getOrCreateInAppWalletConnector",
    ()=>getOrCreateInAppWalletConnector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/analytics/track/connect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$get$2d$ecosystem$2d$wallet$2d$auth$2d$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/ecosystem/get-ecosystem-wallet-auth-options.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$emitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-emitter.js [app-client] (ecmascript)");
;
;
;
;
;
const connectorCache = new Map();
async function getOrCreateInAppWalletConnector(client, connectorFactory, ecosystem) {
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])({
        clientId: client.clientId,
        ecosystem,
        partialSecretKey: client.secretKey?.slice(0, 5)
    });
    if (connectorCache.has(key)) {
        return connectorCache.get(key);
    }
    const connector = await connectorFactory(client);
    connectorCache.set(key, connector);
    return connector;
}
function createInAppWallet(args) {
    const { createOptions: _createOptions, connectorFactory, ecosystem } = args;
    const walletId = ecosystem ? ecosystem.id : "inApp";
    const emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$emitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletEmitter"])();
    let createOptions = _createOptions;
    let account;
    let adminAccount; // Admin account if smartAccountOptions were provided with connection
    let chain;
    let client;
    let authToken = null;
    const resolveSmartAccountOptionsFromEcosystem = async (options)=>{
        if (ecosystem) {
            const ecosystemOptions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$get$2d$ecosystem$2d$wallet$2d$auth$2d$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEcosystemInfo"])(ecosystem.id);
            const smartAccountOptions = ecosystemOptions?.smartAccountOptions;
            if (smartAccountOptions) {
                const executionMode = ecosystemOptions.smartAccountOptions.executionMode;
                if (executionMode === "EIP7702") {
                    createOptions = {
                        ...createOptions,
                        executionMode: {
                            mode: "EIP7702",
                            sponsorGas: smartAccountOptions.sponsorGas
                        }
                    };
                } else {
                    // default to 4337
                    const { defaultChainId } = ecosystemOptions.smartAccountOptions;
                    const preferredChain = options?.chain ?? (defaultChainId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])(defaultChainId) : undefined);
                    if (!preferredChain) {
                        throw new Error(`A chain must be provided either via 'chain' in connect options or 'defaultChainId' in ecosystem configuration. Please pass it via connect() or update the ecosystem configuration.`);
                    }
                    createOptions = {
                        ...createOptions,
                        smartAccount: {
                            chain: preferredChain,
                            factoryAddress: smartAccountOptions.accountFactoryAddress,
                            sponsorGas: smartAccountOptions.sponsorGas
                        }
                    };
                }
            }
        }
    };
    return {
        autoConnect: async (options)=>{
            const { autoConnectInAppWallet } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/index.js [app-client] (ecmascript, async loader)");
            const connector = await getOrCreateInAppWalletConnector(options.client, connectorFactory, ecosystem);
            await resolveSmartAccountOptionsFromEcosystem();
            const { account: connectedAccount, chain: connectedChain, adminAccount: _adminAccount } = await autoConnectInAppWallet(options, createOptions, connector);
            // set the states
            client = options.client;
            account = connectedAccount;
            adminAccount = _adminAccount;
            chain = connectedChain;
            try {
                authToken = await connector.storage.getAuthCookie();
            } catch (error) {
                console.error("Failed to retrieve auth token:", error);
                authToken = null;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackConnect"])({
                chainId: chain.id,
                client: options.client,
                ecosystem,
                walletAddress: account.address,
                walletType: walletId
            });
            // return only the account
            return account;
        },
        connect: async (options)=>{
            const { connectInAppWallet } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/index.js [app-client] (ecmascript, async loader)");
            const connector = await getOrCreateInAppWalletConnector(options.client, connectorFactory, ecosystem);
            await resolveSmartAccountOptionsFromEcosystem();
            const { account: connectedAccount, chain: connectedChain, adminAccount: _adminAccount } = await connectInAppWallet(options, createOptions, connector);
            // set the states
            client = options.client;
            account = connectedAccount;
            adminAccount = _adminAccount;
            chain = connectedChain;
            try {
                authToken = await connector.storage.getAuthCookie();
            } catch (error) {
                console.error("Failed to retrieve auth token:", error);
                authToken = null;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackConnect"])({
                chainId: chain.id,
                client: options.client,
                ecosystem,
                walletAddress: account.address,
                walletType: walletId
            });
            // return only the account
            return account;
        },
        disconnect: async ()=>{
            // If no client is assigned, we should be fine just unsetting the states
            if (client) {
                const connector = await getOrCreateInAppWalletConnector(client, connectorFactory, ecosystem);
                const result = await connector.logout();
                if (!result.success) {
                    throw new Error("Failed to logout");
                }
            }
            account = undefined;
            adminAccount = undefined;
            chain = undefined;
            authToken = null;
            emitter.emit("disconnect", undefined);
        },
        getAccount: ()=>account,
        getAdminAccount: ()=>adminAccount,
        getAuthToken: ()=>authToken,
        getChain () {
            if (!chain) {
                return undefined;
            }
            chain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChainIfExists"])(chain.id) || chain;
            return chain;
        },
        getConfig: ()=>createOptions,
        id: walletId,
        subscribe: emitter.subscribe,
        switchChain: async (newChain)=>{
            if ((createOptions?.smartAccount || createOptions?.executionMode?.mode === "EIP4337") && client && account) {
                // if account abstraction is enabled, reconnect to smart account on the new chain
                const { autoConnectInAppWallet } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/index.js [app-client] (ecmascript, async loader)");
                const connector = await getOrCreateInAppWalletConnector(client, connectorFactory, ecosystem);
                await resolveSmartAccountOptionsFromEcosystem({
                    chain: newChain
                });
                const { account: connectedAccount, chain: connectedChain, adminAccount: _adminAccount } = await autoConnectInAppWallet({
                    chain: newChain,
                    client
                }, createOptions, connector);
                adminAccount = _adminAccount;
                account = connectedAccount;
                chain = connectedChain;
            } else {
                // if not, simply set the new chain
                chain = newChain;
            }
            emitter.emit("chainChanged", newChain);
        }
    };
} //# sourceMappingURL=in-app-core.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/web/ecosystem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ecosystemWallet",
    ()=>ecosystemWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$wallet$2f$in$2d$app$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/in-app-core.js [app-client] (ecmascript)");
;
function ecosystemWallet(...args) {
    const [ecosystemId, createOptions] = args;
    const ecosystem = {
        id: ecosystemId,
        partnerId: createOptions?.partnerId
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$wallet$2f$in$2d$app$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInAppWallet"])({
        connectorFactory: async (client)=>{
            const { InAppWebConnector } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/web-connector.js [app-client] (ecmascript, async loader)");
            return new InAppWebConnector({
                client,
                ecosystem,
                storage: createOptions?.storage
            });
        },
        createOptions: {
            auth: {
                ...createOptions?.auth,
                options: []
            },
            partnerId: ecosystem.partnerId
        },
        ecosystem
    });
} //# sourceMappingURL=ecosystem.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/web/in-app.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inAppWallet",
    ()=>inAppWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$wallet$2f$in$2d$app$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/in-app-core.js [app-client] (ecmascript)");
;
function inAppWallet(createOptions) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$wallet$2f$in$2d$app$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInAppWallet"])({
        connectorFactory: async (client)=>{
            const { InAppWebConnector } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/web-connector.js [app-client] (ecmascript, async loader)");
            return new InAppWebConnector({
                client,
                passkeyDomain: createOptions?.auth?.passkeyDomain,
                storage: createOptions?.storage
            });
        },
        createOptions
    });
} //# sourceMappingURL=in-app.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/injected/mipdStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInstalledWalletProviders",
    ()=>getInstalledWalletProviders,
    "getInstalledWallets",
    ()=>getInstalledWallets,
    "injectedProvider",
    ()=>injectedProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$mipd$2f$dist$2f$esm$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/mipd/dist/esm/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/create-wallet.js [app-client] (ecmascript)");
;
;
;
;
// if we're in the browser -> create the store once immediately
const mipdStore = /* @__PURE__ */ (()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$mipd$2f$dist$2f$esm$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])() : undefined)();
function injectedProvider(walletId) {
    const injectedProviderDetail = getInstalledWalletProviders().find((p)=>p.info.rdns === walletId);
    return injectedProviderDetail?.provider;
}
function getInstalledWallets() {
    const providers = getInstalledWalletProviders();
    const walletIds = providers.map((provider)=>provider.info.rdns);
    return walletIds.map((w)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])(w));
}
/**
 * Get Injected Provider Details for given wallet ID (rdns)
 * @internal
 */ function getMIPDStore() {
    if (!mipdStore) {
        return undefined;
    }
    return mipdStore;
}
function getInstalledWalletProviders() {
    const providers = getMIPDStore()?.getProviders() || [];
    for (const provider of providers){
        // Map io.metamask.mobile to io.metamask rdns to fix double entry issue in MetaMask mobile browser
        if (provider.info.rdns === "io.metamask.mobile") {
            provider.info.rdns = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["METAMASK"];
            break;
        }
    }
    return providers;
} //# sourceMappingURL=mipdStore.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/injected/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "autoConnectEip1193Wallet",
    ()=>autoConnectEip1193Wallet,
    "connectEip1193Wallet",
    ()=>connectEip1193Wallet,
    "getInjectedProvider",
    ()=>getInjectedProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Authorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/ox/_esm/core/Authorization.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/ox/_esm/core/Signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/viem/_esm/utils/typedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/viem/_esm/utils/promise/withTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/analytics/track/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/analytics/track/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$signatures$2f$helpers$2f$parse$2d$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/signatures/helpers/parse-typed-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$get$2d$calls$2d$status$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/eip5792/get-calls-status.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$get$2d$capabilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/eip5792/get-capabilities.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$send$2d$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/eip5792/send-calls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$chains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/utils/chains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$normalizeChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/utils/normalizeChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$injected$2f$mipdStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/injected/mipdStore.js [app-client] (ecmascript)");
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
;
;
function getInjectedProvider(walletId) {
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$injected$2f$mipdStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectedProvider"])(walletId);
    if (!provider) {
        throw new Error(`No injected provider found for wallet: "${walletId}"`);
    }
    return provider;
}
async function connectEip1193Wallet({ id, provider, emitter, client, chain }) {
    let addresses;
    const retries = 3;
    let attempts = 0;
    // retry 3 times, some providers take a while to return accounts on connect
    while(!addresses?.[0] && attempts < retries){
        try {
            addresses = await provider.request({
                method: "eth_requestAccounts"
            });
        } catch (e) {
            console.error(e);
            if (extractErrorMessage(e)?.toLowerCase()?.includes("rejected")) {
                throw e;
            }
            await new Promise((resolve)=>setTimeout(resolve, 500));
        }
        attempts++;
    }
    const addr = addresses?.[0];
    if (!addr) {
        throw new Error("Failed to connect to wallet, no accounts available");
    }
    // use the first account
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(addr);
    // get the chainId the provider is on
    const chainId = await provider.request({
        method: "eth_chainId"
    }).then(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$normalizeChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"]).catch((e)=>{
        throw new Error("Error reading chainId from provider", e);
    });
    let connectedChain = chain && chain.id === chainId ? chain : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])(chainId);
    try {
        // if we want a specific chainId and it is not the same as the provider chainId, trigger switchChain
        // we check for undefined chain ID since some chain-specific wallets like Abstract will not send a chain ID on connection
        if (chain && typeof chain.id !== "undefined" && chain.id !== chainId) {
            await switchChain(provider, chain);
            connectedChain = chain;
        }
    } catch  {
        console.warn(`Error switching to chain ${chain?.id} - defaulting to wallet chain (${chainId})`);
    }
    return onConnect({
        address,
        chain: connectedChain,
        client,
        emitter,
        id,
        provider
    });
}
async function autoConnectEip1193Wallet({ id, provider, emitter, client, chain }) {
    // connected accounts
    const addresses = await provider.request({
        method: "eth_accounts"
    });
    const addr = addresses[0];
    if (!addr) {
        throw new Error("Failed to connect to wallet, no accounts available");
    }
    // use the first account
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(addr);
    // get the chainId the provider is on
    const chainId = await provider.request({
        method: "eth_chainId"
    }).then(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$normalizeChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"]);
    const connectedChain = chain && chain.id === chainId ? chain : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])(chainId);
    return onConnect({
        address,
        chain: connectedChain,
        client,
        emitter,
        id,
        provider
    });
}
function createAccount({ provider, address, client, id }) {
    const account = {
        address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address),
        async sendTransaction (tx) {
            const gasFees = tx.gasPrice ? {
                gasPrice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numberToHex"])(tx.gasPrice)
            } : {
                maxFeePerGas: tx.maxFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numberToHex"])(tx.maxFeePerGas) : undefined,
                maxPriorityFeePerGas: tx.maxPriorityFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numberToHex"])(tx.maxPriorityFeePerGas) : undefined
            };
            const params = [
                {
                    ...gasFees,
                    from: this.address,
                    gas: tx.gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numberToHex"])(tx.gas) : undefined,
                    nonce: tx.nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numberToHex"])(tx.nonce) : undefined,
                    to: tx.to ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(tx.to) : undefined,
                    data: tx.data,
                    value: tx.value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numberToHex"])(tx.value) : undefined,
                    authorizationList: tx.authorizationList ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Authorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRpcList"](tx.authorizationList) : undefined,
                    accessList: tx.accessList,
                    ...tx.eip712
                }
            ];
            try {
                const transactionHash = await provider.request({
                    method: "eth_sendTransaction",
                    // @ts-expect-error - overriding types here
                    params
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackTransaction"])({
                    chainId: tx.chainId,
                    client,
                    contractAddress: tx.to ?? undefined,
                    gasPrice: tx.gasPrice,
                    transactionHash,
                    walletAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address),
                    walletType: id
                });
                return {
                    transactionHash
                };
            } catch (error) {
                // Track insufficient funds errors
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInsufficientFundsError"])(error)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackInsufficientFundsError"])({
                        chainId: tx.chainId,
                        client,
                        contractAddress: tx.to || undefined,
                        error,
                        transactionValue: tx.value,
                        walletAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address)
                    });
                }
                throw error;
            }
        },
        async signMessage ({ message }) {
            if (!account.address) {
                throw new Error("Provider not setup");
            }
            const messageToSign = (()=>{
                if (typeof message === "string") {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stringToHex"])(message);
                }
                if (message.raw instanceof Uint8Array) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["uint8ArrayToHex"])(message.raw);
                }
                return message.raw;
            })();
            return await provider.request({
                method: "personal_sign",
                params: [
                    messageToSign,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(account.address)
                ]
            });
        },
        async signAuthorization (authorization) {
            const payload = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Authorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSignPayload"](authorization);
            let signature;
            try {
                signature = await provider.request({
                    method: "eth_sign",
                    params: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(account.address),
                        payload
                    ]
                });
            } catch  {
                // fallback to secp256k1_sign, some providers don't support eth_sign
                signature = await provider.request({
                    // @ts-expect-error - overriding types here
                    method: "secp256k1_sign",
                    params: [
                        payload
                    ]
                });
            }
            if (!signature) {
                throw new Error("Failed to sign authorization");
            }
            const parsedSignature = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"](signature);
            return {
                ...authorization,
                ...parsedSignature
            };
        },
        async signTypedData (typedData) {
            if (!provider || !account.address) {
                throw new Error("Provider not setup");
            }
            const parsedTypedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$signatures$2f$helpers$2f$parse$2d$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseTypedData"])(typedData);
            const { domain, message, primaryType } = parsedTypedData;
            const types = {
                EIP712Domain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTypesForEIP712Domain"])({
                    domain
                }),
                ...parsedTypedData.types
            };
            // Need to do a runtime validation check on addresses, byte ranges, integer ranges, etc
            // as we can't statically check this with TypeScript.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateTypedData"])({
                domain,
                message,
                primaryType,
                types
            });
            const stringifiedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeTypedData"])({
                domain: domain ?? {},
                message,
                primaryType,
                types
            });
            return await provider.request({
                method: "eth_signTypedData_v4",
                params: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(account.address),
                    stringifiedData
                ]
            });
        },
        async watchAsset (asset) {
            const result = await provider.request({
                method: "wallet_watchAsset",
                params: asset
            }, {
                retryCount: 0
            });
            return result;
        },
        async sendCalls (options) {
            try {
                const { callParams, chain } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$send$2d$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toProviderCallParams"])(options, account);
                const callId = await provider.request({
                    method: "wallet_sendCalls",
                    params: callParams
                });
                if (callId && typeof callId === "object" && "id" in callId) {
                    return {
                        chain,
                        client,
                        id: callId.id
                    };
                }
                return {
                    chain,
                    client,
                    id: callId
                };
            } catch (error) {
                if (/unsupport|not support/i.test(error.message)) {
                    throw new Error(`${id} errored calling wallet_sendCalls, with error: ${error instanceof Error ? error.message : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(error)}`);
                }
                throw error;
            }
        },
        async getCallsStatus (options) {
            try {
                const rawResponse = await provider.request({
                    method: "wallet_getCallsStatus",
                    params: [
                        options.id
                    ]
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$get$2d$calls$2d$status$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toGetCallsStatusResponse"])(rawResponse);
            } catch (error) {
                if (/unsupport|not support/i.test(error.message)) {
                    throw new Error(`${id} does not support wallet_getCallsStatus, reach out to them directly to request EIP-5792 support.`);
                }
                throw error;
            }
        },
        async getCallsStatusRaw (options) {
            try {
                const rawResponse = await provider.request({
                    method: "wallet_getCallsStatus",
                    params: [
                        options.id
                    ]
                });
                return rawResponse;
            } catch (error) {
                if (/unsupport|not support/i.test(error.message)) {
                    throw new Error(`${id} does not support wallet_getCallsStatus, reach out to them directly to request EIP-5792 support.`);
                }
                throw error;
            }
        },
        async getCapabilities (options) {
            const chainIdFilter = options.chainId;
            try {
                const result = await provider.request({
                    method: "wallet_getCapabilities",
                    params: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(account.address),
                        chainIdFilter ? [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numberToHex"])(chainIdFilter)
                        ] : undefined
                    ]
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$get$2d$capabilities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toGetCapabilitiesResult"])(result, chainIdFilter);
            } catch (error) {
                if (/unsupport|not support|not available/i.test(error.message)) {
                    return {
                        message: `${id} does not support wallet_getCapabilities, reach out to them directly to request EIP-5792 support.`
                    };
                }
                throw error;
            }
        }
    };
    return account;
}
/**
 * Call this method when the wallet provider is connected or auto connected
 * @internal
 */ async function onConnect({ provider, address, chain, emitter, client, id }) {
    const account = createAccount({
        address,
        client,
        id,
        provider
    });
    async function disconnect() {
        provider.removeListener("accountsChanged", onAccountsChanged);
        provider.removeListener("chainChanged", onChainChanged);
        provider.removeListener("disconnect", onDisconnect);
        // Experimental support for MetaMask disconnect
        // https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-2.md
        try {
            // Adding timeout as not all wallets support this method and can hang
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withTimeout"])(()=>provider.request({
                    method: "wallet_revokePermissions",
                    params: [
                        {
                            eth_accounts: {}
                        }
                    ]
                }), {
                timeout: 100
            });
        } catch  {}
    }
    async function onDisconnect() {
        disconnect();
        emitter.emit("disconnect", undefined);
    }
    function onAccountsChanged(accounts) {
        if (accounts[0]) {
            const newAccount = createAccount({
                address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0]),
                client,
                id,
                provider
            });
            emitter.emit("accountChanged", newAccount);
            emitter.emit("accountsChanged", accounts);
        } else {
            onDisconnect();
        }
    }
    function onChainChanged(newChainId) {
        const newChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$normalizeChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"])(newChainId));
        emitter.emit("chainChanged", newChain);
    }
    if (provider.on) {
        provider.on("accountsChanged", onAccountsChanged);
        provider.on("chainChanged", onChainChanged);
        provider.on("disconnect", onDisconnect);
    }
    return [
        account,
        chain,
        onDisconnect,
        (newChain)=>switchChain(provider, newChain)
    ];
}
/**
 * @internal
 */ async function switchChain(provider, chain) {
    const hexChainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numberToHex"])(chain.id);
    try {
        await provider.request({
            method: "wallet_switchEthereumChain",
            params: [
                {
                    chainId: hexChainId
                }
            ]
        });
    } catch  {
        // if chain does not exist, add the chain
        const apiChain = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainMetadata"])(chain);
        await provider.request({
            method: "wallet_addEthereumChain",
            params: [
                {
                    blockExplorerUrls: apiChain.explorers?.map((x)=>x.url),
                    chainId: hexChainId,
                    chainName: apiChain.name,
                    nativeCurrency: apiChain.nativeCurrency,
                    rpcUrls: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$chains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValidPublicRPCUrl"])(apiChain)
                }
            ]
        });
    }
}
function extractErrorMessage(e) {
    if (e instanceof Error) {
        return e.message;
    }
    if (typeof e === "string") {
        return e;
    }
    if (typeof e === "object" && e !== null) {
        return JSON.stringify(e);
    }
    return String(e);
} //# sourceMappingURL=index.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/create-wallet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWallet",
    ()=>createWallet,
    "walletConnect",
    ()=>walletConnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/analytics/track/connect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$storage$2f$webStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/storage/webStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$web$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/web/isMobile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$web$2f$openWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/web/openWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$_$5f$generated_$5f2f$getWalletInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/getWalletInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$base$2d$account$2f$base$2d$account$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/base-account/base-account-wallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$base$2d$account$2f$base$2d$account$2d$web$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/base-account/base-account-web.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$coinbase$2f$coinbase$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/coinbase/coinbase-wallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$coinbase$2f$coinbase$2d$web$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/coinbase/coinbase-web.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$is$2d$ecosystem$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/ecosystem/is-ecosystem-wallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$web$2f$ecosystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/web/ecosystem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$web$2f$in$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/web/in-app.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$injected$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/injected/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$smart$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/smart-wallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$emitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-emitter.js [app-client] (ecmascript)");
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
;
;
;
;
;
function createWallet(...args) {
    const [id, creationOptions] = args;
    switch(true){
        /**
         * SMART WALLET
         */ case id === "smart":
            {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$smart$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartWallet"])(creationOptions);
            }
        /**
         * IN-APP WALLET
         */ case id === "embedded" || id === "inApp":
            {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$web$2f$in$2d$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inAppWallet"])(creationOptions);
            }
        /**
         * ECOSYSTEM WALLET
         */ case (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$is$2d$ecosystem$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEcosystemWallet"])(id):
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$web$2f$ecosystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ecosystemWallet"])(...args);
        /**
         * COINBASE WALLET VIA SDK
         * -> if no injected coinbase found, we'll use the coinbase SDK
         */ case id === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COINBASE"]:
            {
                const options = creationOptions;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$coinbase$2f$coinbase$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coinbaseWalletSDK"])({
                    createOptions: options,
                    onConnectRequested: async (provider)=>{
                        // on the web, make sure to show the coinbase popup IMMEDIATELY on connection requested
                        // otherwise the popup might get blocked in safari
                        // TODO awaiting the provider is fast only thanks to preloading that happens in our components
                        // these probably need to actually imported / created synchronously to be used headless properly
                        const { showCoinbasePopup } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/coinbase/utils.js [app-client] (ecmascript, async loader)");
                        return showCoinbasePopup(provider);
                    },
                    providerFactory: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$coinbase$2f$coinbase$2d$web$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoinbaseWebProvider"])(options)
                });
            }
        /**
         * BASE ACCOUNT SDK WALLET
         * -> uses the new @base-org/account SDK for Base smart wallet integration
         */ case id === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_ACCOUNT"]:
            {
                const options = creationOptions;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$base$2d$account$2f$base$2d$account$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseAccountWalletSDK"])({
                    createOptions: options,
                    providerFactory: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$base$2d$account$2f$base$2d$account$2d$web$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseAccountWebProvider"])(options)
                });
            }
        /**
         * WALLET CONNECT AND INJECTED WALLETS + walletConnect standalone
         */ default:
            {
                const emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$emitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletEmitter"])();
                let account;
                let chain;
                let unsubscribeChain;
                function reset() {
                    account = undefined;
                    chain = undefined;
                }
                let handleDisconnect = async ()=>{};
                const unsubscribeDisconnect = emitter.subscribe("disconnect", ()=>{
                    reset();
                    unsubscribeChain?.();
                    unsubscribeDisconnect();
                });
                emitter.subscribe("accountChanged", (_account)=>{
                    account = _account;
                });
                let handleSwitchChain = async ()=>{
                    throw new Error("Not implemented yet");
                };
                // on mobile, deeplink to the wallet app for session handling
                const sessionHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$web$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() ? (uri)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$web$2f$openWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openWindow"])(uri) : undefined;
                const wallet = {
                    autoConnect: async (options)=>{
                        const { injectedProvider } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/injected/mipdStore.js [app-client] (ecmascript, async loader)");
                        // injected wallet priority for autoConnect
                        if (id !== "walletConnect" && injectedProvider(id)) {
                            const { autoConnectEip1193Wallet } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/injected/index.js [app-client] (ecmascript, async loader)");
                            const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await autoConnectEip1193Wallet({
                                chain: options.chain,
                                client: options.client,
                                emitter,
                                id: id,
                                provider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$injected$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInjectedProvider"])(id)
                            });
                            // set the states
                            account = connectedAccount;
                            chain = connectedChain;
                            handleDisconnect = doDisconnect;
                            handleSwitchChain = doSwitchChain;
                            unsubscribeChain = emitter.subscribe("chainChanged", (newChain)=>{
                                chain = newChain;
                            });
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackConnect"])({
                                chainId: chain.id,
                                client: options.client,
                                walletAddress: account.address,
                                walletType: id
                            });
                            // return account
                            return account;
                        }
                        if (options && "client" in options) {
                            const { autoConnectWC } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/controller.js [app-client] (ecmascript, async loader)");
                            const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await autoConnectWC(options, emitter, wallet.id, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$storage$2f$webStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webLocalStorage"], sessionHandler);
                            // set the states
                            account = connectedAccount;
                            chain = connectedChain;
                            handleDisconnect = doDisconnect;
                            handleSwitchChain = doSwitchChain;
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackConnect"])({
                                chainId: chain.id,
                                client: options.client,
                                walletAddress: account.address,
                                walletType: id
                            });
                            // return account
                            return account;
                        }
                        throw new Error("Failed to auto connect");
                    },
                    connect: async (options)=>{
                        async function wcConnect(wcOptions) {
                            const { connectWC } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/controller.js [app-client] (ecmascript, async loader)");
                            let qrOverlay;
                            try {
                                const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await connectWC({
                                    ...wcOptions,
                                    walletConnect: {
                                        ...wcOptions.walletConnect,
                                        onDisplayUri: wcOptions.walletConnect?.onDisplayUri || (async (uri)=>{
                                            // Check if we're in a browser environment
                                            if (typeof window !== "undefined" && typeof document !== "undefined") {
                                                // on mobile, open the wallet app via deeplink
                                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$web$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])()) {
                                                    const walletInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$_$5f$generated_$5f2f$getWalletInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWalletInfo"])(id);
                                                    const mobileAppLink = walletInfo.mobile.native || walletInfo.mobile.universal;
                                                    if (mobileAppLink) {
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$web$2f$openWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openWindow"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatWalletConnectUrl"])(mobileAppLink, uri).redirect);
                                                    } else {
                                                        // on android, wc:// links show the app picker
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$web$2f$openWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openWindow"])(uri);
                                                    }
                                                    return;
                                                } else {
                                                    try {
                                                        const { createQROverlay } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/qr-overlay.js [app-client] (ecmascript, async loader)");
                                                        // Clean up any existing overlay
                                                        if (qrOverlay) {
                                                            qrOverlay.destroy();
                                                        }
                                                        // Create new QR overlay
                                                        qrOverlay = createQROverlay(uri, {
                                                            theme: wcOptions.walletConnect?.qrModalOptions?.themeMode ?? "dark",
                                                            qrSize: 280,
                                                            showCloseButton: true,
                                                            onCancel: ()=>{
                                                                wcOptions.walletConnect?.onCancel?.();
                                                            }
                                                        });
                                                    } catch (error) {
                                                        console.error("Failed to create QR overlay:", error);
                                                    }
                                                }
                                            }
                                        })
                                    }
                                }, emitter, wallet.id, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$storage$2f$webStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webLocalStorage"], sessionHandler);
                                // Clean up QR overlay on successful connection
                                if (qrOverlay) {
                                    qrOverlay.destroy();
                                    qrOverlay = undefined;
                                }
                                // set the states
                                account = connectedAccount;
                                chain = connectedChain;
                                handleDisconnect = doDisconnect;
                                handleSwitchChain = doSwitchChain;
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackConnect"])({
                                    chainId: chain.id,
                                    client: wcOptions.client,
                                    walletAddress: account.address,
                                    walletType: id
                                });
                                return account;
                            } catch (error) {
                                // Clean up QR overlay on connection error
                                if (qrOverlay) {
                                    qrOverlay.destroy();
                                    qrOverlay = undefined;
                                }
                                throw error;
                            }
                        }
                        if (id === "walletConnect") {
                            const { client, chain: _chain, ...walletConnectOptions } = options;
                            return wcConnect({
                                chain: _chain,
                                client,
                                walletConnect: {
                                    ...walletConnectOptions
                                }
                            });
                        }
                        // prefer walletconnect over injected if explicitely passing walletConnect options
                        const forceWalletConnectOption = options && "walletConnect" in options;
                        const { injectedProvider } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/injected/mipdStore.js [app-client] (ecmascript, async loader)");
                        if (injectedProvider(id) && !forceWalletConnectOption) {
                            const { connectEip1193Wallet } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/injected/index.js [app-client] (ecmascript, async loader)");
                            const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await connectEip1193Wallet({
                                chain: options.chain,
                                client: options.client,
                                emitter,
                                id: id,
                                provider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$injected$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInjectedProvider"])(id)
                            });
                            // set the states
                            account = connectedAccount;
                            chain = connectedChain;
                            handleDisconnect = doDisconnect;
                            handleSwitchChain = doSwitchChain;
                            unsubscribeChain = emitter.subscribe("chainChanged", (newChain)=>{
                                chain = newChain;
                            });
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackConnect"])({
                                chainId: chain.id,
                                client: options.client,
                                walletAddress: account.address,
                                walletType: id
                            });
                            // return account
                            return account;
                        }
                        if (options && "client" in options) {
                            return wcConnect(options);
                        }
                        throw new Error("Failed to connect");
                    },
                    // these get overridden in connect and autoConnect
                    disconnect: async ()=>{
                        reset();
                        await handleDisconnect();
                    },
                    getAccount: ()=>account,
                    getChain () {
                        if (!chain) {
                            return undefined;
                        }
                        chain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChainIfExists"])(chain.id) || chain;
                        return chain;
                    },
                    getConfig: ()=>args[1],
                    id,
                    subscribe: emitter.subscribe,
                    switchChain: async (c)=>{
                        // TODO: this should actually throw an error if the chain switch fails
                        // but our useSwitchActiveWalletChain hook currently doesn't handle this
                        try {
                            await handleSwitchChain(c);
                            chain = c;
                        } catch (e) {
                            console.error("Error switching chain", e);
                        }
                    }
                };
                return wallet;
            }
    }
}
function walletConnect() {
    return createWallet("walletConnect");
} //# sourceMappingURL=create-wallet.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/defaultWallets.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultWallets",
    ()=>getDefaultWallets,
    "getDefaultWalletsForBridgeComponents",
    ()=>getDefaultWalletsForBridgeComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/create-wallet.js [app-client] (ecmascript)");
;
;
function getDefaultWallets(options) {
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])("inApp", {
            executionMode: options?.executionMode
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["METAMASK"]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COINBASE"], {
            appMetadata: options?.appMetadata,
            chains: options?.chains
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAINBOW"]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])("io.rabby"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZERION"]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])("com.okex.wallet")
    ];
}
function getDefaultWalletsForBridgeComponents(options) {
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["METAMASK"]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COINBASE"], {
            appMetadata: options?.appMetadata,
            chains: options?.chains
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAINBOW"]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])("io.rabby"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZERION"]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$create$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])("com.okex.wallet")
    ];
} //# sourceMappingURL=defaultWallets.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/constants/settings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @internal
 */ __turbopack_context__.s([
    "AUTH_TOKEN_LOCAL_STORAGE_NAME",
    ()=>AUTH_TOKEN_LOCAL_STORAGE_NAME,
    "DEVICE_SHARE_LOCAL_STORAGE_NAME",
    ()=>DEVICE_SHARE_LOCAL_STORAGE_NAME,
    "GUEST_SESSION_LOCAL_STORAGE_NAME",
    ()=>GUEST_SESSION_LOCAL_STORAGE_NAME,
    "IN_APP_WALLET_PATH",
    ()=>IN_APP_WALLET_PATH,
    "PASSKEY_CREDENTIAL_ID_LOCAL_STORAGE_NAME",
    ()=>PASSKEY_CREDENTIAL_ID_LOCAL_STORAGE_NAME,
    "WALLET_CONNECT_SESSIONS_LOCAL_STORAGE_NAME",
    ()=>WALLET_CONNECT_SESSIONS_LOCAL_STORAGE_NAME,
    "WALLET_USER_DETAILS_LOCAL_STORAGE_NAME",
    ()=>WALLET_USER_DETAILS_LOCAL_STORAGE_NAME,
    "WALLET_USER_ID_LOCAL_STORAGE_NAME",
    ()=>WALLET_USER_ID_LOCAL_STORAGE_NAME
]);
const IN_APP_WALLET_PATH = "/sdk/2022-08-12/embedded-wallet";
const WALLET_USER_DETAILS_LOCAL_STORAGE_NAME = (key)=>`thirdwebEwsWalletUserDetails-${key}`;
const WALLET_USER_ID_LOCAL_STORAGE_NAME = (cliekeytId)=>`thirdwebEwsWalletUserId-${cliekeytId}`;
/**
 * @internal
 */ const AUTH_TOKEN_LOCAL_STORAGE_PREFIX = "walletToken";
const AUTH_TOKEN_LOCAL_STORAGE_NAME = (key)=>{
    return `${AUTH_TOKEN_LOCAL_STORAGE_PREFIX}-${key}`;
};
const PASSKEY_CREDENTIAL_ID_LOCAL_STORAGE_NAME = (key)=>{
    return `passkey-credential-id-${key}`;
};
/**
 * @internal
 */ const DEVICE_SHARE_LOCAL_STORAGE_PREFIX = "a";
const DEVICE_SHARE_LOCAL_STORAGE_NAME = (key, userId)=>`${DEVICE_SHARE_LOCAL_STORAGE_PREFIX}-${key}-${userId}`;
const WALLET_CONNECT_SESSIONS_LOCAL_STORAGE_NAME = (key)=>`walletConnectSessions-${key}`;
const GUEST_SESSION_LOCAL_STORAGE_NAME = (key)=>`thirdweb_guest_session_id_${key}`; //# sourceMappingURL=settings.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/client-scoped-storage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientScopedStorage",
    ()=>ClientScopedStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$constants$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/constants/settings.js [app-client] (ecmascript)");
;
const data = new Map();
class ClientScopedStorage {
    /**
     * @internal
     */ constructor({ storage, clientId, ecosystem }){
        Object.defineProperty(this, "key", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "storage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ecosystem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.storage = storage;
        this.key = getLocalStorageKey(clientId, ecosystem?.id);
        this.ecosystem = ecosystem;
    }
    async getItem(key) {
        if (this.storage) {
            return this.storage.getItem(key);
        }
        return data.get(key) ?? null;
    }
    async setItem(key, value) {
        if (this.storage) {
            return this.storage.setItem(key, value);
        }
        data.set(key, value);
    }
    async removeItem(key) {
        const item = await this.getItem(key);
        if (this.storage && item) {
            this.storage.removeItem(key);
            return true;
        }
        return false;
    }
    /**
     * @internal
     */ async getWalletConnectSessions() {
        return this.getItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$constants$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALLET_CONNECT_SESSIONS_LOCAL_STORAGE_NAME"])(this.key));
    }
    /**
     * @internal
     */ async saveWalletConnectSessions(stringifiedSessions) {
        await this.setItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$constants$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALLET_CONNECT_SESSIONS_LOCAL_STORAGE_NAME"])(this.key), stringifiedSessions);
    }
    /**
     * @internal
     */ async savePasskeyCredentialId(id) {
        await this.setItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$constants$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PASSKEY_CREDENTIAL_ID_LOCAL_STORAGE_NAME"])(this.key), id);
    }
    /**
     * @internal
     */ async getPasskeyCredentialId() {
        return this.getItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$constants$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PASSKEY_CREDENTIAL_ID_LOCAL_STORAGE_NAME"])(this.key));
    }
    /**
     * @internal
     */ async saveAuthCookie(cookie) {
        await this.setItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$constants$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_TOKEN_LOCAL_STORAGE_NAME"])(this.key), cookie);
    }
    /**
     * @internal
     */ async getAuthCookie() {
        return this.getItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$constants$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_TOKEN_LOCAL_STORAGE_NAME"])(this.key));
    }
    /**
     * @internal
     */ async removeAuthCookie() {
        return this.removeItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$constants$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_TOKEN_LOCAL_STORAGE_NAME"])(this.key));
    }
    /**
     * @internal
     */ async saveDeviceShare(share, userId) {
        await this.saveWalletUserId(userId);
        await this.setItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$constants$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEVICE_SHARE_LOCAL_STORAGE_NAME"])(this.key, userId), share);
    }
    /**
     * @internal
     */ async getDeviceShare() {
        const userId = await this.getWalletUserId();
        if (userId) {
            return this.getItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$constants$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEVICE_SHARE_LOCAL_STORAGE_NAME"])(this.key, userId));
        }
        return null;
    }
    /**
     * @internal
     */ async removeDeviceShare() {
        const userId = await this.getWalletUserId();
        if (userId) {
            return this.removeItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$constants$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEVICE_SHARE_LOCAL_STORAGE_NAME"])(this.key, userId));
        }
        return false;
    }
    /**
     * @internal
     */ async getWalletUserId() {
        return this.getItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$constants$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALLET_USER_ID_LOCAL_STORAGE_NAME"])(this.key));
    }
    /**
     * @internal
     */ async saveWalletUserId(userId) {
        await this.setItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$constants$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALLET_USER_ID_LOCAL_STORAGE_NAME"])(this.key), userId);
    }
    /**
     * @internal
     */ async removeWalletUserId() {
        return this.removeItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$constants$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALLET_USER_ID_LOCAL_STORAGE_NAME"])(this.key));
    }
    /**
     * @internal
     */ async getGuestSessionId() {
        return this.getItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$constants$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_SESSION_LOCAL_STORAGE_NAME"])(this.key));
    }
    /**
     * @internal
     */ async saveGuestSessionId(sessionId) {
        await this.setItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$constants$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_SESSION_LOCAL_STORAGE_NAME"])(this.key), sessionId);
    }
}
const getLocalStorageKey = (clientId, ecosystemId)=>{
    return `${clientId}${ecosystemId ? `-${ecosystemId}` : ""}`;
}; //# sourceMappingURL=client-scoped-storage.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/linkAccount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLinkedProfilesInternal",
    ()=>getLinkedProfilesInternal,
    "linkAccount",
    ()=>linkAccount,
    "unlinkAccount",
    ()=>unlinkAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/domains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/json.js [app-client] (ecmascript)");
;
;
;
async function linkAccount({ client, ecosystem, tokenToLink, storage }) {
    const clientFetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientFetch"])(client, ecosystem);
    const IN_APP_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThirdwebBaseUrl"])("inAppWallet");
    const currentAccountToken = await storage.getAuthCookie();
    if (!currentAccountToken) {
        throw new Error("Failed to link account, no user logged in");
    }
    const headers = {
        Authorization: `Bearer iaw-auth-token:${currentAccountToken}`,
        "Content-Type": "application/json"
    };
    const linkedDetailsResp = await clientFetch(`${IN_APP_URL}/api/2024-05-05/account/connect`, {
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])({
            accountAuthTokenToConnect: tokenToLink
        }),
        headers,
        method: "POST"
    });
    if (!linkedDetailsResp.ok) {
        const body = await linkedDetailsResp.json();
        throw new Error(body.message || "Failed to link account.");
    }
    const { linkedAccounts } = await linkedDetailsResp.json();
    return linkedAccounts ?? [];
}
async function unlinkAccount({ client, ecosystem, profileToUnlink, allowAccountDeletion = false, storage }) {
    const clientFetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientFetch"])(client, ecosystem);
    const IN_APP_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThirdwebBaseUrl"])("inAppWallet");
    const currentAccountToken = await storage.getAuthCookie();
    if (!currentAccountToken) {
        throw new Error("Failed to unlink account, no user logged in");
    }
    const headers = {
        Authorization: `Bearer iaw-auth-token:${currentAccountToken}`,
        "Content-Type": "application/json"
    };
    const linkedDetailsResp = await clientFetch(`${IN_APP_URL}/api/2024-05-05/account/disconnect`, {
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])({
            allowAccountDeletion,
            details: profileToUnlink.details,
            type: profileToUnlink.type
        }),
        headers,
        method: "POST"
    });
    if (!linkedDetailsResp.ok) {
        const body = await linkedDetailsResp.json();
        throw new Error(body.message || "Failed to unlink account.");
    }
    const { linkedAccounts } = await linkedDetailsResp.json();
    return linkedAccounts ?? [];
}
async function getLinkedProfilesInternal({ client, ecosystem, storage }) {
    const clientFetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientFetch"])(client, ecosystem);
    const IN_APP_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThirdwebBaseUrl"])("inAppWallet");
    const currentAccountToken = await storage.getAuthCookie();
    if (!currentAccountToken) {
        throw new Error("Failed to get linked accounts, no user logged in");
    }
    const headers = {
        Authorization: `Bearer iaw-auth-token:${currentAccountToken}`,
        "Content-Type": "application/json"
    };
    const linkedAccountsResp = await clientFetch(`${IN_APP_URL}/api/2024-05-05/accounts`, {
        headers,
        method: "GET"
    });
    if (!linkedAccountsResp.ok) {
        const body = await linkedAccountsResp.json();
        throw new Error(body.message || "Failed to get linked accounts.");
    }
    const { linkedAccounts } = await linkedAccountsResp.json();
    return linkedAccounts ?? [];
} //# sourceMappingURL=linkAccount.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authOptions",
    ()=>authOptions,
    "socialAuthOptions",
    ()=>socialAuthOptions
]);
const socialAuthOptions = [
    "google",
    "apple",
    "facebook",
    "discord",
    "line",
    "x",
    "tiktok",
    "epic",
    "coinbase",
    "farcaster",
    "telegram",
    "github",
    "twitch",
    "steam"
];
const authOptions = [
    ...socialAuthOptions,
    "guest",
    "backend",
    "email",
    "phone",
    "passkey",
    "wallet"
]; //# sourceMappingURL=types.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/calls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "predictAddress",
    ()=>predictAddress,
    "predictSmartAccountAddress",
    ()=>predictSmartAccountAddress,
    "prepareBatchExecute",
    ()=>prepareBatchExecute,
    "prepareCreateAccount",
    ()=>prepareCreateAccount,
    "prepareExecute",
    ()=>prepareExecute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/contract/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$prepare$2d$contract$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/prepare-contract-call.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/read-contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$helpers$2f$is$2d$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/helpers/is-hex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$withCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/promise/withCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/constants.js [app-client] (ecmascript)");
;
;
;
;
;
;
async function predictSmartAccountAddress(args) {
    return predictAddress({
        accountSalt: args.accountSalt,
        adminAddress: args.adminAddress,
        factoryContract: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
            address: args.factoryAddress ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ACCOUNT_FACTORY_V0_6"],
            chain: args.chain,
            client: args.client
        })
    });
}
async function predictAddress(args) {
    const { factoryContract, predictAddressOverride: predictAddress, adminAddress, accountSalt, accountAddress } = args;
    if (predictAddress) {
        return predictAddress(factoryContract, adminAddress);
    }
    if (accountAddress) {
        return accountAddress;
    }
    if (!adminAddress) {
        throw new Error("Account address is required to predict the smart wallet address.");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$withCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withCache"])(async ()=>{
        const saltHex = accountSalt && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$helpers$2f$is$2d$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(accountSalt) ? accountSalt : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stringToHex"])(accountSalt ?? "");
        let result;
        let retries = 0;
        const maxRetries = 3;
        while(retries <= maxRetries){
            try {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])({
                    contract: factoryContract,
                    method: "function getAddress(address, bytes) returns (address)",
                    params: [
                        adminAddress,
                        saltHex
                    ]
                });
                break;
            } catch (error) {
                if (retries === maxRetries) {
                    throw error;
                }
                // Exponential backoff: 2^(retries + 1) * 200ms (400ms, 800ms, 1600ms)
                const delay = 2 ** (retries + 1) * 200;
                await new Promise((resolve)=>setTimeout(resolve, delay));
                retries++;
            }
        }
        if (!result) {
            throw new Error(`No smart account address found for admin address ${adminAddress} and salt ${accountSalt}`);
        }
        return result;
    }, {
        cacheKey: `${args.factoryContract.chain.id}-${args.factoryContract.address}-${args.adminAddress}-${args.accountSalt}`,
        cacheTime: 1000 * 60 * 60 * 24
    });
}
function prepareCreateAccount(args) {
    const { adminAddress, factoryContract, createAccountOverride: createAccount, accountSalt } = args;
    if (createAccount) {
        return createAccount(factoryContract, adminAddress);
    }
    const saltHex = accountSalt && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$helpers$2f$is$2d$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(accountSalt) ? accountSalt : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stringToHex"])(accountSalt ?? "");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$prepare$2d$contract$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareContractCall"])({
        contract: factoryContract,
        method: "function createAccount(address, bytes) returns (address)",
        params: [
            adminAddress,
            saltHex
        ]
    });
}
function prepareExecute(args) {
    const { accountContract, transaction, executeOverride: execute } = args;
    if (execute) {
        return execute(accountContract, transaction);
    }
    let value = transaction.value || 0n;
    // special handling of hedera chains, decimals for native value is 8 instead of 18 when passed as contract params
    if (transaction.chainId === 295 || transaction.chainId === 296) {
        value = BigInt(value) / BigInt(10 ** 10);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$prepare$2d$contract$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareContractCall"])({
        contract: accountContract,
        // if gas is specified for the inner tx, use that and add 21k for the execute call on the account contract
        // this avoids another estimateGas call when bundling the userOp
        // and also allows for passing custom gas limits for the inner tx
        gas: transaction.gas ? transaction.gas + 21000n : undefined,
        method: "function execute(address, uint256, bytes)",
        params: [
            transaction.to || "",
            value,
            transaction.data || "0x"
        ]
    });
}
function prepareBatchExecute(args) {
    const { accountContract, transactions, executeBatchOverride: executeBatch } = args;
    if (executeBatch) {
        return executeBatch(accountContract, transactions);
    }
    let values = transactions.map((tx)=>tx.value || 0n);
    const chainId = transactions[0]?.chainId;
    // special handling of hedera chains, decimals for native value is 8 instead of 18 when passed as contract params
    if (chainId === 295 || chainId === 296) {
        values = values.map((value)=>BigInt(value) / BigInt(10 ** 10));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$prepare$2d$contract$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareContractCall"])({
        contract: accountContract,
        method: "function executeBatch(address[], uint256[], bytes[])",
        params: [
            transactions.map((tx)=>tx.to || ""),
            values,
            transactions.map((tx)=>tx.data || "0x")
        ]
    });
} //# sourceMappingURL=calls.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/packUserOp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPackedUserOperation",
    ()=>getPackedUserOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/viem/_esm/utils/data/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/viem/_esm/utils/data/pad.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
function getInitCode(unpackedUserOperation) {
    return unpackedUserOperation.factory ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        unpackedUserOperation.factory,
        unpackedUserOperation.factoryData || "0x"
    ]) : "0x";
}
function getAccountGasLimits(unpackedUserOperation) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(BigInt(unpackedUserOperation.verificationGasLimit)), {
            size: 16
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(BigInt(unpackedUserOperation.callGasLimit)), {
            size: 16
        })
    ]);
}
function getGasLimits(unpackedUserOperation) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(BigInt(unpackedUserOperation.maxPriorityFeePerGas)), {
            size: 16
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(BigInt(unpackedUserOperation.maxFeePerGas)), {
            size: 16
        })
    ]);
}
function getPaymasterAndData(unpackedUserOperation) {
    return unpackedUserOperation.paymaster ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        unpackedUserOperation.paymaster,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(BigInt(unpackedUserOperation.paymasterVerificationGasLimit || 0)), {
            size: 16
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(BigInt(unpackedUserOperation.paymasterPostOpGasLimit || 0)), {
            size: 16
        }),
        unpackedUserOperation.paymasterData || "0x"
    ]) : "0x";
}
const getPackedUserOperation = (userOperation)=>{
    return {
        accountGasLimits: getAccountGasLimits(userOperation),
        callData: userOperation.callData,
        gasFees: getGasLimits(userOperation),
        initCode: getInitCode(userOperation),
        nonce: BigInt(userOperation.nonce),
        paymasterAndData: getPaymasterAndData(userOperation),
        preVerificationGas: BigInt(userOperation.preVerificationGas),
        sender: userOperation.sender,
        signature: userOperation.signature
    };
}; //# sourceMappingURL=packUserOp.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateRandomUint192",
    ()=>generateRandomUint192,
    "hexlifyUserOp",
    ()=>hexlifyUserOp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$helpers$2f$is$2d$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/helpers/is-hex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-client] (ecmascript) <locals>");
;
const generateRandomUint192 = ()=>{
    const rand1 = BigInt(Math.floor(Math.random() * 0x100000000));
    const rand2 = BigInt(Math.floor(Math.random() * 0x100000000));
    const rand3 = BigInt(Math.floor(Math.random() * 0x100000000));
    const rand4 = BigInt(Math.floor(Math.random() * 0x100000000));
    const rand5 = BigInt(Math.floor(Math.random() * 0x100000000));
    const rand6 = BigInt(Math.floor(Math.random() * 0x100000000));
    return rand1 << BigInt(160) | rand2 << BigInt(128) | rand3 << BigInt(96) | rand4 << BigInt(64) | rand5 << BigInt(32) | rand6;
};
function hexlifyUserOp(userOp) {
    return Object.fromEntries(Object.entries(userOp).map(([key, val])=>[
            key,
            // turn any value that's not hex into hex
            val === undefined || val === null || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$helpers$2f$is$2d$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(val) ? val : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toHex"])(val)
        ]));
} //# sourceMappingURL=utils.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/paymaster.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPaymasterAndData",
    ()=>getPaymasterAndData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
;
async function getPaymasterAndData(args) {
    const { userOp, paymasterOverride, client, chain, entrypointAddress } = args;
    if (paymasterOverride) {
        return paymasterOverride(userOp);
    }
    const headers = {
        "Content-Type": "application/json"
    };
    const entrypoint = entrypointAddress ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTRYPOINT_ADDRESS_v0_6"];
    const paymasterUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultBundlerUrl"])(chain);
    const body = {
        id: 1,
        jsonrpc: "2.0",
        method: "pm_sponsorUserOperation",
        params: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlifyUserOp"])(userOp),
            entrypoint
        ]
    };
    // Ask the paymaster to sign the transaction and return a valid paymasterAndData value.
    const fetchWithHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientFetch"])(client);
    const response = await fetchWithHeaders(paymasterUrl, {
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(body),
        headers,
        method: "POST"
    });
    if (!response.ok) {
        const error = await response.text() || response.statusText;
        throw new Error(`Paymaster error: ${response.status} - ${error}`);
    }
    const res = await response.json();
    if (res.result) {
        // some paymasters return a string, some return an object with more data
        if (typeof res.result === "string") {
            return {
                paymasterAndData: res.result
            };
        }
        // check for policy errors
        if (res.result.reason) {
            console.warn(`Paymaster policy rejected this transaction with reason: ${res.result.reason} ${res.result.policyId ? `(policyId: ${res.result.policyId})` : ""}`);
        }
        return {
            callGasLimit: res.result.callGasLimit ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(res.result.callGasLimit) : undefined,
            paymaster: res.result.paymaster,
            paymasterAndData: res.result.paymasterAndData,
            paymasterData: res.result.paymasterData,
            paymasterPostOpGasLimit: res.result.paymasterPostOpGasLimit ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(res.result.paymasterPostOpGasLimit) : undefined,
            paymasterVerificationGasLimit: res.result.paymasterVerificationGasLimit ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(res.result.paymasterVerificationGasLimit) : undefined,
            preVerificationGas: res.result.preVerificationGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(res.result.preVerificationGas) : undefined,
            verificationGasLimit: res.result.verificationGasLimit ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(res.result.verificationGasLimit) : undefined
        };
    }
    const error = res.error?.message || res.error || response.statusText || "unknown error";
    throw new Error(`Paymaster error from ${paymasterUrl}: ${error}`);
} //# sourceMappingURL=paymaster.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/userop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAccountDeploying",
    ()=>clearAccountDeploying,
    "createAndSignUserOp",
    ()=>createAndSignUserOp,
    "createUnsignedUserOp",
    ()=>createUnsignedUserOp,
    "getUserOpHash",
    ()=>getUserOpHash,
    "prepareUserOp",
    ()=>prepareUserOp,
    "signUserOp",
    ()=>signUserOp,
    "waitForUserOpReceipt",
    ()=>waitForUserOpReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/ox/_esm/core/Solidity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/viem/_esm/utils/data/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/contract/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc4337$2f$_$5f$generated_$5f2f$IEntryPoint$2f$read$2f$getNonce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint/read/getNonce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc4337$2f$_$5f$generated_$5f2f$IEntryPoint$2f$read$2f$getUserOpHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint/read/getUserOpHash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc4337$2f$_$5f$generated_$5f2f$IEntryPoint_v07$2f$read$2f$getUserOpHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint_v07/read/getUserOpHash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$gas$2f$fee$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/gas/fee-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/encode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$to$2d$serializable$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/to-serializable-transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$bytecode$2f$is$2d$contract$2d$deployed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/bytecode/is-contract-deployed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$to$2d$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/to-bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$hashing$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/hashing/keccak256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$resolve$2d$promised$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/promise/resolve-promised-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/bundler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/calls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$packUserOp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/packUserOp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$paymaster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/paymaster.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/utils.js [app-client] (ecmascript)");
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
const isDeployingSet = new Set();
const getKey = (accountContract)=>{
    return `${accountContract.chain.id}:${accountContract.address}`;
};
const markAccountDeploying = (accountContract)=>{
    isDeployingSet.add(getKey(accountContract));
};
const clearAccountDeploying = (accountContract)=>{
    isDeployingSet.delete(getKey(accountContract));
};
const isAccountDeploying = (accountContract)=>{
    return isDeployingSet.has(getKey(accountContract));
};
async function waitForUserOpReceipt(args) {
    const timeout = args.timeoutMs || 120000; // 2mins
    const interval = args.intervalMs || 1000; // 1s
    const endtime = Date.now() + timeout;
    while(Date.now() < endtime){
        const userOpReceipt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserOpReceipt"])(args);
        if (userOpReceipt) {
            return userOpReceipt;
        }
        await new Promise((resolve)=>setTimeout(resolve, interval));
    }
    throw new Error(`Timeout waiting for userOp to be mined on chain ${args.chain.id} with UserOp hash: ${args.userOpHash}`);
}
async function createUnsignedUserOp(args) {
    const { transaction: executeTx, accountContract, factoryContract, adminAddress, overrides, sponsorGas, waitForDeployment = true, isDeployedOverride } = args;
    const chain = executeTx.chain;
    const client = executeTx.client;
    const bundlerOptions = {
        bundlerUrl: overrides?.bundlerUrl,
        chain,
        client,
        entrypointAddress: overrides?.entrypointAddress
    };
    const entrypointVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEntryPointVersion"])(args.overrides?.entrypointAddress || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTRYPOINT_ADDRESS_v0_6"]);
    const [isDeployed, callData, callGasLimit, gasFees, nonce] = await Promise.all([
        typeof isDeployedOverride === "boolean" ? isDeployedOverride : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$bytecode$2f$is$2d$contract$2d$deployed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContractDeployed"])(accountContract).then((isDeployed)=>isDeployed || isAccountDeploying(accountContract)),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(executeTx),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$resolve$2d$promised$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePromisedValue"])(executeTx.gas),
        getGasFees({
            bundlerOptions,
            chain,
            client,
            executeTx
        }),
        getAccountNonce({
            accountContract,
            chain,
            client,
            entrypointAddress: overrides?.entrypointAddress,
            getNonceOverride: overrides?.getAccountNonce
        })
    ]);
    const { maxFeePerGas, maxPriorityFeePerGas } = gasFees;
    if (entrypointVersion === "v0.7") {
        return populateUserOp_v0_7({
            accountContract,
            adminAddress,
            bundlerOptions,
            callData,
            callGasLimit,
            factoryContract,
            isDeployed,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            overrides,
            sponsorGas,
            waitForDeployment
        });
    }
    // default to v0.6
    return populateUserOp_v0_6({
        accountContract,
        adminAddress,
        bundlerOptions,
        callData,
        callGasLimit,
        factoryContract,
        isDeployed,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        overrides,
        sponsorGas,
        waitForDeployment
    });
}
async function getGasFees(args) {
    const { executeTx, bundlerOptions, chain, client } = args;
    let { maxFeePerGas, maxPriorityFeePerGas } = executeTx;
    const bundlerUrl = bundlerOptions?.bundlerUrl ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultBundlerUrl"])(chain);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThirdwebUrl"])(bundlerUrl)) {
        // get gas prices from bundler
        const bundlerGasPrice = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserOpGasFees"])({
            options: bundlerOptions
        });
        maxFeePerGas = bundlerGasPrice.maxFeePerGas;
        maxPriorityFeePerGas = bundlerGasPrice.maxPriorityFeePerGas;
    } else {
        // Check for explicity values
        const [resolvedMaxFeePerGas, resolvedMaxPriorityFeePerGas] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$resolve$2d$promised$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePromisedValue"])(maxFeePerGas),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$resolve$2d$promised$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePromisedValue"])(maxPriorityFeePerGas)
        ]);
        if (resolvedMaxFeePerGas && resolvedMaxPriorityFeePerGas) {
            // Save a network call if the values are provided
            maxFeePerGas = resolvedMaxFeePerGas;
            maxPriorityFeePerGas = resolvedMaxPriorityFeePerGas;
        } else {
            // Fallback to RPC gas prices if no explicit values provided
            const feeData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$gas$2f$fee$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultGasOverrides"])(client, chain);
            // Still check for explicit values in case one is provided and not the other
            maxPriorityFeePerGas = resolvedMaxPriorityFeePerGas ?? feeData.maxPriorityFeePerGas ?? 0n;
            maxFeePerGas = resolvedMaxFeePerGas ?? feeData.maxFeePerGas ?? 0n;
        }
    }
    return {
        maxFeePerGas,
        maxPriorityFeePerGas
    };
}
async function populateUserOp_v0_7(args) {
    const { bundlerOptions, isDeployed, factoryContract, accountContract, adminAddress, sponsorGas, overrides, nonce, callData, callGasLimit, maxFeePerGas, maxPriorityFeePerGas, waitForDeployment } = args;
    const { chain, client } = bundlerOptions;
    let factory;
    let factoryData;
    if (isDeployed) {
        factoryData = "0x";
        if (waitForDeployment) {
            // lock until account is deployed if needed to avoid 'sender already created' errors when sending multiple transactions in parallel
            await waitForAccountDeployed(accountContract);
        }
    } else {
        factory = factoryContract.address;
        factoryData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareCreateAccount"])({
            accountSalt: overrides?.accountSalt,
            adminAddress,
            createAccountOverride: overrides?.createAccount,
            factoryContract: factoryContract
        }));
        if (waitForDeployment) {
            markAccountDeploying(accountContract);
        }
    }
    const partialOp = {
        callData,
        callGasLimit: callGasLimit ?? 0n,
        factory,
        factoryData,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        paymaster: undefined,
        paymasterData: "0x",
        paymasterPostOpGasLimit: 0n,
        paymasterVerificationGasLimit: 0n,
        preVerificationGas: 0n,
        sender: accountContract.address,
        signature: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_SIGNATURE"],
        verificationGasLimit: 0n
    };
    if (sponsorGas) {
        const paymasterResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$paymaster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaymasterAndData"])({
            chain,
            client,
            entrypointAddress: overrides?.entrypointAddress,
            paymasterOverride: overrides?.paymaster,
            userOp: partialOp
        });
        if (paymasterResult.paymaster && paymasterResult.paymasterData) {
            partialOp.paymaster = paymasterResult.paymaster;
            partialOp.paymasterData = paymasterResult.paymasterData;
        }
        // paymaster can have the gas limits in the response
        if (paymasterResult.callGasLimit && paymasterResult.verificationGasLimit && paymasterResult.preVerificationGas && paymasterResult.paymasterPostOpGasLimit && paymasterResult.paymasterVerificationGasLimit) {
            partialOp.callGasLimit = paymasterResult.callGasLimit;
            partialOp.verificationGasLimit = paymasterResult.verificationGasLimit;
            partialOp.preVerificationGas = paymasterResult.preVerificationGas;
            partialOp.paymasterPostOpGasLimit = paymasterResult.paymasterPostOpGasLimit;
            partialOp.paymasterVerificationGasLimit = paymasterResult.paymasterVerificationGasLimit;
        } else {
            // otherwise fallback to bundler for gas limits
            const stateOverrides = overrides?.tokenPaymaster ? {
                [overrides.tokenPaymaster.tokenAddress]: {
                    stateDiff: {
                        [(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$hashing$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeAbiParameters"])([
                            {
                                type: "address"
                            },
                            {
                                type: "uint256"
                            }
                        ], [
                            accountContract.address,
                            overrides.tokenPaymaster.balanceStorageSlot
                        ]))]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxUint96"], {
                            size: 32
                        })
                    }
                }
            } : undefined;
            const estimates = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateUserOpGas"])({
                options: bundlerOptions,
                userOp: partialOp
            }, stateOverrides);
            partialOp.callGasLimit = estimates.callGasLimit;
            partialOp.verificationGasLimit = estimates.verificationGasLimit;
            partialOp.preVerificationGas = estimates.preVerificationGas;
            partialOp.paymasterPostOpGasLimit = overrides?.tokenPaymaster ? 500000n // TODO: estimate this better, needed if there's an extra swap needed in the paymaster
             : estimates.paymasterPostOpGasLimit || 0n;
            partialOp.paymasterVerificationGasLimit = estimates.paymasterVerificationGasLimit || 0n;
            // need paymaster to re-sign after estimates
            const paymasterResult2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$paymaster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaymasterAndData"])({
                chain,
                client,
                entrypointAddress: overrides?.entrypointAddress,
                paymasterOverride: overrides?.paymaster,
                userOp: partialOp
            });
            if (paymasterResult2.paymaster && paymasterResult2.paymasterData) {
                partialOp.paymaster = paymasterResult2.paymaster;
                partialOp.paymasterData = paymasterResult2.paymasterData;
            }
        }
    } else {
        // not gasless, so we just need to estimate gas limits
        const estimates = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateUserOpGas"])({
            options: bundlerOptions,
            userOp: partialOp
        });
        partialOp.callGasLimit = estimates.callGasLimit;
        partialOp.verificationGasLimit = estimates.verificationGasLimit;
        partialOp.preVerificationGas = estimates.preVerificationGas;
        partialOp.paymasterPostOpGasLimit = estimates.paymasterPostOpGasLimit || 0n;
        partialOp.paymasterVerificationGasLimit = estimates.paymasterVerificationGasLimit || 0n;
    }
    return {
        ...partialOp,
        signature: "0x"
    };
}
async function populateUserOp_v0_6(args) {
    const { bundlerOptions, isDeployed, factoryContract, accountContract, adminAddress, sponsorGas, overrides, nonce, callData, callGasLimit, maxFeePerGas, maxPriorityFeePerGas, waitForDeployment } = args;
    const { chain, client } = bundlerOptions;
    let initCode;
    if (isDeployed) {
        initCode = "0x";
        if (waitForDeployment) {
            // lock until account is deployed if needed to avoid 'sender already created' errors when sending multiple transactions in parallel
            await waitForAccountDeployed(accountContract);
        }
    } else {
        initCode = await getAccountInitCode({
            accountSalt: overrides?.accountSalt,
            adminAddress,
            createAccountOverride: overrides?.createAccount,
            factoryContract: factoryContract
        });
        if (waitForDeployment) {
            markAccountDeploying(accountContract);
        }
    }
    const partialOp = {
        callData,
        callGasLimit: callGasLimit ?? 0n,
        initCode,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        paymasterAndData: "0x",
        preVerificationGas: 0n,
        sender: accountContract.address,
        signature: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_SIGNATURE"],
        verificationGasLimit: 0n
    };
    if (sponsorGas) {
        const paymasterResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$paymaster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaymasterAndData"])({
            chain,
            client,
            entrypointAddress: overrides?.entrypointAddress,
            paymasterOverride: overrides?.paymaster,
            userOp: partialOp
        });
        const paymasterAndData = "paymasterAndData" in paymasterResult ? paymasterResult.paymasterAndData : "0x";
        if (paymasterAndData && paymasterAndData !== "0x") {
            partialOp.paymasterAndData = paymasterAndData;
        }
        // paymaster can have the gas limits in the response
        if (paymasterResult.callGasLimit && paymasterResult.verificationGasLimit && paymasterResult.preVerificationGas) {
            partialOp.callGasLimit = paymasterResult.callGasLimit;
            partialOp.verificationGasLimit = paymasterResult.verificationGasLimit;
            partialOp.preVerificationGas = paymasterResult.preVerificationGas;
        } else {
            // otherwise fallback to bundler for gas limits
            const estimates = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateUserOpGas"])({
                options: bundlerOptions,
                userOp: partialOp
            });
            partialOp.callGasLimit = estimates.callGasLimit;
            partialOp.verificationGasLimit = estimates.verificationGasLimit;
            partialOp.preVerificationGas = estimates.preVerificationGas;
            // need paymaster to re-sign after estimates
            if (paymasterAndData && paymasterAndData !== "0x") {
                const paymasterResult2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$paymaster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaymasterAndData"])({
                    chain,
                    client,
                    entrypointAddress: overrides?.entrypointAddress,
                    paymasterOverride: overrides?.paymaster,
                    userOp: partialOp
                });
                const paymasterAndData2 = "paymasterAndData" in paymasterResult2 ? paymasterResult2.paymasterAndData : "0x";
                if (paymasterAndData2 && paymasterAndData2 !== "0x") {
                    partialOp.paymasterAndData = paymasterAndData2;
                }
            }
        }
    } else {
        // not gasless, so we just need to estimate gas limits
        const estimates = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateUserOpGas"])({
            options: bundlerOptions,
            userOp: partialOp
        });
        partialOp.callGasLimit = estimates.callGasLimit;
        partialOp.verificationGasLimit = estimates.verificationGasLimit;
        partialOp.preVerificationGas = estimates.preVerificationGas;
    }
    return {
        ...partialOp,
        signature: "0x"
    };
}
async function signUserOp(args) {
    const { userOp, chain, entrypointAddress, adminAccount } = args;
    const userOpHash = await getUserOpHash({
        chain,
        client: args.client,
        entrypointAddress,
        userOp
    });
    if (adminAccount.signMessage) {
        const signature = await adminAccount.signMessage({
            chainId: chain.id,
            message: {
                raw: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$to$2d$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(userOpHash)
            },
            originalMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(userOp)
        });
        return {
            ...userOp,
            signature
        };
    }
    throw new Error("signMessage not implemented in signingAccount");
}
async function getUserOpHash(args) {
    const { userOp, chain, entrypointAddress } = args;
    const entrypointVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEntryPointVersion"])(entrypointAddress || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTRYPOINT_ADDRESS_v0_6"]);
    let userOpHash;
    if (entrypointVersion === "v0.7") {
        const packedUserOp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$packUserOp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPackedUserOperation"])(userOp);
        userOpHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc4337$2f$_$5f$generated_$5f2f$IEntryPoint_v07$2f$read$2f$getUserOpHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserOpHash"])({
            contract: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
                address: entrypointAddress || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTRYPOINT_ADDRESS_v0_7"],
                chain,
                client: args.client
            }),
            userOp: packedUserOp
        });
    } else {
        userOpHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc4337$2f$_$5f$generated_$5f2f$IEntryPoint$2f$read$2f$getUserOpHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserOpHash"])({
            contract: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
                address: entrypointAddress || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTRYPOINT_ADDRESS_v0_6"],
                chain,
                client: args.client
            }),
            userOp: userOp
        });
    }
    return userOpHash;
}
async function getAccountInitCode(options) {
    const { factoryContract, adminAddress, accountSalt, createAccountOverride } = options;
    const deployTx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareCreateAccount"])({
        accountSalt,
        adminAddress,
        createAccountOverride,
        factoryContract
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        factoryContract.address,
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(deployTx)
    ]);
}
async function getAccountNonce(options) {
    const { accountContract, chain, client, entrypointAddress, getNonceOverride } = options;
    if (getNonceOverride) {
        return getNonceOverride(accountContract);
    }
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc4337$2f$_$5f$generated_$5f2f$IEntryPoint$2f$read$2f$getNonce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNonce"])({
        contract: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
            address: entrypointAddress || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTRYPOINT_ADDRESS_v0_6"],
            chain,
            client
        }),
        key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateRandomUint192"])(),
        sender: accountContract.address
    });
}
async function createAndSignUserOp(options) {
    // if factory is passed, but no entrypoint, try to resolve entrypoint from factory
    if (options.smartWalletOptions.factoryAddress && !options.smartWalletOptions.overrides?.entrypointAddress) {
        const entrypointAddress = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntrypointFromFactory"])(options.smartWalletOptions.factoryAddress, options.client, options.smartWalletOptions.chain);
        if (entrypointAddress) {
            options.smartWalletOptions.overrides = {
                ...options.smartWalletOptions.overrides,
                entrypointAddress
            };
        }
    }
    const unsignedUserOp = await prepareUserOp({
        adminAccount: options.adminAccount,
        client: options.client,
        isDeployedOverride: options.isDeployedOverride,
        smartWalletOptions: options.smartWalletOptions,
        transactions: options.transactions,
        waitForDeployment: options.waitForDeployment
    });
    const signedUserOp = await signUserOp({
        adminAccount: options.adminAccount,
        chain: options.smartWalletOptions.chain,
        client: options.client,
        entrypointAddress: options.smartWalletOptions.overrides?.entrypointAddress,
        userOp: unsignedUserOp
    });
    return signedUserOp;
}
async function prepareUserOp(options) {
    const config = options.smartWalletOptions;
    const factoryContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
        address: config.factoryAddress || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultAccountFactory"])(config.overrides?.entrypointAddress),
        chain: config.chain,
        client: options.client
    });
    const accountAddress = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["predictAddress"])({
        accountAddress: config.overrides?.accountAddress,
        accountSalt: config.overrides?.accountSalt,
        adminAddress: options.adminAccount.address,
        factoryContract,
        predictAddressOverride: config.overrides?.predictAddress
    });
    const accountContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
        address: accountAddress,
        chain: config.chain,
        client: options.client
    });
    let executeTx;
    if (options.transactions.length === 1) {
        const tx = options.transactions[0];
        // for single tx, simulate fully
        const serializedTx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$to$2d$serializable$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toSerializableTransaction"])({
            from: accountAddress,
            transaction: tx
        });
        executeTx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareExecute"])({
            accountContract,
            executeOverride: config.overrides?.execute,
            transaction: serializedTx
        });
    } else {
        // for multiple txs, we can't simulate, just encode
        const serializedTxs = await Promise.all(options.transactions.map(async (tx)=>{
            const [data, to, value] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(tx),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$resolve$2d$promised$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePromisedValue"])(tx.to),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$resolve$2d$promised$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePromisedValue"])(tx.value)
            ]);
            return {
                chainId: tx.chain.id,
                data,
                to,
                value
            };
        }));
        executeTx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareBatchExecute"])({
            accountContract,
            executeBatchOverride: config.overrides?.executeBatch,
            transactions: serializedTxs
        });
    }
    return createUnsignedUserOp({
        accountContract,
        adminAddress: options.adminAccount.address,
        factoryContract,
        isDeployedOverride: options.isDeployedOverride,
        overrides: config.overrides,
        sponsorGas: "sponsorGas" in config ? config.sponsorGas : config.gasless,
        transaction: executeTx,
        waitForDeployment: options.waitForDeployment
    });
}
async function waitForAccountDeployed(accountContract) {
    const startTime = Date.now();
    while(isAccountDeploying(accountContract)){
        if (Date.now() - startTime > 60000) {
            clearAccountDeploying(accountContract); // clear the flag so it doesnt stay stuck in this state
            throw new Error("Account deployment is taking too long (over 1 minute). Please try again.");
        }
        await new Promise((resolve)=>setTimeout(resolve, 500));
    }
} //# sourceMappingURL=userop.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectSmartAccount",
    ()=>connectSmartAccount,
    "disconnectSmartAccount",
    ()=>disconnectSmartAccount,
    "getEntrypointFromFactory",
    ()=>getEntrypointFromFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/analytics/track/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/analytics/track/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/contract/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc20$2f$_$5f$generated_$5f2f$IERC20$2f$read$2f$allowance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IERC20/read/allowance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc20$2f$write$2f$approve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/extensions/erc20/write/approve.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc4337$2f$account$2f$addSessionKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/extensions/erc4337/account/addSessionKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$send$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/send-transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$to$2d$serializable$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/to-serializable-transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$zksync$2f$send$2d$eip712$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/zksync/send-eip712-transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/read-contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$any$2d$evm$2f$zksync$2f$isZkSyncChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/any-evm/zksync/isZkSyncChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$resolve$2d$promised$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/promise/resolve-promised-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$signatures$2f$helpers$2f$parse$2d$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/signatures/helpers/parse-typed-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/bundler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/calls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$userop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/userop.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
/**
 * For in-app wallets, the smart wallet creation is implicit so we track these to be able to retrieve the personal account for a smart account on the wallet API.
 * Note: We have to go account to account here and NOT wallet to account because the smart wallet itself is never exposed to the in-app wallet, only the account.
 * @internal
 */ const adminAccountToSmartAccountMap = new WeakMap();
const smartAccountToAdminAccountMap = new WeakMap();
async function connectSmartAccount(connectionOptions, creationOptions) {
    const { personalAccount, client } = connectionOptions;
    if (!personalAccount) {
        throw new Error("No personal account provided for smart account connection");
    }
    const options = creationOptions;
    const chain = creationOptions.chain;
    const sponsorGas = "gasless" in options ? options.gasless : options.sponsorGas;
    if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$any$2d$evm$2f$zksync$2f$isZkSyncChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isZkSyncChain"])(chain)) {
        return [
            createZkSyncAccount({
                chain,
                connectionOptions,
                creationOptions,
                sponsorGas
            }),
            chain
        ];
    }
    // if factory is passed, but no entrypoint, try to resolve entrypoint from factory
    if (options.factoryAddress && !options.overrides?.entrypointAddress) {
        const entrypointAddress = await getEntrypointFromFactory(options.factoryAddress, client, chain);
        if (entrypointAddress) {
            options.overrides = {
                ...options.overrides,
                entrypointAddress
            };
        }
    }
    if (options.overrides?.tokenPaymaster && !options.overrides?.entrypointAddress) {
        // if token paymaster is set, but no entrypoint address, set the entrypoint address to v0.7
        options.overrides = {
            ...options.overrides,
            entrypointAddress: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTRYPOINT_ADDRESS_v0_7"]
        };
    }
    const factoryAddress = options.factoryAddress ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultAccountFactory"])(options.overrides?.entrypointAddress);
    const factoryContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
        address: factoryAddress,
        chain: chain,
        client: client
    });
    const accountAddress = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["predictAddress"])({
        accountAddress: options.overrides?.accountAddress,
        accountSalt: options.overrides?.accountSalt,
        adminAddress: personalAccount.address,
        factoryContract,
        predictAddressOverride: options.overrides?.predictAddress
    }).then((address)=>address).catch((err)=>{
        throw new Error(`Failed to get account address with factory contract ${factoryContract.address} on chain ID ${chain.id}: ${err?.message || "unknown error"}`, {
            cause: err
        });
    });
    const accountContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
        address: accountAddress,
        chain,
        client
    });
    const account = await createSmartAccount({
        ...options,
        accountContract,
        chain,
        client,
        factoryContract,
        personalAccount,
        sponsorGas
    });
    adminAccountToSmartAccountMap.set(personalAccount, account);
    smartAccountToAdminAccountMap.set(account, personalAccount);
    if (options.sessionKey) {
        if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc4337$2f$account$2f$addSessionKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUpdateSessionKey"])({
            accountContract,
            newPermissions: options.sessionKey.permissions,
            sessionKeyAddress: options.sessionKey.address
        })) {
            const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc4337$2f$account$2f$addSessionKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addSessionKey"])({
                account: personalAccount,
                contract: accountContract,
                permissions: options.sessionKey.permissions,
                sessionKeyAddress: options.sessionKey.address
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$send$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])({
                account: account,
                transaction
            });
        }
    }
    return [
        account,
        chain
    ];
}
async function disconnectSmartAccount(account) {
    // look up the personalAccount for the smart wallet
    const personalAccount = smartAccountToAdminAccountMap.get(account);
    if (personalAccount) {
        // remove the mappings
        adminAccountToSmartAccountMap.delete(personalAccount);
        smartAccountToAdminAccountMap.delete(account);
    }
}
async function createSmartAccount(options) {
    const erc20Paymaster = options.overrides?.tokenPaymaster;
    if (erc20Paymaster) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEntryPointVersion"])(options.overrides?.entrypointAddress || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTRYPOINT_ADDRESS_v0_6"]) !== "v0.7") {
            throw new Error("Token paymaster is only supported for entrypoint version v0.7");
        }
    }
    const sponsorGas = options.sponsorGas;
    let accountContract = options.accountContract;
    const account = {
        address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accountContract.address),
        async onTransactionRequested (transaction) {
            return options.personalAccount.onTransactionRequested?.(transaction);
        },
        async sendBatchTransaction (transactions) {
            const executeTx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareBatchExecute"])({
                accountContract,
                executeBatchOverride: options.overrides?.executeBatch,
                transactions
            });
            if (transactions.length === 0) {
                throw new Error("No transactions to send");
            }
            const firstTx = transactions[0];
            if (!firstTx) {
                throw new Error("No transactions to send");
            }
            const chain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])(firstTx.chainId);
            const result = await _sendUserOp({
                executeTx,
                options: {
                    ...options,
                    accountContract,
                    chain
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackTransaction"])({
                chainId: chain.id,
                client: options.client,
                contractAddress: transactions[0]?.to ?? undefined,
                transactionHash: result.transactionHash,
                walletAddress: options.accountContract.address,
                walletType: "smart"
            });
            return result;
        },
        async sendTransaction (transaction) {
            // if erc20 paymaster - check allowance and approve if needed
            let paymasterOverride;
            if (erc20Paymaster) {
                await approveERC20({
                    accountContract,
                    erc20Paymaster,
                    options
                });
                const paymasterCallback = async ()=>{
                    return {
                        paymaster: erc20Paymaster.paymasterAddress,
                        paymasterData: "0x"
                    };
                };
                paymasterOverride = options.overrides?.paymaster || paymasterCallback;
            } else {
                paymasterOverride = options.overrides?.paymaster;
            }
            // If this transaction is for a different chain than the initial one, get the account contract for that chain
            if (transaction.chainId !== accountContract.chain.id) {
                accountContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
                    address: account.address,
                    chain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])(transaction.chainId),
                    client: options.client
                });
            }
            const executeTx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareExecute"])({
                accountContract: accountContract,
                executeOverride: options.overrides?.execute,
                transaction
            });
            const chain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])(transaction.chainId);
            const result = await _sendUserOp({
                executeTx,
                options: {
                    ...options,
                    accountContract,
                    chain,
                    overrides: {
                        ...options.overrides,
                        paymaster: paymasterOverride
                    }
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackTransaction"])({
                chainId: chain.id,
                client: options.client,
                contractAddress: transaction.to ?? undefined,
                transactionHash: result.transactionHash,
                walletAddress: options.accountContract.address,
                walletType: "smart"
            });
            return result;
        },
        async signMessage ({ message }) {
            if (options.overrides?.signMessage) {
                return options.overrides.signMessage({
                    accountContract,
                    adminAccount: options.personalAccount,
                    factoryContract: options.factoryContract,
                    message
                });
            }
            const { smartAccountSignMessage } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/signing.js [app-client] (ecmascript, async loader)");
            return smartAccountSignMessage({
                accountContract,
                factoryContract: options.factoryContract,
                message,
                options
            });
        },
        async signTypedData (typedData) {
            if (options.overrides?.signTypedData) {
                return options.overrides.signTypedData({
                    accountContract,
                    adminAccount: options.personalAccount,
                    factoryContract: options.factoryContract,
                    typedData
                });
            }
            const { smartAccountSignTypedData } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/signing.js [app-client] (ecmascript, async loader)");
            return smartAccountSignTypedData({
                accountContract,
                factoryContract: options.factoryContract,
                options,
                typedData
            });
        },
        sendCalls: async (options)=>{
            const { inAppWalletSendCalls } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/eip5792/in-app-wallet-calls.js [app-client] (ecmascript, async loader)");
            const firstCall = options.calls[0];
            if (!firstCall) {
                throw new Error("No calls to send");
            }
            const client = firstCall.client;
            const chain = firstCall.chain || options.chain;
            const id = await inAppWalletSendCalls({
                account: account,
                calls: options.calls,
                chain
            });
            return {
                chain,
                client,
                id
            };
        },
        getCallsStatus: async (options)=>{
            const { inAppWalletGetCallsStatus } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/eip5792/in-app-wallet-calls.js [app-client] (ecmascript, async loader)");
            return inAppWalletGetCallsStatus(options);
        },
        getCallsStatusRaw: async (options)=>{
            const { inAppWalletGetCallsStatusRaw } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/eip5792/in-app-wallet-calls.js [app-client] (ecmascript, async loader)");
            return inAppWalletGetCallsStatusRaw(options);
        },
        getCapabilities: async (options)=>{
            return {
                [options.chainId ?? 1]: {
                    atomic: {
                        status: "supported"
                    },
                    paymasterService: {
                        supported: sponsorGas ?? false
                    }
                }
            };
        }
    };
    return account;
}
async function approveERC20(args) {
    const { accountContract, erc20Paymaster, options } = args;
    const tokenAddress = erc20Paymaster.tokenAddress;
    const tokenContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
        address: tokenAddress,
        chain: accountContract.chain,
        client: accountContract.client
    });
    const accountAllowance = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc20$2f$_$5f$generated_$5f2f$IERC20$2f$read$2f$allowance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowance"])({
        contract: tokenContract,
        owner: accountContract.address,
        spender: erc20Paymaster.paymasterAddress
    });
    if (accountAllowance > 0n) {
        return;
    }
    const approveTx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc20$2f$write$2f$approve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["approve"])({
        amountWei: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxUint96"] - 1n,
        contract: tokenContract,
        spender: erc20Paymaster.paymasterAddress
    });
    const transaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$to$2d$serializable$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toSerializableTransaction"])({
        from: accountContract.address,
        transaction: approveTx
    });
    const executeTx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareExecute"])({
        accountContract,
        executeOverride: options.overrides?.execute,
        transaction
    });
    await _sendUserOp({
        executeTx,
        options: {
            ...options,
            overrides: {
                ...options.overrides,
                tokenPaymaster: undefined
            }
        }
    });
}
function createZkSyncAccount(args) {
    const { creationOptions, connectionOptions, chain } = args;
    const account = {
        address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(connectionOptions.personalAccount.address),
        async onTransactionRequested (transaction) {
            return connectionOptions.personalAccount.onTransactionRequested?.(transaction);
        },
        async sendTransaction (transaction) {
            // override passed tx, we have to refetch gas and fees always
            const prepTx = {
                chain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])(transaction.chainId),
                client: connectionOptions.client,
                data: transaction.data,
                eip712: transaction.eip712,
                to: transaction.to ?? undefined,
                value: transaction.value ?? 0n
            };
            let serializableTransaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$zksync$2f$send$2d$eip712$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["populateEip712Transaction"])({
                account,
                transaction: prepTx
            });
            if (args.sponsorGas && !serializableTransaction.paymaster) {
                // get paymaster input
                const pmData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getZkPaymasterData"])({
                    options: {
                        bundlerUrl: creationOptions.overrides?.bundlerUrl,
                        chain,
                        client: connectionOptions.client,
                        entrypointAddress: creationOptions.overrides?.entrypointAddress
                    },
                    transaction: serializableTransaction
                });
                serializableTransaction = {
                    ...serializableTransaction,
                    ...pmData
                };
            }
            // sign
            const signedTransaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$zksync$2f$send$2d$eip712$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signEip712Transaction"])({
                account,
                chainId: chain.id,
                eip712Transaction: serializableTransaction
            });
            // broadcast via bundler
            const txHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["broadcastZkTransaction"])({
                options: {
                    bundlerUrl: creationOptions.overrides?.bundlerUrl,
                    chain,
                    client: connectionOptions.client,
                    entrypointAddress: creationOptions.overrides?.entrypointAddress
                },
                signedTransaction,
                transaction: serializableTransaction
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackTransaction"])({
                chainId: chain.id,
                client: connectionOptions.client,
                contractAddress: transaction.to ?? undefined,
                transactionHash: txHash.transactionHash,
                walletAddress: account.address,
                walletType: "smart"
            });
            return {
                chain: chain,
                client: connectionOptions.client,
                transactionHash: txHash.transactionHash
            };
        },
        async signMessage ({ message }) {
            return connectionOptions.personalAccount.signMessage({
                message
            });
        },
        async signTypedData (_typedData) {
            const typedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$signatures$2f$helpers$2f$parse$2d$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseTypedData"])(_typedData);
            return connectionOptions.personalAccount.signTypedData(typedData);
        },
        sendCalls: async (options)=>{
            const { inAppWalletSendCalls } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/eip5792/in-app-wallet-calls.js [app-client] (ecmascript, async loader)");
            const firstCall = options.calls[0];
            if (!firstCall) {
                throw new Error("No calls to send");
            }
            const client = firstCall.client;
            const chain = firstCall.chain || options.chain;
            const id = await inAppWalletSendCalls({
                account: account,
                calls: options.calls,
                chain
            });
            return {
                chain,
                client,
                id
            };
        },
        getCallsStatus: async (options)=>{
            const { inAppWalletGetCallsStatus } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/eip5792/in-app-wallet-calls.js [app-client] (ecmascript, async loader)");
            return inAppWalletGetCallsStatus(options);
        },
        getCallsStatusRaw: async (options)=>{
            const { inAppWalletGetCallsStatusRaw } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/eip5792/in-app-wallet-calls.js [app-client] (ecmascript, async loader)");
            return inAppWalletGetCallsStatusRaw(options);
        },
        getCapabilities: async (options)=>{
            return {
                [options.chainId ?? 1]: {
                    atomic: {
                        status: "unsupported"
                    },
                    paymasterService: {
                        supported: args.sponsorGas ?? false
                    }
                }
            };
        }
    };
    return account;
}
async function _sendUserOp(args) {
    const { executeTx, options } = args;
    try {
        const unsignedUserOp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$userop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUnsignedUserOp"])({
            accountContract: options.accountContract,
            adminAddress: options.personalAccount.address,
            factoryContract: options.factoryContract,
            overrides: options.overrides,
            sponsorGas: options.sponsorGas,
            transaction: executeTx
        });
        const signedUserOp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$userop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signUserOp"])({
            adminAccount: options.personalAccount,
            chain: options.chain,
            client: options.client,
            entrypointAddress: options.overrides?.entrypointAddress,
            userOp: unsignedUserOp
        });
        const bundlerOptions = {
            bundlerUrl: options.overrides?.bundlerUrl,
            chain: options.chain,
            client: options.client,
            entrypointAddress: options.overrides?.entrypointAddress
        };
        const userOpHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bundleUserOp"])({
            options: bundlerOptions,
            userOp: signedUserOp
        });
        // wait for tx receipt rather than return the userOp hash
        const receipt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$userop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForUserOpReceipt"])({
            ...bundlerOptions,
            userOpHash
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackTransaction"])({
            chainId: options.chain.id,
            client: options.client,
            contractAddress: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$resolve$2d$promised$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePromisedValue"])(executeTx.to ?? undefined),
            transactionHash: receipt.transactionHash,
            walletAddress: options.accountContract.address,
            walletType: "smart"
        });
        return {
            chain: options.chain,
            client: options.client,
            transactionHash: receipt.transactionHash
        };
    } catch (error) {
        // Track insufficient funds errors
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInsufficientFundsError"])(error)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackInsufficientFundsError"])({
                chainId: options.chain.id,
                client: options.client,
                contractAddress: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$resolve$2d$promised$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePromisedValue"])(executeTx.to ?? undefined),
                error,
                transactionValue: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$resolve$2d$promised$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePromisedValue"])(executeTx.value),
                walletAddress: options.accountContract.address
            });
        }
        throw error;
    } finally{
        // reset the isDeploying flag after every transaction or error
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$userop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAccountDeploying"])(options.accountContract);
    }
}
async function getEntrypointFromFactory(factoryAddress, client, chain) {
    const factoryContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
        address: factoryAddress,
        chain,
        client
    });
    try {
        const entrypointAddress = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])({
            contract: factoryContract,
            method: "function entrypoint() public view returns (address)"
        });
        return entrypointAddress;
    } catch  {
        return undefined;
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatUserOperationReceipt",
    ()=>formatUserOperationReceipt
]);
function formatUserOperationReceipt(userOpReceiptRaw) {
    const { receipt: transactionReceipt } = userOpReceiptRaw;
    const receipt = {
        ...transactionReceipt,
        blockNumber: transactionReceipt.blockNumber ? BigInt(transactionReceipt.blockNumber) : null,
        contractAddress: transactionReceipt.contractAddress ? transactionReceipt.contractAddress : null,
        cumulativeGasUsed: transactionReceipt.cumulativeGasUsed ? BigInt(transactionReceipt.cumulativeGasUsed) : null,
        effectiveGasPrice: transactionReceipt.effectiveGasPrice ? BigInt(transactionReceipt.effectiveGasPrice) : null,
        gasUsed: transactionReceipt.gasUsed ? BigInt(transactionReceipt.gasUsed) : null,
        logs: transactionReceipt.logs,
        status: transactionReceipt.status,
        to: transactionReceipt.to ? transactionReceipt.to : null,
        transactionHash: transactionReceipt.transactionHash,
        transactionIndex: transactionReceipt.transactionIndex,
        type: transactionReceipt.type
    };
    if (transactionReceipt.blobGasPrice) receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
    if (transactionReceipt.blobGasUsed) receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
    const userOpReceipt = {
        ...userOpReceiptRaw,
        actualGasCost: BigInt(userOpReceiptRaw.actualGasCost),
        actualGasUsed: BigInt(userOpReceiptRaw.actualGasUsed),
        nonce: BigInt(userOpReceiptRaw.nonce),
        receipt,
        userOpHash: userOpReceiptRaw.userOpHash
    };
    return userOpReceipt;
} //# sourceMappingURL=types.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/bundler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "broadcastZkTransaction",
    ()=>broadcastZkTransaction,
    "bundleUserOp",
    ()=>bundleUserOp,
    "estimateUserOpGas",
    ()=>estimateUserOpGas,
    "estimateUserOpGasCost",
    ()=>estimateUserOpGasCost,
    "executeWithSignature",
    ()=>executeWithSignature,
    "getQueuedTransactionHash",
    ()=>getQueuedTransactionHash,
    "getUserOpGasFees",
    ()=>getUserOpGasFees,
    "getUserOpReceipt",
    ()=>getUserOpReceipt,
    "getUserOpReceiptRaw",
    ()=>getUserOpReceiptRaw,
    "getZkPaymasterData",
    ()=>getZkPaymasterData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/decodeErrorResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/contract/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$event$2f$actions$2f$parse$2d$logs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/event/actions/parse-logs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc4337$2f$_$5f$generated_$5f2f$IEntryPoint$2f$events$2f$UserOperationRevertReason$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint/events/UserOperationRevertReason.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc4337$2f$_$5f$generated_$5f2f$IEntryPoint_v07$2f$events$2f$PostOpRevertReason$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint_v07/events/PostOpRevertReason.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$bytecode$2f$is$2d$contract$2d$deployed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/bytecode/is-contract-deployed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/units.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/calls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$userop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/userop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/utils.js [app-client] (ecmascript)");
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
;
;
;
async function bundleUserOp(args) {
    return sendBundlerRequest({
        ...args,
        operation: "eth_sendUserOperation",
        params: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlifyUserOp"])(args.userOp),
            args.options.entrypointAddress ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTRYPOINT_ADDRESS_v0_6"]
        ]
    });
}
async function estimateUserOpGas(args, stateOverrides) {
    const res = await sendBundlerRequest({
        ...args,
        operation: "eth_estimateUserOperationGas",
        params: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlifyUserOp"])(args.userOp),
            args.options.entrypointAddress ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTRYPOINT_ADDRESS_v0_6"],
            stateOverrides ?? {}
        ]
    });
    // add gas buffer for managed account factory delegate calls
    return {
        callGasLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(res.callGasLimit) + __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANAGED_ACCOUNT_GAS_BUFFER"],
        paymasterPostOpGasLimit: res.paymasterPostOpGasLimit !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(res.paymasterPostOpGasLimit) : undefined,
        paymasterVerificationGasLimit: res.paymasterVerificationGasLimit !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(res.paymasterVerificationGasLimit) : undefined,
        preVerificationGas: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(res.preVerificationGas),
        verificationGas: res.verificationGas !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(res.verificationGas) : undefined,
        verificationGasLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(res.verificationGasLimit)
    };
}
async function estimateUserOpGasCost(args) {
    // if factory is passed, but no entrypoint, try to resolve entrypoint from factory
    if (args.smartWalletOptions.factoryAddress && !args.smartWalletOptions.overrides?.entrypointAddress) {
        const entrypointAddress = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntrypointFromFactory"])(args.smartWalletOptions.factoryAddress, args.client, args.smartWalletOptions.chain);
        if (entrypointAddress) {
            args.smartWalletOptions.overrides = {
                ...args.smartWalletOptions.overrides,
                entrypointAddress
            };
        }
    }
    const userOp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$userop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareUserOp"])({
        adminAccount: args.adminAccount,
        client: args.client,
        isDeployedOverride: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$bytecode$2f$is$2d$contract$2d$deployed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContractDeployed"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
            address: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["predictSmartAccountAddress"])({
                adminAddress: args.adminAccount.address,
                chain: args.smartWalletOptions.chain,
                client: args.client,
                factoryAddress: args.smartWalletOptions.factoryAddress
            }),
            chain: args.smartWalletOptions.chain,
            client: args.client
        })),
        smartWalletOptions: args.smartWalletOptions,
        transactions: args.transactions,
        waitForDeployment: false
    });
    let gasLimit = 0n;
    if ("paymasterVerificationGasLimit" in userOp) {
        // v0.7
        gasLimit = BigInt(userOp.paymasterVerificationGasLimit ?? 0) + BigInt(userOp.paymasterPostOpGasLimit ?? 0) + BigInt(userOp.verificationGasLimit ?? 0) + BigInt(userOp.preVerificationGas ?? 0) + BigInt(userOp.callGasLimit ?? 0);
    } else {
        // v0.6
        gasLimit = BigInt(userOp.verificationGasLimit ?? 0) + BigInt(userOp.preVerificationGas ?? 0) + BigInt(userOp.callGasLimit ?? 0);
    }
    const gasCost = gasLimit * (userOp.maxFeePerGas ?? 0n);
    return {
        ether: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toEther"])(gasCost),
        wei: gasCost
    };
}
async function getUserOpGasFees(args) {
    const res = await sendBundlerRequest({
        ...args,
        operation: "thirdweb_getUserOperationGasPrice",
        params: []
    });
    return {
        maxFeePerGas: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(res.maxFeePerGas),
        maxPriorityFeePerGas: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(res.maxPriorityFeePerGas)
    };
}
async function getUserOpReceipt(args) {
    const res = await getUserOpReceiptRaw(args);
    if (!res) {
        return undefined;
    }
    if (res.success === false) {
        // parse revert reason
        const logs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$event$2f$actions$2f$parse$2d$logs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseEventLogs"])({
            events: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc4337$2f$_$5f$generated_$5f2f$IEntryPoint$2f$events$2f$UserOperationRevertReason$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userOperationRevertReasonEvent"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc4337$2f$_$5f$generated_$5f2f$IEntryPoint_v07$2f$events$2f$PostOpRevertReason$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postOpRevertReasonEvent"])()
            ],
            logs: res.logs
        });
        const revertReason = logs[0]?.args?.revertReason;
        if (!revertReason) {
            throw new Error(`UserOp failed at txHash: ${res.receipt.transactionHash}`);
        }
        const revertMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeErrorResult"])({
            data: revertReason
        });
        throw new Error(`UserOp failed with reason: '${revertMsg.args.join(",")}' at txHash: ${res.receipt.transactionHash}`);
    }
    return res.receipt;
}
async function getUserOpReceiptRaw(args) {
    const res = await sendBundlerRequest({
        operation: "eth_getUserOperationReceipt",
        options: args,
        params: [
            args.userOpHash
        ]
    });
    if (!res) {
        return undefined;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUserOperationReceipt"])(res);
}
async function getZkPaymasterData(args) {
    const res = await sendBundlerRequest({
        operation: "zk_paymasterData",
        options: args.options,
        params: [
            args.transaction
        ]
    });
    return {
        paymaster: res.paymaster,
        paymasterInput: res.paymasterInput
    };
}
async function executeWithSignature(args) {
    const res = await sendBundlerRequest({
        ...args,
        operation: "tw_execute",
        params: [
            args.eoaAddress,
            args.wrappedCalls,
            args.signature,
            args.authorization
        ]
    });
    if (!res.queueId) {
        throw new Error(`Error executing 7702 transaction: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(res)}`);
    }
    return {
        transactionId: res.queueId
    };
}
async function getQueuedTransactionHash(args) {
    const res = await sendBundlerRequest({
        ...args,
        operation: "tw_getTransactionHash",
        params: [
            args.transactionId
        ]
    });
    return {
        transactionHash: res.transactionHash
    };
}
async function broadcastZkTransaction(args) {
    const res = await sendBundlerRequest({
        operation: "zk_broadcastTransaction",
        options: args.options,
        params: [
            {
                ...args.transaction,
                signedTransaction: args.signedTransaction
            }
        ]
    });
    return {
        transactionHash: res.transactionHash
    };
}
async function sendBundlerRequest(args) {
    const { options, operation, params } = args;
    const bundlerUrl = options.bundlerUrl ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultBundlerUrl"])(options.chain);
    const fetchWithHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientFetch"])(options.client);
    const response = await fetchWithHeaders(bundlerUrl, {
        useAuthToken: true,
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])({
            id: 1,
            jsonrpc: "2.0",
            method: operation,
            params
        }),
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
    });
    const res = await response.json();
    if (!response.ok || res.error) {
        let error = res.error || response.statusText;
        if (typeof error === "object") {
            error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(error);
        }
        const code = res.code || "UNKNOWN";
        throw new Error(`${operation} error: ${error}
Status: ${response.status}
Code: ${code}`);
    }
    return res.result;
} //# sourceMappingURL=bundler.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/eip7702/minimal-account.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create7702MinimalAccount",
    ()=>create7702MinimalAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$actions$2f$get$2d$bytecode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/contract/actions/get-bytecode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/contract/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc7702$2f$_$5f$generated_$5f2f$MinimalAccount$2f$write$2f$execute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/extensions/erc7702/__generated__/MinimalAccount/write/execute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$to$2d$serializable$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/to-serializable-transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$withCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/promise/withCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/bundler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/constants.js [app-client] (ecmascript)");
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
/**
 * Fetches the delegation contract address from the bundler using the tw_getDelegationContract RPC method
 * @internal
 */ async function getDelegationContractAddress(args) {
    const { client, chain, bundlerUrl } = args;
    const url = bundlerUrl ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultBundlerUrl"])(chain);
    // Create a cache key based on the bundler URL to ensure we cache per chain/bundler
    const cacheKey = `delegation-contract:${url}`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$withCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withCache"])(async ()=>{
        const fetchWithHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientFetch"])(client);
        const response = await fetchWithHeaders(url, {
            useAuthToken: true,
            body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])({
                id: 1,
                jsonrpc: "2.0",
                method: "tw_getDelegationContract",
                params: []
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch delegation contract: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        if (result.error) {
            throw new Error(`Delegation contract RPC error: ${JSON.stringify(result.error)}`);
        }
        if (!result.result?.delegationContract) {
            throw new Error("Invalid response: missing delegationContract in result");
        }
        return result.result.delegationContract;
    }, {
        cacheKey,
        cacheTime: 24 * 60 * 60 * 1000
    });
}
const create7702MinimalAccount = (args)=>{
    const { client, adminAccount, sponsorGas } = args;
    const _sendTxWithAuthorization = async (txs)=>{
        const firstTx = txs[0];
        if (!firstTx) {
            throw new Error("No transactions provided");
        }
        const chain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])(firstTx.chainId);
        const eoaContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
            address: adminAccount.address,
            chain,
            client,
            abi: MinimalAccountAbi
        });
        // check if account has been delegated already
        let authorization = firstTx.authorizationList?.[0];
        const delegationContractAddress = await getDelegationContractAddress({
            client,
            chain
        });
        if (authorization && authorization.address?.toLowerCase() !== delegationContractAddress.toLowerCase()) {
            throw new Error(`Authorization address does not match expected delegation contract address. Expected ${delegationContractAddress} but got ${authorization.address}`);
        }
        // if the tx already has an authorization, use it, otherwise sign one
        if (!authorization) {
            const isMinimalAccount = await is7702MinimalAccount(eoaContract, delegationContractAddress);
            if (!isMinimalAccount) {
                // if not, sign authorization
                let nonce = firstTx.nonce ? BigInt(firstTx.nonce) : BigInt(await getNonce({
                    client,
                    address: adminAccount.address,
                    chain
                }));
                nonce += sponsorGas ? 0n : 1n;
                const auth = await adminAccount.signAuthorization?.({
                    address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(delegationContractAddress),
                    chainId: firstTx.chainId,
                    nonce
                });
                if (!auth) {
                    throw new Error("Failed to sign authorization");
                }
                authorization = auth;
            }
        }
        if (sponsorGas) {
            // send transaction from executor, needs signature
            const wrappedCalls = {
                calls: txs.map((tx)=>({
                        data: tx.data ?? "0x",
                        target: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(tx.to ?? ""),
                        value: tx.value ?? 0n
                    })),
                uid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytesHex"])()
            };
            const signature = await adminAccount.signTypedData({
                domain: {
                    chainId: firstTx.chainId,
                    name: "MinimalAccount",
                    verifyingContract: eoaContract.address,
                    version: "1"
                },
                message: wrappedCalls,
                primaryType: "WrappedCalls",
                types: {
                    Call: [
                        {
                            name: "target",
                            type: "address"
                        },
                        {
                            name: "value",
                            type: "uint256"
                        },
                        {
                            name: "data",
                            type: "bytes"
                        }
                    ],
                    WrappedCalls: [
                        {
                            name: "calls",
                            type: "Call[]"
                        },
                        {
                            name: "uid",
                            type: "bytes32"
                        }
                    ]
                }
            });
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeWithSignature"])({
                authorization,
                eoaAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(adminAccount.address),
                options: {
                    chain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])(firstTx.chainId),
                    client
                },
                signature,
                wrappedCalls
            });
            const transactionHash = await waitForTransactionHash({
                options: {
                    chain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])(firstTx.chainId),
                    client
                },
                transactionId: result.transactionId
            });
            return {
                transactionHash
            };
        }
        // send transaction from EOA
        // wrap txs in a single execute call to the MinimalAccount
        const executeTx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc7702$2f$_$5f$generated_$5f2f$MinimalAccount$2f$write$2f$execute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execute"])({
            calls: txs.map((tx)=>({
                    data: tx.data ?? "0x",
                    target: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(tx.to ?? ""),
                    value: tx.value ?? 0n
                })),
            contract: eoaContract,
            overrides: {
                authorizationList: authorization ? [
                    authorization
                ] : undefined,
                value: txs.reduce((acc, tx)=>acc + (tx.value ?? 0n), 0n)
            }
        });
        // re-estimate gas for the entire batch + authorization
        const serializedTx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$to$2d$serializable$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toSerializableTransaction"])({
            from: adminAccount.address,
            transaction: executeTx
        });
        return adminAccount.sendTransaction(serializedTx);
    };
    const minimalAccount = {
        address: adminAccount.address,
        sendBatchTransaction: async (txs)=>{
            return _sendTxWithAuthorization(txs);
        },
        sendTransaction: async (tx)=>{
            return _sendTxWithAuthorization([
                tx
            ]);
        },
        signMessage: ({ message, originalMessage, chainId })=>adminAccount.signMessage({
                chainId,
                message,
                originalMessage
            }),
        signTypedData: (_typedData)=>adminAccount.signTypedData(_typedData),
        sendCalls: async (options)=>{
            const { inAppWalletSendCalls } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/eip5792/in-app-wallet-calls.js [app-client] (ecmascript, async loader)");
            const firstCall = options.calls[0];
            if (!firstCall) {
                throw new Error("No calls to send");
            }
            const client = firstCall.client;
            const chain = firstCall.chain || options.chain;
            const id = await inAppWalletSendCalls({
                account: minimalAccount,
                calls: options.calls,
                chain
            });
            return {
                chain,
                client,
                id
            };
        },
        getCallsStatus: async (options)=>{
            const { inAppWalletGetCallsStatus } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/eip5792/in-app-wallet-calls.js [app-client] (ecmascript, async loader)");
            return inAppWalletGetCallsStatus(options);
        },
        getCallsStatusRaw: async (options)=>{
            const { inAppWalletGetCallsStatusRaw } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/eip5792/in-app-wallet-calls.js [app-client] (ecmascript, async loader)");
            return inAppWalletGetCallsStatusRaw(options);
        },
        getCapabilities: async (options)=>{
            return {
                [options.chainId ?? 1]: {
                    atomic: {
                        status: "supported"
                    },
                    paymasterService: {
                        supported: sponsorGas ?? false
                    }
                }
            };
        }
    };
    return minimalAccount;
};
async function getNonce(args) {
    const { client, address, chain } = args;
    const rpcRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRpcClient"])({
        chain,
        client
    });
    const nonce = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/actions/eth_getTransactionCount.js [app-client] (ecmascript, async loader)").then(({ eth_getTransactionCount })=>eth_getTransactionCount(rpcRequest, {
            address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address),
            blockTag: "pending"
        }));
    return nonce;
}
async function is7702MinimalAccount(// biome-ignore lint/suspicious/noExplicitAny: TODO properly type tw contract
eoaContract, delegationContractAddress) {
    const code = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$actions$2f$get$2d$bytecode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytecode"])(eoaContract);
    const isDelegated = code.length > 0 && code.startsWith("0xef0100");
    const target = `0x${code.slice(8, 48)}`;
    return isDelegated && target.toLowerCase() === delegationContractAddress.toLowerCase();
}
async function waitForTransactionHash(args) {
    const timeout = args.timeoutMs || 300000; // 5mins
    const interval = args.intervalMs || 1000; // 1s
    const endtime = Date.now() + timeout;
    while(Date.now() < endtime){
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getQueuedTransactionHash"])({
            options: args.options,
            transactionId: args.transactionId
        });
        if (result.transactionHash) {
            return result.transactionHash;
        }
        await new Promise((resolve)=>setTimeout(resolve, interval));
    }
    throw new Error(`Timeout waiting for transaction to be mined on chain ${args.options.chain.id} with transactionId: ${args.transactionId}`);
}
const MinimalAccountAbi = [
    {
        type: "receive",
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "createSessionWithSig",
        inputs: [
            {
                name: "sessionSpec",
                type: "tuple",
                internalType: "struct SessionLib.SessionSpec",
                components: [
                    {
                        name: "signer",
                        type: "address",
                        internalType: "address"
                    },
                    {
                        name: "isWildcard",
                        type: "bool",
                        internalType: "bool"
                    },
                    {
                        name: "expiresAt",
                        type: "uint256",
                        internalType: "uint256"
                    },
                    {
                        name: "callPolicies",
                        type: "tuple[]",
                        internalType: "struct SessionLib.CallSpec[]",
                        components: [
                            {
                                name: "target",
                                type: "address",
                                internalType: "address"
                            },
                            {
                                name: "selector",
                                type: "bytes4",
                                internalType: "bytes4"
                            },
                            {
                                name: "maxValuePerUse",
                                type: "uint256",
                                internalType: "uint256"
                            },
                            {
                                name: "valueLimit",
                                type: "tuple",
                                internalType: "struct SessionLib.UsageLimit",
                                components: [
                                    {
                                        name: "limitType",
                                        type: "uint8",
                                        internalType: "enum SessionLib.LimitType"
                                    },
                                    {
                                        name: "limit",
                                        type: "uint256",
                                        internalType: "uint256"
                                    },
                                    {
                                        name: "period",
                                        type: "uint256",
                                        internalType: "uint256"
                                    }
                                ]
                            },
                            {
                                name: "constraints",
                                type: "tuple[]",
                                internalType: "struct SessionLib.Constraint[]",
                                components: [
                                    {
                                        name: "condition",
                                        type: "uint8",
                                        internalType: "enum SessionLib.Condition"
                                    },
                                    {
                                        name: "index",
                                        type: "uint64",
                                        internalType: "uint64"
                                    },
                                    {
                                        name: "refValue",
                                        type: "bytes32",
                                        internalType: "bytes32"
                                    },
                                    {
                                        name: "limit",
                                        type: "tuple",
                                        internalType: "struct SessionLib.UsageLimit",
                                        components: [
                                            {
                                                name: "limitType",
                                                type: "uint8",
                                                internalType: "enum SessionLib.LimitType"
                                            },
                                            {
                                                name: "limit",
                                                type: "uint256",
                                                internalType: "uint256"
                                            },
                                            {
                                                name: "period",
                                                type: "uint256",
                                                internalType: "uint256"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "transferPolicies",
                        type: "tuple[]",
                        internalType: "struct SessionLib.TransferSpec[]",
                        components: [
                            {
                                name: "target",
                                type: "address",
                                internalType: "address"
                            },
                            {
                                name: "maxValuePerUse",
                                type: "uint256",
                                internalType: "uint256"
                            },
                            {
                                name: "valueLimit",
                                type: "tuple",
                                internalType: "struct SessionLib.UsageLimit",
                                components: [
                                    {
                                        name: "limitType",
                                        type: "uint8",
                                        internalType: "enum SessionLib.LimitType"
                                    },
                                    {
                                        name: "limit",
                                        type: "uint256",
                                        internalType: "uint256"
                                    },
                                    {
                                        name: "period",
                                        type: "uint256",
                                        internalType: "uint256"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "uid",
                        type: "bytes32",
                        internalType: "bytes32"
                    }
                ]
            },
            {
                name: "signature",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "eip712Domain",
        inputs: [],
        outputs: [
            {
                name: "fields",
                type: "bytes1",
                internalType: "bytes1"
            },
            {
                name: "name",
                type: "string",
                internalType: "string"
            },
            {
                name: "version",
                type: "string",
                internalType: "string"
            },
            {
                name: "chainId",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "verifyingContract",
                type: "address",
                internalType: "address"
            },
            {
                name: "salt",
                type: "bytes32",
                internalType: "bytes32"
            },
            {
                name: "extensions",
                type: "uint256[]",
                internalType: "uint256[]"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "execute",
        inputs: [
            {
                name: "calls",
                type: "tuple[]",
                internalType: "struct Call[]",
                components: [
                    {
                        name: "target",
                        type: "address",
                        internalType: "address"
                    },
                    {
                        name: "value",
                        type: "uint256",
                        internalType: "uint256"
                    },
                    {
                        name: "data",
                        type: "bytes",
                        internalType: "bytes"
                    }
                ]
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "executeWithSig",
        inputs: [
            {
                name: "wrappedCalls",
                type: "tuple",
                internalType: "struct WrappedCalls",
                components: [
                    {
                        name: "calls",
                        type: "tuple[]",
                        internalType: "struct Call[]",
                        components: [
                            {
                                name: "target",
                                type: "address",
                                internalType: "address"
                            },
                            {
                                name: "value",
                                type: "uint256",
                                internalType: "uint256"
                            },
                            {
                                name: "data",
                                type: "bytes",
                                internalType: "bytes"
                            }
                        ]
                    },
                    {
                        name: "uid",
                        type: "bytes32",
                        internalType: "bytes32"
                    }
                ]
            },
            {
                name: "signature",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "getCallPoliciesForSigner",
        inputs: [
            {
                name: "signer",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "tuple[]",
                internalType: "struct SessionLib.CallSpec[]",
                components: [
                    {
                        name: "target",
                        type: "address",
                        internalType: "address"
                    },
                    {
                        name: "selector",
                        type: "bytes4",
                        internalType: "bytes4"
                    },
                    {
                        name: "maxValuePerUse",
                        type: "uint256",
                        internalType: "uint256"
                    },
                    {
                        name: "valueLimit",
                        type: "tuple",
                        internalType: "struct SessionLib.UsageLimit",
                        components: [
                            {
                                name: "limitType",
                                type: "uint8",
                                internalType: "enum SessionLib.LimitType"
                            },
                            {
                                name: "limit",
                                type: "uint256",
                                internalType: "uint256"
                            },
                            {
                                name: "period",
                                type: "uint256",
                                internalType: "uint256"
                            }
                        ]
                    },
                    {
                        name: "constraints",
                        type: "tuple[]",
                        internalType: "struct SessionLib.Constraint[]",
                        components: [
                            {
                                name: "condition",
                                type: "uint8",
                                internalType: "enum SessionLib.Condition"
                            },
                            {
                                name: "index",
                                type: "uint64",
                                internalType: "uint64"
                            },
                            {
                                name: "refValue",
                                type: "bytes32",
                                internalType: "bytes32"
                            },
                            {
                                name: "limit",
                                type: "tuple",
                                internalType: "struct SessionLib.UsageLimit",
                                components: [
                                    {
                                        name: "limitType",
                                        type: "uint8",
                                        internalType: "enum SessionLib.LimitType"
                                    },
                                    {
                                        name: "limit",
                                        type: "uint256",
                                        internalType: "uint256"
                                    },
                                    {
                                        name: "period",
                                        type: "uint256",
                                        internalType: "uint256"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "getSessionExpirationForSigner",
        inputs: [
            {
                name: "signer",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "getSessionStateForSigner",
        inputs: [
            {
                name: "signer",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct SessionLib.SessionState",
                components: [
                    {
                        name: "transferValue",
                        type: "tuple[]",
                        internalType: "struct SessionLib.LimitState[]",
                        components: [
                            {
                                name: "remaining",
                                type: "uint256",
                                internalType: "uint256"
                            },
                            {
                                name: "target",
                                type: "address",
                                internalType: "address"
                            },
                            {
                                name: "selector",
                                type: "bytes4",
                                internalType: "bytes4"
                            },
                            {
                                name: "index",
                                type: "uint256",
                                internalType: "uint256"
                            }
                        ]
                    },
                    {
                        name: "callValue",
                        type: "tuple[]",
                        internalType: "struct SessionLib.LimitState[]",
                        components: [
                            {
                                name: "remaining",
                                type: "uint256",
                                internalType: "uint256"
                            },
                            {
                                name: "target",
                                type: "address",
                                internalType: "address"
                            },
                            {
                                name: "selector",
                                type: "bytes4",
                                internalType: "bytes4"
                            },
                            {
                                name: "index",
                                type: "uint256",
                                internalType: "uint256"
                            }
                        ]
                    },
                    {
                        name: "callParams",
                        type: "tuple[]",
                        internalType: "struct SessionLib.LimitState[]",
                        components: [
                            {
                                name: "remaining",
                                type: "uint256",
                                internalType: "uint256"
                            },
                            {
                                name: "target",
                                type: "address",
                                internalType: "address"
                            },
                            {
                                name: "selector",
                                type: "bytes4",
                                internalType: "bytes4"
                            },
                            {
                                name: "index",
                                type: "uint256",
                                internalType: "uint256"
                            }
                        ]
                    }
                ]
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "getTransferPoliciesForSigner",
        inputs: [
            {
                name: "signer",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "tuple[]",
                internalType: "struct SessionLib.TransferSpec[]",
                components: [
                    {
                        name: "target",
                        type: "address",
                        internalType: "address"
                    },
                    {
                        name: "maxValuePerUse",
                        type: "uint256",
                        internalType: "uint256"
                    },
                    {
                        name: "valueLimit",
                        type: "tuple",
                        internalType: "struct SessionLib.UsageLimit",
                        components: [
                            {
                                name: "limitType",
                                type: "uint8",
                                internalType: "enum SessionLib.LimitType"
                            },
                            {
                                name: "limit",
                                type: "uint256",
                                internalType: "uint256"
                            },
                            {
                                name: "period",
                                type: "uint256",
                                internalType: "uint256"
                            }
                        ]
                    }
                ]
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "isWildcardSigner",
        inputs: [
            {
                name: "signer",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "onERC1155BatchReceived",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            },
            {
                name: "",
                type: "address",
                internalType: "address"
            },
            {
                name: "",
                type: "uint256[]",
                internalType: "uint256[]"
            },
            {
                name: "",
                type: "uint256[]",
                internalType: "uint256[]"
            },
            {
                name: "",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bytes4",
                internalType: "bytes4"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "onERC1155Received",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            },
            {
                name: "",
                type: "address",
                internalType: "address"
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bytes4",
                internalType: "bytes4"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "onERC721Received",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            },
            {
                name: "",
                type: "address",
                internalType: "address"
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bytes4",
                internalType: "bytes4"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "supportsInterface",
        inputs: [
            {
                name: "interfaceId",
                type: "bytes4",
                internalType: "bytes4"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "event",
        name: "Executed",
        inputs: [
            {
                name: "to",
                type: "address",
                indexed: true,
                internalType: "address"
            },
            {
                name: "value",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            },
            {
                name: "data",
                type: "bytes",
                indexed: false,
                internalType: "bytes"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "SessionCreated",
        inputs: [
            {
                name: "signer",
                type: "address",
                indexed: true,
                internalType: "address"
            },
            {
                name: "sessionSpec",
                type: "tuple",
                indexed: false,
                internalType: "struct SessionLib.SessionSpec",
                components: [
                    {
                        name: "signer",
                        type: "address",
                        internalType: "address"
                    },
                    {
                        name: "isWildcard",
                        type: "bool",
                        internalType: "bool"
                    },
                    {
                        name: "expiresAt",
                        type: "uint256",
                        internalType: "uint256"
                    },
                    {
                        name: "callPolicies",
                        type: "tuple[]",
                        internalType: "struct SessionLib.CallSpec[]",
                        components: [
                            {
                                name: "target",
                                type: "address",
                                internalType: "address"
                            },
                            {
                                name: "selector",
                                type: "bytes4",
                                internalType: "bytes4"
                            },
                            {
                                name: "maxValuePerUse",
                                type: "uint256",
                                internalType: "uint256"
                            },
                            {
                                name: "valueLimit",
                                type: "tuple",
                                internalType: "struct SessionLib.UsageLimit",
                                components: [
                                    {
                                        name: "limitType",
                                        type: "uint8",
                                        internalType: "enum SessionLib.LimitType"
                                    },
                                    {
                                        name: "limit",
                                        type: "uint256",
                                        internalType: "uint256"
                                    },
                                    {
                                        name: "period",
                                        type: "uint256",
                                        internalType: "uint256"
                                    }
                                ]
                            },
                            {
                                name: "constraints",
                                type: "tuple[]",
                                internalType: "struct SessionLib.Constraint[]",
                                components: [
                                    {
                                        name: "condition",
                                        type: "uint8",
                                        internalType: "enum SessionLib.Condition"
                                    },
                                    {
                                        name: "index",
                                        type: "uint64",
                                        internalType: "uint64"
                                    },
                                    {
                                        name: "refValue",
                                        type: "bytes32",
                                        internalType: "bytes32"
                                    },
                                    {
                                        name: "limit",
                                        type: "tuple",
                                        internalType: "struct SessionLib.UsageLimit",
                                        components: [
                                            {
                                                name: "limitType",
                                                type: "uint8",
                                                internalType: "enum SessionLib.LimitType"
                                            },
                                            {
                                                name: "limit",
                                                type: "uint256",
                                                internalType: "uint256"
                                            },
                                            {
                                                name: "period",
                                                type: "uint256",
                                                internalType: "uint256"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "transferPolicies",
                        type: "tuple[]",
                        internalType: "struct SessionLib.TransferSpec[]",
                        components: [
                            {
                                name: "target",
                                type: "address",
                                internalType: "address"
                            },
                            {
                                name: "maxValuePerUse",
                                type: "uint256",
                                internalType: "uint256"
                            },
                            {
                                name: "valueLimit",
                                type: "tuple",
                                internalType: "struct SessionLib.UsageLimit",
                                components: [
                                    {
                                        name: "limitType",
                                        type: "uint8",
                                        internalType: "enum SessionLib.LimitType"
                                    },
                                    {
                                        name: "limit",
                                        type: "uint256",
                                        internalType: "uint256"
                                    },
                                    {
                                        name: "period",
                                        type: "uint256",
                                        internalType: "uint256"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "uid",
                        type: "bytes32",
                        internalType: "bytes32"
                    }
                ]
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "ValueReceived",
        inputs: [
            {
                name: "from",
                type: "address",
                indexed: true,
                internalType: "address"
            },
            {
                name: "value",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            }
        ],
        anonymous: false
    },
    {
        type: "error",
        name: "AllowanceExceeded",
        inputs: [
            {
                name: "allowanceUsage",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "limit",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "period",
                type: "uint64",
                internalType: "uint64"
            }
        ]
    },
    {
        type: "error",
        name: "CallPolicyViolated",
        inputs: [
            {
                name: "target",
                type: "address",
                internalType: "address"
            },
            {
                name: "selector",
                type: "bytes4",
                internalType: "bytes4"
            }
        ]
    },
    {
        type: "error",
        name: "CallReverted",
        inputs: []
    },
    {
        type: "error",
        name: "ConditionFailed",
        inputs: [
            {
                name: "param",
                type: "bytes32",
                internalType: "bytes32"
            },
            {
                name: "refValue",
                type: "bytes32",
                internalType: "bytes32"
            },
            {
                name: "condition",
                type: "uint8",
                internalType: "uint8"
            }
        ]
    },
    {
        type: "error",
        name: "InvalidDataLength",
        inputs: [
            {
                name: "actualLength",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "expectedLength",
                type: "uint256",
                internalType: "uint256"
            }
        ]
    },
    {
        type: "error",
        name: "InvalidSignature",
        inputs: [
            {
                name: "msgSender",
                type: "address",
                internalType: "address"
            },
            {
                name: "thisAddress",
                type: "address",
                internalType: "address"
            }
        ]
    },
    {
        type: "error",
        name: "LifetimeUsageExceeded",
        inputs: [
            {
                name: "lifetimeUsage",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "limit",
                type: "uint256",
                internalType: "uint256"
            }
        ]
    },
    {
        type: "error",
        name: "MaxValueExceeded",
        inputs: [
            {
                name: "value",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "maxValuePerUse",
                type: "uint256",
                internalType: "uint256"
            }
        ]
    },
    {
        type: "error",
        name: "NoCallsToExecute",
        inputs: []
    },
    {
        type: "error",
        name: "SessionExpired",
        inputs: []
    },
    {
        type: "error",
        name: "SessionExpiresTooSoon",
        inputs: []
    },
    {
        type: "error",
        name: "SessionZeroSigner",
        inputs: []
    },
    {
        type: "error",
        name: "TransferPolicyViolated",
        inputs: [
            {
                name: "target",
                type: "address",
                internalType: "address"
            }
        ]
    },
    {
        type: "error",
        name: "UIDAlreadyProcessed",
        inputs: []
    }
]; //# sourceMappingURL=minimal-account.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "autoConnectInAppWallet",
    ()=>autoConnectInAppWallet,
    "connectInAppWallet",
    ()=>connectInAppWallet,
    "isInAppWallet",
    ()=>isInAppWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$ethereum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/chain-definitions/ethereum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$eip7702$2f$minimal$2d$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/eip7702/minimal-account.js [app-client] (ecmascript)");
;
;
;
function isInAppWallet(wallet) {
    return wallet.id === "inApp" || wallet.id === "embedded";
}
async function connectInAppWallet(options, createOptions, connector) {
    if (// if auth mode is not specified, the default is popup
    createOptions?.auth?.mode !== "popup" && createOptions?.auth?.mode !== undefined && connector.authenticateWithRedirect) {
        const strategy = options.strategy;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socialAuthOptions"].includes(strategy)) {
            await connector.authenticateWithRedirect(strategy, createOptions?.auth?.mode, createOptions?.auth?.redirectUrl);
        }
    }
    // If we don't have authenticateWithRedirect then it's likely react native, so the default is to redirect and we can carry on
    // IF WE EVER ADD MORE CONNECTOR TYPES, this could cause redirect to be ignored despite being specified
    // TODO: In V6, make everything redirect auth
    const authResult = await connector.connect(options);
    const authAccount = authResult.user.account;
    return createInAppAccount({
        authAccount,
        client: options.client,
        createOptions,
        desiredChain: options.chain
    });
}
async function autoConnectInAppWallet(options, createOptions, connector) {
    if (options.authResult && connector.loginWithAuthToken) {
        await connector.loginWithAuthToken(options.authResult);
    }
    const user = await getAuthenticatedUser(connector);
    if (!user) {
        throw new Error("Failed to authenticate user.");
    }
    const authAccount = user.account;
    return createInAppAccount({
        authAccount,
        client: options.client,
        createOptions,
        desiredChain: options.chain
    });
}
async function convertToSmartAccount(options) {
    const { connectSmartAccount } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/index.js [app-client] (ecmascript, async loader)");
    return connectSmartAccount({
        chain: options.chain,
        client: options.client,
        personalAccount: options.authAccount
    }, options.smartAccountOptions);
}
async function getAuthenticatedUser(connector) {
    const user = await connector.getUser();
    switch(user.status){
        case "Logged In, Wallet Initialized":
            {
                return user;
            }
    }
    return undefined;
}
async function createInAppAccount(options) {
    const { createOptions, authAccount, desiredChain, client } = options;
    let smartAccountOptions;
    let eip7702;
    const executionMode = createOptions && "executionMode" in createOptions ? createOptions.executionMode : undefined;
    if (executionMode) {
        if (executionMode.mode === "EIP4337") {
            smartAccountOptions = executionMode.smartAccount;
        } else if (executionMode.mode === "EIP7702") {
            eip7702 = executionMode;
        }
    }
    // backwards compatibility
    if (createOptions && "smartAccount" in createOptions && createOptions?.smartAccount) {
        smartAccountOptions = createOptions.smartAccount;
    }
    if (smartAccountOptions) {
        const [account, chain] = await convertToSmartAccount({
            authAccount,
            chain: desiredChain,
            client,
            smartAccountOptions
        });
        return {
            account,
            adminAccount: authAccount,
            chain
        };
    }
    if (eip7702) {
        const chain = desiredChain;
        if (!chain) {
            throw new Error("Chain is required for EIP-7702 execution, pass a chain when connecting the inAppWallet.");
        }
        const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$eip7702$2f$minimal$2d$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create7702MinimalAccount"])({
            adminAccount: authAccount,
            client,
            sponsorGas: eip7702.sponsorGas
        });
        return {
            account,
            adminAccount: authAccount,
            chain
        };
    }
    return {
        account: authAccount,
        chain: desiredChain || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$ethereum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ethereum"]
    };
} //# sourceMappingURL=index.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/is-in-app-signer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isInAppSigner",
    ()=>isInAppSigner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$is$2d$ecosystem$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/ecosystem/is-ecosystem-wallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$is$2d$smart$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/is-smart-wallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$wallet$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/index.js [app-client] (ecmascript)");
;
;
;
function isInAppSigner(options) {
    const isInAppOrEcosystem = (w)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$wallet$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInAppWallet"])(w) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$is$2d$ecosystem$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEcosystemWallet"])(w);
    const isSmartWalletWithAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$is$2d$smart$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSmartWallet"])(options.wallet) && options.connectedWallets.some((w)=>isInAppOrEcosystem(w) && w.getAccount()?.address?.toLowerCase() === options.wallet.getAdminAccount?.()?.address?.toLowerCase());
    return isInAppOrEcosystem(options.wallet) || isSmartWalletWithAdmin;
} //# sourceMappingURL=is-in-app-signer.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/get-url-token.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks for an auth token and associated metadata in the current URL
 */ __turbopack_context__.s([
    "getUrlToken",
    ()=>getUrlToken
]);
function getUrlToken() {
    if (typeof document === "undefined") {
        // Not in web
        return undefined;
    }
    // Read params from the standard query string
    const params = new URLSearchParams(window.location.search);
    // Also check for params embedded inside the hash fragment (e.g. #/route?walletId=...)
    // This supports hash-routed apps where params may be placed after the hash path
    let hashParams;
    const hash = window.location.hash || "";
    let cleanHash = hash;
    const hashQueryIndex = hash.indexOf("?");
    if (hashQueryIndex !== -1) {
        hashParams = new URLSearchParams(hash.substring(hashQueryIndex));
        cleanHash = hash.substring(0, hashQueryIndex);
    }
    const walletId = params.get("walletId") ?? hashParams?.get("walletId") ?? undefined;
    const authResultString = params.get("authResult") ?? hashParams?.get("authResult") ?? undefined;
    const authProvider = params.get("authProvider") ?? hashParams?.get("authProvider") ?? undefined;
    const authCookie = params.get("authCookie") ?? hashParams?.get("authCookie") ?? undefined;
    const authFlow = params.get("authFlow") ?? hashParams?.get("authFlow") ?? undefined;
    if ((authCookie || authResultString) && walletId) {
        const authResult = (()=>{
            if (authResultString) {
                params.delete("authResult");
                hashParams?.delete("authResult");
                return JSON.parse(decodeURIComponent(authResultString));
            }
        })();
        params.delete("walletId");
        params.delete("authProvider");
        params.delete("authCookie");
        params.delete("authFlow");
        hashParams?.delete("walletId");
        hashParams?.delete("authProvider");
        hashParams?.delete("authCookie");
        hashParams?.delete("authFlow");
        const remainingSearch = params.toString();
        const searchString = remainingSearch ? `?${remainingSearch}` : "";
        // Reconstruct hash, preserving the hash path and any remaining non-auth params
        let hashString = cleanHash;
        if (hashParams) {
            const remainingHashParams = hashParams.toString();
            if (remainingHashParams) {
                hashString = `${cleanHash}?${remainingHashParams}`;
            }
        }
        window.history.pushState({}, "", `${window.location.pathname}${searchString}${hashString}`);
        return {
            authCookie,
            authFlow,
            authProvider,
            authResult,
            walletId
        };
    }
    return undefined;
} //# sourceMappingURL=get-url-token.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/connection/autoConnectCore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "autoConnectCore",
    ()=>autoConnectCore,
    "handleWalletConnection",
    ()=>handleWalletConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$timeoutPromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/timeoutPromise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$is$2d$ecosystem$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/ecosystem/is-ecosystem-wallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$authentication$2f$client$2d$scoped$2d$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/client-scoped-storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$authentication$2f$linkAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/linkAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$wallet$2f$is$2d$in$2d$app$2d$signer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/is-in-app-signer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$web$2f$lib$2f$get$2d$url$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/get-url-token.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$manager$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/manager/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
let lastAutoConnectionResultPromise;
const autoConnectCore = async (props)=>{
    // if an auto connect was attempted already
    if (lastAutoConnectionResultPromise && !props.force) {
        // wait for its resolution
        const lastResult = await lastAutoConnectionResultPromise;
        // if it was successful, return true
        // if not continue with the new auto connect
        if (lastResult) {
            return true;
        }
    }
    const resultPromise = _autoConnectCore(props);
    lastAutoConnectionResultPromise = resultPromise;
    return resultPromise;
};
const _autoConnectCore = async ({ storage, props, createWalletFn, manager, connectOverride, setLastAuthProvider })=>{
    const { wallets, onConnect } = props;
    const timeout = props.timeout ?? 15000;
    let autoConnected = false;
    manager.isAutoConnecting.setValue(true);
    let [lastConnectedWalletIds, lastActiveWalletId] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$manager$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredConnectedWalletIds"])(storage),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$manager$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredActiveWalletId"])(storage)
    ]);
    const urlToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$web$2f$lib$2f$get$2d$url$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUrlToken"])();
    // Handle linking flow: autoconnect with stored credentials, then link the new profile
    if (urlToken?.authFlow === "link" && urlToken.authResult) {
        const linkingResult = await handleLinkingFlow({
            client: props.client,
            connectOverride,
            createWalletFn,
            manager,
            onConnect,
            props,
            setLastAuthProvider,
            storage,
            timeout,
            urlToken,
            wallets
        });
        return linkingResult;
    }
    // If an auth cookie is found and this site supports the wallet, we'll set the auth cookie in the client storage
    const wallet = wallets.find((w)=>w.id === urlToken?.walletId);
    if (urlToken?.authCookie && wallet) {
        const clientStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$authentication$2f$client$2d$scoped$2d$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientScopedStorage"]({
            clientId: props.client.clientId,
            ecosystem: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$is$2d$ecosystem$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEcosystemWallet"])(wallet) ? {
                id: wallet.id,
                partnerId: wallet.getConfig()?.partnerId
            } : undefined,
            storage
        });
        await clientStorage.saveAuthCookie(urlToken.authCookie);
    }
    if (urlToken?.walletId) {
        lastActiveWalletId = urlToken.walletId;
        lastConnectedWalletIds = lastConnectedWalletIds?.includes(urlToken.walletId) ? lastConnectedWalletIds : [
            urlToken.walletId,
            ...lastConnectedWalletIds || []
        ];
    }
    if (urlToken?.authProvider) {
        await setLastAuthProvider?.(urlToken.authProvider, storage);
    }
    // if no wallets were last connected or we didn't receive an auth token
    if (!lastConnectedWalletIds) {
        return autoConnected;
    }
    // this flow can actually be used for a first connection in the case of a redirect
    // in that case, we default to the passed chain to connect to
    const lastConnectedChain = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$manager$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastConnectedChain"])(storage) || props.chain;
    const availableWallets = lastConnectedWalletIds.map((id)=>{
        const specifiedWallet = wallets.find((w)=>w.id === id);
        if (specifiedWallet) {
            return specifiedWallet;
        }
        return createWalletFn(id);
    });
    const activeWallet = lastActiveWalletId && (availableWallets.find((w)=>w.id === lastActiveWalletId) || createWalletFn(lastActiveWalletId));
    if (activeWallet) {
        manager.activeWalletConnectionStatusStore.setValue("connecting"); // only set connecting status if we are connecting the last active EOA
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$timeoutPromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutPromise"])(handleWalletConnection({
            authResult: urlToken?.authResult,
            client: props.client,
            lastConnectedChain,
            wallet: activeWallet
        }), {
            message: `AutoConnect timeout: ${timeout}ms limit exceeded.`,
            ms: timeout
        }).catch((err)=>{
            console.warn(err.message);
            if (props.onTimeout) {
                props.onTimeout();
            }
        });
        try {
            // connected wallet could be activeWallet or smart wallet
            await (connectOverride ? connectOverride(activeWallet) : manager.connect(activeWallet, {
                accountAbstraction: props.accountAbstraction,
                client: props.client
            }));
        } catch (e) {
            if (e instanceof Error) {
                console.warn("Error auto connecting wallet:", e.message);
            }
            manager.activeWalletConnectionStatusStore.setValue("disconnected");
        }
    } else {
        manager.activeWalletConnectionStatusStore.setValue("disconnected");
    }
    // then connect wallets that were last connected but were not set as active
    const otherWallets = availableWallets.filter((w)=>w.id !== lastActiveWalletId && lastConnectedWalletIds.includes(w.id));
    for (const wallet of otherWallets){
        try {
            await handleWalletConnection({
                authResult: urlToken?.authResult,
                client: props.client,
                lastConnectedChain,
                wallet
            });
            manager.addConnectedWallet(wallet);
        } catch  {
        // no-op
        }
    }
    // Auto-login with SIWE
    const isIAW = activeWallet && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$wallet$2f$is$2d$in$2d$app$2d$signer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInAppSigner"])({
        connectedWallets: activeWallet ? [
            activeWallet,
            ...otherWallets
        ] : otherWallets,
        wallet: activeWallet
    });
    if (isIAW && props.siweAuth?.requiresAuth && !props.siweAuth?.isLoggedIn && !props.siweAuth?.isLoggingIn) {
        await props.siweAuth?.doLogin().catch((err)=>{
            console.warn("Error signing in with SIWE:", err.message);
        });
    }
    manager.isAutoConnecting.setValue(false);
    const connectedActiveWallet = manager.activeWalletStore.getValue();
    const allConnectedWallets = manager.connectedWallets.getValue();
    if (connectedActiveWallet) {
        autoConnected = true;
        try {
            onConnect?.(connectedActiveWallet, allConnectedWallets);
        } catch (e) {
            console.error("Error calling onConnect callback:", e);
        }
    } else {
        manager.activeWalletConnectionStatusStore.setValue("disconnected");
    }
    return autoConnected; // useQuery needs a return value
};
/**
 * Handles the linking flow when returning from an OAuth redirect with authFlow=link.
 * This autoconnects using stored credentials, then links the new profile from the URL token.
 * @internal
 */ async function handleLinkingFlow(params) {
    const { client, connectOverride, createWalletFn, manager, onConnect, props, setLastAuthProvider, storage, timeout, urlToken, wallets } = params;
    // Get stored wallet credentials (not from URL)
    const [storedConnectedWalletIds, storedActiveWalletId] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$manager$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredConnectedWalletIds"])(storage),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$manager$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredActiveWalletId"])(storage)
    ]);
    const lastConnectedChain = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$manager$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastConnectedChain"])(storage) || props.chain;
    if (!storedActiveWalletId || !storedConnectedWalletIds) {
        console.warn("No stored wallet found for linking flow");
        manager.isAutoConnecting.setValue(false);
        return false;
    }
    // Update auth provider if provided
    if (urlToken.authProvider) {
        await setLastAuthProvider?.(urlToken.authProvider, storage);
    }
    // Find or create the active wallet from stored credentials
    const activeWallet = wallets.find((w)=>w.id === storedActiveWalletId) || createWalletFn(storedActiveWalletId);
    // Autoconnect WITHOUT the URL token (use stored credentials)
    manager.activeWalletConnectionStatusStore.setValue("connecting");
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$timeoutPromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutPromise"])(handleWalletConnection({
            authResult: undefined,
            client,
            lastConnectedChain,
            wallet: activeWallet
        }), {
            message: `AutoConnect timeout: ${timeout}ms limit exceeded.`,
            ms: timeout
        });
        await (connectOverride ? connectOverride(activeWallet) : manager.connect(activeWallet, {
            accountAbstraction: props.accountAbstraction,
            client
        }));
    } catch (e) {
        console.warn("Failed to auto-connect for linking:", e);
        manager.activeWalletConnectionStatusStore.setValue("disconnected");
        manager.isAutoConnecting.setValue(false);
        return false;
    }
    // Now link the new profile using URL auth token
    const ecosystem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$is$2d$ecosystem$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEcosystemWallet"])(activeWallet) ? {
        id: activeWallet.id,
        partnerId: activeWallet.getConfig()?.partnerId
    } : undefined;
    const clientStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$authentication$2f$client$2d$scoped$2d$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientScopedStorage"]({
        clientId: client.clientId,
        ecosystem,
        storage
    });
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$authentication$2f$linkAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linkAccount"])({
            client,
            ecosystem,
            storage: clientStorage,
            tokenToLink: urlToken.authResult.storedToken.cookieString
        });
    } catch (e) {
        console.error("Failed to link profile after redirect:", e);
    // Continue - user is still connected, just linking failed
    }
    manager.isAutoConnecting.setValue(false);
    const connectedWallet = manager.activeWalletStore.getValue();
    const allConnectedWallets = manager.connectedWallets.getValue();
    if (connectedWallet) {
        try {
            onConnect?.(connectedWallet, allConnectedWallets);
        } catch (e) {
            console.error("Error calling onConnect callback:", e);
        }
        return true;
    }
    return false;
}
async function handleWalletConnection(props) {
    return props.wallet.autoConnect({
        authResult: props.authResult,
        chain: props.lastConnectedChain,
        client: props.client
    });
} //# sourceMappingURL=autoConnectCore.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authenticate",
    ()=>authenticate,
    "authenticateWithRedirect",
    ()=>authenticateWithRedirect,
    "getProfiles",
    ()=>getProfiles,
    "getUserEmail",
    ()=>getUserEmail,
    "getUserPhoneNumber",
    ()=>getUserPhoneNumber,
    "linkProfile",
    ()=>linkProfile,
    "linkProfileWithRedirect",
    ()=>linkProfileWithRedirect,
    "preAuthenticate",
    ()=>preAuthenticate,
    "unlinkProfile",
    ()=>unlinkProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$wallet$2f$in$2d$app$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/in-app-core.js [app-client] (ecmascript)");
;
// ---- KEEP IN SYNC WITH /wallets/in-app/native/auth/index.ts ---- //
// duplication needed for separate exports between web and native
/**
 * @internal
 */ async function getInAppWalletConnector(client, ecosystem) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$wallet$2f$in$2d$app$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrCreateInAppWalletConnector"])(client, async (client)=>{
        const { InAppWebConnector } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/web-connector.js [app-client] (ecmascript, async loader)");
        return new InAppWebConnector({
            client: client,
            ecosystem: ecosystem
        });
    }, ecosystem);
}
/**
 * Retrieves the authenticated user for the active in-app wallet.
 * @param options - The arguments for retrieving the authenticated user.
 * @returns The authenticated user if logged in and wallet initialized, otherwise undefined.
 * @example
 * ```ts
 * import { getAuthenticatedUser } from "thirdweb/wallets/in-app";
 *
 * const user = await getAuthenticatedUser({ client });
 * if (user) {
 *  console.log(user.walletAddress);
 * }
 * ```
 * @wallet
 */ async function getAuthenticatedUser(options) {
    const { client, ecosystem } = options;
    const connector = await getInAppWalletConnector(client, ecosystem);
    const user = await connector.getUser();
    switch(user.status){
        case "Logged In, Wallet Initialized":
            {
                return user;
            }
    }
    return undefined;
}
async function getUserEmail(options) {
    const user = await getAuthenticatedUser(options);
    if (user && "email" in user.authDetails) {
        return user.authDetails.email;
    }
    return undefined;
}
async function getUserPhoneNumber(options) {
    const user = await getAuthenticatedUser(options);
    if (user && "phoneNumber" in user.authDetails) {
        return user.authDetails.phoneNumber;
    }
    return undefined;
}
async function preAuthenticate(args) {
    const connector = await getInAppWalletConnector(args.client, args.ecosystem);
    return connector.preAuthenticate(args);
}
async function authenticate(args) {
    const connector = await getInAppWalletConnector(args.client, args.ecosystem);
    return connector.authenticate(args);
}
async function authenticateWithRedirect(args) {
    const connector = await getInAppWalletConnector(args.client, args.ecosystem);
    if (!connector.authenticateWithRedirect) {
        throw new Error("authenticateWithRedirect is not supported on this platform");
    }
    return connector.authenticateWithRedirect(args.strategy, args.mode, args.redirectUrl);
}
async function linkProfileWithRedirect(args) {
    const connector = await getInAppWalletConnector(args.client, args.ecosystem);
    if (!connector.linkProfileWithRedirect) {
        throw new Error("linkProfileWithRedirect is not supported on this platform");
    }
    return connector.linkProfileWithRedirect(args.strategy, args.mode, args.redirectUrl);
}
async function linkProfile(args) {
    const connector = await getInAppWalletConnector(args.client, args.ecosystem);
    return await connector.linkProfile(args);
}
async function unlinkProfile(args) {
    const connector = await getInAppWalletConnector(args.client, args.ecosystem);
    return await connector.unlinkProfile(args.profileToUnlink, args.allowAccountDeletion);
}
async function getProfiles(args) {
    const connector = await getInAppWalletConnector(args.client, args.ecosystem);
    return connector.getProfiles();
} //# sourceMappingURL=index.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/getLoginPath.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLoginCallbackUrl",
    ()=>getLoginCallbackUrl,
    "getLoginUrl",
    ()=>getLoginUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/domains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/types.js [app-client] (ecmascript)");
;
;
const getLoginOptionRoute = (option)=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authOptions"].includes(option)) {
        throw new Error(`Unknown auth option ${option}`);
    }
    switch(option){
        case "wallet":
            return "siwe";
        default:
            return option;
    }
};
const getLoginUrl = ({ authOption, client, ecosystem, mode = "popup", redirectUrl, authFlow })=>{
    if (mode === "popup" && redirectUrl) {
        throw new Error("Redirect URL is not supported for popup mode");
    }
    if (mode === "window" && !redirectUrl) {
        throw new Error("Redirect URL is required for window mode");
    }
    const route = getLoginOptionRoute(authOption);
    let baseUrl = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThirdwebBaseUrl"])("inAppWallet")}/api/2024-05-05/login/${route}?clientId=${client.clientId}`;
    if (ecosystem?.partnerId) {
        baseUrl = `${baseUrl}&ecosystemId=${ecosystem.id}&ecosystemPartnerId=${ecosystem.partnerId}`;
    } else if (ecosystem) {
        baseUrl = `${baseUrl}&ecosystemId=${ecosystem.id}`;
    }
    // Always append redirectUrl to the baseUrl if mode is not popup
    if (mode !== "popup") {
        const formattedRedirectUrl = new URL(redirectUrl || window.location.href);
        formattedRedirectUrl.searchParams.set("walletId", ecosystem?.id || "inApp");
        formattedRedirectUrl.searchParams.set("authProvider", authOption);
        if (authFlow) {
            formattedRedirectUrl.searchParams.set("authFlow", authFlow);
        }
        baseUrl = `${baseUrl}&redirectUrl=${encodeURIComponent(formattedRedirectUrl.toString())}`;
    }
    return baseUrl;
};
const getLoginCallbackUrl = ({ authOption, client, ecosystem })=>{
    const route = getLoginOptionRoute(authOption);
    let baseUrl = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThirdwebBaseUrl"])("inAppWallet")}/api/2024-05-05/login/${route}/callback?clientId=${client.clientId}`;
    if (ecosystem?.partnerId) {
        baseUrl = `${baseUrl}&ecosystemId=${ecosystem.id}&ecosystemPartnerId=${ecosystem.partnerId}`;
    } else if (ecosystem) {
        baseUrl = `${baseUrl}&ecosystemId=${ecosystem.id}`;
    }
    return baseUrl;
}; //# sourceMappingURL=getLoginPath.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_POP_UP_SIZE",
    ()=>DEFAULT_POP_UP_SIZE
]);
const DEFAULT_POP_UP_SIZE = "width=350, height=500"; //# sourceMappingURL=constants.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/oauth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loginWithOauth",
    ()=>loginWithOauth,
    "loginWithOauthRedirect",
    ()=>loginWithOauthRedirect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/domains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$authentication$2f$getLoginPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/getLoginPath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$web$2f$lib$2f$auth$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/constants.js [app-client] (ecmascript)");
;
;
;
const closeWindow = ({ isWindowOpenedByFn, win, closeOpenedWindow })=>{
    if (isWindowOpenedByFn) {
        win?.close();
    } else {
        if (win && closeOpenedWindow) {
            closeOpenedWindow(win);
        } else if (win) {
            win.close();
        }
    }
};
async function loginWithOauthRedirect(options) {
    const loginUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$authentication$2f$getLoginPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoginUrl"])({
        ...options,
        mode: options.mode || "redirect",
        authFlow: options.authFlow
    });
    if (options.mode === "redirect") {
        window.location.href = loginUrl;
    } else {
        window.open(loginUrl);
    }
    // wait for 5 secs for the redirect to happen
    // that way it interrupts the rest of the execution that would normally keep connecting
    await new Promise((resolve)=>setTimeout(resolve, 5000));
}
const loginWithOauth = async (options)=>{
    let win = options.openedWindow;
    let isWindowOpenedByFn = false;
    if (!win) {
        win = window.open((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$authentication$2f$getLoginPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoginUrl"])({
            ...options,
            mode: "popup"
        }), `Login to ${options.authOption}`, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$web$2f$lib$2f$auth$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_POP_UP_SIZE"]);
        isWindowOpenedByFn = true;
    }
    if (!win) {
        throw new Error("Something went wrong opening pop-up");
    }
    const result = await new Promise((resolve, reject)=>{
        // detect when the user closes the login window
        const pollTimer = window.setInterval(async ()=>{
            if (win.closed) {
                clearInterval(pollTimer);
                window.removeEventListener("message", messageListener);
                reject(new Error("User closed login window"));
            }
        }, 1000);
        const messageListener = async (event)=>{
            if (event.origin !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThirdwebBaseUrl"])("inAppWallet")) {
                return;
            }
            if (typeof event.data !== "object") {
                reject(new Error("Invalid event data"));
                return;
            }
            switch(event.data.eventType){
                case "oauthSuccessResult":
                    {
                        window.removeEventListener("message", messageListener);
                        clearInterval(pollTimer);
                        closeWindow({
                            closeOpenedWindow: options.closeOpenedWindow,
                            isWindowOpenedByFn,
                            win
                        });
                        if (event.data.authResult) {
                            resolve(event.data.authResult);
                        }
                        break;
                    }
                case "oauthFailureResult":
                    {
                        window.removeEventListener("message", messageListener);
                        clearInterval(pollTimer);
                        closeWindow({
                            closeOpenedWindow: options.closeOpenedWindow,
                            isWindowOpenedByFn,
                            win
                        });
                        reject(new Error(event.data.errorString));
                        break;
                    }
                default:
                    {
                    // no-op, DO NOT THROW HERE
                    }
            }
        };
        window.addEventListener("message", messageListener);
    });
    return result;
}; //# sourceMappingURL=oauth.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/eip5792/wait-for-calls-receipt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "waitForCallsReceipt",
    ()=>waitForCallsReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$watchBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/watchBlockNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$get$2d$calls$2d$status$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/eip5792/get-calls-status.js [app-client] (ecmascript)");
;
;
const DEFAULT_MAX_BLOCKS_WAIT_TIME = 100;
const map = new Map();
function waitForCallsReceipt(options) {
    const { id, chain, wallet, client } = options;
    const chainId = chain.id;
    const key = `${chainId}:calls_${id}`;
    const maxBlocksWaitTime = options.maxBlocksWaitTime ?? DEFAULT_MAX_BLOCKS_WAIT_TIME;
    if (map.has(key)) {
        // biome-ignore lint/style/noNonNullAssertion: the `has` above ensures that this will always be set
        return map.get(key);
    }
    const promise = new Promise((resolve, reject)=>{
        // start at -1 because the first block doesn't count
        let blocksWaited = -1;
        const unwatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$watchBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchBlockNumber"])({
            chain: chain,
            client: client,
            onNewBlockNumber: async ()=>{
                blocksWaited++;
                if (blocksWaited >= maxBlocksWaitTime) {
                    unwatch();
                    reject(new Error(`Bundle not confirmed after ${maxBlocksWaitTime} blocks`));
                    return;
                }
                try {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$eip5792$2f$get$2d$calls$2d$status$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCallsStatus"])({
                        client,
                        id,
                        wallet
                    });
                    if (result.status === "success" || result.status === "failure") {
                        // stop the polling
                        unwatch();
                        // resolve the top level promise with the result
                        resolve(result);
                        return;
                    }
                } catch (error) {
                    // we'll try again on the next blocks
                    console.error("waitForCallsReceipt error", error);
                }
            }
        });
    // remove the promise from the map when it's done (one way or the other)
    }).finally(()=>{
        map.delete(key);
    });
    map.set(key, promise);
    return promise;
} //# sourceMappingURL=wait-for-calls-receipt.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/__generated__/wallet-infos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is auto-generated by the `scripts/wallets/generate.ts` script.
// Do not modify this file manually.
/**
 * @internal
 */ const ALL_MINIMAL_WALLET_INFOS = [
    {
        id: "io.1inch.wallet",
        name: "1inch Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.binance.wallet",
        name: "Binance Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.ledger",
        name: "Ledger Live",
        hasMobileSupport: true
    },
    {
        id: "com.bitpay",
        name: "BitPay Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.bestwallet",
        name: "Best Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.metamask",
        name: "MetaMask",
        hasMobileSupport: true
    },
    {
        id: "com.trustwallet.app",
        name: "Trust Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.fireblocks",
        name: "Fireblocks",
        hasMobileSupport: true
    },
    {
        id: "com.bitget.web3",
        name: "Bitget Wallet",
        hasMobileSupport: true
    },
    {
        id: "pro.tokenpocket",
        name: "TokenPocket",
        hasMobileSupport: true
    },
    {
        id: "com.safepal",
        name: "SafePal",
        hasMobileSupport: true
    },
    {
        id: "org.uniswap",
        name: "Uniswap Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.zerion.wallet",
        name: "Zerion",
        hasMobileSupport: true
    },
    {
        id: "com.elrond.maiar.wallet",
        name: "xPortal",
        hasMobileSupport: true
    },
    {
        id: "com.crypto.wallet",
        name: "Crypto.com Onchain",
        hasMobileSupport: true
    },
    {
        id: "com.bitcoin",
        name: "Bitcoin.com Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.bifrostwallet",
        name: "Bifrost Wallet",
        hasMobileSupport: true
    },
    {
        id: "jp.co.rakuten-wallet",
        name: "Rakuten Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.bybit",
        name: "Bybit Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.blockchain.login",
        name: "Blockchain.com",
        hasMobileSupport: true
    },
    {
        id: "io.trezor",
        name: "Trezor Suite",
        hasMobileSupport: true
    },
    {
        id: "im.token",
        name: "imToken",
        hasMobileSupport: true
    },
    {
        id: "global.safe",
        name: "Safe",
        hasMobileSupport: true
    },
    {
        id: "xyz.ctrl",
        name: "Ctrl Wallet",
        hasMobileSupport: true
    },
    {
        id: "co.arculus",
        name: "Arculus Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.roninchain.wallet",
        name: "Ronin Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.okex.wallet",
        name: "OKX Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.wemixplay",
        name: "WEMIX Play",
        hasMobileSupport: true
    },
    {
        id: "com.tangem",
        name: "Tangem Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.exodus",
        name: "Exodus",
        hasMobileSupport: true
    },
    {
        id: "com.hashpack.wallet",
        name: "HashPack",
        hasMobileSupport: true
    },
    {
        id: "id.co.pintu",
        name: "Pintu",
        hasMobileSupport: true
    },
    {
        id: "network.blackfort",
        name: "BlackFort Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.wigwam.wallet",
        name: "Wigwam",
        hasMobileSupport: true
    },
    {
        id: "app.backpack",
        name: "Backpack",
        hasMobileSupport: true
    },
    {
        id: "app.subwallet",
        name: "SubWallet",
        hasMobileSupport: true
    },
    {
        id: "cc.avacus",
        name: "Avacus",
        hasMobileSupport: true
    },
    {
        id: "me.rainbow",
        name: "Rainbow",
        hasMobileSupport: true
    },
    {
        id: "so.onekey.app.wallet",
        name: "OneKey",
        hasMobileSupport: true
    },
    {
        id: "me.haha",
        name: "HaHa",
        hasMobileSupport: true
    },
    {
        id: "com.bee",
        name: "BeeWallet",
        hasMobileSupport: true
    },
    {
        id: "ag.jup",
        name: "Jupiter",
        hasMobileSupport: true
    },
    {
        id: "app.keplr",
        name: "Keplr",
        hasMobileSupport: true
    },
    {
        id: "org.hot-labs",
        name: "HOT Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.dcentwallet",
        name: "D'CENT Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.kraken",
        name: "Kraken Wallet ",
        hasMobileSupport: true
    },
    {
        id: "com.kucoin",
        name: "KuCoin Web3 Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.magiceden.wallet",
        name: "Magic Eden",
        hasMobileSupport: true
    },
    {
        id: "com.tomi",
        name: "tomi Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.ibvm",
        name: "IBVM Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.mewwallet",
        name: "MEW wallet",
        hasMobileSupport: true
    },
    {
        id: "com.socios.app",
        name: "Socios.com - Wallet & Tokens",
        hasMobileSupport: true
    },
    {
        id: "xyz.argent",
        name: "Argent",
        hasMobileSupport: true
    },
    {
        id: "org.thorwallet",
        name: "THORWallet",
        hasMobileSupport: true
    },
    {
        id: "io.internetmoney",
        name: "Internet Money",
        hasMobileSupport: true
    },
    {
        id: "org.mathwallet",
        name: "MathWallet",
        hasMobileSupport: true
    },
    {
        id: "io.cypherhq",
        name: "Cypher Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.novawallet",
        name: "Nova Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.yowallet",
        name: "YoWallet",
        hasMobileSupport: true
    },
    {
        id: "com.flowfoundation.wallet",
        name: "Flow Wallet",
        hasMobileSupport: true
    },
    {
        id: "app.kabila",
        name: "Kabila Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.opera",
        name: "Opera Crypto Browser",
        hasMobileSupport: true
    },
    {
        id: "com.valoraapp",
        name: "Valora",
        hasMobileSupport: true
    },
    {
        id: "com.robinhood.wallet",
        name: "Robinhood Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.chain",
        name: "Chain",
        hasMobileSupport: true
    },
    {
        id: "io.huddln",
        name: "Huddln",
        hasMobileSupport: true
    },
    {
        id: "app.core.extension",
        name: "Core",
        hasMobileSupport: true
    },
    {
        id: "world.freedom",
        name: "Freedom World",
        hasMobileSupport: true
    },
    {
        id: "money.unstoppable",
        name: "Unstoppable Wallet",
        hasMobileSupport: true
    },
    {
        id: "pk.modular",
        name: "Modular Wallet Prod",
        hasMobileSupport: true
    },
    {
        id: "app.wombat",
        name: "Wombat",
        hasMobileSupport: true
    },
    {
        id: "com.klipwallet",
        name: "klip",
        hasMobileSupport: true
    },
    {
        id: "com.gemwallet",
        name: "Gem Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.sabay.wallet",
        name: "Sabay Wallet App",
        hasMobileSupport: true
    },
    {
        id: "com.zengo",
        name: "Zengo Wallet",
        hasMobileSupport: true
    },
    {
        id: "xyz.joeywallet",
        name: "Joey Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.tokoin",
        name: "Tokoin | My-T Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.alpha-u.wallet.web",
        name: "αU wallet",
        hasMobileSupport: true
    },
    {
        id: "network.cvl",
        name: "CVL Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.leapwallet",
        name: "Leap",
        hasMobileSupport: true
    },
    {
        id: "io.xenea",
        name: "XENEA Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.oasys-wallet",
        name: "Oasys Passport",
        hasMobileSupport: true
    },
    {
        id: "com.bitso",
        name: "Bitso Web3 Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.enjin",
        name: "Enjin Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.coldwallet",
        name: "Cold Wallet",
        hasMobileSupport: true
    },
    {
        id: "org.creditcoin.app",
        name: "Credit Wallet",
        hasMobileSupport: true
    },
    {
        id: "app.everspace",
        name: "Everspace",
        hasMobileSupport: true
    },
    {
        id: "app.zeal",
        name: "Zeal",
        hasMobileSupport: true
    },
    {
        id: "app.whitewallet",
        name: "Whitewallet",
        hasMobileSupport: true
    },
    {
        id: "ai.purewallet",
        name: "PureWallet app",
        hasMobileSupport: true
    },
    {
        id: "com.fastex.wallet",
        name: "Yo Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.kriptomat",
        name: "Kriptomat",
        hasMobileSupport: true
    },
    {
        id: "com.ullapay",
        name: "WOW EARN",
        hasMobileSupport: true
    },
    {
        id: "io.atomicwallet",
        name: "Atomic Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.pionewallet",
        name: "PioneWallet",
        hasMobileSupport: true
    },
    {
        id: "io.oxalus",
        name: "Oxalus Wallet",
        hasMobileSupport: true
    },
    {
        id: "xyz.uniultra.wallet",
        name: "U2U Wallet",
        hasMobileSupport: true
    },
    {
        id: "xyz.frontier.wallet",
        name: "Frontier",
        hasMobileSupport: true
    },
    {
        id: "com.coolbitx.cwsapp",
        name: "CoolWallet",
        hasMobileSupport: true
    },
    {
        id: "org.gooddollar",
        name: "GoodDollar",
        hasMobileSupport: true
    },
    {
        id: "com.cakewallet",
        name: "Cake Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.ellipal",
        name: "ELLIPAL",
        hasMobileSupport: true
    },
    {
        id: "app.krystal",
        name: "Krystal",
        hasMobileSupport: true
    },
    {
        id: "com.monarchwallet",
        name: "Monarch Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.burritowallet",
        name: "Burrito",
        hasMobileSupport: true
    },
    {
        id: "co.family.wallet",
        name: "Family",
        hasMobileSupport: true
    },
    {
        id: "com.mtpelerin",
        name: "Bridge Wallet",
        hasMobileSupport: true
    },
    {
        id: "app.keyring",
        name: "KEYRING PRO",
        hasMobileSupport: true
    },
    {
        id: "cc.localtrade.lab",
        name: "LocalTrade Wallet",
        hasMobileSupport: true
    },
    {
        id: "tech.okto",
        name: "Okto",
        hasMobileSupport: true
    },
    {
        id: "com.xcapit",
        name: "Xcapit",
        hasMobileSupport: true
    },
    {
        id: "com.gayawallet",
        name: "Gaya Wallet",
        hasMobileSupport: true
    },
    {
        id: "app.nightly",
        name: "Nightly",
        hasMobileSupport: true
    },
    {
        id: "com.coin98",
        name: "Coin98 Super Wallet",
        hasMobileSupport: true
    },
    {
        id: "xyz.coca",
        name: "COCA Wallet",
        hasMobileSupport: true
    },
    {
        id: "app.linen",
        name: "Linen",
        hasMobileSupport: true
    },
    {
        id: "dev.auroracloud",
        name: "Aurora Pass",
        hasMobileSupport: true
    },
    {
        id: "com.coinomi",
        name: "Coinomi",
        hasMobileSupport: true
    },
    {
        id: "my.mone",
        name: "mOne superapp",
        hasMobileSupport: true
    },
    {
        id: "org.alephium",
        name: "Alephium Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.alicebob",
        name: "Alicebob Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.koalawallet",
        name: "Koala Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.veworld",
        name: "VeWorld Mobile",
        hasMobileSupport: true
    },
    {
        id: "com.withpaper",
        name: "Paper",
        hasMobileSupport: true
    },
    {
        id: "io.noone",
        name: "Noone Wallet",
        hasMobileSupport: true
    },
    {
        id: "network.haqq",
        name: "HAQQ Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.ricewallet",
        name: "RiceWallet",
        hasMobileSupport: true
    },
    {
        id: "me.iopay",
        name: "ioPay",
        hasMobileSupport: true
    },
    {
        id: "app.walletnow",
        name: "NOW Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.okse",
        name: "Okse Wallet",
        hasMobileSupport: true
    },
    {
        id: "network.over",
        name: "OverFlex",
        hasMobileSupport: true
    },
    {
        id: "com.aktionariat",
        name: "Aktionariat",
        hasMobileSupport: true
    },
    {
        id: "com.paybolt",
        name: "PayBolt",
        hasMobileSupport: true
    },
    {
        id: "com.plasma-wallet",
        name: "Plasma Wallet",
        hasMobileSupport: true
    },
    {
        id: "org.bytebank",
        name: "ByteBank",
        hasMobileSupport: true
    },
    {
        id: "io.ethermail",
        name: "EtherMail",
        hasMobileSupport: true
    },
    {
        id: "com.optowallet",
        name: "Opto Wallet",
        hasMobileSupport: true
    },
    {
        id: "finance.openwallet",
        name: "Open Wallet",
        hasMobileSupport: true
    },
    {
        id: "xyz.sequence",
        name: "Sequence Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.foxwallet",
        name: "FoxWallet",
        hasMobileSupport: true
    },
    {
        id: "app.hbwallet",
        name: "HB WALLET",
        hasMobileSupport: true
    },
    {
        id: "it.airgap",
        name: "AirGap Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.holdstation",
        name: "Holdstation Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.universaleverything",
        name: "UniversalProfiles",
        hasMobileSupport: true
    },
    {
        id: "com.abra",
        name: "Abra Wallet",
        hasMobileSupport: true
    },
    {
        id: "org.thepulsewallet",
        name: "The Pulse Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.premanft",
        name: "PREMA Wallet",
        hasMobileSupport: true
    },
    {
        id: "xyz.timelesswallet",
        name: "Timeless Wallet",
        hasMobileSupport: true
    },
    {
        id: "org.bitizen",
        name: "Bitizen",
        hasMobileSupport: true
    },
    {
        id: "app.ultimate",
        name: "Ultimate",
        hasMobileSupport: true
    },
    {
        id: "io.compasswallet",
        name: "Compass Wallet",
        hasMobileSupport: true
    },
    {
        id: "app.fizzwallet",
        name: "Fizz",
        hasMobileSupport: true
    },
    {
        id: "com.xovawallet",
        name: "Xova",
        hasMobileSupport: true
    },
    {
        id: "app.nicegram",
        name: "Nicegram Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.zelcore",
        name: "Zelcore",
        hasMobileSupport: true
    },
    {
        id: "app.freighter",
        name: "Freighter",
        hasMobileSupport: true
    },
    {
        id: "app.stickey",
        name: "Stickey Wallet",
        hasMobileSupport: true
    },
    {
        id: "app.coinstats",
        name: "CoinStats",
        hasMobileSupport: true
    },
    {
        id: "io.harti",
        name: "HARTi Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.dttd",
        name: "DTTD",
        hasMobileSupport: true
    },
    {
        id: "com.tellaw",
        name: "Tellaw Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.klever",
        name: "Klever Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.unstoppabledomains",
        name: "Unstoppable Domains",
        hasMobileSupport: true
    },
    {
        id: "is.callback",
        name: "Callback",
        hasMobileSupport: true
    },
    {
        id: "ai.pundi",
        name: "Pundi Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.summonersarena",
        name: "SA ASSISTANT",
        hasMobileSupport: true
    },
    {
        id: "io.fizen",
        name: "Fizen Wallet",
        hasMobileSupport: true
    },
    {
        id: "fi.pillar",
        name: "Pillar",
        hasMobileSupport: true
    },
    {
        id: "world.ixo",
        name: "Impact Wallet",
        hasMobileSupport: true
    },
    {
        id: "org.thetatoken",
        name: "Theta Wallet",
        hasMobileSupport: true
    },
    {
        id: "net.gateweb3",
        name: "GateWallet",
        hasMobileSupport: true
    },
    {
        id: "app.ammer",
        name: "Ammer Wallet",
        hasMobileSupport: true
    },
    {
        id: "us.binance",
        name: "Binance.US",
        hasMobileSupport: true
    },
    {
        id: "io.yusetoken",
        name: "Yuse Wallet",
        hasMobileSupport: true
    },
    {
        id: "co.muza",
        name: "MUZA",
        hasMobileSupport: true
    },
    {
        id: "io.hyperpay",
        name: "HyperPay",
        hasMobileSupport: true
    },
    {
        id: "io.cosmostation",
        name: "Cosmostation",
        hasMobileSupport: true
    },
    {
        id: "app.ryipay",
        name: "RYIPAY",
        hasMobileSupport: true
    },
    {
        id: "io.wallet3",
        name: "Wallet 3",
        hasMobileSupport: true
    },
    {
        id: "org.dota168",
        name: "MetaWallet",
        hasMobileSupport: true
    },
    {
        id: "com.bitpie",
        name: "Bitpie",
        hasMobileSupport: true
    },
    {
        id: "com.coininn",
        name: "Coininn Wallet",
        hasMobileSupport: true
    },
    {
        id: "me.easy",
        name: "EASY",
        hasMobileSupport: true
    },
    {
        id: "io.shido",
        name: "Shido App",
        hasMobileSupport: true
    },
    {
        id: "com.neonwallet",
        name: "Neon Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.secuxtech",
        name: "SecuX",
        hasMobileSupport: true
    },
    {
        id: "com.unitywallet",
        name: "Unity Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.miraiapp",
        name: "Mirai App",
        hasMobileSupport: true
    },
    {
        id: "com.beexo",
        name: "Beexo",
        hasMobileSupport: true
    },
    {
        id: "social.halo",
        name: "Halo Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.gemspocket",
        name: "Gems Pocket",
        hasMobileSupport: true
    },
    {
        id: "app.status",
        name: "Status",
        hasMobileSupport: true
    },
    {
        id: "com.midoin",
        name: "midoin",
        hasMobileSupport: true
    },
    {
        id: "id.competence",
        name: "Competence.id",
        hasMobileSupport: true
    },
    {
        id: "com.safemoon",
        name: "SafeMoon",
        hasMobileSupport: true
    },
    {
        id: "llc.besc",
        name: "BeanBag",
        hasMobileSupport: true
    },
    {
        id: "baby.smart",
        name: "Smart.Baby",
        hasMobileSupport: true
    },
    {
        id: "app.onto",
        name: "ONTO",
        hasMobileSupport: true
    },
    {
        id: "com.ivirse",
        name: "IApp",
        hasMobileSupport: true
    },
    {
        id: "one.mixin.messenger",
        name: "Mixin Messenger",
        hasMobileSupport: true
    },
    {
        id: "cash.abpay",
        name: "AB Pay",
        hasMobileSupport: true
    },
    {
        id: "ch.dssecurity",
        name: "DS Security SA",
        hasMobileSupport: true
    },
    {
        id: "com.concordium.wallet",
        name: "Concordium",
        hasMobileSupport: true
    },
    {
        id: "io.zkape",
        name: "Ape Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.paliwallet",
        name: "Pali Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.pitaka",
        name: "Pitaka",
        hasMobileSupport: true
    },
    {
        id: "com.saitamatoken",
        name: "SaitaPro",
        hasMobileSupport: true
    },
    {
        id: "org.mugambo",
        name: "rss wallet",
        hasMobileSupport: true
    },
    {
        id: "fi.stablez",
        name: "Stablez",
        hasMobileSupport: true
    },
    {
        id: "io.legacynetwork",
        name: "Legacy Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.meld.app",
        name: "MELDapp",
        hasMobileSupport: true
    },
    {
        id: "io.bladewallet",
        name: "Blade Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.authentrend",
        name: "AT.Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.webauth",
        name: "WebAuth",
        hasMobileSupport: true
    },
    {
        id: "xyz.tucop",
        name: "TuCOP Wallet",
        hasMobileSupport: true
    },
    {
        id: "pro.fintoken",
        name: "FINTOKEN",
        hasMobileSupport: true
    },
    {
        id: "io.nash",
        name: "Nash",
        hasMobileSupport: true
    },
    {
        id: "vc.uincubator.api",
        name: "UIIC",
        hasMobileSupport: true
    },
    {
        id: "io.unagi.unawallet",
        name: "una Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.nonbank",
        name: "NonBank",
        hasMobileSupport: true
    },
    {
        id: "io.armana.portal",
        name: "Armana Portal",
        hasMobileSupport: true
    },
    {
        id: "com.x9wallet",
        name: "X9Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.kigo",
        name: "Kigo",
        hasMobileSupport: true
    },
    {
        id: "com.alphawallet",
        name: "AlphaWallet",
        hasMobileSupport: true
    },
    {
        id: "com.getcogni",
        name: "Cogni ",
        hasMobileSupport: true
    },
    {
        id: "app.sinum",
        name: "Sinum",
        hasMobileSupport: true
    },
    {
        id: "finance.soulswap.app",
        name: "SoulSwap",
        hasMobileSupport: true
    },
    {
        id: "io.loopring.wallet",
        name: "Loopring",
        hasMobileSupport: true
    },
    {
        id: "com.shapeshift",
        name: "ShapeShift",
        hasMobileSupport: true
    },
    {
        id: "io.trinity-tech",
        name: "Essentials",
        hasMobileSupport: true
    },
    {
        id: "money.keychain",
        name: "Keychain",
        hasMobileSupport: true
    },
    {
        id: "com.superhero.cordova",
        name: "Superhero Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.bettatrade",
        name: "Bettatrade",
        hasMobileSupport: true
    },
    {
        id: "online.puzzle",
        name: "Puzzle Wallet",
        hasMobileSupport: true
    },
    {
        id: "gg.indi",
        name: "IndiGG",
        hasMobileSupport: true
    },
    {
        id: "io.tradestrike",
        name: "StrikeX Wallet",
        hasMobileSupport: true
    },
    {
        id: "xyz.echooo",
        name: "Echooo Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.kryptogo",
        name: "KryptoGO Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.trustasset",
        name: "Trust Asset Wallet",
        hasMobileSupport: true
    },
    {
        id: "app.utorg",
        name: "UTORG",
        hasMobileSupport: true
    },
    {
        id: "app.dfinnwallet",
        name: "Dfinn Wallet",
        hasMobileSupport: true
    },
    {
        id: "org.rezor",
        name: "Rezor",
        hasMobileSupport: true
    },
    {
        id: "io.legionnetwork",
        name: "LegionNetwork",
        hasMobileSupport: true
    },
    {
        id: "cc.maxwallet",
        name: "MaxWallet",
        hasMobileSupport: true
    },
    {
        id: "com.ripio",
        name: "Ripio Portal",
        hasMobileSupport: true
    },
    {
        id: "com.fxwallet",
        name: "FxWallet",
        hasMobileSupport: true
    },
    {
        id: "inc.tomo",
        name: "Tomo Wallet",
        hasMobileSupport: true
    },
    {
        id: "me.komet.app",
        name: "Komet",
        hasMobileSupport: true
    },
    {
        id: "io.guardiianwallet",
        name: "GUARDIIAN Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.hacken.hai",
        name: "hAI by Hacken",
        hasMobileSupport: true
    },
    {
        id: "com.zypto",
        name: "Zypto",
        hasMobileSupport: true
    },
    {
        id: "io.nabox",
        name: "Nabox",
        hasMobileSupport: true
    },
    {
        id: "com.tastycrypto",
        name: "tastycrypto",
        hasMobileSupport: true
    },
    {
        id: "com.ballet",
        name: "Ballet Crypto",
        hasMobileSupport: true
    },
    {
        id: "io.talken",
        name: "Talken Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.wallacy",
        name: "Wallacy",
        hasMobileSupport: true
    },
    {
        id: "network.mrhb",
        name: "Sahal Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.pockie",
        name: "pockie",
        hasMobileSupport: true
    },
    {
        id: "me.astrox",
        name: "Me Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.thirdweb",
        name: "thirdweb",
        hasMobileSupport: true
    },
    {
        id: "com.poolsmobility.wallet",
        name: "poolswallet",
        hasMobileSupport: true
    },
    {
        id: "xyz.roam.wallet",
        name: "Roam",
        hasMobileSupport: true
    },
    {
        id: "app.gamic",
        name: "Gamic",
        hasMobileSupport: true
    },
    {
        id: "app.m1nty",
        name: "M1NTY",
        hasMobileSupport: true
    },
    {
        id: "network.trustkeys",
        name: "TrustKeys Web3 SocialFi",
        hasMobileSupport: true
    },
    {
        id: "com.caesiumlab",
        name: "Caesium",
        hasMobileSupport: true
    },
    {
        id: "app.catecoin",
        name: "Catecoin Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.hootark",
        name: "HootArk",
        hasMobileSupport: true
    },
    {
        id: "com.crossmint",
        name: "Crossmint",
        hasMobileSupport: true
    },
    {
        id: "com.coincircle",
        name: "CoinCircle",
        hasMobileSupport: true
    },
    {
        id: "io.bharatbox",
        name: "BharatBox App",
        hasMobileSupport: true
    },
    {
        id: "nl.greenhood.wallet",
        name: "Greenhood",
        hasMobileSupport: true
    },
    {
        id: "co.swopme",
        name: "SWOP",
        hasMobileSupport: true
    },
    {
        id: "com.kresus",
        name: "Kresus SuperApp",
        hasMobileSupport: true
    },
    {
        id: "com.dolletwallet",
        name: "Dollet",
        hasMobileSupport: true
    },
    {
        id: "net.shinobi-wallet",
        name: "Shinobi-Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.azcoiner",
        name: "AZCoiner",
        hasMobileSupport: true
    },
    {
        id: "com.passwallet.app",
        name: "Pass App",
        hasMobileSupport: true
    },
    {
        id: "app.qubic.wallet",
        name: "Qubic Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.coinex.wallet",
        name: "CoinEx Wallet",
        hasMobileSupport: true
    },
    {
        id: "app.xverse",
        name: "Xverse Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.flash-wallet",
        name: "Flash Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.vgxfoundation",
        name: "VGX Wallet",
        hasMobileSupport: true
    },
    {
        id: "org.arianee",
        name: "Arianee Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.myabcwallet",
        name: "ABC Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.owallet",
        name: "OWallet",
        hasMobileSupport: true
    },
    {
        id: "io.zelus",
        name: "Zelus Wallet",
        hasMobileSupport: true
    },
    {
        id: "net.myrenegade",
        name: "Renegade",
        hasMobileSupport: true
    },
    {
        id: "io.clingon",
        name: "Cling Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.icewal",
        name: "icewal",
        hasMobileSupport: true
    },
    {
        id: "io.streakk",
        name: "Streakk Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.dokwallet",
        name: "Dokwallet",
        hasMobileSupport: true
    },
    {
        id: "finance.porta",
        name: "PortaWallet",
        hasMobileSupport: true
    },
    {
        id: "io.prettygood.x",
        name: "PrettyGood Keyboard",
        hasMobileSupport: true
    },
    {
        id: "io.earthwallet",
        name: "Earth Wallet",
        hasMobileSupport: true
    },
    {
        id: "net.spatium.wallet",
        name: "Spatium",
        hasMobileSupport: true
    },
    {
        id: "live.superex",
        name: "SuperWallet",
        hasMobileSupport: true
    },
    {
        id: "com.adftechnology",
        name: "ADF Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.bscecowallet",
        name: "BSC Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.wallypto",
        name: "Wallypto",
        hasMobileSupport: true
    },
    {
        id: "com.reown",
        name: "React Native Sample Wallet",
        hasMobileSupport: true
    },
    {
        id: "finance.voltage",
        name: "Volt Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.walletconnect",
        name: "Swift Sample Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.passpay",
        name: "PassPay Wallet",
        hasMobileSupport: true
    },
    {
        id: "technology.obvious",
        name: "Obvious",
        hasMobileSupport: true
    },
    {
        id: "io.plutope",
        name: "Plutope",
        hasMobileSupport: true
    },
    {
        id: "io.buzz-up",
        name: "BUZZUP",
        hasMobileSupport: true
    },
    {
        id: "co.xellar",
        name: "Xellar",
        hasMobileSupport: true
    },
    {
        id: "com.kaxaa",
        name: "KAXAA Wallet",
        hasMobileSupport: true
    },
    {
        id: "org.shefi",
        name: "SheFi",
        hasMobileSupport: true
    },
    {
        id: "xyz.orion",
        name: "Orion",
        hasMobileSupport: true
    },
    {
        id: "world.dosi.vault",
        name: "DOSI Vault",
        hasMobileSupport: true
    },
    {
        id: "network.gridlock",
        name: "Gridlock Wallet",
        hasMobileSupport: true
    },
    {
        id: "finance.plena",
        name: "Plena-App",
        hasMobileSupport: true
    },
    {
        id: "cc.dropp",
        name: "Dropp",
        hasMobileSupport: true
    },
    {
        id: "io.scramberry",
        name: "ScramberryWallet",
        hasMobileSupport: true
    },
    {
        id: "xyz.bonuz",
        name: "Bonuz Social Smart Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.bmawallet",
        name: "BMA Wallet",
        hasMobileSupport: true
    },
    {
        id: "co.lifedefi",
        name: "Life DeFi",
        hasMobileSupport: true
    },
    {
        id: "com.get-verso",
        name: "Verso",
        hasMobileSupport: true
    },
    {
        id: "io.blocto",
        name: "Blocto",
        hasMobileSupport: true
    },
    {
        id: "com.pandoshi",
        name: "Pandoshi Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.getclave",
        name: "Clave",
        hasMobileSupport: true
    },
    {
        id: "technology.jambo",
        name: "Jambo",
        hasMobileSupport: true
    },
    {
        id: "app.edge",
        name: "Edge",
        hasMobileSupport: true
    },
    {
        id: "io.banksocial",
        name: "BankSocial ",
        hasMobileSupport: true
    },
    {
        id: "io.konio",
        name: "Konio",
        hasMobileSupport: true
    },
    {
        id: "com.qubetics",
        name: "QubeticsWallet",
        hasMobileSupport: true
    },
    {
        id: "app.imem",
        name: "iMe Messenger & Crypto Wallet ",
        hasMobileSupport: true
    },
    {
        id: "com.purechain",
        name: "PureWallet",
        hasMobileSupport: true
    },
    {
        id: "io.ethos",
        name: "Ethos Self-Custody Vault",
        hasMobileSupport: true
    },
    {
        id: "io.didwallet",
        name: "DIDWallet",
        hasMobileSupport: true
    },
    {
        id: "com.dextrade",
        name: "DexTrade",
        hasMobileSupport: true
    },
    {
        id: "org.kelp",
        name: "Kelp",
        hasMobileSupport: true
    },
    {
        id: "xyz.nestwallet",
        name: "Nest Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.cryptnox",
        name: "Cryptnox Wallet",
        hasMobileSupport: true
    },
    {
        id: "land.liker",
        name: "LikerLand App",
        hasMobileSupport: true
    },
    {
        id: "io.hippowallet",
        name: "Hippo Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.certhis",
        name: "Certhis",
        hasMobileSupport: true
    },
    {
        id: "io.safecryptowallet",
        name: "SafeWallet",
        hasMobileSupport: true
    },
    {
        id: "com.saify",
        name: "Saify",
        hasMobileSupport: true
    },
    {
        id: "com.tiduswallet",
        name: "Tidus Wallet ",
        hasMobileSupport: true
    },
    {
        id: "io.uptn.dapp-web",
        name: "UPTN",
        hasMobileSupport: true
    },
    {
        id: "com.it.onewallet",
        name: "onewallet",
        hasMobileSupport: true
    },
    {
        id: "com.rktechworks",
        name: "ID Pocket",
        hasMobileSupport: true
    },
    {
        id: "com.revelator.wallet",
        name: "Revelator Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.sinohope",
        name: "Sinohope",
        hasMobileSupport: true
    },
    {
        id: "network.dgg",
        name: "DGG Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.up",
        name: "UP.io",
        hasMobileSupport: true
    },
    {
        id: "com.lif3",
        name: "Lif3 Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.bimwallet",
        name: "BIM Wallet",
        hasMobileSupport: true
    },
    {
        id: "pub.dg",
        name: "DGPub App",
        hasMobileSupport: true
    },
    {
        id: "com.wemix",
        name: "WemixWallet",
        hasMobileSupport: true
    },
    {
        id: "com.pierwallet",
        name: "pier",
        hasMobileSupport: true
    },
    {
        id: "net.stasis",
        name: "Stasis Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.peakdefi",
        name: "PEAKDEFI",
        hasMobileSupport: true
    },
    {
        id: "com.3swallet",
        name: "3S Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.example.subdomain",
        name: "Key3",
        hasMobileSupport: true
    },
    {
        id: "com.reown.appkit-lab",
        name: "Flutter Sample Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.opz",
        name: "OPZ Wallet",
        hasMobileSupport: true
    },
    {
        id: "ai.spotonchain.platform",
        name: "Spot On Chain App",
        hasMobileSupport: true
    },
    {
        id: "org.dailychain.wallet",
        name: "Daily Wallet",
        hasMobileSupport: true
    },
    {
        id: "app.omni",
        name: "Omni",
        hasMobileSupport: true
    },
    {
        id: "id.plumaa",
        name: "Plumaa ID",
        hasMobileSupport: true
    },
    {
        id: "io.ttmwallet",
        name: "MDAO Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.kgen",
        name: "KGeN Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.nufinetes",
        name: "Nufinetes",
        hasMobileSupport: true
    },
    {
        id: "com.squirrelwallet",
        name: "Squirrel Wallet",
        hasMobileSupport: true
    },
    {
        id: "eu.trusteeglobal",
        name: "Trustee Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.daffione",
        name: "DaffiOne",
        hasMobileSupport: true
    },
    {
        id: "com.saakuru.app",
        name: "Saakuru All-in-One crypto App",
        hasMobileSupport: true
    },
    {
        id: "io.r0ar",
        name: "R0AR Mobile Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.nodle",
        name: "Nodle",
        hasMobileSupport: true
    },
    {
        id: "app.tofee",
        name: "Tofee Wallet Official",
        hasMobileSupport: true
    },
    {
        id: "io.pltwallet",
        name: "PLTwallet",
        hasMobileSupport: true
    },
    {
        id: "org.talkapp",
        name: "T+ Wallet ",
        hasMobileSupport: true
    },
    {
        id: "io.ready",
        name: "Ready",
        hasMobileSupport: true
    },
    {
        id: "app.w3wallet",
        name: "W3 Wallet",
        hasMobileSupport: true
    },
    {
        id: "pro.ds.app",
        name: "Digital Shield",
        hasMobileSupport: true
    },
    {
        id: "com.reown.docs",
        name: "Kotlin Sample Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.apollox",
        name: "ApolloX",
        hasMobileSupport: true
    },
    {
        id: "com.ipmb",
        name: "IPMB Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.payperless",
        name: "Payperless",
        hasMobileSupport: true
    },
    {
        id: "com.obliowallet",
        name: "Oblio Wallet",
        hasMobileSupport: true
    },
    {
        id: "app.keeper-wallet",
        name: "Keeper",
        hasMobileSupport: true
    },
    {
        id: "io.paraswap",
        name: "ParaSwap Wallet",
        hasMobileSupport: true
    },
    {
        id: "org.ecoinwallet",
        name: "ECOIN Wallet",
        hasMobileSupport: true
    },
    {
        id: "fi.dropmate",
        name: "Dropmate",
        hasMobileSupport: true
    },
    {
        id: "com.cryptokara",
        name: "Cryptokara",
        hasMobileSupport: true
    },
    {
        id: "co.cyber.wallet",
        name: "CyberWallet",
        hasMobileSupport: true
    },
    {
        id: "com.kriptonio",
        name: "Kriptonio",
        hasMobileSupport: true
    },
    {
        id: "digital.minerva",
        name: "Minerva Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.mpcvault.broswerplugin",
        name: "MPCVault | Team crypto wallet",
        hasMobileSupport: true
    },
    {
        id: "com.liberawallet",
        name: "Libera",
        hasMobileSupport: true
    },
    {
        id: "io.helixid",
        name: "helix id",
        hasMobileSupport: true
    },
    {
        id: "com.broearn",
        name: "Broearn Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.altme",
        name: "Altme",
        hasMobileSupport: true
    },
    {
        id: "app.herewallet",
        name: "HERE Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.coinsdo",
        name: "CoinWallet",
        hasMobileSupport: true
    },
    {
        id: "trade.flooz.wallet",
        name: "Flooz",
        hasMobileSupport: true
    },
    {
        id: "com.tapwallet",
        name: "TAP WALLET",
        hasMobileSupport: true
    },
    {
        id: "fun.tobi",
        name: "Tobi",
        hasMobileSupport: true
    },
    {
        id: "com.bitnovo",
        name: "Bitnovo Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.xucre",
        name: "Xucre",
        hasMobileSupport: true
    },
    {
        id: "app.girin",
        name: "Girin Wallet",
        hasMobileSupport: true
    },
    {
        id: "finance.panaroma",
        name: "Panaroma Wallet",
        hasMobileSupport: true
    },
    {
        id: "app.clot",
        name: "Clot",
        hasMobileSupport: true
    },
    {
        id: "io.transi",
        name: "Transi",
        hasMobileSupport: true
    },
    {
        id: "world.qoin",
        name: "Qoin Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.greengloryglobal",
        name: "Blockaura",
        hasMobileSupport: true
    },
    {
        id: "com.amazewallet",
        name: "AmazeWallet",
        hasMobileSupport: true
    },
    {
        id: "zone.bitverse",
        name: "Bitverse",
        hasMobileSupport: true
    },
    {
        id: "social.gm2",
        name: "GM² Social",
        hasMobileSupport: true
    },
    {
        id: "io.ozonewallet",
        name: "OzoneWallet",
        hasMobileSupport: true
    },
    {
        id: "io.ukiss",
        name: "UKISS Hub",
        hasMobileSupport: true
    },
    {
        id: "finance.islamicoin",
        name: "ISLAMIwallet",
        hasMobileSupport: true
    },
    {
        id: "io.copiosa",
        name: "Copiosa",
        hasMobileSupport: true
    },
    {
        id: "world.fncy",
        name: "Fncy Mobile Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.moonstake",
        name: "MOONSTAKE",
        hasMobileSupport: true
    },
    {
        id: "com.trusteeglobal",
        name: "Trustee Wallet",
        hasMobileSupport: true
    },
    {
        id: "net.spatium",
        name: "Spatium",
        hasMobileSupport: true
    },
    {
        id: "co.filwallet",
        name: "FILWallet",
        hasMobileSupport: true
    },
    {
        id: "money.snowball",
        name: "Snowball",
        hasMobileSupport: true
    },
    {
        id: "com.ennowallet",
        name: "Enno Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.safematrix",
        name: "Safematrix",
        hasMobileSupport: true
    },
    {
        id: "pro.assure",
        name: "Assure",
        hasMobileSupport: true
    },
    {
        id: "com.neftipedia",
        name: "NeftiWallet",
        hasMobileSupport: true
    },
    {
        id: "io.goldbit",
        name: "GoldBit",
        hasMobileSupport: true
    },
    {
        id: "com.coingrig",
        name: "Coingrig",
        hasMobileSupport: true
    },
    {
        id: "io.xfun",
        name: "XFUN Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.antiersolutions",
        name: "Ancrypto Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.itoken",
        name: "iToken Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.cardstack",
        name: "Card Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.slavi",
        name: "Slavi Wallet",
        hasMobileSupport: true
    },
    {
        id: "tech.defiantapp",
        name: "Defiant",
        hasMobileSupport: true
    },
    {
        id: "com.dexari",
        name: "Dexari",
        hasMobileSupport: true
    },
    {
        id: "io.cfcx",
        name: "CFCX",
        hasMobileSupport: true
    },
    {
        id: "com.socjsc",
        name: "SOC Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.tokenb",
        name: "TokenB",
        hasMobileSupport: true
    },
    {
        id: "org.onyx",
        name: "Onyx Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.gk8",
        name: "GK8",
        hasMobileSupport: true
    },
    {
        id: "com.anchorage",
        name: "Anchorage Digital ",
        hasMobileSupport: true
    },
    {
        id: "com.hashport.wallet",
        name: "HashPort Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.billionwallet",
        name: "Billion Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.dlicom",
        name: "DLICOM",
        hasMobileSupport: true
    },
    {
        id: "com.tychiwallet",
        name: "Tychi Wallet",
        hasMobileSupport: true
    },
    {
        id: "at.swe",
        name: "Sweat Wallet",
        hasMobileSupport: true
    },
    {
        id: "network.wali",
        name: "Wali Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.diamante",
        name: "DIAM Wallet",
        hasMobileSupport: true
    },
    {
        id: "ai.interlinklabs",
        name: "ITLX Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.walllet",
        name: "walllet.com",
        hasMobileSupport: true
    },
    {
        id: "org.lunascape",
        name: "Lunascape Browser",
        hasMobileSupport: true
    },
    {
        id: "com.nvxowallet",
        name: "NVXO Wallet",
        hasMobileSupport: true
    },
    {
        id: "today.paywithcrypto.wallet",
        name: "PWC Super App",
        hasMobileSupport: true
    },
    {
        id: "ai.iluminary",
        name: "iLuminaryAi Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.reactwallet",
        name: "React Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.rewardywallet",
        name: "Rewardy Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.walletv",
        name: "Wallet V",
        hasMobileSupport: true
    },
    {
        id: "app.outlawgames",
        name: "Outlaw Wallet",
        hasMobileSupport: true
    },
    {
        id: "io.ironwallet",
        name: "IronWallet",
        hasMobileSupport: true
    },
    {
        id: "com.mecowallet",
        name: "MeCo Wallet",
        hasMobileSupport: true
    },
    {
        id: "com.onlybulls",
        name: "OnlyBulls Wallet",
        hasMobileSupport: true
    },
    {
        id: "me.qiewallet",
        name: "QIE Wallet",
        hasMobileSupport: true
    },
    {
        id: "fund.lflabs",
        name: "LF Wallet App",
        hasMobileSupport: true
    },
    {
        id: "io.walletverse",
        name: "Walletverse",
        hasMobileSupport: true
    },
    {
        id: "com.berasig",
        name: "BeraSig",
        hasMobileSupport: true
    },
    {
        id: "app.phantom",
        name: "Phantom",
        hasMobileSupport: false
    },
    {
        id: "com.coinbase.wallet",
        name: "Base (formerly Coinbase Wallet)",
        hasMobileSupport: false
    },
    {
        id: "io.rabby",
        name: "Rabby",
        hasMobileSupport: false
    },
    {
        id: "com.brave.wallet",
        name: "Brave Wallet",
        hasMobileSupport: false
    },
    {
        id: "fi.nu",
        name: "NUFI",
        hasMobileSupport: false
    },
    {
        id: "pro.hinkal.walletconnect",
        name: "Hinkal Wallet",
        hasMobileSupport: false
    },
    {
        id: "com.moongate.one",
        name: "MG",
        hasMobileSupport: false
    },
    {
        id: "tech.levain",
        name: "Levain",
        hasMobileSupport: false
    },
    {
        id: "com.enkrypt",
        name: "Enkrypt",
        hasMobileSupport: false
    },
    {
        id: "com.scramble",
        name: "Scramble",
        hasMobileSupport: false
    },
    {
        id: "io.finoa",
        name: "FinoaConnect",
        hasMobileSupport: false
    },
    {
        id: "com.blazpay.wallet",
        name: "Blazpay",
        hasMobileSupport: false
    },
    {
        id: "io.getjoin.prd",
        name: "JOIN MOBILE APP",
        hasMobileSupport: false
    },
    {
        id: "xyz.talisman",
        name: "Talisman Wallet",
        hasMobileSupport: false
    },
    {
        id: "eu.flashsoft.clear-wallet",
        name: "clear-wallet",
        hasMobileSupport: false
    },
    {
        id: "app.berasig",
        name: "BeraSig",
        hasMobileSupport: false
    },
    {
        id: "com.wallet.reown",
        name: "Leather",
        hasMobileSupport: false
    },
    {
        id: "io.runonflux.sspwallet",
        name: "SSP",
        hasMobileSupport: false
    },
    {
        id: "com.blanqlabs.wallet",
        name: "Blanq",
        hasMobileSupport: false
    },
    {
        id: "io.hero.wallet",
        name: "Hero Wallet",
        hasMobileSupport: false
    },
    {
        id: "network.verified.custody",
        name: "Verified Wallet",
        hasMobileSupport: false
    },
    {
        id: "console.utila.io",
        name: "Utila",
        hasMobileSupport: false
    },
    {
        id: "com.micet.wallet",
        name: "Micet",
        hasMobileSupport: false
    },
    {
        id: "world.dolphinode.chain",
        name: "NodeVault",
        hasMobileSupport: false
    },
    {
        id: "com.lootrush",
        name: "LootRush",
        hasMobileSupport: false
    },
    {
        id: "xyz.dawnwallet",
        name: "Dawn Wallet",
        hasMobileSupport: false
    },
    {
        id: "xyz.abs",
        name: "Abstract Global Wallet",
        hasMobileSupport: false
    },
    {
        id: "sh.frame",
        name: "Frame Wallet",
        hasMobileSupport: false
    },
    {
        id: "io.useglyph",
        name: "Glyph Wallet",
        hasMobileSupport: false
    },
    {
        id: "org.base.account",
        name: "Base Account",
        hasMobileSupport: false
    },
    {
        id: "smart",
        name: "Smart Wallet",
        hasMobileSupport: true
    },
    {
        id: "inApp",
        name: "In-App Wallet",
        hasMobileSupport: true
    },
    {
        id: "embedded",
        name: "In-App Wallet",
        hasMobileSupport: true
    },
    {
        id: "walletConnect",
        name: "WalletConnect",
        hasMobileSupport: false
    }
];
const __TURBOPACK__default__export__ = ALL_MINIMAL_WALLET_INFOS;
 //# sourceMappingURL=wallet-infos.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/passkeys.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PasskeyWebClient",
    ()=>PasskeyWebClient,
    "hasStoredPasskey",
    ()=>hasStoredPasskey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$passwordless$2d$id$2f$webauthn$2f$dist$2f$browser$2f$webauthn$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/@passwordless-id/webauthn/dist/browser/webauthn.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$storage$2f$webStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/storage/webStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$uint8$2d$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/uint8-array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$authentication$2f$client$2d$scoped$2d$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/client-scoped-storage.js [app-client] (ecmascript)");
;
;
;
;
class PasskeyWebClient {
    isAvailable() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$passwordless$2d$id$2f$webauthn$2f$dist$2f$browser$2f$webauthn$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].isAvailable();
    }
    async register(args) {
        const { name, challenge, rp } = args;
        const registration = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$passwordless$2d$id$2f$webauthn$2f$dist$2f$browser$2f$webauthn$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].register({
            attestation: true,
            challenge,
            domain: rp.id,
            user: name,
            userVerification: "required"
        });
        const clientDataB64 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$uint8$2d$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64UrlToBase64"])(registration.response.clientDataJSON);
        const clientDataParsed = JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$uint8$2d$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64ToString"])(clientDataB64));
        return {
            authenticatorData: registration.response.authenticatorData,
            clientData: registration.response.clientDataJSON,
            credential: {
                algorithm: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$passwordless$2d$id$2f$webauthn$2f$dist$2f$browser$2f$webauthn$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsers"].getAlgoName(registration.response.publicKeyAlgorithm),
                publicKey: registration.response.publicKey
            },
            credentialId: registration.id,
            origin: clientDataParsed.origin
        };
    }
    async authenticate(args) {
        const { credentialId, challenge, rp } = args;
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$passwordless$2d$id$2f$webauthn$2f$dist$2f$browser$2f$webauthn$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].authenticate({
            allowCredentials: credentialId ? [
                credentialId
            ] : [],
            challenge,
            domain: rp.id,
            userVerification: "required"
        });
        const clientDataB64 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$uint8$2d$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64UrlToBase64"])(result.response.clientDataJSON);
        const clientDataParsed = JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$uint8$2d$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64ToString"])(clientDataB64));
        return {
            authenticatorData: result.response.authenticatorData,
            clientData: result.response.clientDataJSON,
            credentialId: result.id,
            origin: clientDataParsed.origin,
            signature: result.response.signature
        };
    }
}
async function hasStoredPasskey(client, ecosystemId, storage) {
    const clientStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$authentication$2f$client$2d$scoped$2d$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientScopedStorage"]({
        clientId: client.clientId,
        ecosystem: ecosystemId ? {
            id: ecosystemId
        } : undefined,
        storage: storage ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$storage$2f$webStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webLocalStorage"]
    });
    const credId = await clientStorage.getPasskeyCredentialId();
    return !!credId;
} //# sourceMappingURL=passkeys.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_PROJECT_ID",
    ()=>DEFAULT_PROJECT_ID,
    "NAMESPACE",
    ()=>NAMESPACE
]);
const DEFAULT_PROJECT_ID = "08c4b07e3ad25f1a27c14a4e8cecb6f0";
const NAMESPACE = "eip155"; //# sourceMappingURL=constants.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/send-raw-transaction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @internal
 */ __turbopack_context__.s([
    "handleSendRawTransactionRequest",
    ()=>handleSendRawTransactionRequest
]);
async function handleSendRawTransactionRequest(options) {
    const { account, chainId, params: [rawTransaction] } = options;
    if (!account.sendRawTransaction) {
        throw new Error("The current account does not support sending raw transactions");
    }
    const txResult = await account.sendRawTransaction({
        chainId,
        rawTransaction
    });
    return txResult.transactionHash;
} //# sourceMappingURL=send-raw-transaction.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseEip155ChainId",
    ()=>parseEip155ChainId,
    "validateAccountAddress",
    ()=>validateAccountAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/address.js [app-client] (ecmascript)");
;
function validateAccountAddress(account, address) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checksumAddress"])(account.address) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checksumAddress"])(address)) {
        throw new Error(`Failed to validate account address (${account.address}), differs from ${address}`);
    }
}
function parseEip155ChainId(chainId) {
    const chainIdParts = chainId.split(":");
    const chainIdAsNumber = Number.parseInt(chainIdParts[1] ?? "0");
    if (chainIdParts.length !== 2 || chainIdParts[0] !== "eip155" || chainIdAsNumber === 0 || !chainIdAsNumber) {
        throw new Error(`Invalid chainId ${chainId}, should have the format 'eip155:1'`);
    }
    return chainIdAsNumber;
} //# sourceMappingURL=utils.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/send-transaction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleSendTransactionRequest",
    ()=>handleSendTransactionRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$send$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/send-transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$prepare$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/prepare-transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/utils.js [app-client] (ecmascript)");
;
;
;
;
;
async function handleSendTransactionRequest(options) {
    const { account, chainId, thirdwebClient, params: [transaction] } = options;
    if (transaction.from !== undefined) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAccountAddress"])(account, transaction.from);
    }
    const preparedTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$prepare$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareTransaction"])({
        chain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChain"])(chainId),
        client: thirdwebClient,
        data: transaction.data,
        gas: transaction.gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(transaction.gas) : undefined,
        gasPrice: transaction.gasPrice ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(transaction.gasPrice) : undefined,
        to: transaction.to,
        value: transaction.value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(transaction.value) : undefined
    });
    const txResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$send$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])({
        account,
        transaction: preparedTransaction
    });
    return txResult.transactionHash;
} //# sourceMappingURL=send-transaction.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/sign.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleSignRequest",
    ()=>handleSignRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/utils.js [app-client] (ecmascript)");
;
async function handleSignRequest(options) {
    const { account, params } = options;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAccountAddress"])(account, params[1]);
    return account.signMessage({
        message: {
            raw: params[0]
        }
    });
} //# sourceMappingURL=sign.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/sign-transaction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleSignTransactionRequest",
    ()=>handleSignTransactionRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/utils.js [app-client] (ecmascript)");
;
;
async function handleSignTransactionRequest(options) {
    const { account, params: [transaction] } = options;
    if (!account.signTransaction) {
        throw new Error("The current account does not support signing transactions");
    }
    if (transaction.from !== undefined) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAccountAddress"])(account, transaction.from);
    }
    return account.signTransaction({
        data: transaction.data,
        gas: transaction.gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(transaction.gas) : undefined,
        gasPrice: transaction.gasPrice ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(transaction.gasPrice) : undefined,
        nonce: transaction.nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToNumber"])(transaction.nonce) : undefined,
        to: transaction.to,
        value: transaction.value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(transaction.value) : undefined
    });
} //# sourceMappingURL=sign-transaction.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/sign-typed-data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleSignTypedDataRequest",
    ()=>handleSignTypedDataRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/utils.js [app-client] (ecmascript)");
;
async function handleSignTypedDataRequest(options) {
    const { account, params } = options;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAccountAddress"])(account, params[0]);
    return account.signTypedData(// The data could be sent to us as a string or object, depending on the level of parsing on the client side
    typeof params[1] === "string" ? JSON.parse(params[1]) : params[1]);
} //# sourceMappingURL=sign-typed-data.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/switch-chain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleSwitchChain",
    ()=>handleSwitchChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-client] (ecmascript) <locals>");
;
;
async function handleSwitchChain(options) {
    const { wallet, params } = options;
    if (wallet.getChain()?.id === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToNumber"])(params[0].chainId)) {
        return "0x1";
    }
    await wallet.switchChain((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToNumber"])(params[0].chainId)));
    return "0x1";
} //# sourceMappingURL=switch-chain.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/session-store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSessions",
    ()=>getSessions,
    "initializeSessionStore",
    ()=>initializeSessionStore,
    "removeSession",
    ()=>removeSession,
    "saveSession",
    ()=>saveSession,
    "setWalletConnectSessions",
    ()=>setWalletConnectSessions,
    "walletConnectSessions",
    ()=>walletConnectSessions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$authentication$2f$client$2d$scoped$2d$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/client-scoped-storage.js [app-client] (ecmascript)");
;
;
let walletConnectSessions;
async function getSessions() {
    if (!walletConnectSessions) {
        return [];
    }
    const stringifiedSessions = await walletConnectSessions.getWalletConnectSessions();
    return JSON.parse(stringifiedSessions ?? "[]");
}
function initializeSessionStore(options) {
    if (!walletConnectSessions) {
        walletConnectSessions = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$in$2d$app$2f$core$2f$authentication$2f$client$2d$scoped$2d$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientScopedStorage"]({
            clientId: options.clientId,
            storage: null
        });
    }
}
async function saveSession(session) {
    if (!walletConnectSessions) {
        return;
    }
    const stringifiedSessions = await walletConnectSessions.getWalletConnectSessions();
    const sessions = JSON.parse(stringifiedSessions ?? "[]");
    sessions.push(session);
    await walletConnectSessions.saveWalletConnectSessions((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(sessions));
}
async function removeSession(session) {
    if (!walletConnectSessions) {
        return;
    }
    const stringifiedSessions = await walletConnectSessions.getWalletConnectSessions();
    const sessions = JSON.parse(stringifiedSessions ?? "[]");
    const newSessions = sessions.filter((s)=>s.topic !== session.topic);
    await walletConnectSessions.saveWalletConnectSessions((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(newSessions));
}
function setWalletConnectSessions(storage) {
    walletConnectSessions = storage;
} //# sourceMappingURL=session-store.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DefaultWalletConnectRequestHandlers",
    ()=>DefaultWalletConnectRequestHandlers,
    "clearWalletConnectClientCache",
    ()=>clearWalletConnectClientCache,
    "createWalletConnectClient",
    ()=>createWalletConnectClient,
    "createWalletConnectSession",
    ()=>createWalletConnectSession,
    "disconnectWalletConnectSession",
    ()=>disconnectWalletConnectSession,
    "getActiveWalletConnectSessions",
    ()=>getActiveWalletConnectSessions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/@walletconnect/sign-client/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$defaultDappMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/utils/defaultDappMetadata.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$request$2d$handlers$2f$send$2d$raw$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/send-raw-transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$request$2d$handlers$2f$send$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/send-transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$request$2d$handlers$2f$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/sign.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$request$2d$handlers$2f$sign$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/sign-transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$request$2d$handlers$2f$sign$2d$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/sign-typed-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$request$2d$handlers$2f$switch$2d$chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/switch-chain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$session$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/session-store.js [app-client] (ecmascript)");
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
let walletConnectClientCache = new WeakMap();
const clearWalletConnectClientCache = ()=>{
    walletConnectClientCache = new WeakMap();
};
const DefaultWalletConnectRequestHandlers = {
    eth_sendRawTransaction: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$request$2d$handlers$2f$send$2d$raw$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleSendRawTransactionRequest"],
    eth_sendTransaction: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$request$2d$handlers$2f$send$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleSendTransactionRequest"],
    eth_sign: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$request$2d$handlers$2f$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleSignRequest"],
    eth_signTransaction: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$request$2d$handlers$2f$sign$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleSignTransactionRequest"],
    eth_signTypedData: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$request$2d$handlers$2f$sign$2d$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleSignTypedDataRequest"],
    eth_signTypedData_v4: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$request$2d$handlers$2f$sign$2d$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleSignTypedDataRequest"],
    personal_sign: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$request$2d$handlers$2f$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleSignRequest"],
    wallet_addEthereumChain: (_)=>{
        throw new Error("Unsupported request method: wallet_addEthereumChain");
    },
    wallet_switchEthereumChain: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$request$2d$handlers$2f$switch$2d$chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleSwitchChain"]
};
async function createWalletConnectClient(options) {
    const { wallet, requestHandlers, onConnect, onDisconnect, client: thirdwebClient } = options;
    const chains = (()=>{
        if (options.chains && options.chains.length > 10) {
            console.warn("WalletConnect: Can specify no more than 10 chains, truncating to the first 10 provided chains...");
            return options.chains.slice(0, 10);
        }
        return options.chains;
    })();
    if (walletConnectClientCache.has(thirdwebClient)) {
        return walletConnectClientCache.get(thirdwebClient);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$session$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeSessionStore"])({
        clientId: options.client.clientId
    });
    const defaults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$utils$2f$defaultDappMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultAppMetadata"])();
    const walletConnectClient = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignClient"].init({
        metadata: {
            description: options.appMetadata?.description ?? defaults.description,
            icons: [
                options.appMetadata?.logoUrl ?? defaults.logoUrl
            ],
            name: options.appMetadata?.name ?? defaults.name,
            url: options.appMetadata?.url ?? defaults.url
        },
        projectId: options.projectId ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PROJECT_ID"]
    });
    walletConnectClient.on("session_proposal", async (event)=>{
        const { onSessionProposal } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/session-proposal.js [app-client] (ecmascript, async loader)");
        await onSessionProposal({
            chains,
            event,
            onConnect,
            wallet,
            walletConnectClient
        }).catch((error)=>{
            if (options.onError) {
                options.onError(error);
            } else {
                throw error;
            }
        });
    });
    walletConnectClient.on("session_request", async (event)=>{
        const { fulfillRequest } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/session-request.js [app-client] (ecmascript, async loader)");
        await fulfillRequest({
            event,
            handlers: requestHandlers,
            thirdwebClient,
            wallet,
            walletConnectClient
        }).catch((error)=>{
            if (options.onError) {
                options.onError(error);
            } else {
                throw error;
            }
        });
    });
    walletConnectClient.on("session_event", async (_event)=>{
    // TODO (accountsChanged, chainChanged)
    });
    walletConnectClient.on("session_ping", (_event)=>{
    // TODO
    });
    walletConnectClient.on("session_delete", async (event)=>{
        await disconnectWalletConnectSession({
            session: {
                topic: event.topic
            },
            walletConnectClient
        }).catch((error)=>{
            if (options.onError) {
                options.onError(error);
            } else {
                throw error;
            }
        });
    });
    // Disconnects can come from the user or the connected app, so we inject the callback to ensure its always triggered
    const _disconnect = walletConnectClient.disconnect;
    walletConnectClient.disconnect = async (args)=>{
        const result = await _disconnect(args).catch(()=>{
        // no-op if already disconnected
        });
        if (onDisconnect) {
            disconnectHook({
                onDisconnect,
                topic: args.topic
            });
        }
        return result;
    };
    walletConnectClientCache.set(options.client, walletConnectClient);
    return walletConnectClient;
}
function createWalletConnectSession(options) {
    const { uri, walletConnectClient } = options;
    walletConnectClient.core.pairing.pair({
        uri
    });
}
async function getActiveWalletConnectSessions() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$session$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessions"])();
}
async function disconnectWalletConnectSession(options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$session$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeSession"])(options.session);
    try {
        await options.walletConnectClient.disconnect({
            reason: {
                code: 6000,
                message: "Disconnected"
            },
            topic: options.session.topic
        });
    } catch  {
    // ignore, the session doesn't exist already
    }
}
/**
 * @internal
 */ async function disconnectHook(options) {
    const { topic, onDisconnect } = options;
    const sessions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$session$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessions"])();
    onDisconnect(sessions.find((s)=>s.topic === topic) ?? {
        topic
    });
} //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=13e8b_thirdweb_dist_esm_wallets_197901cb._.js.map