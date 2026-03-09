module.exports = [
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/storage/webStorage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "webLocalStorage",
    ()=>webLocalStorage
]);
const webLocalStorage = {
    async getItem (key) {
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        } catch  {
        // ignore
        }
        return null;
    },
    async removeItem (key) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    },
    async setItem (key, value) {
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        } catch  {
        // ignore
        }
    }
}; //# sourceMappingURL=webStorage.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/domains.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_RPC_URL",
    ()=>DEFAULT_RPC_URL,
    "getServiceKey",
    ()=>getServiceKey,
    "getThirdwebBaseUrl",
    ()=>getThirdwebBaseUrl,
    "getThirdwebDomains",
    ()=>getThirdwebDomains,
    "setServiceKey",
    ()=>setServiceKey,
    "setThirdwebDomains",
    ()=>setThirdwebDomains
]);
const DEFAULT_RPC_URL = "rpc.thirdweb.com";
const DEFAULT_SOCIAL_URL = "social.thirdweb.com";
const DEFAULT_IN_APP_WALLET_URL = "embedded-wallet.thirdweb.com";
const DEFAULT_PAY_URL = "pay.thirdweb.com";
const DEFAULT_STORAGE_URL = "storage.thirdweb.com";
const DEFAULT_BUNDLER_URL = "bundler.thirdweb.com";
const DEFAULT_ANALYTICS_URL = "c.thirdweb.com";
const DEFAULT_INSIGHT_URL = "insight.thirdweb.com";
const DEFAULT_ENGINE_CLOUD_URL = "engine.thirdweb.com";
const DEFAULT_BRIDGE_URL = "bridge.thirdweb.com";
let domains = {
    analytics: DEFAULT_ANALYTICS_URL,
    bridge: DEFAULT_BRIDGE_URL,
    bundler: DEFAULT_BUNDLER_URL,
    engineCloud: DEFAULT_ENGINE_CLOUD_URL,
    inAppWallet: DEFAULT_IN_APP_WALLET_URL,
    insight: DEFAULT_INSIGHT_URL,
    pay: DEFAULT_PAY_URL,
    rpc: DEFAULT_RPC_URL,
    social: DEFAULT_SOCIAL_URL,
    storage: DEFAULT_STORAGE_URL
};
const setThirdwebDomains = (DomainOverrides)=>{
    domains = {
        analytics: DomainOverrides.analytics ?? DEFAULT_ANALYTICS_URL,
        bridge: DomainOverrides.bridge ?? DEFAULT_BRIDGE_URL,
        bundler: DomainOverrides.bundler ?? DEFAULT_BUNDLER_URL,
        engineCloud: DomainOverrides.engineCloud ?? DEFAULT_ENGINE_CLOUD_URL,
        inAppWallet: DomainOverrides.inAppWallet ?? DEFAULT_IN_APP_WALLET_URL,
        insight: DomainOverrides.insight ?? DEFAULT_INSIGHT_URL,
        pay: DomainOverrides.pay ?? DEFAULT_PAY_URL,
        rpc: DomainOverrides.rpc ?? DEFAULT_RPC_URL,
        social: DomainOverrides.social ?? DEFAULT_SOCIAL_URL,
        storage: DomainOverrides.storage ?? DEFAULT_STORAGE_URL
    };
};
const getThirdwebDomains = ()=>{
    return domains;
};
const getThirdwebBaseUrl = (service)=>{
    const origin = domains[service];
    if (origin.startsWith("localhost")) {
        return `http://${origin}`;
    }
    return `https://${origin}`;
};
let serviceKey = null;
const setServiceKey = (key)=>{
    serviceKey = key;
};
const getServiceKey = ()=>{
    return serviceKey;
}; //# sourceMappingURL=domains.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = "5.119.1"; //# sourceMappingURL=version.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/caching/lru.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Map with a LRU (Least recently used) policy.
 *
 * @link https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
 */ __turbopack_context__.s([
    "LruMap",
    ()=>LruMap
]);
class LruMap extends Map {
    constructor(size){
        super();
        Object.defineProperty(this, "maxSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.maxSize = size;
    }
    get(key) {
        const value = super.get(key);
        if (super.has(key) && value !== undefined) {
            this.delete(key);
            super.set(key, value);
        }
        return value;
    }
    set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize) {
            const firstKey = this.keys().next().value;
            if (firstKey) {
                this.delete(firstKey);
            }
        }
        return this;
    }
} //# sourceMappingURL=lru.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/detect-platform.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectOS",
    ()=>detectOS,
    "detectPlatform",
    ()=>detectPlatform
]);
const operatingSystemRules = [
    [
        "iOS",
        /iP(hone|od|ad)/
    ],
    [
        "Android OS",
        /Android/
    ],
    [
        "BlackBerry OS",
        /BlackBerry|BB10/
    ],
    [
        "Windows Mobile",
        /IEMobile/
    ],
    [
        "Amazon OS",
        /Kindle/
    ],
    [
        "Windows 3.11",
        /Win16/
    ],
    [
        "Windows 95",
        /(Windows 95)|(Win95)|(Windows_95)/
    ],
    [
        "Windows 98",
        /(Windows 98)|(Win98)/
    ],
    [
        "Windows 2000",
        /(Windows NT 5.0)|(Windows 2000)/
    ],
    [
        "Windows XP",
        /(Windows NT 5.1)|(Windows XP)/
    ],
    [
        "Windows Server 2003",
        /(Windows NT 5.2)/
    ],
    [
        "Windows Vista",
        /(Windows NT 6.0)/
    ],
    [
        "Windows 7",
        /(Windows NT 6.1)/
    ],
    [
        "Windows 8",
        /(Windows NT 6.2)/
    ],
    [
        "Windows 8.1",
        /(Windows NT 6.3)/
    ],
    [
        "Windows 10",
        /(Windows NT 10.0)/
    ],
    [
        "Windows ME",
        /Windows ME/
    ],
    [
        "Windows CE",
        /Windows CE|WinCE|Microsoft Pocket Internet Explorer/
    ],
    [
        "Open BSD",
        /OpenBSD/
    ],
    [
        "Sun OS",
        /SunOS/
    ],
    [
        "Chrome OS",
        /CrOS/
    ],
    [
        "Linux",
        /(Linux)|(X11)/
    ],
    [
        "Mac OS",
        /(Mac_PowerPC)|(Macintosh)/
    ],
    [
        "QNX",
        /QNX/
    ],
    [
        "BeOS",
        /BeOS/
    ],
    [
        "OS/2",
        /OS\/2/
    ]
];
function detectPlatform() {
    if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
        // react-native
        return "mobile";
    }
    if (typeof navigator !== "undefined") {
        return "browser";
    }
    return "node";
}
function detectOS(ua) {
    for(let ii = 0, count = operatingSystemRules.length; ii < count; ii++){
        const [os, regex] = operatingSystemRules[ii];
        const match = regex.exec(ua);
        if (match) {
            return os;
        }
    }
    return null;
} //# sourceMappingURL=detect-platform.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/jwt/is-jwt.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isJWT",
    ()=>isJWT
]);
function isJWT(str) {
    return str.split(".").length === 3;
} //# sourceMappingURL=is-jwt.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/process.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// You must use typeof process !== "undefined" instead of just "process"
__turbopack_context__.s([
    "IS_DEV",
    ()=>IS_DEV,
    "IS_TEST",
    ()=>IS_TEST
]);
const IS_DEV = typeof process !== "undefined" && process.env && (("TURBOPACK compile-time value", "development") === "development" || ("TURBOPACK compile-time value", "development") === "test");
const IS_TEST = typeof process !== "undefined" && process.env && ("TURBOPACK compile-time value", "development") === "test"; //# sourceMappingURL=process.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/fetch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IS_THIRDWEB_URL_CACHE",
    ()=>IS_THIRDWEB_URL_CACHE,
    "getClientFetch",
    ()=>getClientFetch,
    "getPlatformHeaders",
    ()=>getPlatformHeaders,
    "isThirdwebUrl",
    ()=>isThirdwebUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/version.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$caching$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/caching/lru.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$detect$2d$platform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/detect-platform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/domains.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$jwt$2f$is$2d$jwt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/jwt/is-jwt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$process$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/process.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const DEFAULT_REQUEST_TIMEOUT = 60000;
