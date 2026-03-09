module.exports = [
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Details.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectedToSmartWallet",
    ()=>ConnectedToSmartWallet,
    "ConnectedWalletDetails",
    ()=>ConnectedWalletDetails,
    "DetailsModal",
    ()=>DetailsModal,
    "InAppWalletUserInfo",
    ()=>InAppWalletUserInfo,
    "NetworkSwitcherButton",
    ()=>NetworkSwitcherButton,
    "StyledChevronRightIcon",
    ()=>StyledChevronRightIcon,
    "SwitchNetworkButton",
    ()=>SwitchNetworkButton,
    "detailsBtn_formatFiatBalanceForButton",
    ()=>detailsBtn_formatFiatBalanceForButton,
    "detailsBtn_formatTokenBalanceForButton",
    ()=>detailsBtn_formatTokenBalanceForButton,
    "useWalletDetailsModal",
    ()=>useWalletDetailsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$pay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/analytics/track/pay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/contract/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$utils$2f$storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/utils/storage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$bytecode$2f$is$2d$contract$2d$deployed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/bytecode/is-contract-deployed.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$storage$2f$webStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/storage/webStorage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$is$2d$ecosystem$2d$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/ecosystem/is-ecosystem-wallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$is$2d$smart$2d$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/is-smart-wallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$account$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/account/provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$CustomThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/design-system/CustomThemeProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/design-system/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$others$2f$useChainQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/hooks/others/useChainQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveWalletChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveWalletChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useAdminWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useAdminWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useDisconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useDisconnect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useSwitchActiveWalletChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useSwitchActiveWalletChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$providers$2f$RootElementContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/providers/RootElementContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$utils$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/utils/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$utils$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/utils/wallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$providers$2f$wallet$2d$ui$2d$states$2d$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/providers/wallet-ui-states-provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$Bridge$2f$BuyWidget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/Bridge/BuyWidget.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/components/basic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$buttons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/components/buttons.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$ChainActiveDot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/components/ChainActiveDot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$CopyIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/components/CopyIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$fallbackChainIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/components/fallbackChainIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$IconContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/components/IconContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/components/Modal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/components/Skeleton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Spacer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/components/Spacer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Spinner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/components/Spinner.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/components/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/components/text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$WalletImage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/components/WalletImage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$design$2d$system$2f$animations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/design-system/animations.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$design$2d$system$2f$elements$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/design-system/elements.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Account/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Account/avatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$balance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Account/balance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$blobbie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Account/blobbie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$name$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Account/name.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Chain$2f$icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Chain/icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Chain$2f$name$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Chain/name.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Chain$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Chain/provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$icons$2f$CoinsIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/CoinsIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$icons$2f$FundsIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/FundsIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$icons$2f$OutlineWalletIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/OutlineWalletIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$locale$2f$getConnectLocale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/locale/getConnectLocale.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$MenuButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/MenuButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$Modal$2f$screen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/screen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$NetworkSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/NetworkSelector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$Details$2f$WalletManagerScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Details/WalletManagerScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$LinkedProfilesScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/LinkedProfilesScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$LinkProfileScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/LinkProfileScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$ManageWalletScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ManageWalletScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/PrivateKey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$ReceiveFunds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ReceiveFunds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$SendFunds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/SendFunds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$ViewAssets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ViewAssets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$ViewNFTs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ViewNFTs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$ViewTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ViewTokens.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$WalletConnectReceiverScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletConnectReceiverScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$TransactionsScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/TransactionsScreen.js [app-ssr] (ecmascript)");
"use client";
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
;
const TW_CONNECTED_WALLET = "tw-connected-wallet";
const LocalhostChainId = 1337;
const ConnectedWalletDetails = (props)=>{
    const { connectLocale: locale, client } = props;
    const setRootEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$providers$2f$RootElementContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SetRootElementContext"]);
    const walletChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveWalletChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActiveWalletChain"])();
    function closeModal() {
        setRootEl(null);
    }
    function openModal() {
        setRootEl((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DetailsModal, {
            assetTabs: props.detailsModal?.assetTabs,
            chains: props.chains,
            client: client,
            closeModal: closeModal,
            connectOptions: props.connectOptions,
            detailsModal: props.detailsModal,
            displayBalanceToken: props.detailsButton?.displayBalanceToken,
            locale: locale,
            onDisconnect: props.onDisconnect,
            supportedNFTs: props.supportedNFTs,
            supportedTokens: props.supportedTokens,
            theme: props.theme,
            showBalanceInFiat: props.detailsButton?.showBalanceInFiat
        }));
    }
    const isNetworkMismatch = props.chain && walletChain && walletChain.id !== props.chain.id;
    if (props.detailsButton?.render) {
        return(// biome-ignore lint/a11y/useKeyWithClickEvents: ok
        // biome-ignore lint/a11y/noStaticElementInteractions: TODO
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            onClick: openModal,
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(props.detailsButton.render, {})
        }));
    }
    if (props.chain && isNetworkMismatch) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SwitchNetworkButton, {
            className: props.switchButton?.className,
            connectLocale: locale,
            style: props.switchButton?.style,
            switchNetworkBtnTitle: props.switchButton?.label,
            targetChain: props.chain
        });
    }
    const combinedClassName = `${TW_CONNECTED_WALLET} ${props.detailsButton?.className || ""}`;
    const tokenAddress = props.detailsButton?.displayBalanceToken?.[Number(walletChain?.id)];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(WalletInfoButton, {
        className: combinedClassName,
        "data-test": "connected-wallet-details",
        onClick: openModal,
        style: props.detailsButton?.style,
        type: "button",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                style: {
                    borderRadius: "100%",
                    height: "35px",
                    overflow: "hidden",
                    width: "35px"
                },
                children: props.detailsButton?.connectedAccountAvatarUrl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("img", {
                    alt: "",
                    src: props.detailsButton.connectedAccountAvatarUrl,
                    style: {
                        height: "100%",
                        objectFit: "cover",
                        width: "100%"
                    }
                }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountAvatar"], {
                    className: `${TW_CONNECTED_WALLET}__account_avatar`,
                    fallbackComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$blobbie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountBlobbie"], {
                        className: `${TW_CONNECTED_WALLET}__account_avatar`,
                        size: 35
                    }),
                    loadingComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$blobbie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountBlobbie"], {
                        className: `${TW_CONNECTED_WALLET}__account_avatar`,
                        size: 35
                    }),
                    queryOptions: {
                        refetchOnMount: false,
                        refetchOnWindowFocus: false
                    },
                    style: {
                        height: "100%",
                        objectFit: "cover",
                        width: "100%"
                    }
                })
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                flex: "column",
                gap: "4xs",
                style: {
                    borderRadius: `0 ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md} 0`,
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                children: [
                    props.detailsButton?.connectedAccountName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        className: `${TW_CONNECTED_WALLET}__address`,
                        color: "primaryText",
                        size: "xs",
                        weight: 500,
                        children: props.detailsButton.connectedAccountName
                    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        className: `${TW_CONNECTED_WALLET}__address`,
                        color: "primaryText",
                        size: "xs",
                        weight: 500,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$name$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountName"], {
                            fallbackComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountAddress"], {
                                formatFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shortenAddress"]
                            }),
                            loadingComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountAddress"], {
                                formatFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shortenAddress"]
                            })
                        })
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        className: `${TW_CONNECTED_WALLET}__balance`,
                        color: "secondaryText",
                        size: "xs",
                        style: {
                            alignItems: "center",
                            display: "flex",
                            gap: "2px"
                        },
                        weight: 400,
                        children: props.detailsButton?.showBalanceInFiat ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$balance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountBalance"], {
                                    chain: walletChain,
                                    fallbackComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        height: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSize"].xs,
                                        width: "50px"
                                    }),
                                    loadingComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        height: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSize"].xs,
                                        width: "50px"
                                    }),
                                    tokenAddress: tokenAddress
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$balance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountBalance"], {
                                    chain: walletChain,
                                    formatFn: detailsBtn_formatFiatBalanceForButton,
                                    loadingComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        height: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSize"].xs,
                                        width: "20px"
                                    }),
                                    showBalanceInFiat: "USD",
                                    tokenAddress: tokenAddress
                                })
                            ]
                        }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$balance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountBalance"], {
                            chain: walletChain,
                            fallbackComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                height: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSize"].xs,
                                width: "70px"
                            }),
                            formatFn: detailsBtn_formatTokenBalanceForButton,
                            loadingComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                height: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSize"].xs,
                                width: "70px"
                            }),
                            tokenAddress: tokenAddress
                        })
                    })
                ]
            })
        ]
    });
};
function detailsBtn_formatFiatBalanceForButton(props) {
    return ` (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$utils$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAccountFiatBalance"])({
        ...props,
        decimals: 0
    })})`;
}
function detailsBtn_formatTokenBalanceForButton(props) {
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$utils$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAccountTokenBalance"])({
        ...props,
        decimals: props.balance < 1 ? 5 : 4
    })}`;
}
function DetailsModal(props) {
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(props.initialScreen || "main");
    const { disconnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useDisconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDisconnect"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const { client, locale } = props;
    const walletChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveWalletChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActiveWalletChain"])();
    const activeAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActiveAccount"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$CustomThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseTheme"])(props.theme);
    const activeWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActiveWallet"])();
    const chainFaucetsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$others$2f$useChainQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainFaucets"])(walletChain);
    const chainMetadataQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$others$2f$useChainQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainMetadata"])(walletChain);
    const disableSwitchChain = !activeWallet?.switchChain;
    const screenSetup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$Modal$2f$screen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSetupScreen"])({
        size: "compact",
        wallets: activeWallet ? [
            activeWallet
        ] : [],
        welcomeScreen: undefined
    });
    const closeModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsOpen(false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onModalUnmount"])(()=>{
            props.closeModal();
        });
    }, [
        props.closeModal
    ]);
    function handleDisconnect(info) {
        setIsOpen(false);
        props.closeModal();
        props.onDisconnect(info);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeAccount) {
            closeModal();
        }
    }, [
        activeAccount,
        closeModal
    ]);
    const { hideSendFunds, hideReceiveFunds, hideBuyFunds } = props.detailsModal || {};
    const hideAllButtons = hideSendFunds && hideReceiveFunds && hideBuyFunds;
    const avatarContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
        style: {
            height: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].xl}px`,
            position: "relative",
            width: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].xl}px`
        },
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                style: {
                    borderRadius: "100%",
                    height: "100%",
                    overflow: "hidden",
                    width: "100%"
                },
                children: props.detailsModal?.connectedAccountAvatarUrl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("img", {
                    alt: "",
                    src: props.detailsModal.connectedAccountAvatarUrl,
                    style: {
                        height: "100%",
                        objectFit: "cover",
                        width: "100%"
                    }
                }) : activeAccount && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountAvatar"], {
                    fallbackComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$blobbie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountBlobbie"], {
                        size: Number(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].xxl)
                    }),
                    loadingComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$blobbie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountBlobbie"], {
                        size: Number(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].xxl)
                    }),
                    style: {
                        height: "100%",
                        objectFit: "cover",
                        width: "100%"
                    }
                })
            }),
            !props.detailsModal?.hideSwitchWallet ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                style: {
                    bottom: -2,
                    position: "absolute",
                    right: -2
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$IconContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconContainer"], {
                    padding: "4px",
                    style: {
                        background: theme.colors.modalBg
                    },
                    children: activeWallet && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$WalletImage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletImage"], {
                        client: client,
                        id: activeWallet.id,
                        size: "12",
                        style: {
                            borderRadius: 0
                        }
                    })
                })
            }) : null
        ]
    });
    let content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: `${TW_CONNECTED_WALLET}__default_modal_screen`,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Spacer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spacer"], {
                y: "xs"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                center: "y",
                flex: "row",
                gap: "sm",
                px: "lg",
                style: {
                    paddingBottom: hideAllButtons ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].md : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].lg,
                    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].lg
                },
                children: [
                    props.detailsModal?.hideSwitchWallet ? avatarContent : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToolTip"], {
                        tip: "Switch wallet",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            onClick: ()=>{
                                setScreen("wallet-manager");
                            },
                            onKeyDown: (e)=>{
                                if (e.key === "w") {
                                    setScreen("wallet-manager");
                                }
                            },
                            style: {
                                cursor: "pointer"
                            },
                            children: avatarContent
                        })
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                        flex: "column",
                        gap: "3xs",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                style: {
                                    alignItems: "center",
                                    display: "flex",
                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].xxs
                                },
                                children: [
                                    props.detailsModal?.connectedAccountName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                        color: "primaryText",
                                        size: "md",
                                        weight: 500,
                                        children: props.detailsModal.connectedAccountName
                                    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                        color: "primaryText",
                                        size: "md",
                                        weight: 500,
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$name$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountName"], {
                                            fallbackComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountAddress"], {
                                                formatFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shortenAddress"]
                                            }),
                                            loadingComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountAddress"], {
                                                formatFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shortenAddress"]
                                            })
                                        })
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$buttons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$CopyIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CopyIcon"], {
                                            text: activeAccount?.address || "",
                                            tip: locale.copyAddress
                                        })
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(InAppWalletUserInfo, {
                                client: client,
                                locale: locale
                            })
                        ]
                    })
                ]
            }),
            !hideAllButtons && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                        px: "lg",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                            className: "tw-highlight-buttons",
                            style: {
                                display: "flex",
                                gap: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].xs
                            },
                            children: [
                                !hideSendFunds && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$buttons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "tw-highlight-button__send",
                                    onClick: ()=>{
                                        setScreen("send");
                                    },
                                    style: {
                                        alignItems: "center",
                                        display: "flex",
                                        flex: 1,
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSize"].sm,
                                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].xs,
                                        padding: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].sm
                                    },
                                    variant: "outline",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                                            center: "both",
                                            color: "secondaryText",
                                            flex: "row",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaperPlaneIcon"], {
                                                height: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].sm,
                                                style: {
                                                    transform: "translateY(-10%) rotate(-45deg) "
                                                },
                                                width: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].sm
                                            })
                                        }),
                                        locale.send
                                    ]
                                }),
                                !hideReceiveFunds && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$buttons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "tw-highlight-button__receive",
                                    onClick: ()=>{
                                        setScreen("receive");
                                    },
                                    style: {
                                        alignItems: "center",
                                        display: "flex",
                                        flex: 1,
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSize"].sm,
                                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].xs,
                                        padding: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].sm
                                    },
                                    variant: "outline",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                                            center: "both",
                                            color: "secondaryText",
                                            flex: "row",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PinBottomIcon"], {
                                                height: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].sm,
                                                width: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].sm
                                            })
                                        }),
                                        locale.receive
                                    ]
                                }),
                                !hideBuyFunds && chainMetadataQuery.data && !chainMetadataQuery.data.testnet && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$buttons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "tw-highlight-button__buy",
                                    onClick: ()=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$pay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackPayEvent"])({
                                            client: client,
                                            event: "details_modal_buy_click",
                                            walletAddress: activeAccount?.address,
                                            walletType: activeWallet?.id
                                        });
                                        setScreen("buy");
                                    },
                                    style: {
                                        alignItems: "center",
                                        display: "flex",
                                        flex: 1,
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSize"].sm,
                                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].xs,
                                        padding: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].sm
                                    },
                                    variant: "outline",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                                            center: "both",
                                            color: "secondaryText",
                                            flex: "row",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlusIcon"], {
                                                height: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].sm,
                                                width: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].sm
                                            })
                                        }),
                                        locale.buy
                                    ]
                                })
                            ]
                        })
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Spacer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spacer"], {
                        y: "md"
                    })
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                px: "md",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                        flex: "column",
                        style: {
                            gap: "1px"
                        },
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(NetworkSwitcherButton, {
                                client: props.client,
                                disableSwitchChain: disableSwitchChain,
                                displayBalanceToken: props.displayBalanceToken,
                                setScreen: ()=>setScreen("network-switcher"),
                                showBalanceInFiat: props.detailsModal?.showBalanceInFiat
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$MenuButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuButton"], {
                                className: "tw-view-transactions-button",
                                onClick: ()=>{
                                    setScreen("transactions");
                                },
                                style: {
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSize"].sm
                                },
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextAlignJustifyIcon"], {
                                        height: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].md,
                                        width: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].md
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                                        center: "y",
                                        flex: "row",
                                        gap: "xs",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                            color: "primaryText",
                                            children: locale.transactions
                                        })
                                    })
                                ]
                            }),
                            (props.assetTabs === undefined || props.assetTabs.length > 0) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$MenuButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuButton"], {
                                className: "tw-view-assets-button",
                                onClick: ()=>{
                                    setScreen("view-assets");
                                },
                                style: {
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSize"].sm
                                },
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$icons$2f$CoinsIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoinsIcon"], {
                                        size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].md
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                        color: "primaryText",
                                        children: locale.viewFunds.viewAssets
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$MenuButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuButton"], {
                                className: "tw-manage-wallet-button",
                                onClick: ()=>{
                                    setScreen("manage-wallet");
                                },
                                style: {
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontSize"].sm
                                },
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$icons$2f$OutlineWalletIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OutlineWalletIcon"], {
                                        size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].md
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                        color: "primaryText",
                                        children: props.locale.manageWallet.title
                                    })
                                ]
                            }),
                            (props.detailsModal?.showTestnetFaucet ?? false) && (chainFaucetsQuery.faucets.length > 0 || walletChain?.id === LocalhostChainId) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$MenuButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuLink"], {
                                className: "tw-request-testnet-funds-button",
                                as: "a",
                                href: chainFaucetsQuery.faucets ? chainFaucetsQuery.faucets[0] : "#",
                                style: {
                                    color: "inherit",
                                    textDecoration: "none"
                                },
                                target: "_blank",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                                        center: "both",
                                        color: "secondaryText",
                                        flex: "row",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$icons$2f$FundsIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FundsIcon"], {
                                            size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].md
                                        })
                                    }),
                                    locale.requestTestnetFunds
                                ]
                            }),
                            props.detailsModal?.footer && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(props.detailsModal.footer, {
                                close: closeModal
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Spacer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spacer"], {
                        y: "md"
                    })
                ]
            }),
            props.detailsModal?.hideDisconnect !== true && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {}),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Spacer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spacer"], {
                        y: "sm"
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                        px: "md",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$MenuButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuButton"], {
                            className: "tw-disconnect-wallet-button",
                            "data-variant": "danger",
                            onClick: ()=>{
                                if (activeWallet && activeAccount) {
                                    disconnect(activeWallet);
                                    handleDisconnect({
                                        account: activeAccount,
                                        wallet: activeWallet
                                    });
                                }
                            },
                            type: "button",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExitIcon"], {
                                    height: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].md,
                                    width: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].md
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                    color: "primaryText",
                                    children: locale.disconnectWallet
                                })
                            ]
                        })
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Spacer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spacer"], {
                        y: "sm"
                    })
                ]
            })
        ]
    });
    if (screen === "transactions") {
        content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$TransactionsScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionsScreen"], {
            client: client,
            closeModal: closeModal,
            locale: locale,
            onBack: ()=>setScreen("main"),
            setScreen: setScreen,
            title: locale.buy
        });
    }
    if (screen === "wallet-manager" && activeAccount && walletChain && activeWallet) {
        content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$Details$2f$WalletManagerScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletManagerScreen"], {
            accountAbstraction: props.connectOptions?.accountAbstraction,
            activeAccount: activeAccount,
            activeChain: walletChain,
            activeWallet: activeWallet,
            appMetadata: props.connectOptions?.appMetadata,
            chain: props.connectOptions?.chain,
            chains: props.connectOptions?.chains,
            client: client,
            connectLocale: locale,
            hiddenWallets: props.connectOptions?.hiddenWallets,
            onBack: ()=>setScreen("main"),
            recommendedWallets: props.connectOptions?.recommendedWallets,
            showAllWallets: !!props.connectOptions?.showAllWallets,
            walletConnect: props.connectOptions?.walletConnect,
            wallets: props.connectOptions?.wallets
        });
    }
    if (screen === "network-switcher") {
        content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$NetworkSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkSelectorContent"], {
            // add currently connected chain to the list of chains if it's not already in the list
            chains: walletChain && props.chains.find((c)=>c.id === walletChain.id) === undefined ? [
                walletChain,
                ...props.chains
            ] : props.chains,
            client: client,
            closeModal: closeModal,
            connectLocale: locale,
            networkSelector: props.detailsModal?.networkSelector,
            onBack: ()=>{
                setScreen("main");
            }
        });
    } else if (screen === "view-assets") {
        content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$ViewAssets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewAssets"], {
            assetTabs: props.detailsModal?.assetTabs,
            client: client,
            connectLocale: locale,
            onBack: ()=>{
                setScreen("main");
            },
            setScreen: setScreen,
            supportedNFTs: props.supportedNFTs,
            supportedTokens: props.supportedTokens,
            theme: props.theme
        });
    } else if (screen === "view-nfts") {
        content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$ViewNFTs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewNFTs"], {
            client: client,
            connectLocale: locale,
            onBack: ()=>{
                setScreen("main");
            },
            supportedNFTs: props.supportedNFTs,
            theme: props.theme
        });
    } else if (screen === "view-tokens") {
        content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$ViewTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewTokens"], {
            client: client,
            connectLocale: locale,
            onBack: ()=>{
                setScreen("main");
            },
            supportedTokens: props.supportedTokens
        });
    } else if (screen === "private-key" || screen === "export") {
        content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrivateKey"], {
            client: client,
            connectLocale: locale,
            onBack: ()=>{
                setScreen("manage-wallet");
            },
            theme: props.theme,
            wallet: activeWallet
        });
    } else if (screen === "manage-wallet") {
        content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$ManageWalletScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ManageWalletScreen"], {
            client: client,
            closeModal: closeModal,
            locale: locale,
            onBack: ()=>{
                setScreen("main");
            },
            manageWallet: props.detailsModal?.manageWallet,
            setScreen: setScreen
        });
    } else if (screen === "wallet-connect-receiver") {
        content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$WalletConnectReceiverScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectReceiverScreen"], {
            chains: props.chains,
            client: client,
            onBack: ()=>{
                setScreen("manage-wallet");
            }
        });
    } else if (screen === "linked-profiles") {
        content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$LinkedProfilesScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkedProfilesScreen"], {
            client: client,
            locale: locale,
            onBack: ()=>setScreen("manage-wallet"),
            setScreen: setScreen
        });
    } else if (screen === "link-profile") {
        content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$LinkProfileScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkProfileScreen"], {
            client: client,
            locale: locale,
            onBack: ()=>{
                setScreen("linked-profiles");
            },
            walletConnect: props.connectOptions?.walletConnect
        });
    } else if (screen === "send") {
        content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$SendFunds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SendFunds"], {
            client: client,
            connectLocale: locale,
            onBack: ()=>{
                setScreen("main");
            },
            supportedTokens: props.supportedTokens
        });
    } else if (screen === "receive") {
        content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$screens$2f$ReceiveFunds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReceiveFunds"], {
            client: client,
            connectLocale: locale,
            onBack: ()=>{
                setScreen("main");
            },
            walletId: activeWallet?.id
        });
    } else if (screen === "buy") {
        const requestedChainId = props.detailsModal?.payOptions?.prefillBuy?.chain?.id || walletChain?.id || props.chains[0]?.id || 1;
        content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$Bridge$2f$BuyWidget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BuyWidget"], {
            amount: props.detailsModal?.payOptions?.prefillBuy?.amount || "0.01",
            chain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCachedChain"])(requestedChainId),
            client: client,
            hiddenWallets: props.detailsModal?.hiddenWallets,
            connectOptions: props.connectOptions,
            onCancel: ()=>setScreen("main"),
            onSuccess: ()=>setScreen("main"),
            supportedTokens: props.supportedTokens,
            theme: props.theme,
            style: {
                border: "none",
                borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].lg
            },
            tokenAddress: props.displayBalanceToken?.[Number(requestedChainId)]
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$CustomThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomThemeProvider"], {
        theme: props.theme,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$providers$2f$wallet$2d$ui$2d$states$2d$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletUIStatesProvider"], {
            isOpen: false,
            theme: props.theme,
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$Modal$2f$screen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenSetupContext"].Provider, {
                value: screenSetup,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
                    className: "tw-modal__wallet-details",
                    title: "Manage Wallet",
                    open: isOpen,
                    crossContainerStyles: {
                        display: screen === "buy" ? "none" : "block"
                    },
                    setOpen: (_open)=>{
                        if (!_open) {
                            closeModal();
                            if (props.detailsModal?.onClose) {
                                props.detailsModal?.onClose(screen);
                            }
                        }
                    },
                    size: "compact",
                    children: activeAccount?.address && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$account$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountProvider"], {
                        address: activeAccount.address,
                        client: client,
                        children: content
                    })
                })
            })
        })
    });
}
function NetworkSwitcherButton(props) {
    const { disableSwitchChain, setScreen, showBalanceInFiat, client } = props;
    const walletChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveWalletChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActiveWalletChain"])();
    if (!walletChain) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$MenuButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuButton"], {
        className: "tw-internal-network-switcher-button tw-switch-network-button",
        "data-variant": "primary",
        disabled: disableSwitchChain,
        onClick: ()=>{
            setScreen("network-switcher");
        },
        type: "button",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Chain$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainProvider"], {
                chain: walletChain,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        style: {
                            alignItems: "center",
                            display: "flex",
                            position: "relative"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                            style: {
                                alignItems: "center",
                                display: "flex",
                                flexShrink: 0,
                                position: "relative"
                            },
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Chain$2f$icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainIcon"], {
                                    client: client,
                                    fallbackComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("img", {
                                        alt: "",
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$fallbackChainIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fallbackChainIcon"],
                                        style: {
                                            height: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].md}px`,
                                            width: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].md}px`
                                        }
                                    }),
                                    loadingComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        height: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].md}px`,
                                        width: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].md}px`
                                    }),
                                    style: {
                                        height: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].md}px`,
                                        width: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].md}px`
                                    }
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$ChainActiveDot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainActiveDot"], {
                                    className: "tw-chain-active-dot-details-button"
                                })
                            ]
                        })
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        color: "primaryText",
                        multiline: true,
                        size: "md",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Chain$2f$name$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainName"], {
                                fallbackComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                                    children: [
                                        "Unknown chain #",
                                        walletChain?.id
                                    ]
                                }),
                                loadingComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    height: "16px",
                                    width: "150px"
                                })
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                color: "secondaryText",
                                size: "xs",
                                children: showBalanceInFiat ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$balance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountBalance"], {
                                            chain: walletChain,
                                            fallbackComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                height: "1em",
                                                width: "70px"
                                            }),
                                            formatFn: (props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$utils$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAccountTokenBalance"])({
                                                    ...props,
                                                    decimals: 7
                                                }),
                                            loadingComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                height: "1em",
                                                width: "70px"
                                            }),
                                            tokenAddress: props.displayBalanceToken?.[Number(walletChain?.id)]
                                        }),
                                        " ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$balance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountBalance"], {
                                            chain: walletChain,
                                            formatFn: (props)=>` (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$utils$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAccountFiatBalance"])({
                                                    ...props,
                                                    decimals: 3
                                                })})`,
                                            loadingComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                height: "1em",
                                                width: "30px"
                                            }),
                                            showBalanceInFiat: "USD",
                                            tokenAddress: props.displayBalanceToken?.[Number(walletChain?.id)]
                                        })
                                    ]
                                }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$prebuilt$2f$Account$2f$balance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountBalance"], {
                                    chain: walletChain,
                                    fallbackComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        height: "1em",
                                        width: "100px"
                                    }),
                                    formatFn: (props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$utils$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAccountTokenBalance"])({
                                            ...props,
                                            decimals: 7
                                        }),
                                    loadingComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        height: "1em",
                                        width: "100px"
                                    }),
                                    tokenAddress: props.displayBalanceToken?.[Number(walletChain?.id)]
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StyledChevronRightIcon, {
                height: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].sm,
                style: {
                    flexShrink: 0,
                    marginLeft: "auto"
                },
                width: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconSize"].sm
            })
        ]
    });
}
const WalletInfoButton = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$design$2d$system$2f$elements$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledButton"])((_)=>{
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$CustomThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCustomTheme"])();
    return {
        all: "unset",
        "&:hover": {
            background: theme.colors.connectedButtonBgHover,
            transition: "background 250ms ease"
        },
        alignItems: "center",
        animation: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$design$2d$system$2f$animations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fadeInAnimation"]} 300ms ease`,
        background: theme.colors.connectedButtonBg,
        border: `1px solid ${theme.colors.borderColor}`,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md,
        boxSizing: "border-box",
        cursor: "pointer",
        display: "inline-flex",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].xs,
        height: "50px",
        lineHeight: "normal",
        minWidth: "165px",
        overflow: "hidden",
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].xs,
        WebkitTapHighlightColor: "transparent"
    };
});
const StyledChevronRightIcon = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChevronRightIcon"])(()=>{
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$design$2d$system$2f$CustomThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCustomTheme"])();
    return {
        color: theme.colors.secondaryText
    };
});
function ConnectedToSmartWallet(props) {
    const activeAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActiveAccount"])();
    const activeWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActiveWallet"])();
    const isSW = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$is$2d$smart$2d$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSmartWallet"])(activeWallet);
    const chain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveWalletChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActiveWalletChain"])();
    const { client, connectLocale: locale } = props;
    const [isSmartWalletDeployed, setIsSmartWalletDeployed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeAccount && isSW && activeAccount.address && chain) {
            const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContract"])({
                address: activeAccount.address,
                chain,
                client
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$bytecode$2f$is$2d$contract$2d$deployed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isContractDeployed"])(contract).then((isDeployed)=>{
                setIsSmartWalletDeployed(isDeployed);
            });
        } else {
            setIsSmartWalletDeployed(false);
        }
    }, [
        activeAccount,
        chain,
        client,
        isSW
    ]);
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$basic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
        center: "y",
        flex: "row",
        gap: "3xs",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
            color: "secondaryText",
            size: "xs",
            weight: 400,
            children: locale.connectedToSmartWallet
        })
    });
    if (chain && activeAccount && isSW) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: isSmartWalletDeployed ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                color: "secondaryText",
                hoverColor: "primaryText",
                href: `https://thirdweb.com/${chain.id}/${activeAccount.address}/account`,
                size: "sm",
                target: "_blank",
                children: content
            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                size: "sm",
                children: [
                    " ",
                    content
                ]
            })
        });
    }
    return null;
}
function InAppWalletUserInfo(props) {
    const { client, locale } = props;
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActiveAccount"])();
    const activeWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActiveWallet"])();
    const adminWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useAdminWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAdminWallet"])();
    const { data: walletInfo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$utils$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWalletInfo"])(activeWallet?.id);
    const isSW = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$is$2d$smart$2d$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSmartWallet"])(activeWallet);
    const { data: walletName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        enabled: !!activeWallet?.id && !!walletInfo,
        queryFn: async ()=>{
            const lastAuthProvider = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$utils$2f$storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLastAuthProvider"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$storage$2f$webStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["webLocalStorage"]);
            if (lastAuthProvider === "guest") {
                return "Guest";
            }
            if (lastAuthProvider && (activeWallet?.id === "inApp" || activeWallet?.id === "smart") && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["socialAuthOptions"].includes(lastAuthProvider)) {
                return lastAuthProvider.slice(0, 1).toUpperCase() + lastAuthProvider.slice(1);
            }
            return walletInfo?.name;
        },
        queryKey: [
            "wallet-name",
            {
                walletAddress: account?.address,
                walletId: activeWallet?.id
            }
        ]
    });
    const userInfoQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        enabled: !!adminWallet,
        queryFn: async ()=>{
            const isInAppWallet = adminWallet && (adminWallet.id === "inApp" || adminWallet.id.startsWith("ecosystem."));
            if (!isInAppWallet) {
                return null;
            }
            let ecosystem;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$is$2d$ecosystem$2d$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEcosystemWallet"])(adminWallet)) {
                const ecosystemWallet = adminWallet;
                const partnerId = ecosystemWallet.getConfig()?.partnerId;
                ecosystem = {
                    id: ecosystemWallet.id,
                    partnerId
                };
            }
            const { getUserEmail, getUserPhoneNumber } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/index.js [app-ssr] (ecmascript, async loader)");
            const [email, phone] = await Promise.all([
                getUserEmail({
                    client: client,
                    ecosystem
                }),
                getUserPhoneNumber({
                    client: client,
                    ecosystem
                })
            ]);
            return email || phone || null;
        },
        queryKey: [
            "in-app-wallet-user",
            client,
            account?.address
        ]
    });
    if (!userInfoQuery.data && isSW) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ConnectedToSmartWallet, {
            client: client,
            connectLocale: locale
        });
    }
    if (userInfoQuery.data || walletName) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
            size: "xs",
            weight: 400,
            children: userInfoQuery.data || walletName
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
        className: "InAppWalletUserInfo__skeleton",
        height: "10px",
        width: "50px"
    });
}
function SwitchNetworkButton(props) {
    const switchChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useSwitchActiveWalletChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSwitchActiveWalletChain"])();
    const [switching, setSwitching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const locale = props.connectLocale;
    const switchNetworkBtnTitle = props.switchNetworkBtnTitle ?? locale.switchNetwork;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$buttons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        "aria-label": switching ? locale.switchingNetwork : undefined,
        className: `tw-connect-wallet--switch-network ${props.className || ""}`,
        "data-is-loading": switching,
        "data-test": "switch-network-button",
        disabled: switching,
        onClick: async ()=>{
            setSwitching(true);
            try {
                await switchChain(props.targetChain);
            } catch (e) {
                console.error(e);
            }
            setSwitching(false);
        },
        style: {
            minWidth: "140px",
            ...props.style
        },
        type: "button",
        variant: "primary",
        children: switching ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$components$2f$Spinner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spinner"], {
            color: "primaryButtonText",
            size: "sm"
        }) : switchNetworkBtnTitle
    });
}
function useWalletDetailsModal() {
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActiveAccount"])();
    const setRootEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$providers$2f$RootElementContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SetRootElementContext"]);
    function closeModal() {
        setRootEl(null);
    }
    function openModal(props) {
        if (!account) {
            throw new Error("Wallet is not connected.");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$locale$2f$getConnectLocale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConnectLocale"])(props.locale || "en_US").then((locale)=>{
            setRootEl((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DetailsModal, {
                chains: props.chains || [],
                client: props.client,
                closeModal: closeModal,
                connectOptions: props.connectOptions,
                detailsModal: {
                    showBalanceInFiat: props.showBalanceInFiat,
                    hiddenWallets: props.hiddenWallets,
                    manageWallet: props.manageWallet,
                    assetTabs: props.assetTabs,
                    connectedAccountAvatarUrl: props.connectedAccountAvatarUrl,
                    connectedAccountName: props.connectedAccountName,
                    footer: props.footer,
                    hideBuyFunds: props.hideBuyFunds,
                    hideDisconnect: props.hideDisconnect,
                    hideReceiveFunds: props.hideReceiveFunds,
                    hideSendFunds: props.hideSendFunds,
                    hideSwitchWallet: props.hideSwitchWallet,
                    networkSelector: props.networkSelector,
                    onClose: props.onClose,
                    payOptions: props.payOptions,
                    showTestnetFaucet: props.showTestnetFaucet
                },
                displayBalanceToken: props.displayBalanceToken,
                initialScreen: props.screen,
                locale: locale,
                onDisconnect: (info)=>{
                    props.onDisconnect?.(info);
                    closeModal();
                },
                supportedNFTs: props.supportedNFTs,
                supportedTokens: props.supportedTokens,
                theme: props.theme || "dark"
            }));
        }).catch(()=>{
            closeModal();
        });
    }
    return {
        open: openModal
    };
} //# sourceMappingURL=Details.js.map
}),
];

//# sourceMappingURL=13e8b_thirdweb_dist_esm_react_web_ui_ConnectWallet_Details_e00d4a63.js.map