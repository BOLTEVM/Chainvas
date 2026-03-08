"use client";

import { ThirdwebProvider } from "thirdweb/react";
import { PrivyProvider } from "@privy-io/react-auth";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <PrivyProvider
            appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || "insert-your-privy-app-id"}
            config={{
                appearance: {
                    theme: "dark",
                    accentColor: "#f97316",
                    showWalletLoginFirst: true,
                },
            }}
        >
            <ThirdwebProvider>
                {children}
            </ThirdwebProvider>
        </PrivyProvider>
    );
}