function getClientFetch(client, ecosystem) {
    /**
     * @internal
     */ async function fetchWithHeaders(url, init) {
        const { requestTimeoutMs = DEFAULT_REQUEST_TIMEOUT, useAuthToken, ...restInit } = init || {};
        let headers = restInit.headers ? new Headers(restInit.headers) : typeof url === "object" ? url.headers : undefined;
        const urlString = typeof url === "string" ? url : url.url;
        // check if we are making a request to a thirdweb service (we don't want to send any headers to non-thirdweb services)
        if (isThirdwebUrl(urlString)) {
            if (!headers) {
                headers = new Headers();
            }
            // auth token if secret key === jwt
            const authToken = useAuthToken && client.secretKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$jwt$2f$is$2d$jwt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJWT"])(client.secretKey) ? client.secretKey : undefined;
            // secret key if secret key !== jwt
            const secretKey = client.secretKey && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$jwt$2f$is$2d$jwt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJWT"])(client.secretKey) ? client.secretKey : undefined;
            const clientId = client.clientId;
            if (authToken && isBundlerUrl(urlString)) {
                headers.set("authorization", `Bearer ${authToken}`);
                if (client.teamId) {
                    headers.set("x-team-id", client.teamId);
                }
                if (clientId) {
                    headers.set("x-client-id", clientId);
                }
            } else if (authToken && !isPayUrl(urlString) && !isInAppWalletUrl(urlString)) {
                headers.set("authorization", `Bearer ${authToken}`);
                // if we have a specific teamId set, add it to the request headers
                if (client.teamId) {
                    headers.set("x-team-id", client.teamId);
                }
            } else {
                // only set secret key or client id if we are NOT using the auth token!
                if (secretKey) {
                    headers.set("x-secret-key", secretKey);
                }
                if (clientId) {
                    headers.set("x-client-id", clientId);
                }
            }
            if (ecosystem) {
                headers.set("x-ecosystem-id", ecosystem.id);
                if (ecosystem.partnerId) {
                    headers.set("x-ecosystem-partner-id", ecosystem.partnerId);
                }
            }
            // this already internally caches
            for (const [key, value] of getPlatformHeaders()){
                headers.set(key, value);
            }
            const serviceKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getServiceKey"])();
            if (serviceKey) {
                headers.set("x-service-api-key", serviceKey);
            }
        }
        let controller;
        let abortTimeout;
        if (requestTimeoutMs) {
            controller = new AbortController();
            abortTimeout = setTimeout(()=>{
                controller?.abort("timeout");
            }, requestTimeoutMs);
        }
        return fetch(url, {
            ...restInit,
            headers,
            signal: controller?.signal
        }).finally(()=>{
            if (abortTimeout) {
                clearTimeout(abortTimeout);
            }
        });
    }
    return fetchWithHeaders;
}
// NOTE: these all start with "." because we want to make sure we don't match (for example) "otherthirdweb.com"
const THIRDWEB_DOMAINS = [
    ".thirdweb.com",
    ".ipfscdn.io",
    // dev domains
    ".thirdweb.dev",
    ".thirdweb-dev.com",
    ".thirdwebstorage-dev.com"
];
const IS_THIRDWEB_URL_CACHE = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$caching$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LruMap"](4096);
function isThirdwebUrl(url) {
    if (IS_THIRDWEB_URL_CACHE.has(url)) {
        // biome-ignore lint/style/noNonNullAssertion: the `has` above ensures that this will always be set
        return IS_THIRDWEB_URL_CACHE.get(url);
    }
    try {
        const { hostname } = new URL(url);
        try {
            // special case for localhost in development only
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$process$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IS_DEV"]) {
                if (hostname === "localhost") {
                    IS_THIRDWEB_URL_CACHE.set(url, true);
                    return true;
                }
            }
        } catch  {}
        const is = THIRDWEB_DOMAINS.some((domain)=>hostname.endsWith(domain));
        IS_THIRDWEB_URL_CACHE.set(url, is);
        return is;
    } catch  {
        IS_THIRDWEB_URL_CACHE.set(url, false);
        return false;
    }
}
function isPayUrl(url) {
    try {
        const { hostname } = new URL(url);
        // pay service hostname always starts with "pay."
        return hostname.startsWith("pay.");
    } catch  {
        return false;
    }
}
function isInAppWalletUrl(url) {
    try {
        const { hostname } = new URL(url);
        // in app wallet service hostname always starts with "in-app-wallet." or "embedded-wallet."
        return hostname.startsWith("in-app-wallet.") || hostname.startsWith("embedded-wallet.");
    } catch  {
        return false;
    }
}
function isBundlerUrl(url) {
    try {
        const { hostname } = new URL(url);
        return hostname.endsWith(".bundler.thirdweb.com") || hostname.endsWith(".bundler.thirdweb-dev.com");
    } catch  {
        return false;
    }
}
const SDK_NAME = "unified-sdk";
let previousPlatform;
function getPlatformHeaders() {
    if (previousPlatform) {
        return previousPlatform;
    }
    let os = null;
    if (typeof navigator !== "undefined") {
        os = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$detect$2d$platform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectOS"])(navigator.userAgent);
    }
    let bundleId;
    if (typeof globalThis !== "undefined" && "Application" in globalThis) {
        // shims use wallet connect RN module which injects Application info in globalThis
        // biome-ignore lint/suspicious/noExplicitAny: get around globalThis typing
        bundleId = globalThis.Application.applicationId;
    }
    previousPlatform = Object.entries({
        "x-sdk-name": SDK_NAME,
        "x-sdk-os": os ? parseOs(os) : "unknown",
        "x-sdk-platform": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$detect$2d$platform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectPlatform"])(),
        "x-sdk-version": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"],
        ...bundleId ? {
            "x-bundle-id": bundleId
        } : {}
    });
    return previousPlatform;
}
/**
 * @internal
 */ function parseOs(os) {
    const osLowerCased = os.toLowerCase();
    if (osLowerCased.startsWith("win")) {
        return "win";
    }
    // we do NOT use the lowercase here
    switch(os){
        case "Mac OS":
            return "mac";
        case "iOS":
            return "ios";
        case "Android OS":
            return "android";
        default:
            // if we somehow fall through here, just replace all spaces with underscores and send it
            return osLowerCased.replace(/\s/gi, "_");
    }
} //# sourceMappingURL=fetch.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/promise/withCache.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCache",
    ()=>getCache,
    "withCache",
    ()=>withCache
]);
// copy of: https://github.com/wevm/viem/blob/6cf2c3b5fe608bce9c828af867dfaa65103753a6/src/utils/promise/withCache.ts
// with slight adjustments made to comply with our linting rules
// TODO: explore extracting this from viem and instead having a separate general purpose library for this kind of thing
// alternatively viem could maybe export this helpful util
// TODO: explore using a LRU cache instead of a Map
const promiseCache = /*#__PURE__*/ new Map();
const responseCache = /*#__PURE__*/ new Map();
function getCache(cacheKey) {
    const buildCache = (cacheKey_, cache)=>({
            clear: ()=>cache.delete(cacheKey_),
            get: ()=>cache.get(cacheKey_),
            set: (data)=>cache.set(cacheKey_, data)
        });
    const promise = buildCache(cacheKey, promiseCache);
    const response = buildCache(cacheKey, responseCache);
    return {
        clear: ()=>{
            promise.clear();
            response.clear();
        },
        promise,
        response
    };
}
async function withCache(fn, { cacheKey, cacheTime = Number.POSITIVE_INFINITY }) {
    const cache = getCache(cacheKey);
    // If a response exists in the cache, and it's not expired, return it
    // and do not invoke the promise.
    // If the max age is 0, the cache is disabled.
    const response = cache.response.get();
    if (response && cacheTime > 0) {
        const age = Date.now() - response.created.getTime();
        if (age < cacheTime) {
            return response.data;
        }
    }
    let promise = cache.promise.get();
    if (!promise) {
        promise = fn();
        // Store the promise in the cache so that subsequent invocations
        // will wait for the same promise to resolve (deduping).
        cache.promise.set(promise);
    }
    try {
        const data = await promise;
        // Store the response in the cache so that subsequent invocations
        // will return the same response.
        cache.response.set({
            created: new Date(),
            data
        });
        return data;
    } finally{
        // Clear the promise cache so that subsequent invocations will
        // invoke the promise again.
        cache.promise.clear();
    }
} //# sourceMappingURL=withCache.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CUSTOM_CHAIN_MAP",
    ()=>CUSTOM_CHAIN_MAP,
    "cacheChains",
    ()=>cacheChains,
    "convertApiChainToChain",
    ()=>convertApiChainToChain,
    "convertLegacyChain",
    ()=>convertLegacyChain,
    "convertViemChain",
    ()=>convertViemChain,
    "defineChain",
    ()=>defineChain,
    "getCachedChain",
    ()=>getCachedChain,
    "getCachedChainIfExists",
    ()=>getCachedChainIfExists,
    "getChainDecimals",
    ()=>getChainDecimals,
    "getChainMetadata",
    ()=>getChainMetadata,
    "getChainNativeCurrencyName",
    ()=>getChainNativeCurrencyName,
    "getChainSymbol",
    ()=>getChainSymbol,
    "getInsightEnabledChainIds",
    ()=>getInsightEnabledChainIds,
    "getRpcUrlForChain",
    ()=>getRpcUrlForChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/domains.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/fetch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$withCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/promise/withCache.js [app-ssr] (ecmascript)");
