<div align="center">
  <img src="public/banner.png" alt="Chainvas Banner" width="100%" />

  # ⚡ Chainvas
  ### *The decentralized nexus for collaborative creation.*

  [![GitHub Stars](https://img.shields.io/github/stars/BOLTEVM/Chainvas?style=for-the-badge&logo=github&color=FFD700)](https://github.com/BOLTEVM/Chainvas/stargazers)
  [![Build Status](https://img.shields.io/badge/Build-Success-brightgreen?style=for-the-badge&logo=pnpm)](https://github.com/BOLTEVM/Chainvas)
  [![Protocol](https://img.shields.io/badge/Protocol-BOLT--EVM-blue?style=for-the-badge)](https://github.com/BOLTEVM)
  [![License](https://img.shields.io/badge/License-MIT-white?style=for-the-badge)](https://opensource.org/licenses/MIT)

  [**Explore Features**](#-key-capabilities) • [**Tech Stack**](#-powered-by) • [**Quick Start**](#-getting-started) • [**Contribute**](#-contribution)
</div>

<br />

---

## 🎨 Overview

**Chainvas** is a high-performance, multi-modal collaborative suite built for the modern decentralized web. It bridges the gap between traditional creative tools and blockchain-backed permanence, allowing teams to create, sync, and mint digital assets in real-time.

> [!IMPORTANT]
> This project is currently in **Active Development**. High-fidelity collaboration and EVM-native asset management are the core pillars of our ecosystem.

<br />

## 🚀 Key Capabilities

| Feature | Description | Status |
| :--- | :--- | :--- |
| **🖼️ Photo Engine** | Professional canvas editing with layers, filters, and P2P sync. | `STABLE` |
| **🎬 Video Studio** | After Effects style timeline editing with layers and effects. | `BETA` |
| **📄 InDesign Text** | Precision page layout and collaborative document typography. | `BETA` |
| **⛓️ On-Chain Assets** | Native Hardhat integration for seamless NFT minting and metadata. | `STABLE` |
| **📡 P2P Sync** | Zero-latency collaboration using Y.js and WebRTC. | `STABLE` |
| **☁️ Cloud DB** | Relational data persistence powered by SpacetimeDB. | `INTEGRATED` |

<br />

## ⚡ Professional Creative Workflow

Chainvas is designed for power users. All editors (Photo, Video, and InDesign) share a standardized professional control scheme for maximum velocity:

- **F1**: Help Center / Dynamic Keybind Reference
- **F3 / F4**: Instant Object Duplication & Deletion
- **F6 - F9**: Toggle UI Panels (Distraction-Free Mode)
- **F11 / F12**: Fullscreen Immersive Editing & On-Chain Minting
- **Space**: Playback Transport (Video) / Quick Selection

<br />

<br />

## 🛠️ Powered By

<details open>
<summary><b>Frontend Architecture</b></summary>
Constructed with <b>Next.js 16</b> and <b>React 19</b>, utilizing the latest <b>React Compiler</b> for optimal performance. Fully responsive UI styled with <b>Tailwind CSS 4</b>.
</details>

<details open>
<summary><b>Decentralized Backend</b></summary>
Leveraging <b>SpacetimeDB</b> for on-chain relational logic and <b>Y.js</b> for state-based collaboration over <b>WebRTC</b> and <b>WebSocket</b> protocols.
</details>

<details open>
<summary><b>Smart Contract Suite</b></summary>
Dual-toolchain contract environment targeting the <b>Quai Network EVM</b>: <b>Hardhat</b> (compile/test/deploy with the <b>quais</b> SDK) plus <b>Foundry</b> (forge unit/fuzz tests) and <b>Slither</b> static analysis. Contracts are pinned to <b>Solidity 0.8.20</b> with <b>evmVersion london</b> — the maximum Quai zones support — and OpenZeppelin <b>5.1.0</b> (exact pin; newer OZ requires ≥0.8.24).
</details>

<br />

## ⛓️ Quai Network Deployment

Chainvas deploys its NFT (`MediaAsset`, ERC-721) and utility token (`MediaToken`, ERC-20) contracts to **Quai Network** (Cyprus-1 zone).

| Network | Chain ID | RPC | Explorer |
| :--- | :--- | :--- | :--- |
| Quai Mainnet | `9` | `https://rpc.quai.network/cyprus1` | [quaiscan.io](https://quaiscan.io) |
| Orchard Testnet | `15000` | `https://orchard.rpc.quai.network/cyprus1` | [orchard.quaiscan.io](https://orchard.quaiscan.io) |

Quai nodes expose the `quai_` JSON-RPC namespace (not `eth_`), so deployments use the [quais SDK](https://www.npmjs.com/package/quais) and the dApp connects through the [Pelagus wallet](https://pelaguswallet.io) (`window.pelagus`).

```bash
cd packages/contracts

# 1. Configure: copy ../../.env.example → ../../.env.local, set CYPRUS1_PK
#    (Orchard testnet QUAI is free: https://orchard.faucet.quai.network)

# 2. Test + audit
forge test                 # 22 Foundry unit/fuzz tests
slither .                  # static analysis (slither.config.json)
npx hardhat test           # Hardhat suite + gas baseline

# 3. Deploy (writes deployments/<network>-<chainId>.json with the env vars to set)
npx hardhat run scripts/deploy.js --network cyprus1-orchard   # testnet
npx hardhat run scripts/deploy.js --network cyprus1           # mainnet

# 4. Point the web app at the deployment (printed by the deploy script):
#    NEXT_PUBLIC_QUAI_NETWORK, NEXT_PUBLIC_ERC721_ADDRESS, NEXT_PUBLIC_ERC20_ADDRESS
```

> [!NOTE]
> Slither is pinned to Solidity 0.8.20 for Quai compatibility. Its `solc-version` detector is triaged off in `slither.config.json`: all bugs it lists for 0.8.20 affect only the via-IR pipeline, which this project does not use (`via_ir = false`).

Contract verification on Quaiscan is supported via `@quai/hardhat-deploy-metadata` — the deploy script pushes metadata to IPFS and embeds the CID automatically.

<br />

## 🚦 Getting Started

### 📦 Installation

Ensure you have **Node.js 20+** and **pnpm 10+** installed.

```bash
# Clone the repository
git clone https://github.com/BOLTEVM/Chainvas.git

# Enter the workspace
cd Chainvas

# Install dependencies (highly optimized via pnpm)
pnpm install
```

### 💻 Local Development

```bash
# Spin up the Next.js dev server
pnpm run dev

# Run smart contract tests
pnpm exec hardhat test
```

<br />

## 🌐 GitHub Pages Deployment

The web app is published to GitHub Pages as a **static export** by
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) on every push to
`main` that touches `apps/web/**` (or manually via *Actions ▸ Deploy web app to GitHub Pages ▸
Run workflow*). Set **Settings ▸ Pages ▸ Source** to **GitHub Actions** once, and the site goes
live at `https://<owner>.github.io/<repo>/`.

The workflow derives the base path from the repository name, so forks and renames need no edits.

| Build mode | Command | Output |
| :--- | :--- | :--- |
| Server (default) | `pnpm run build` | `.next/` — Node server, sends COOP/COEP headers |
| Static (Pages) | `GITHUB_PAGES=true` + `pnpm run build` | `apps/web/out/` — no server |

Reproduce the Pages build locally:

```bash
# bash / zsh
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/Chainvas pnpm --filter @boltchainvas/web run build

# PowerShell
$env:GITHUB_PAGES="true"; $env:NEXT_PUBLIC_BASE_PATH="/Chainvas"
pnpm --filter @boltchainvas/web run build
```

Then serve `apps/web/out` from a `/Chainvas/` sub-path — opening `out/index.html` directly will
404 on every asset, because the export is built for that prefix.

> [!NOTE]
> **What the static demo can and cannot do.** The three editors, the timeline, in-browser
> rendering and local persistence all work. Cross-origin isolation (`COOP`/`COEP`) cannot be sent
> by a static host, so the renderer uses the single-threaded `@ffmpeg/core` build — correct output,
> slower encoding. Wallet login and IPFS upload stay disabled unless
> `NEXT_PUBLIC_PRIVY_APP_ID` and `NEXT_PUBLIC_THIRDWEB_CLIENT_ID` are added as repository
> **secrets**; chain and signaling settings can be supplied as repository **variables**
> (`NEXT_PUBLIC_QUAI_NETWORK`, `NEXT_PUBLIC_ERC721_ADDRESS`, `NEXT_PUBLIC_ERC20_ADDRESS`,
> `NEXT_PUBLIC_YJS_SIGNALING`). The build succeeds with none of them set.

<br />

## 📜 Roadmap

- [x] **Phase 1**: Initial migration to `pnpm` and monorepo stabilization.
- [x] **Phase 2**: Multi-compiler support for Solidity 0.8.26 and OZ v5.
- [ ] **Phase 3**: Integration of advanced WebRTC signaling for global low-latency sync.
- [ ] **Phase 4**: Expansion of the Photo Engine with AI-driven generative tools.

<br />

---

<div align="center">
  <p>Built with ⚡ and ❤️ by the <b>BOLT Team</b></p>
  <sub>Copyright © 2026 BOLT Chainvas. All rights reserved.</sub>
</div>