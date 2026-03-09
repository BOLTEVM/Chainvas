(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/random.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "randomBytesBuffer",
    ()=>randomBytesBuffer,
    "randomBytesHex",
    ()=>randomBytesHex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/encoding/hex.js [app-client] (ecmascript) <locals>");
;
function randomBytesHex(length = 32) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["uint8ArrayToHex"])(randomBytesBuffer(length));
}
function randomBytesBuffer(length = 32) {
    return globalThis.crypto.getRandomValues(new Uint8Array(length));
} //# sourceMappingURL=random.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/storage/mock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToMockStorage",
    ()=>addToMockStorage,
    "getFromMockStorage",
    ()=>getFromMockStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/random.js [app-client] (ecmascript)");
;
const mockStorage = new Map();
async function addToMockStorage(value) {
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytesHex"])();
    // Get the first file from FormData
    const files = value.getAll("file");
    if (!files) {
        throw new Error("No file found in FormData");
    }
    // Read file contents
    return Promise.all(files.map(async (file)=>{
        const text = await file.text();
        let data;
        try {
            // Parse the contents as JSON
            data = JSON.parse(text);
        } catch  {
            throw new Error("File contents must be valid JSON");
        }
        // If file has a name, return key/filename format
        const filename = "name" in file && file.name ? file.name.replace("files/", "") : "";
        //   console.log("mockStorage upload", key, data, filename);
        const hash = `${key}${filename ? `/${filename}` : ""}`;
        mockStorage.set(hash, data);
        return `ipfs://${hash}`;
    }));
}
function getFromMockStorage(key) {
    const data = mockStorage.get(key);
    //   console.log("mockStorage get", key, data);
    return data;
} //# sourceMappingURL=mock.js.map
}),
"[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/storage/upload/web-node.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uploadBatch",
    ()=>uploadBatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/domains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/utils/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$storage$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/BOLTChainvas/node_modules/thirdweb/dist/esm/storage/mock.js [app-client] (ecmascript)");
;
;
;
;
async function uploadBatch(client, form, fileNames, options) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_TEST"]) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$storage$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToMockStorage"])(form);
    }
    const headers = {};
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientFetch"])(client)(`https://${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$BOLTChainvas$2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$domains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThirdwebDomains"])().storage}/ipfs/upload`, {
        body: form,
        headers,
        method: "POST",
        requestTimeoutMs: client.config?.storage?.fetch?.requestTimeoutMs || 120000,
        // force auth token usage for storage uploads
        useAuthToken: true
    });
    if (!res.ok) {
        if (res.status === 401) {
            throw new Error("Unauthorized - You don't have permission to use this service.");
        }
        if (res.status === 402) {
            throw new Error("You have reached your storage limit. Please add a valid payment method to continue using the service.");
        }
        if (res.status === 403) {
            throw new Error("Forbidden - You don't have permission to use this service.");
        }
        throw new Error(`Failed to upload files to IPFS - ${res.status} - ${res.statusText}`);
    }
    const body = await res.json();
    const cid = body.IpfsHash;
    if (!cid) {
        throw new Error("Failed to upload files to IPFS - Bad CID");
    }
    if (options?.uploadWithoutDirectory) {
        return [
            `ipfs://${cid}`
        ];
    }
    return fileNames.map((name)=>`ipfs://${cid}/${name}`);
} //# sourceMappingURL=web-node.js.map
}),
]);

//# sourceMappingURL=13e8b_thirdweb_dist_esm_706e78f9._.js.map