;
;
;
const CUSTOM_CHAIN_MAP = new Map();
function defineChain(options) {
    const RPC_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThirdwebDomains"])().rpc;
    if (typeof options === "number") {
        return {
            id: options,
            rpc: `https://${options}.${RPC_URL}`
        };
    }
    if (isViemChain(options)) {
        return convertViemChain(options);
    }
    if (isLegacyChain(options)) {
        return convertLegacyChain(options);
    }
    // otherwise if it's not a viem chain, continue
    let rpc = options.rpc;
    if (!rpc) {
        rpc = `https://${options.id}.${RPC_URL}`;
    }
    const chain = {
        ...options,
        rpc
    };
    CUSTOM_CHAIN_MAP.set(options.id, chain);
    return chain;
}
function cacheChains(chains) {
    for (const chain of chains){
        CUSTOM_CHAIN_MAP.set(chain.id, chain);
    }
}
function getCachedChain(id) {
    if (CUSTOM_CHAIN_MAP.has(id)) {
        return CUSTOM_CHAIN_MAP.get(id);
    }
    const RPC_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThirdwebDomains"])().rpc;
    const chain = {
        id: id,
        rpc: `https://${id}.${RPC_URL}`
    };
    return chain;
}
function getCachedChainIfExists(id) {
    return CUSTOM_CHAIN_MAP.get(id);
}
function isLegacyChain(chain) {
    return "rpc" in chain && Array.isArray(chain.rpc) && "slug" in chain;
}
function convertLegacyChain(legacyChain) {
    const RPC_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThirdwebDomains"])().rpc;
    return {
        blockExplorers: legacyChain?.explorers?.map((explorer)=>({
                apiUrl: explorer.url,
                name: explorer.name,
                url: explorer.url
            })),
        faucets: legacyChain.faucets ? [
            ...legacyChain.faucets
        ] : undefined,
        icon: legacyChain.icon,
        id: legacyChain.chainId,
        name: legacyChain.name,
        nativeCurrency: {
            decimals: legacyChain.nativeCurrency.decimals,
            name: legacyChain.nativeCurrency.name,
            symbol: legacyChain.nativeCurrency.symbol
        },
        rpc: legacyChain.rpc[0] ?? `https://${legacyChain.chainId}.${RPC_URL}`,
        testnet: legacyChain.testnet ? true : undefined
    };
}
function isViemChain(chain) {
    return "rpcUrls" in chain && !("rpc" in chain);
}
function convertViemChain(viemChain) {
    const RPC_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThirdwebDomains"])().rpc;
    return {
        blockExplorers: viemChain?.blockExplorers ? Object.values(viemChain?.blockExplorers).map((explorer)=>{
            return {
                apiUrl: explorer.apiUrl,
                name: explorer.name,
                url: explorer.url
            };
        }) : [],
        id: viemChain.id,
        name: viemChain.name,
        nativeCurrency: {
            decimals: viemChain.nativeCurrency.decimals,
            name: viemChain.nativeCurrency.name,
            symbol: viemChain.nativeCurrency.symbol
        },
        rpc: viemChain.rpcUrls.default.http[0] ?? `https://${viemChain.id}.${RPC_URL}`,
        testnet: viemChain.testnet ? true : undefined
    };
}
function getRpcUrlForChain(options) {
    const baseRpcUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThirdwebDomains"])().rpc;
    // if the chain is just a number, construct the RPC URL using the chain ID and client ID
    if (typeof options.chain === "number") {
        return `https://${options.chain}.${baseRpcUrl}/${options.client.clientId}`;
    }
    const { rpc } = options.chain;
    // add on the client ID to the RPC URL if it's a thirdweb URL
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isThirdwebUrl"])(rpc)) {
        const rpcUrl = new URL(options.chain.rpc.replace(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_RPC_URL"], baseRpcUrl));
        if (rpcUrl.pathname === "/" || rpcUrl.pathname.startsWith("/$")) {
            rpcUrl.pathname = `/${options.client.clientId}`;
        }
        return rpcUrl.toString();
    }
    return rpc;
}
async function getChainSymbol(chain) {
    if (!chain.nativeCurrency?.symbol) {
        return getChainMetadata(chain).then((data)=>data.nativeCurrency.symbol).catch(()=>{
            // if we fail to fetch the chain data, return "ETH" as a fallback
            return "ETH";
        });
    }
    // if we have a symbol, return it
    return chain.nativeCurrency.symbol;
}
async function getChainDecimals(chain) {
    if (!chain.nativeCurrency?.decimals) {
        return getChainMetadata(chain).then((data)=>data.nativeCurrency.decimals).catch(()=>{
            // if we fail to fetch the chain data, return 18 as a fallback (most likely it's 18)
            return 18;
        });
    }
    // if we have decimals, return it
    return chain.nativeCurrency.decimals;
}
async function getChainNativeCurrencyName(chain) {
    if (!chain.nativeCurrency?.name) {
        return getChainMetadata(chain).then((data)=>data.nativeCurrency.name).catch(()=>{
            // if we fail to fetch the chain data, return 18 as a fallback (most likely it's 18)
            return "ETH";
        });
    }
    // if we have a name, return it
    return chain.nativeCurrency.name;
}
function getChainMetadata(chain) {
    const chainId = chain.id;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$withCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withCache"])(async ()=>{
        try {
            const res = await fetch(`https://api.thirdweb.com/v1/chains/${chainId}`);
            if (!res.ok) {
                throw new Error(`Failed to fetch chain data for chainId ${chainId}. ${res.status} ${res.statusText}`);
            }
            const response = await res.json();
            if (response.error) {
                throw new Error(`Failed to fetch chain data for chainId ${chainId}`);
            }
            if (!response.data) {
                throw new Error(`Failed to fetch chain data for chainId ${chainId}`);
            }
            const data = response.data;
            return createChainMetadata(chain, data);
        } catch  {
            return createChainMetadata(chain);
        }
    }, {
        cacheKey: `chain:${chainId}`,
        cacheTime: 5 * 60 * 1000
    });
}
async function getInsightEnabledChainIds() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$promise$2f$withCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withCache"])(async ()=>{
        const res = await fetch(`https://api.thirdweb.com/v1/chains/services?service=insight`);
        if (!res.ok) {
            throw new Error(`Failed to fetch services. ${res.status} ${res.statusText}`);
        }
        const response = await res.json();
        return Object.keys(response.data).map((chainId)=>Number(chainId));
    }, {
        cacheKey: `chain:insight-enabled`,
        cacheTime: 24 * 60 * 60 * 1000
    });
}
function convertApiChainToChain(apiChain) {
    return {
        blockExplorers: apiChain.explorers?.map((explorer)=>{
            return {
                apiUrl: explorer.url,
                name: explorer.name,
                url: explorer.url
            };
        }),
        faucets: apiChain.faucets ? [
            ...apiChain.faucets
        ] : undefined,
        icon: apiChain.icon,
        id: apiChain.chainId,
        name: apiChain.name,
        nativeCurrency: apiChain.nativeCurrency,
        rpc: apiChain.rpc[0] || "",
        testnet: apiChain.testnet === true ? true : undefined
    };
}
function createChainMetadata(chain, data) {
    const nativeCurrency = chain.nativeCurrency ? {
        ...data?.nativeCurrency,
        ...chain.nativeCurrency
    } : data?.nativeCurrency;
    return {
        ...data,
        chain: data?.chain || chain.name || "",
        chainId: chain.id || data?.chainId || -1,
        explorers: chain.blockExplorers?.map((e)=>({
                name: e.name,
                standard: "EIP3091",
                url: e.url
            })) || data?.explorers,
        icon: chain.icon || data?.icon,
        name: chain.name || data?.name || "",
        nativeCurrency: {
            decimals: nativeCurrency?.decimals || 18,
            name: nativeCurrency?.name || "",
            symbol: nativeCurrency?.symbol || ""
        },
        rpc: chain.rpc ? [
            chain.rpc
        ] : data?.rpc || [
            ""
        ],
        shortName: data?.shortName || chain.name || "",
        slug: data?.slug || chain.name || "",
        stackType: data?.stackType || "",
        testnet: chain.testnet || data?.testnet || false
    };
} //# sourceMappingURL=utils.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/reactive/computedStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Create a readonly store whose value is computed from other stores
 * @param computation - The function to compute the value of the store
 * @param dependencies - The stores it depends on
 * @example
 * ```ts
 * const foo = computed(() => bar.getValue() + baz.getValue(), [bar, baz]);
 * ```
 * @returns A store object
 */ __turbopack_context__.s([
    "computedStore",
    ()=>computedStore
]);
function computedStore(// pass the values of the dependencies to the computation function
computation, // biome-ignore lint/suspicious/noExplicitAny: library function that accepts any store type
dependencies) {
    const listeners = new Set();
    let value = computation();
    const notify = ()=>{
        for (const listener of listeners){
            listener();
        }
    };
    const setValue = (newValue)=>{
        value = newValue;
        notify();
    };
    // when any of the dependencies change, recompute the value and set it
    for (const store of dependencies){
        store.subscribe(()=>{
            setValue(computation());
        });
    }
    return {
        getValue () {
            return value;
        },
        subscribe (listener) {
            listeners.add(listener);
            return ()=>{
                listeners.delete(listener);
            };
        }
    };
} //# sourceMappingURL=computedStore.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/reactive/effect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Run a function whenever dependencies change
 * @param effectFn - Side effect function to run
 * @param dependencies - The stores it depends on
 * @param runOnMount - Whether to run the effect function immediately or not
 * @example
 * ```ts
 * const foo = computed(() => bar.getValue() + baz.getValue(), [bar, baz]);
 * ```
 * @returns A function to stop listening to changes in the dependencies
 */ __turbopack_context__.s([
    "effect",
    ()=>effect
]);
function effect(// pass the values of the dependencies to the computation function
effectFn, // biome-ignore lint/suspicious/noExplicitAny: library function that accepts any store type
dependencies, runOnMount = true) {
    if (runOnMount) {
        effectFn();
    }
    // when any of the dependencies change, recompute the value and set it
    const unsubscribeList = dependencies.map((store)=>{
        return store.subscribe(()=>{
            effectFn();
        });
    });
    return ()=>{
        for (const fn of unsubscribeList){
            fn();
        }
    };
} //# sourceMappingURL=effect.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/reactive/store.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Create a reactive value store
 * @param initialValue - The initial value to store
 * @example
 * ```ts
 * const store = createStore(0);
 * ```
 * @returns A store object
 * @internal
 */ __turbopack_context__.s([
    "createStore",
    ()=>createStore
]);
function createStore(initialValue) {
    const listeners = new Set();
    let value = initialValue;
    const notify = ()=>{
        for (const listener of listeners){
            listener();
        }
    };
    return {
        getValue () {
            return value;
        },
        setValue (newValue) {
            if (newValue === value) {
                return;
            }
            value = newValue;
            notify();
        },
        subscribe (listener) {
            listeners.add(listener);
            return ()=>{
                listeners.delete(listener);
            };
        }
    };
} //# sourceMappingURL=store.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/json.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Stringify a JSON object and convert all bigint values to string
 *
 * If you are getting this error: "Exception: Do not know how to serialize a BigInt",
 * you probably can use this function to parse the data.
 * Because bigint is not an accepted value of the JSON format.
 *
 * @returns An object with all bigint values converted to string
 * @example
 * ```ts
 * import { stringify } from "thirdweb/utils";
 * const obj = { tokenId: 0n };
 * const str = stringify(obj); // "{"tokenId":"0"}"
 * ```
 * @utils
 */ __turbopack_context__.s([
    "stringify",
    ()=>stringify
]);
function stringify(// biome-ignore lint/suspicious/noExplicitAny: JSON.stringify signature
value, // biome-ignore lint/suspicious/noExplicitAny: JSON.stringify signature
replacer, space) {
    const res = JSON.stringify(value, (key, value_)=>{
        const value__ = typeof value_ === "bigint" ? value_.toString() : value_;
        return typeof replacer === "function" ? replacer(key, value__) : value__;
    }, space);
    return res;
} //# sourceMappingURL=json.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/storage/walletStorage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteConnectParamsFromStorage",
    ()=>deleteConnectParamsFromStorage,
    "getSavedConnectParamsFromStorage",
    ()=>getSavedConnectParamsFromStorage,
    "saveConnectParamsToStorage",
    ()=>saveConnectParamsToStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/json.js [app-ssr] (ecmascript)");
;
const CONNECT_PARAMS_MAP_KEY = "tw:connected-wallet-params";
async function saveConnectParamsToStorage(storage, walletId, params) {
    // params must be stringifiable
    if (!isStringifiable(params)) {
        throw new Error("given params are not stringifiable");
    }
    const currentValueStr = await storage.getItem(CONNECT_PARAMS_MAP_KEY);
    let value;
    if (currentValueStr) {
        try {
            value = JSON.parse(currentValueStr);
        } catch  {
            value = {};
        }
        value[walletId] = params;
    } else {
        value = {
            [walletId]: params
        };
    }
    storage.setItem(CONNECT_PARAMS_MAP_KEY, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(value));
}
async function deleteConnectParamsFromStorage(storage, walletId) {
    const currentValueStr = await storage.getItem(CONNECT_PARAMS_MAP_KEY);
    let value;
    if (currentValueStr) {
        try {
            value = JSON.parse(currentValueStr);
        } catch  {
            value = {};
        }
        delete value[walletId];
        storage.setItem(CONNECT_PARAMS_MAP_KEY, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(value));
    }
}
async function getSavedConnectParamsFromStorage(storage, walletId) {
    const valueStr = await storage.getItem(CONNECT_PARAMS_MAP_KEY);
    if (!valueStr) {
        return null;
    }
    try {
        const value = JSON.parse(valueStr);
        if (value?.[walletId]) {
            return value[walletId];
        }
        return null;
    } catch  {
        return null;
    }
}
function isStringifiable(value) {
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(value);
        return true;
    } catch  {
        return false;
    }
} //# sourceMappingURL=walletStorage.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/ecosystem/is-ecosystem-wallet.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if the given wallet is an ecosystem wallet.
 *
 * @param {Wallet | string} wallet - The wallet or wallet ID to check.
 * @returns {boolean} True if the wallet is an ecosystem wallet, false otherwise.
 * @internal
 */ __turbopack_context__.s([
    "isEcosystemWallet",
    ()=>isEcosystemWallet
]);
function isEcosystemWallet(wallet) {
    return typeof wallet === "string" ? wallet.startsWith("ecosystem.") : wallet.id.startsWith("ecosystem.");
} //# sourceMappingURL=is-ecosystem-wallet.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/is-smart-wallet.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasSponsoredTransactionsEnabled",
    ()=>hasSponsoredTransactionsEnabled,
    "isSmartWallet",
    ()=>isSmartWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$is$2d$ecosystem$2d$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/ecosystem/is-ecosystem-wallet.js [app-ssr] (ecmascript)");
