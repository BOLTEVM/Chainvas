export interface ChainvasTxRequest {
    to: string;
    from?: string;
    data?: string;
    value?: bigint | string;
    gasLimit?: bigint | string;
    chainId?: number;
    rpcUrl?: string;
    provider?: any;
    confirmations?: number;
    timeoutMs?: number;
    canvasId?: string;
    strokeData?: string;
}

export interface ChainvasTxResult {
    success: boolean;
    txHash?: string;
    receipt?: any;
    violations?: any[];
    error?: string;
}

/**
 * BOLTChainvas Wallet Pipeline
 * Native Web3 transaction execution pipeline for BOLTChainvas dApp stack.
 * Operates 100% standalone if 'theguards' package is not installed.
 */
type GuardsModule = {
    TheGuardsWalletPipeline?: { executeAndAwaitTransaction: (req: ChainvasTxRequest) => Promise<ChainvasTxResult> };
};

async function loadOptionalGuards(): Promise<GuardsModule | null> {
    const explicit = process.env.NEXT_PUBLIC_THEGUARDS_MODULE;
    if (!explicit) return null;
    try {
        return (await import(/* webpackIgnore: true */ explicit)) as GuardsModule;
    } catch {
        return null; // Standalone mode fallback
    }
}

export class ChainvasWalletPipeline {
    public static async executeAndAwaitTransaction(
        req: ChainvasTxRequest
    ): Promise<ChainvasTxResult> {
        console.log(`[ChainvasWalletPipeline] Executing transaction for canvas [${req.canvasId || 'DEFAULT'}] to ${req.to}...`);

        // Optional integration with an external "theguards" wallet pipeline when
        // this app is embedded in the larger suite. The module lives outside the
        // repo, so it is resolved at runtime (never bundled) and silently skipped
        // in standalone mode.
        const guards = await loadOptionalGuards();
        if (guards?.TheGuardsWalletPipeline) {
            return guards.TheGuardsWalletPipeline.executeAndAwaitTransaction(req);
        }

        return this.standaloneExecuteAndAwait(req);
    }

    private static async standaloneExecuteAndAwait(req: ChainvasTxRequest): Promise<ChainvasTxResult> {
        if (!req.to || !req.to.startsWith('0x') || req.to.length !== 42) {
            return { success: false, error: `Invalid recipient address: "${req.to}"` };
        }

        // Default to the Quai EVM: Orchard testnet RPC + chainId 15000, mainnet is 9.
        const rpcUrl = req.rpcUrl || 'https://orchard.rpc.quai.network/cyprus1';
        const timeoutMs = req.timeoutMs || 60_000;
        const provider = req.provider || (typeof window !== 'undefined'
            ? ((window as any).pelagus ?? (window as any).ethereum)
            : undefined);

        if (provider && typeof provider.request === 'function') {
            if (req.chainId) {
                await this.ensureChain(provider, req.chainId, rpcUrl);
            }

            try {
                let fromAddress = req.from;
                if (!fromAddress) {
                    const accounts = await this.rpcRequest(provider, 'accounts', []);
                    fromAddress = accounts && accounts.length > 0 ? accounts[0] : undefined;
                }

                const txParams: any = {
                    to: req.to,
                    from: fromAddress,
                    data: req.data || '0x',
                    value: req.value ? '0x' + BigInt(req.value).toString(16) : '0x0'
                };
                if (req.gasLimit) txParams.gas = '0x' + BigInt(req.gasLimit).toString(16);

                const txHash = await this.rpcRequest(provider, 'sendTransaction', [txParams]);
                return this.waitForReceipt(txHash, rpcUrl, timeoutMs);
            } catch (err: any) {
                return { success: false, error: err.message || 'Transaction submission failed.' };
            }
        }

        return this.waitForReceipt('0x0000000000000000000000000000000000000000000000000000000000000000', rpcUrl, 500);
    }

    /**
     * Quai nodes expose the `quai_` JSON-RPC namespace rather than `eth_`.
     * Try `quai_<method>` first (Pelagus / go-quai), then fall back to `eth_`
     * for generic EVM providers so the pipeline still works elsewhere.
     */
    private static async rpcRequest(provider: any, method: string, params: any[]): Promise<any> {
        try {
            return await provider.request({ method: `quai_${method}`, params });
        } catch (err: any) {
            // Method-not-found style errors mean the provider only speaks eth_.
            if (err?.code === -32601 || err?.code === 4201 || /not found|unsupported|does not exist/i.test(err?.message || '')) {
                return provider.request({ method: `eth_${method}`, params });
            }
            throw err;
        }
    }

    public static async ensureChain(provider: any, chainId: number, rpcUrl: string): Promise<{ success: boolean; error?: string }> {
        const hexChainId = '0x' + chainId.toString(16);
        try {
            await provider.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: hexChainId }] });
            return { success: true };
        } catch (switchError: any) {
            // Pelagus (Quai) manages the active shard inside the wallet and may not
            // implement wallet_switchEthereumChain — proceed and let the wallet decide.
            if (switchError.code === -32601 || /not found|unsupported|does not exist/i.test(switchError?.message || '')) {
                console.warn('[ChainvasWalletPipeline] Provider does not support chain switching; assuming the wallet-selected network.');
                return { success: true };
            }
            if (switchError.code === 4902 || switchError.message?.includes('Unrecognized chain')) {
                try {
                    await provider.request({ method: 'wallet_addEthereumChain', params: [{ chainId: hexChainId, chainName: `Quai (chain ${chainId})`, rpcUrls: [rpcUrl] }] });
                    return { success: true };
                } catch (addError: any) {
                    return { success: false, error: addError.message };
                }
            }
            return { success: false, error: switchError.message };
        }
    }

    public static async waitForReceipt(txHash: string, rpcUrl: string, timeoutMs: number = 60_000): Promise<ChainvasTxResult> {
        const startTime = Date.now();
        // Quai nodes expose quai_getTransactionReceipt; generic EVM nodes use eth_.
        const receiptMethods = ['quai_getTransactionReceipt', 'eth_getTransactionReceipt'];
        let methodIdx = 0;
        while (Date.now() - startTime < timeoutMs) {
            try {
                const res = await fetch(rpcUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ jsonrpc: '2.0', id: Date.now(), method: receiptMethods[methodIdx], params: [txHash] })
                });
                if (res.ok) {
                    const json = await res.json();
                    if (json.error && methodIdx === 0) {
                        // quai_ namespace unsupported — retry permanently on eth_.
                        methodIdx = 1;
                        continue;
                    }
                    if (json.result && json.result.blockNumber) {
                        const isSuccess = json.result.status === '0x1' || json.result.status === 1 || json.result.status === '1';
                        return {
                            success: isSuccess,
                            txHash,
                            receipt: {
                                transactionHash: json.result.transactionHash || txHash,
                                blockNumber: parseInt(json.result.blockNumber, 16),
                                status: isSuccess ? 'success' : 'reverted'
                            },
                            error: isSuccess ? undefined : 'Transaction reverted on-chain.'
                        };
                    }
                }
            } catch {}
            await new Promise(r => setTimeout(r, 1000));
        }
        return { success: false, txHash, error: `Receipt confirmation timed out after ${timeoutMs / 1000}s.` };
    }
}
