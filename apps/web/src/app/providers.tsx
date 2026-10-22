"use client";

import { ThirdwebProvider } from "thirdweb/react";
import { PrivyProvider } from "@privy-io/react-auth";

// Privy throws ("Cannot initialize the Privy provider with an invalid Privy app
// ID") when handed a placeholder, which takes the whole tree down — including
// during a static export, where it fails the build. Treat a missing or
// placeholder id as "wallet login not configured" and render without it; the
// editors and the Pelagus/Quai path do not depend on Privy.
const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
const hasPrivy = !!privyAppId && !privyAppId.startsWith("insert-your");

export function Providers({ children }: { children: React.ReactNode }) {
    const tree = <ThirdwebProvider>{children}</ThirdwebProvider>;

    if (!hasPrivy) return tree;

    return (
        <PrivyProvider
            appId={privyAppId}
            config={{
                appearance: {
                    theme: "dark",
                    accentColor: "#f97316",
                    showWalletLoginFirst: true,
                },
            }}
        >
            {tree}
        </PrivyProvider>
    );
}