;
function isSmartWallet(activeWallet) {
    if (!activeWallet) {
        return false;
    }
    if (activeWallet.id === "smart") {
        return true;
    }
    if (activeWallet.id === "inApp" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$is$2d$ecosystem$2d$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEcosystemWallet"])(activeWallet)) {
        const options = activeWallet.getConfig();
        if (options && "smartAccount" in options && options.smartAccount) {
            return true;
        }
        if (options?.executionMode) {
            const execMode = options.executionMode;
            return execMode.mode === "EIP4337" || execMode.mode === "EIP7702";
        }
    }
    return false;
}
function hasSponsoredTransactionsEnabled(wallet) {
    if (!wallet) {
        return false;
    }
    let sponsoredTransactionsEnabled = false;
    if (wallet && wallet.id === "smart") {
        const options = wallet.getConfig();
        if ("sponsorGas" in options) {
            sponsoredTransactionsEnabled = options.sponsorGas;
        }
        if ("gasless" in options) {
            sponsoredTransactionsEnabled = options.gasless;
        }
    }
    if (wallet && (wallet.id === "inApp" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$is$2d$ecosystem$2d$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEcosystemWallet"])(wallet))) {
        const options = wallet.getConfig();
        if (options && "smartAccount" in options && options.smartAccount) {
            const smartOptions = options.smartAccount;
            if ("sponsorGas" in smartOptions) {
                sponsoredTransactionsEnabled = smartOptions.sponsorGas;
            }
            if ("gasless" in smartOptions) {
                sponsoredTransactionsEnabled = smartOptions.gasless;
            }
        }
        if (options?.executionMode) {
            const execMode = options.executionMode;
            if (execMode.mode === "EIP4337") {
                const smartOptions = execMode.smartAccount;
                if (smartOptions && "sponsorGas" in smartOptions) {
                    sponsoredTransactionsEnabled = smartOptions.sponsorGas;
                }
                if (smartOptions && "gasless" in smartOptions) {
                    sponsoredTransactionsEnabled = smartOptions.gasless;
                }
            }
            if (execMode.mode === "EIP7702") {
                sponsoredTransactionsEnabled = execMode.sponsorGas || false;
            }
        }
    }
    return sponsoredTransactionsEnabled;
} //# sourceMappingURL=is-smart-wallet.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/analytics/track/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "track",
    ()=>track
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/domains.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/fetch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/json.js [app-ssr] (ecmascript)");
;
;
;
async function track({ client, ecosystem, data }) {
    const fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClientFetch"])(client, ecosystem);
    const event = {
        source: "sdk",
        ...data
    };
    return fetch(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThirdwebBaseUrl"])("analytics")}/event`, {
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(event),
        method: "POST"
    }).catch(()=>{});
} //# sourceMappingURL=index.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/analytics/track/connect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trackConnect",
    ()=>trackConnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/analytics/track/index.js [app-ssr] (ecmascript)");
;
async function trackConnect(args) {
    const { client, ecosystem, walletType, walletAddress, chainId } = args;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["track"])({
        client,
        data: {
            action: "connect",
            chainId,
            source: "connectWallet",
            walletAddress,
            walletType
        },
        ecosystem
    });
} //# sourceMappingURL=connect.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/helpers/is-hex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHex",
    ()=>isHex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
;
function isHex(value, options = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validate"](value, options);
} //# sourceMappingURL=is-hex.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/to-bytes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "boolToBytes",
    ()=>boolToBytes,
    "hexToBytes",
    ()=>hexToBytes,
    "numberToBytes",
    ()=>numberToBytes,
    "stringToBytes",
    ()=>stringToBytes,
    "toBytes",
    ()=>toBytes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$helpers$2f$is$2d$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/helpers/is-hex.js [app-ssr] (ecmascript)");
;
;
function toBytes(value, opts = {}) {
    switch(typeof value){
        case "number":
        case "bigint":
            return numberToBytes(value, opts);
        case "boolean":
            return boolToBytes(value, opts);
        default:
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$helpers$2f$is$2d$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(value)) {
                return hexToBytes(value, opts);
            }
            return stringToBytes(value, opts);
    }
}
function boolToBytes(value, opts = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBoolean"](value, opts);
}
function hexToBytes(hex_, opts = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromHex"](hex_, opts);
}
function numberToBytes(value, opts) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"](value, opts);
}
function stringToBytes(value, opts = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"](value, opts);
} //# sourceMappingURL=to-bytes.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "boolToHex",
    ()=>boolToHex,
    "fromHex",
    ()=>fromHex,
    "hexToBigInt",
    ()=>hexToBigInt,
    "hexToBool",
    ()=>hexToBool,
    "hexToNumber",
    ()=>hexToNumber,
    "hexToString",
    ()=>hexToString,
    "hexToUint8Array",
    ()=>hexToUint8Array,
    "numberToHex",
    ()=>numberToHex,
    "padHex",
    ()=>padHex,
    "stringToHex",
    ()=>stringToHex,
    "toHex",
    ()=>toHex,
    "uint8ArrayToHex",
    ()=>uint8ArrayToHex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
;
;
function padHex(hex_, options = {}) {
    const { dir, size = 32 } = options;
    if (size === null) {
        return hex_;
    }
    if (dir === "right") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padRight"](hex_, size);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padLeft"](hex_, size);
}
function hexToString(hex, opts = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"](hex, opts);
}
function hexToBigInt(hex, opts = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBigInt"](hex, opts);
}
function hexToNumber(hex, opts = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"](hex, opts);
}
function hexToBool(hex, opts = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBoolean"](hex, opts);
}
function hexToUint8Array(hex, opts = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"](hex, opts);
}
function fromHex(hex, toOrOpts) {
    const opts = typeof toOrOpts === "string" ? {
        to: toOrOpts
    } : toOrOpts;
    switch(opts.to){
        case "number":
            return hexToNumber(hex, opts);
        case "bigint":
            return hexToBigInt(hex, opts);
        case "string":
            return hexToString(hex, opts);
        case "boolean":
            return hexToBool(hex, opts);
        default:
            return hexToUint8Array(hex, opts);
    }
}
function boolToHex(value, opts = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBoolean"](value, opts);
}
function uint8ArrayToHex(value, opts = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"](value, opts);
}
function numberToHex(value_, opts = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"](value_, opts);
}
function stringToHex(value_, opts = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"](value_, opts);
}
function toHex(value, opts = {}) {
    switch(typeof value){
        case "number":
        case "bigint":
            return numberToHex(value, opts);
        case "string":
            return stringToHex(value, opts);
        case "boolean":
            return boolToHex(value, opts);
        default:
            return uint8ArrayToHex(value, opts);
    }
} //# sourceMappingURL=hex.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/hashing/keccak256.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "keccak256",
    ()=>keccak256
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/@noble/hashes/esm/sha3.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$helpers$2f$is$2d$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/helpers/is-hex.js [app-ssr] (ecmascript)");
;
;
function keccak256(value, to) {
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak_256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$helpers$2f$is$2d$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(value, {
        strict: false
    }) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToUint8Array"])(value) : value);
    if (to === "bytes") {
        return bytes;
    }
    // default fall through to hex
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["uint8ArrayToHex"])(bytes);
} //# sourceMappingURL=keccak256.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/address.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checksumAddress",
    ()=>checksumAddress,
    "getAddress",
    ()=>getAddress,
    "isAddress",
    ()=>isAddress,
    "shortenAddress",
    ()=>shortenAddress,
    "shortenHex",
    ()=>shortenHex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$caching$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/caching/lru.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$to$2d$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/to-bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$hashing$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/hashing/keccak256.js [app-ssr] (ecmascript)");
;
;
;
const ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;
const IS_ADDRESS_CACHE = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$caching$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LruMap"](4096);
function isAddress(address) {
    if (IS_ADDRESS_CACHE.has(address)) {
        // biome-ignore lint/style/noNonNullAssertion: the `has` above ensures that this will always be set
        return IS_ADDRESS_CACHE.get(address);
    }
    const result = ADDRESS_REGEX.test(address) && (address.toLowerCase() === address || checksumAddress(address) === address);
    IS_ADDRESS_CACHE.set(address, result);
    return result;
}
function checksumAddress(address) {
    const hexAddress = address.substring(2).toLowerCase();
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$hashing$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$to$2d$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToBytes"])(hexAddress), "bytes");
    const address_ = hexAddress.split("");
    for(let i = 0; i < 40; i += 2){
        // biome-ignore lint/style/noNonNullAssertion: TODO
        if (hash[i >> 1] >> 4 >= 8 && address[i]) {
            // biome-ignore lint/style/noNonNullAssertion: TODO
            address_[i] = address_[i].toUpperCase();
        }
        // biome-ignore lint/style/noNonNullAssertion: TODO
        if ((hash[i >> 1] & 0x0f) >= 8 && address[i + 1]) {
            // biome-ignore lint/style/noNonNullAssertion: TODO
            address_[i + 1] = address_[i + 1].toUpperCase();
        }
    }
    return `0x${address_.join("")}`;
}
function getAddress(address) {
    if (!isAddress(address)) {
        throw new Error(`Invalid address: ${address}`);
    }
    return checksumAddress(address);
}
function shortenAddress(address, length = 4) {
    const _address = getAddress(address);
    return shortenHex(_address, length);
}
function shortenHex(hex, length = 4) {
    return `${hex.slice(0, length + 2)}...${hex.slice(-length)}`;
} //# sourceMappingURL=address.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/contract/contract.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getContract",
    ()=>getContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/address.js [app-ssr] (ecmascript)");
;
function getContract(options) {
    if (!options.client) {
        throw new Error(`getContract validation error - invalid client: ${options.client}`);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(options.address)) {
        throw new Error(`getContract validation error - invalid address: ${options.address}`);
    }
    if (!options.chain || !options.chain.id) {
        throw new Error(`getContract validation error - invalid chain: ${options.chain}`);
    }
    return options;
} //# sourceMappingURL=contract.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/any-evm/zksync/isZkSyncChain.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks whether the given chain is part of the zksync stack
 * @param chain
 * @chain
 */ __turbopack_context__.s([
    "isZkSyncChain",
    ()=>isZkSyncChain
]);
async function isZkSyncChain(chain) {
    if (chain.id === 1337 || chain.id === 31337) {
        return false;
    }
    // check known zksync chain-ids first
    if (chain.id === 324 || chain.id === 300 || chain.id === 302 || chain.id === 11124 || chain.id === 282 || chain.id === 388 || chain.id === 4654 || chain.id === 333271 || chain.id === 37111 || chain.id === 978658 || chain.id === 531050104 || chain.id === 4457845 || chain.id === 2741 || chain.id === 240 || chain.id === 555271 || chain.id === 61166 || chain.id === 555272) {
        return true;
    }
    // fallback to checking the stack on rpc
    try {
        const { getChainMetadata } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-ssr] (ecmascript, async loader)");
        const chainMetadata = await getChainMetadata(chain);
        return chainMetadata.stackType === "zksync_stack";
    } catch  {
        // If the network check fails, assume it's not a ZkSync chain
        return false;
    }
} //# sourceMappingURL=isZkSyncChain.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/actions/eth_getCode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Retrieves the bytecode of a smart contract at the specified address.
 * @param request - The EIP1193 request function.
 * @param params - The parameters for the eth_getCode method.
 * @returns A promise that resolves to the bytecode of the smart contract.
 * @rpc
 * @example
 * ```ts
 * import { getRpcClient, eth_getCode } from "thirdweb/rpc";
 * const rpcRequest = getRpcClient({ client, chain });
 * const bytecode = await eth_getCode(rpcRequest, {
 *  address: "0x...",
 * });
 * ```
 */ __turbopack_context__.s([
    "eth_getCode",
    ()=>eth_getCode
]);
async function eth_getCode(request, params) {
    return request({
        method: "eth_getCode",
        params: [
            params.address,
            params.blockTag || "latest"
        ]
    });
} //# sourceMappingURL=eth_getCode.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/fetch-rpc.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchRpc",
    ()=>fetchRpc,
    "fetchSingleRpc",
    ()=>fetchSingleRpc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/fetch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/json.js [app-ssr] (ecmascript)");
