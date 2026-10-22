# syntax=docker/dockerfile:1
#
# Production image for the Chainvas web app (apps/web).
#
# Install recipe mirrors .github/workflows/deploy-pages.yml: only the web
# workspace is installed (packages/contracts drags in Hardhat/Foundry tooling the
# app never reads) and lifecycle scripts are skipped, because fabric's optional
# `canvas` native addon is aliased out of the bundle (see apps/web/next.config.ts)
# and would otherwise need cairo/libcairo to compile.
#
# Unlike the Pages build, this runs the Node server rather than a static export,
# so next.config.ts keeps its COOP/COEP headers and the video renderer can use
# the multi-threaded ffmpeg core.

FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat wget
RUN npm install -g pnpm@10
WORKDIR /app

FROM base AS deps
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json .npmrc ./
COPY apps/web/package.json ./apps/web/
COPY packages/contracts/package.json ./packages/contracts/
RUN pnpm install --filter @boltchainvas/web --frozen-lockfile --ignore-scripts

FROM deps AS builder
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1 \
    NODE_OPTIONS=--max-old-space-size=4096
# `pnpm --filter @boltchainvas/web build` == `next build --webpack` in apps/web.
RUN pnpm --filter @boltchainvas/web build

FROM base AS runner
ENV NODE_ENV=production \
    PORT=3000 \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0
WORKDIR /app
COPY --from=builder --chown=node:node /app ./
USER node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=25s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/ >/dev/null || exit 1
CMD ["pnpm", "--filter", "@boltchainvas/web", "exec", "next", "start", "-H", "0.0.0.0", "-p", "3000"]
