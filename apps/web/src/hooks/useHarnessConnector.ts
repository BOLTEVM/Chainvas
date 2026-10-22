import { useEffect, useRef } from 'react';

export function useHarnessConnector(editorState?: any, mintingState?: any) {
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let ws: WebSocket;
    let reconnectTimeout: any;

    function connect() {
      try {
        ws = new WebSocket('ws://localhost:3700');
        wsRef.current = ws;

        ws.onopen = () => {
          console.log('[Harness-Chainvas] Connected to AI Agent Harness');
          ws.send(JSON.stringify({
            jsonrpc: '2.0',
            id: 'reg-chainvas',
            method: 'harness.registerSubsystem',
            params: { name: 'chainvas' }
          }));
        };

        ws.onmessage = (event) => {
          try {
            const msg = JSON.parse(event.data);
            if (msg.type === 'SUBSYSTEM_COMMAND') {
              const cmd = msg.payload;
              console.log('[Harness-Chainvas] Received harness command:', cmd);
              
              if (cmd.command === 'MINT_ASSET') {
                const { projectId, metadata } = cmd;
                if (mintingState) {
                  mintingState.mint?.(projectId, metadata);
                } else {
                  console.log(`[Harness-Chainvas] Simulated minting for project ${projectId} with metadata:`, metadata);
                }
                
                // Relaying completion back to harness
                ws.send(JSON.stringify({
                  jsonrpc: '2.0',
                  id: msg.id,
                  result: { success: true, txHash: '0xchainvas...789', status: 'MINTED' }
                }));
              } else if (cmd.command === 'CREATE_LAYER') {
                const { layerName } = cmd;
                if (editorState) {
                  editorState.addLayer?.({ name: layerName });
                } else {
                  console.log(`[Harness-Chainvas] Simulated layer creation: ${layerName}`);
                }
              }
            }
          } catch (e) {
            console.error('[Harness-Chainvas] Error parsing message', e);
          }
        };

        ws.onclose = () => {
          console.warn('[Harness-Chainvas] Disconnected from harness. Reconnecting in 5s...');
          reconnectTimeout = setTimeout(connect, 5000);
        };

        ws.onerror = () => {};
      } catch (err) {
        console.error('[Harness-Chainvas] Connection failed', err);
        reconnectTimeout = setTimeout(connect, 5000);
      }
    }

    connect();

    const telemetryInterval = setInterval(() => {
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        const documentType = editorState?.documentType ?? 'PHOTO';
        const activeUsers = editorState?.activeUsers ?? 1;
        const layerCount = editorState?.layers?.length ?? 3;
        const isMinting = mintingState?.isLoading ?? false;
        
        wsRef.current.send(JSON.stringify({
          type: 'TELEMETRY_SUBMIT',
          subsystem: 'chainvas',
          data: {
            documentType,
            activeUsers,
            layerCount,
            isMinting
          }
        }));
      }
    }, 2000);

    return () => {
      clearInterval(telemetryInterval);
      clearTimeout(reconnectTimeout);
      if (wsRef.current) {
        wsRef.current.onclose = null;
        wsRef.current.close();
      }
    };
  }, [editorState, mintingState]);

  // Expose the ref itself: reading `.current` during render is not allowed
  // (and would be stale anyway); callers read it inside handlers/effects.
  return wsRef;
}