;
;
async function fetchRpc(rpcUrl, client, options) {
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClientFetch"])(client)(rpcUrl, {
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(options.requests),
        headers: {
            ...client.config?.rpc?.fetch?.headers,
            "Content-Type": "application/json"
        },
        keepalive: client.config?.rpc?.fetch?.keepalive,
        method: "POST",
        requestTimeoutMs: options.requestTimeoutMs ?? client.config?.rpc?.fetch?.requestTimeoutMs
    });
    if (!response.ok) {
        const error = await response.text().catch(()=>null);
        throw new Error(`RPC request failed with status ${response.status} - ${response.statusText}: ${error || "unknown error"}`);
    }
    return await response.json();
}
async function fetchSingleRpc(rpcUrl, client, options) {
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClientFetch"])(client)(rpcUrl, {
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(options.request),
        headers: {
            ...client.config?.rpc?.fetch?.headers || {},
            "Content-Type": "application/json"
        },
        keepalive: client.config?.rpc?.fetch?.keepalive,
        method: "POST",
        requestTimeoutMs: options.requestTimeoutMs ?? client.config?.rpc?.fetch?.requestTimeoutMs
    });
    if (!response.ok) {
        const error = await response.text().catch(()=>null);
        throw new Error(`RPC request failed with status ${response.status} - ${response.statusText}: ${error || "unknown error"}`);
    }
    return await response.json();
} //# sourceMappingURL=fetch-rpc.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/rpc.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRpcClient",
    ()=>getRpcClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/json.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$fetch$2d$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/fetch-rpc.js [app-ssr] (ecmascript)");
;
;
;
const RPC_CLIENT_MAP = new WeakMap();
/**
 * @internal
 */ function getRpcClientMap(client) {
    if (RPC_CLIENT_MAP.has(client)) {
        return RPC_CLIENT_MAP.get(client);
    }
    const rpcClientMap = new Map();
    RPC_CLIENT_MAP.set(client, rpcClientMap);
    return rpcClientMap;
}
/**
 * @internal
 */ function rpcRequestKey(request) {
    return `${request.method}:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(request.params)}`;
}
const DEFAULT_MAX_BATCH_SIZE = 100;
// default to no timeout (next tick)
const DEFAULT_BATCH_TIMEOUT_MS = 0;
function getRpcClient(options) {
    const rpcClientMap = getRpcClientMap(options.client);
    const rpcUrl = options.chain.rpc;
    if (rpcClientMap.has(rpcUrl)) {
        return rpcClientMap.get(rpcUrl);
    }
    const rpcClient = (()=>{
        // we can do this upfront because it cannot change later
        const rpcUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRpcUrlForChain"])({
            chain: options.chain,
            client: options.client
        });
        const batchSize = // look at the direct options passed
        options.config?.maxBatchSize ?? // look at the client options
        options.client.config?.rpc?.maxBatchSize ?? // use defaults
        DEFAULT_MAX_BATCH_SIZE;
        const batchTimeoutMs = // look at the direct options passed
        options.config?.batchTimeoutMs ?? // look at the client options
        options.client.config?.rpc?.batchTimeoutMs ?? DEFAULT_BATCH_TIMEOUT_MS;
        // inflight requests
        // biome-ignore lint/suspicious/noExplicitAny: TODO: fix any
        const inflightRequests = new Map();
        let pendingBatch = [];
        let pendingBatchTimeout = null;
        /**
         * Sends the pending batch of requests.
         * @internal
         */ function sendPendingBatch() {
            // clear the timeout if any
            if (pendingBatchTimeout) {
                clearTimeout(pendingBatchTimeout);
                pendingBatchTimeout = null;
            }
            // prepare the requests array (we know the size)
            const requests = new Array(pendingBatch.length);
            const activeBatch = pendingBatch.slice().map((inflight, index)=>{
                // assign the id to the request
                inflight.request.id = index;
                // also assign the jsonrpc version
                inflight.request.jsonrpc = "2.0";
                // assign the request to the requests array (so we don't have to map it again later)
                requests[index] = inflight.request;
                return inflight;
            });
            // reset pendingBatch to empty
            pendingBatch = [];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$fetch$2d$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchRpc"])(rpcUrl, options.client, {
                requests,
                requestTimeoutMs: options.config?.requestTimeoutMs
            }).then((responses)=>{
                activeBatch.forEach((inflight, index)=>{
                    // Handle the inflight request promise for each response.
                    const response = responses[index];
                    // No response.
                    if (!response) {
                        inflight.reject(new Error(`RPC Error from ${rpcUrl}:\nrequests: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(requests)}\nresponses: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(responses)}`));
                    } else if (response instanceof Error) {
                        inflight.reject(response);
                    } else if ("error" in response) {
                        inflight.reject(response.error);
                    } else if (typeof response === "string") {
                        inflight.reject(new Error(response));
                    } else if (response.method === "eth_subscription") {
                        inflight.reject("Subscriptions not supported yet");
                    } else {
                        inflight.resolve(response.result);
                    }
                });
            }).catch((err)=>{
                // http call failed, reject all inflight requests
                for (const inflight of activeBatch){
                    inflight.reject(err);
                }
            }).finally(()=>{
                // Clear the inflight requests map so any new requests are re-fetched.
                inflightRequests.clear();
            });
        }
        // shortcut everything if we do not need to batch
        if (batchSize === 1) {
            return async (request)=>{
                // we can hard-code the id and jsonrpc version
                // we also mutate the request object here to avoid copying it
                // biome-ignore lint/suspicious/noExplicitAny: TODO: fix any
                request.id = 1;
                // biome-ignore lint/suspicious/noExplicitAny: TODO: fix any
                request.jsonrpc = "2.0";
                const rpcResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$fetch$2d$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchSingleRpc"])(rpcUrl, options.client, {
                    request: request,
                    requestTimeoutMs: options.config?.requestTimeoutMs
                });
                if (!rpcResponse) {
                    throw new Error("No response");
                }
                if ("error" in rpcResponse) {
                    throw rpcResponse.error;
                }
                return rpcResponse.result;
            };
        }
        return async (request)=>{
            const requestKey = rpcRequestKey(request);
            // if the request for this key is already inflight, return the promise directly
            if (inflightRequests.has(requestKey)) {
                // biome-ignore lint/style/noNonNullAssertion: the `has` check ensures this is defined
                return inflightRequests.get(requestKey);
            }
            // biome-ignore lint/suspicious/noExplicitAny: TODO: fix any
            let resolve;
            // biome-ignore lint/suspicious/noExplicitAny: TODO: fix any
            let reject;
            // biome-ignore lint/suspicious/noExplicitAny: TODO: fix any
            const promise = new Promise((resolve_, reject_)=>{
                resolve = resolve_;
                reject = reject_;
            });
            inflightRequests.set(requestKey, promise);
            // @ts-expect-error - they *are* definitely assigned within the promise constructor
            pendingBatch.push({
                reject,
                request,
                requestKey,
                resolve
            });
            if (batchSize > 1) {
                // if there is no timeout, set one
                if (!pendingBatchTimeout) {
                    pendingBatchTimeout = setTimeout(sendPendingBatch, batchTimeoutMs);
                }
                // if the batch is full, send it
                if (pendingBatch.length >= batchSize) {
                    sendPendingBatch();
                }
            } else {
                sendPendingBatch();
            }
            return promise;
        };
    })();
    rpcClientMap.set(rpcUrl, rpcClient);
    return rpcClient;
} //# sourceMappingURL=rpc.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/contract/actions/get-bytecode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBytecode",
    ()=>getBytecode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$actions$2f$eth_getCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/actions/eth_getCode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/rpc.js [app-ssr] (ecmascript)");
;
;
const BYTECODE_CACHE = new WeakMap();
function getBytecode(contract) {
    if (BYTECODE_CACHE.has(contract)) {
        return BYTECODE_CACHE.get(contract);
    }
    const prom = (async ()=>{
        const rpcRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRpcClient"])(contract);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$actions$2f$eth_getCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eth_getCode"])(rpcRequest, {
            address: contract.address,
            blockTag: "latest"
        });
        if (result === "0x") {
            BYTECODE_CACHE.delete(contract);
        }
        return result;
    })();
    BYTECODE_CACHE.set(contract, prom);
    return prom;
} //# sourceMappingURL=get-bytecode.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/bytecode/is-contract-deployed.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isContractDeployed",
    ()=>isContractDeployed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$actions$2f$get$2d$bytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/contract/actions/get-bytecode.js [app-ssr] (ecmascript)");
;
// we use a weak set to cache *if* a contract *is* deployed
// aka: we add it to this set if it's deployed, and only if it is deployed
// instead of using a map with: true only (because we only want to cache if it's deployed)
const cache = new WeakSet();
async function isContractDeployed(contract) {
    if (cache.has(contract)) {
        // it's only in there if it's deployed
        return true;
    }
    // this already dedupes requests for the same contract
    const bytecode = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$actions$2f$get$2d$bytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytecode"])(contract);
    const isDeployed = bytecode !== "0x";
    // if it's deployed, we add it to the cache
    if (isDeployed) {
        cache.add(contract);
    }
    return isDeployed;
} //# sourceMappingURL=is-contract-deployed.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/tiny-emitter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates an emitter object that allows subscribing to events and emitting events.
 * @returns An emitter object with `subscribe` and `emit` methods.
 * @template TEmitter - The type of the emitter.
 * @example
 * ```ts
 * const emitter = createEmitter<{
 *  event1: string;
 * event2: number;
 * }>();
 *
 * emitter.subscribe("event1", (data) => {
 * console.log(data); // "hello"
 * });
 *
 * emitter.emit("event1", "hello");
 * ```
 */ __turbopack_context__.s([
    "createEmitter",
    ()=>createEmitter
]);
function createEmitter() {
    const subsribers = new Map();
    return {
        emit (event, data) {
            const subscribers = subsribers.get(event);
            if (subscribers) {
                for (const cb of subscribers){
                    cb(data);
                }
            }
        },
        subscribe (event, cb) {
            if (!subsribers.has(event)) {
                subsribers.set(event, new Set([
                    cb
                ]));
            } else {
                subsribers.get(event)?.add(cb);
            }
            return ()=>{
                const subscribers = subsribers.get(event);
                if (subscribers) {
                    subscribers.delete(cb);
                }
            };
        }
    };
} //# sourceMappingURL=tiny-emitter.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-emitter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWalletEmitter",
    ()=>createWalletEmitter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$tiny$2d$emitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/tiny-emitter.js [app-ssr] (ecmascript)");
;
function createWalletEmitter() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$tiny$2d$emitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEmitter"])();
} //# sourceMappingURL=wallet-emitter.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_ACCOUNT_FACTORY_V0_6",
    ()=>DEFAULT_ACCOUNT_FACTORY_V0_6,
    "DEFAULT_ACCOUNT_FACTORY_V0_7",
    ()=>DEFAULT_ACCOUNT_FACTORY_V0_7,
    "DUMMY_SIGNATURE",
    ()=>DUMMY_SIGNATURE,
    "ENTRYPOINT_ADDRESS_v0_6",
    ()=>ENTRYPOINT_ADDRESS_v0_6,
    "ENTRYPOINT_ADDRESS_v0_7",
    ()=>ENTRYPOINT_ADDRESS_v0_7,
    "MANAGED_ACCOUNT_GAS_BUFFER",
    ()=>MANAGED_ACCOUNT_GAS_BUFFER,
    "TokenPaymaster",
    ()=>TokenPaymaster,
    "getDefaultAccountFactory",
    ()=>getDefaultAccountFactory,
    "getDefaultBundlerUrl",
    ()=>getDefaultBundlerUrl,
    "getEntryPointVersion",
    ()=>getEntryPointVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/domains.js [app-ssr] (ecmascript)");
;
;
const DUMMY_SIGNATURE = "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";
const DEFAULT_ACCOUNT_FACTORY_V0_6 = "0x85e23b94e7F5E9cC1fF78BCe78cfb15B81f0DF00";
const DEFAULT_ACCOUNT_FACTORY_V0_7 = "0x4be0ddfebca9a5a4a617dee4dece99e7c862dceb";
const ENTRYPOINT_ADDRESS_v0_6 = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"; // v0.6
const ENTRYPOINT_ADDRESS_v0_7 = "0x0000000071727De22E5E9d8BAf0edAc6f37da032"; // v0.7
const MANAGED_ACCOUNT_GAS_BUFFER = 50000n;
const TokenPaymaster = {
    BASE_USDC: {
        balanceStorageSlot: 9n,
        chainId: 8453,
        paymasterAddress: "0x2222f2738BE6bB7aA0Bfe4AEeAf2908172CF5539",
        tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
    },
    CELO_CUSD: {
        balanceStorageSlot: 9n,
        chainId: 42220,
        paymasterAddress: "0x3feA3c5744D715ff46e91C4e5C9a94426DfF2aF9",
        tokenAddress: "0x765DE816845861e75A25fCA122bb6898B8B1282a"
    },
    LISK_LSK: {
        balanceStorageSlot: 9n,
        chainId: 1135,
        paymasterAddress: "0x9eb8cf7fBa5ed9EeDCC97a0d52254cc0e9B1AC25",
        tokenAddress: "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24"
    }
};
const getDefaultAccountFactory = (entryPointAddress)=>{
    const version = getEntryPointVersion(entryPointAddress || ENTRYPOINT_ADDRESS_v0_6);
    if (version === "v0.7") {
        return DEFAULT_ACCOUNT_FACTORY_V0_7;
    }
    return DEFAULT_ACCOUNT_FACTORY_V0_6;
};
const getDefaultBundlerUrl = (chain)=>{
    const domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThirdwebDomains"])().bundler;
    if (domain.startsWith("localhost:")) {
        return `http://${domain}/v2?chain=${chain.id}`;
    }
    return `https://${chain.id}.${domain}/v2`;
};
const getEntryPointVersion = (address)=>{
    const checksummedAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(address);
    if (checksummedAddress === ENTRYPOINT_ADDRESS_v0_6) {
        return "v0.6";
    }
    if (checksummedAddress === ENTRYPOINT_ADDRESS_v0_7) {
        return "v0.7";
    }
    throw new Error("Unknown paymaster version");
}; //# sourceMappingURL=constants.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/smart-wallet.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "smartWallet",
    ()=>smartWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/analytics/track/connect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/contract/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$any$2d$evm$2f$zksync$2f$isZkSyncChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/any-evm/zksync/isZkSyncChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$bytecode$2f$is$2d$contract$2d$deployed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/bytecode/is-contract-deployed.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$emitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/wallet-emitter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/lib/constants.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function smartWallet(createOptions) {
    const emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$emitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWalletEmitter"])();
    let account;
    let adminAccount;
    let chain;
    let lastConnectOptions;
    return {
        autoConnect: async (options)=>{
            const { connectSmartAccount: connectSmartWallet } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/index.js [app-ssr] (ecmascript, async loader)");
            const [connectedAccount, connectedChain] = await connectSmartWallet(options, createOptions);
            // set the states
            lastConnectOptions = options;
            account = connectedAccount;
            chain = connectedChain;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackConnect"])({
                chainId: chain.id,
                client: options.client,
                walletAddress: account.address,
                walletType: "smart"
            });
            // return account
            return account;
        },
        connect: async (options)=>{
            const { connectSmartAccount } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/index.js [app-ssr] (ecmascript, async loader)");
            const [connectedAccount, connectedChain] = await connectSmartAccount(options, createOptions);
            // set the states
            adminAccount = options.personalAccount;
            lastConnectOptions = options;
            account = connectedAccount;
            chain = connectedChain;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$analytics$2f$track$2f$connect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackConnect"])({
                chainId: chain.id,
                client: options.client,
                walletAddress: account.address,
                walletType: "smart"
            });
            // return account
            emitter.emit("accountChanged", account);
            return account;
        },
        disconnect: async ()=>{
            if (account) {
                const { disconnectSmartAccount } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/index.js [app-ssr] (ecmascript, async loader)");
                await disconnectSmartAccount(account);
            }
            account = undefined;
            adminAccount = undefined;
            chain = undefined;
            emitter.emit("disconnect", undefined);
        },
        getAccount: ()=>account,
        getAdminAccount: ()=>adminAccount,
        getChain () {
            if (!chain) {
                return undefined;
            }
            chain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCachedChainIfExists"])(chain.id) || chain;
            return chain;
        },
        getConfig: ()=>createOptions,
        id: "smart",
        subscribe: emitter.subscribe,
        switchChain: async (newChain)=>{
            if (!lastConnectOptions) {
                throw new Error("Cannot switch chain without a previous connection");
            }
            const isZksyncChain = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$any$2d$evm$2f$zksync$2f$isZkSyncChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isZkSyncChain"])(newChain);
            if (!isZksyncChain) {
                // check if factory is deployed
                const factory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContract"])({
                    address: createOptions.factoryAddress || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultAccountFactory"])(createOptions.overrides?.entrypointAddress),
                    chain: newChain,
                    client: lastConnectOptions.client
                });
                const isDeployed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$bytecode$2f$is$2d$contract$2d$deployed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isContractDeployed"])(factory);
                if (!isDeployed) {
                    throw new Error(`Factory contract not deployed on chain: ${newChain.id}`);
                }
            }
            const { connectSmartAccount } = await __turbopack_context__.A("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/index.js [app-ssr] (ecmascript, async loader)");
            const [connectedAccount, connectedChain] = await connectSmartAccount({
                ...lastConnectOptions,
                chain: newChain
            }, {
                ...createOptions,
                chain: newChain
            });
            // set the states
            account = connectedAccount;
            chain = connectedChain;
            emitter.emit("accountChanged", connectedAccount);
            emitter.emit("chainChanged", connectedChain);
        }
    };
} //# sourceMappingURL=smart-wallet.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/manager/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LAST_USED_WALLET_ID",
    ()=>LAST_USED_WALLET_ID,
    "createConnectionManager",
    ()=>createConnectionManager,
    "getLastConnectedChain",
    ()=>getLastConnectedChain,
    "getStoredActiveWalletId",
    ()=>getStoredActiveWalletId,
    "getStoredConnectedWalletIds",
    ()=>getStoredConnectedWalletIds,
    "handleSmartWalletConnection",
    ()=>handleSmartWalletConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/chains/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$computedStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/reactive/computedStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/reactive/effect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/reactive/store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/json.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$storage$2f$walletStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/storage/walletStorage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$is$2d$smart$2d$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/is-smart-wallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$smart$2d$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/smart/smart-wallet.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const CONNECTED_WALLET_IDS = "thirdweb:connected-wallet-ids";
const LAST_ACTIVE_EOA_ID = "thirdweb:active-wallet-id";
const LAST_ACTIVE_CHAIN = "thirdweb:active-chain";
const LAST_USED_WALLET_ID = "thirdweb:last-used-wallet-id";
function createConnectionManager(storage) {
    // stores
    // active wallet/account
    const activeWalletStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(undefined);
    const activeAccountStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(undefined);
    const activeWalletChainStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(undefined);
    const activeWalletConnectionStatusStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])("unknown");
    const definedChainsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(new Map());
    // update global cachedChains when defined Chains store updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheChains"])([
            ...definedChainsStore.getValue().values()
        ]);
    }, [
        definedChainsStore
    ]);
    // change the active chain object to use the defined chain object
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effect"])(()=>{
        const chainVal = activeWalletChainStore.getValue();
        if (!chainVal) {
            return;
        }
        const definedChain = definedChainsStore.getValue().get(chainVal.id);
        if (!definedChain || definedChain === chainVal) {
            return;
        }
        // update active chain store
        activeWalletChainStore.setValue(definedChain);
    }, [
        definedChainsStore,
        activeWalletChainStore
    ]);
    // other connected accounts
    const walletIdToConnectedWalletMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(new Map());
    const isAutoConnecting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(false);
    const connectedWallets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$computedStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computedStore"])(()=>{
        return Array.from(walletIdToConnectedWalletMap.getValue().values());
    }, [
        walletIdToConnectedWalletMap
    ]);
    // actions
    const addConnectedWallet = (wallet)=>{
        const oldValue = walletIdToConnectedWalletMap.getValue();
        if (oldValue.has(wallet.id)) {
            return;
        }
        const newValue = new Map(oldValue);
        newValue.set(wallet.id, wallet);
        walletIdToConnectedWalletMap.setValue(newValue);
    };
    const removeConnectedWallet = (wallet)=>{
        const oldValue = walletIdToConnectedWalletMap.getValue();
        const newValue = new Map(oldValue);
        newValue.delete(wallet.id);
        walletIdToConnectedWalletMap.setValue(newValue);
    };
    const onWalletDisconnect = (wallet)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$storage$2f$walletStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteConnectParamsFromStorage"])(storage, wallet.id);
        removeConnectedWallet(wallet);
        // if disconnecting the active wallet
        if (activeWalletStore.getValue() === wallet) {
            storage.removeItem(LAST_ACTIVE_EOA_ID);
            activeAccountStore.setValue(undefined);
            activeWalletChainStore.setValue(undefined);
            activeWalletStore.setValue(undefined);
            activeWalletConnectionStatusStore.setValue("disconnected");
        }
    };
    const disconnectWallet = (wallet)=>{
        onWalletDisconnect(wallet);
        wallet.disconnect();
    };
    // handle the connection logic, but don't set the wallet as active
    const handleConnection = async (wallet, options)=>{
        const account = wallet.getAccount();
        if (!account) {
            throw new Error("Cannot set a wallet without an account as active");
        }
        const activeWallet = await (async ()=>{
            if (options?.accountAbstraction && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$is$2d$smart$2d$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSmartWallet"])(wallet)) {
                return await handleSmartWalletConnection(wallet, options.client, options.accountAbstraction, onWalletDisconnect);
            } else {
                return wallet;
            }
        })();
        await storage.setItem(LAST_ACTIVE_EOA_ID, wallet.id);
        await storage.setItem(LAST_USED_WALLET_ID, wallet.id);
        // add personal wallet to connected wallets list even if it's not the active one
        addConnectedWallet(wallet);
        if (options?.setWalletAsActive !== false) {
            handleSetActiveWallet(activeWallet);
        }
        wallet.subscribe("accountChanged", async ()=>{
            // We reimplement connect here to prevent memory leaks
            const newWallet = await handleConnection(wallet, options);
            options?.onConnect?.(newWallet, connectedWallets.getValue());
        });
        return activeWallet;
    };
    const connect = async (wallet, options)=>{
        // connectedWallet can be either wallet or smartWallet
        const connectedWallet = await handleConnection(wallet, options);
        options?.onConnect?.(connectedWallet, connectedWallets.getValue());
        return connectedWallet;
    };
    const handleSetActiveWallet = (activeWallet)=>{
        const account = activeWallet.getAccount();
        if (!account) {
            throw new Error("Cannot set a wallet without an account as active");
        }
        // also add it to connected wallets if it's not already there
        addConnectedWallet(activeWallet);
        // update active states
        activeWalletStore.setValue(activeWallet);
        activeAccountStore.setValue(account);
        activeWalletChainStore.setValue(activeWallet.getChain());
        activeWalletConnectionStatusStore.setValue("connected");
        // setup listeners
        const onAccountsChanged = (newAccount)=>{
            activeAccountStore.setValue(newAccount);
        };
        const unsubAccounts = activeWallet.subscribe("accountChanged", onAccountsChanged);
        const unsubChainChanged = activeWallet.subscribe("chainChanged", (chain)=>activeWalletChainStore.setValue(chain));
        const unsubDisconnect = activeWallet.subscribe("disconnect", ()=>{
            handleDisconnect();
        });
        const handleDisconnect = ()=>{
            onWalletDisconnect(activeWallet);
            unsubAccounts();
            unsubChainChanged();
            unsubDisconnect();
        };
    };
    const setActiveWallet = async (activeWallet)=>{
        handleSetActiveWallet(activeWallet);
        // do not set smart wallet as last active EOA
        if (activeWallet.id !== "smart") {
            await storage.setItem(LAST_ACTIVE_EOA_ID, activeWallet.id);
            await storage.setItem(LAST_USED_WALLET_ID, activeWallet.id);
        }
    };
    // side effects
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effect"])(()=>{
        const _chain = activeWalletChainStore.getValue();
        if (_chain) {
            storage.setItem(LAST_ACTIVE_CHAIN, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(_chain));
        } else {
            storage.removeItem(LAST_ACTIVE_CHAIN);
        }
    }, [
        activeWalletChainStore
    ], false);
    // save last connected wallet ids to storage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$reactive$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effect"])(async ()=>{
        const accounts = connectedWallets.getValue();
        const ids = accounts.map((acc)=>acc?.id).filter((c)=>!!c);
        storage.setItem(CONNECTED_WALLET_IDS, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(Array.from(new Set([
            ...ids
        ]))));
    }, [
        connectedWallets
    ], false);
    const switchActiveWalletChain = async (chain)=>{
        const wallet = activeWalletStore.getValue();
        if (!wallet) {
            throw new Error("No active wallet found");
        }
        if (!wallet.switchChain) {
            throw new Error("Wallet does not support switching chains");
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$is$2d$smart$2d$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSmartWallet"])(wallet)) {
            // also switch personal wallet
            const personalWalletId = await getStoredActiveWalletId(storage);
            if (personalWalletId) {
                const personalWallet = connectedWallets.getValue().find((w)=>w.id === personalWalletId);
                if (personalWallet) {
                    await personalWallet.switchChain(chain);
                    await wallet.switchChain(chain);
                    // reset the active wallet as switch chain recreates a new smart account
                    handleSetActiveWallet(wallet);
                    return;
                }
            }
            // If we couldn't find the personal wallet, just switch the smart wallet
            await wallet.switchChain(chain);
            handleSetActiveWallet(wallet);
        } else {
            await wallet.switchChain(chain);
        }
        // for wallets that dont implement events, just set it manually
        activeWalletChainStore.setValue(wallet.getChain());
    };
    function defineChains(chains) {
        const currentMapVal = definedChainsStore.getValue();
        // if all chains to be defined are already defined, no need to update the definedChains map
        const allChainsSame = chains.every((c)=>{
            const definedChain = currentMapVal.get(c.id);
            // basically a deep equal check
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(definedChain) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(c);
        });
        if (allChainsSame) {
            return;
        }
        const newMapVal = new Map(currentMapVal);
        for (const c of chains){
            newMapVal.set(c.id, c);
        }
        definedChainsStore.setValue(newMapVal);
    }
    return {
        activeAccountStore,
        activeWalletChainStore,
        activeWalletConnectionStatusStore,
        activeWalletStore,
        addConnectedWallet,
        connect,
        connectedWallets,
        defineChains,
        disconnectWallet,
        handleConnection,
        isAutoConnecting,
        removeConnectedWallet,
        setActiveWallet,
        switchActiveWalletChain
    };
}
async function getStoredConnectedWalletIds(storage) {
    try {
        const value = await storage.getItem(CONNECTED_WALLET_IDS);
        if (value) {
            return JSON.parse(value);
        }
        return [];
    } catch  {
        return [];
    }
}
async function getStoredActiveWalletId(storage) {
    try {
        const value = await storage.getItem(LAST_ACTIVE_EOA_ID);
        if (value) {
            return value;
        }
    } catch  {}
    return null;
}
async function getLastConnectedChain(storage) {
    try {
        const value = await storage.getItem(LAST_ACTIVE_CHAIN);
        if (value) {
            return JSON.parse(value);
        }
    } catch  {}
    return null;
}
const handleSmartWalletConnection = async (eoaWallet, client, options, onWalletDisconnect)=>{
    const signer = eoaWallet.getAccount();
    if (!signer) {
        throw new Error("Cannot set a wallet without an account as active");
    }
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$smart$2f$smart$2d$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["smartWallet"])(options);
    await wallet.connect({
        chain: options.chain,
        client: client,
        personalAccount: signer
    });
    // Disconnect the active wallet when the EOA disconnects if it the active wallet is a smart wallet
    const disconnectUnsub = eoaWallet.subscribe("disconnect", ()=>{
        handleDisconnect();
    });
    const handleDisconnect = ()=>{
        disconnectUnsub();
        onWalletDisconnect(wallet);
    };
    return wallet;
}; //# sourceMappingURL=index.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/actions/eth_getTransactionReceipt.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "eth_getTransactionReceipt",
    ()=>eth_getTransactionReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/node_modules/viem/_esm/utils/formatters/transactionReceipt.js [app-ssr] (ecmascript)");
;
async function eth_getTransactionReceipt(request, params) {
    const receipt = await request({
        method: "eth_getTransactionReceipt",
        params: [
            params.hash
        ]
    });
    if (!receipt) {
        throw new Error("Transaction receipt not found.");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransactionReceipt"])(receipt);
} //# sourceMappingURL=eth_getTransactionReceipt.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/sleep.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Delay an async thread
 * @param ms Sleep time in millisecond
 * @internal
 */ __turbopack_context__.s([
    "sleep",
    ()=>sleep
]);
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
} //# sourceMappingURL=sleep.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/actions/eth_blockNumber.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "eth_blockNumber",
    ()=>eth_blockNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-ssr] (ecmascript) <locals>");
;
async function eth_blockNumber(request) {
    const blockNumberHex = await request({
        method: "eth_blockNumber"
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToBigInt"])(blockNumberHex);
} //# sourceMappingURL=eth_blockNumber.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/watchBlockNumber.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "watchBlockNumber",
    ()=>watchBlockNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$sleep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/sleep.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$actions$2f$eth_blockNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/actions/eth_blockNumber.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/rpc.js [app-ssr] (ecmascript)");
;
;
;
const MAX_POLL_DELAY = 5000; // 5 seconds
const DEFAULT_POLL_DELAY = 1000; // 1 second
const MIN_POLL_DELAY = 500; // 500 milliseconds
const DEFAULT_OVERPOLL_RATIO = 2; // poll twice as often as the average block time by default
const SLIDING_WINDOW_SIZE = 10; // always keep track of the last 10 block times
/**
 * TODO: document
 * @internal
 */ function getAverageBlockTime(blockTimes) {
    // left-pad the blocktimes Array with the DEFAULT_POLL_DELAY
    while(blockTimes.length < SLIDING_WINDOW_SIZE){
        blockTimes.unshift(DEFAULT_POLL_DELAY);
    }
    const sum = blockTimes.reduce((acc, blockTime)=>acc + blockTime, 0);
    return sum / blockTimes.length;
}
/**
 * TODO: document
 * @internal
 */ function createBlockNumberPoller(client, chain, overPollRatio, onError) {
    let subscribers = [];
    let blockTimesWindow = [];
    let isActive = false;
    let lastBlockNumber;
    let lastBlockAt;
    const rpcRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRpcClient"])({
        chain,
        client
    });
    /**
     * TODO: document
     * @internal
     */ async function poll() {
        // stop polling if there are no more subscriptions
        if (!isActive) {
            return;
        }
        try {
            const blockNumber = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$actions$2f$eth_blockNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eth_blockNumber"])(rpcRequest);
            if (!lastBlockNumber || blockNumber > lastBlockNumber) {
                let newBlockNumbers = [];
                if (lastBlockNumber) {
                    for(let i = lastBlockNumber + 1n; i <= blockNumber; i++){
                        newBlockNumbers.push(BigInt(i));
                    }
                } else {
                    newBlockNumbers = [
                        blockNumber
                    ];
                }
                lastBlockNumber = blockNumber;
                const currentTime = Date.now();
                if (lastBlockAt) {
                    // if we skipped a block we need to adjust the block time down to that level
                    const blockTime = (currentTime - lastBlockAt) / newBlockNumbers.length;
                    blockTimesWindow.push(blockTime);
                    blockTimesWindow = blockTimesWindow.slice(-SLIDING_WINDOW_SIZE);
                }
                lastBlockAt = currentTime;
                // for all new blockNumbers...
                for (const b of newBlockNumbers){
                    // ... call all current subscribers
                    for (const subscriberCallback of subscribers){
                        subscriberCallback(b);
                    }
                }
            }
        } catch (err) {
            if (onError) {
                onError(err);
            } else {
                console.error(`[watchBlockNumber]: Failed to poll for latest block number: ${err}`);
            }
        }
        const currentApproximateBlockTime = getAverageBlockTime(blockTimesWindow);
        // make sure we never poll faster than our minimum poll delay or slower than our maximum poll delay
        const pollDelay = Math.max(MIN_POLL_DELAY, Math.min(MAX_POLL_DELAY, Math.max(MIN_POLL_DELAY, currentApproximateBlockTime)));
        // sleep for the pollDelay for this chain (divided by the overPollRatio, which defaults to 2)
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$sleep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sleep"])(pollDelay / (overPollRatio ?? DEFAULT_OVERPOLL_RATIO));
        // poll again
        poll();
    }
    // return the "subscribe" function
    return function subscribe(callBack, initialBlockNumber) {
        subscribers.push(callBack);
        // if we are currently not active -> start polling
        if (!isActive) {
            lastBlockNumber = initialBlockNumber;
            isActive = true;
            poll();
        }
        // return the "unsubscribe" function (meaning the caller can unsubscribe)
        return function unSubscribe() {
            // filter out the callback from the subscribers
            subscribers = subscribers.filter((fn)=>fn !== callBack);
            // if the new subscribers Array is empty (aka we were the last subscriber) -> stop polling
            if (subscribers.length === 0) {
                lastBlockNumber = undefined;
                lastBlockAt = undefined;
                isActive = false;
            }
        };
    };
}
const existingPollers = new Map();
function watchBlockNumber(opts) {
    const { client, chain, onNewBlockNumber, overPollRatio, latestBlockNumber, onError } = opts;
    const chainId = chain.id;
    // if we already have a poller for this chainId -> use it.
    let poller = existingPollers.get(chainId);
    // otherwise create a new poller
    if (!poller) {
        poller = createBlockNumberPoller(client, chain, overPollRatio, onError);
        // and store it for later use
        existingPollers.set(chainId, poller);
    }
    // subscribe to the poller and return the unSubscribe function to the caller
    return poller(onNewBlockNumber, latestBlockNumber);
} //# sourceMappingURL=watchBlockNumber.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/wait-for-tx-receipt.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "waitForReceipt",
    ()=>waitForReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$actions$2f$eth_getTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/actions/eth_getTransactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/rpc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$watchBlockNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/rpc/watchBlockNumber.js [app-ssr] (ecmascript)");
;
;
;
const DEFAULT_MAX_BLOCKS_WAIT_TIME = 100;
const map = new Map();
function waitForReceipt(options) {
    const { transactionHash, chain, client } = options;
    const chainId = chain.id;
    const key = `${chainId}:tx_${transactionHash}`;
    const maxBlocksWaitTime = options.maxBlocksWaitTime ?? DEFAULT_MAX_BLOCKS_WAIT_TIME;
    if (map.has(key)) {
        // biome-ignore lint/style/noNonNullAssertion: the `has` above ensures that this will always be set
        return map.get(key);
    }
    const promise = new Promise((resolve, reject)=>{
        if (!transactionHash) {
            reject(new Error("Transaction has no transactionHash to wait for, did you execute it?"));
        }
        const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRpcClient"])({
            chain,
            client
        });
        // start at -1 because the first block doesn't count
        let blocksWaited = -1;
        const unwatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$watchBlockNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchBlockNumber"])({
            chain: chain,
            client: client,
            onNewBlockNumber: async ()=>{
                blocksWaited++;
                if (blocksWaited >= maxBlocksWaitTime) {
                    unwatch();
                    reject(new Error(`Transaction receipt for ${transactionHash} not found after ${maxBlocksWaitTime} blocks`));
                    return;
                }
                try {
                    const receipt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$rpc$2f$actions$2f$eth_getTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eth_getTransactionReceipt"])(request, {
                        hash: transactionHash
                    });
                    // stop the polling
                    unwatch();
                    // resolve the top level promise with the receipt
                    resolve(receipt);
                } catch  {
                // noop, we'll try again on the next blocks
                }
            }
        });
    // remove the promise from the map when it's done (one way or the other)
    }).finally(()=>{
        map.delete(key);
    });
    map.set(key, promise);
    return promise;
} //# sourceMappingURL=wait-for-tx-receipt.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/type-guards.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if a value is an object.
 * @param value - The value to check.
 * @returns True if the value is an object, false otherwise.
 * @internal
 */ __turbopack_context__.s([
    "isObject",
    ()=>isObject,
    "isObjectWithKeys",
    ()=>isObjectWithKeys,
    "isRecord",
    ()=>isRecord,
    "isString",
    ()=>isString
]);
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isString(value) {
    return typeof value === "string";
}
function isObjectWithKeys(value, keys = []) {
    return isObject(value) && keys.every((key)=>key in value);
}
function isRecord(value, guards) {
    const keyGuard = guards?.key ?? isString;
    const valueGuard = guards?.value ?? isString;
    return isObject(value) && !Array.isArray(value) && Object.entries(value).every(([k, v])=>keyGuard(k) && valueGuard(v));
} //# sourceMappingURL=type-guards.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBaseTransactionOptions",
    ()=>isBaseTransactionOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$type$2d$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/type-guards.js [app-ssr] (ecmascript)");
;
function isBaseTransactionOptions(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$type$2d$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObjectWithKeys"])(value, [
        "__contract"
    ]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$type$2d$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObjectWithKeys"])(value.__contract, [
        "address",
        "chain"
    ]) && typeof value.__contract.address === "string";
} //# sourceMappingURL=types.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/utils/structuralSharing.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "structuralSharing",
    ()=>structuralSharing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
/** Forked from https://github.com/epoberezkin/fast-deep-equal */ // biome-ignore lint/suspicious/noExplicitAny: This function by nature takes any object
function deepEqual(a, b) {
    if (a === b) return true;
    if (a && b && typeof a === "object" && typeof b === "object") {
        if (a.constructor !== b.constructor) return false;
        let length;
        let i;
        if (Array.isArray(a) && Array.isArray(b)) {
            length = a.length;
            if (length !== b.length) return false;
            for(i = length; i-- !== 0;)if (!deepEqual(a[i], b[i])) return false;
            return true;
        }
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        const keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)// biome-ignore lint/style/noNonNullAssertion: We know its there
        if (!Object.hasOwn(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            const key = keys[i];
            if (key && !deepEqual(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    // biome-ignore lint/suspicious/noSelfCompare: TODO
    return a !== a && b !== b;
}
function structuralSharing(oldData, newData) {
    if (deepEqual(oldData, newData)) {
        return oldData;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceEqualDeep"])(oldData, newData);
} //# sourceMappingURL=structuralSharing.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/providers/connection-manager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectionManagerCtx",
    ()=>ConnectionManagerCtx,
    "useConnectionManager",
    ()=>useConnectionManager,
    "useConnectionManagerCtx",
    ()=>useConnectionManagerCtx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const ConnectionManagerCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useConnectionManager() {
    const connectionManager = useConnectionManagerCtx("useConnectionManager");
    if (!connectionManager) {
        throw new Error("useConnectionManager must be used within a <ThirdwebProvider> Provider");
    }
    return connectionManager;
}
function useConnectionManagerCtx(hookname) {
    const manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ConnectionManagerCtx);
    if (!manager) {
        throw new Error(`${hookname} must be used within <ThirdwebProvider>`);
    }
    return manager;
} //# sourceMappingURL=connection-manager.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/providers/invalidateWalletBalance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invalidateWalletBalance",
    ()=>invalidateWalletBalance
]);
function invalidateWalletBalance(queryClient, chainId) {
    queryClient.invalidateQueries({
        queryKey: chainId ? [
            "walletBalance",
            chainId
        ] : [
            "walletBalance"
        ]
    });
    queryClient.invalidateQueries({
        queryKey: chainId ? [
            "internal_account_balance",
            chainId
        ] : [
            "internal_account_balance"
        ]
    });
    queryClient.invalidateQueries({
        queryKey: chainId ? [
            "nfts",
            chainId
        ] : [
            "nfts"
        ]
    });
    queryClient.invalidateQueries({
        queryKey: chainId ? [
            "tokens",
            chainId
        ] : [
            "tokens"
        ]
    });
} //# sourceMappingURL=invalidateWalletBalance.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/providers/RootElementContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SetRootElementContext",
    ()=>SetRootElementContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const SetRootElementContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(()=>{}); //# sourceMappingURL=RootElementContext.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/providers/thirdweb-provider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThirdwebProviderCore",
    ()=>ThirdwebProviderCore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$wait$2d$for$2d$tx$2d$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/actions/wait-for-tx-receipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/transaction/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$type$2d$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/type-guards.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$utils$2f$structuralSharing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/utils/structuralSharing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$providers$2f$connection$2d$manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/providers/connection-manager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$providers$2f$invalidateWalletBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/providers/invalidateWalletBalance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$providers$2f$RootElementContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/providers/RootElementContext.js [app-ssr] (ecmascript)");
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
function ThirdwebProviderCore(props) {
    const [el, setEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
            defaultOptions: {
                mutations: {
                    onSettled: (data, _error, variables)=>{
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBaseTransactionOptions"])(variables)) {
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$type$2d$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObjectWithKeys"])(data, [
                                "transactionHash"
                            ]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$type$2d$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObjectWithKeys"])(variables, [
                                "client",
                                "chain"
                            ])) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$wait$2d$for$2d$tx$2d$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForReceipt"])({
                                    chain: variables.chain,
                                    client: variables.client,
                                    transactionHash: data.transactionHash
                                }).catch((e)=>{
                                    // swallow errors for receipts, but log
                                    console.error("[Transaction Error]", e);
                                }).then(()=>{
                                    return Promise.all([
                                        queryClient.invalidateQueries({
                                            queryKey: // invalidate any readContract queries for this chainId:contractAddress
                                            [
                                                "readContract",
                                                variables.__contract?.chain.id || variables.chain.id,
                                                variables.__contract?.address || variables.to
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$providers$2f$invalidateWalletBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invalidateWalletBalance"])(queryClient, variables.__contract?.chain.id || variables.chain.id)
                                    ]);
                                });
                            }
                        }
                    }
                },
                queries: {
                    // With SSR, we usually want to set some default staleTime
                    // above 0 to avoid refetching immediately on the client
                    staleTime: 60 * 1000,
                    structuralSharing: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$utils$2f$structuralSharing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["structuralSharing"]
                }
            }
        }));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$providers$2f$connection$2d$manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectionManagerCtx"].Provider, {
        value: props.manager,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$providers$2f$RootElementContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SetRootElementContext"].Provider, {
                    value: setEl,
                    children: props.children
                }),
                el
            ]
        })
    });
} //# sourceMappingURL=thirdweb-provider.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/web/providers/thirdweb-provider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThirdwebProvider",
    ()=>ThirdwebProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$storage$2f$webStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/storage/webStorage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$manager$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/wallets/manager/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$providers$2f$thirdweb$2d$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/react/core/providers/thirdweb-provider.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ThirdwebProvider(props) {
    const connectionManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>props.connectionManager || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$manager$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConnectionManager"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$storage$2f$webStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["webLocalStorage"]), [
        props.connectionManager
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$providers$2f$thirdweb$2d$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThirdwebProviderCore"], {
        manager: connectionManager,
        children: props.children
    });
} //# sourceMappingURL=thirdweb-provider.js.map
}),
];

//# sourceMappingURL=13e8b_thirdweb_dist_esm_083fd1ad._.js.map