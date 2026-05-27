# Holographic profile app

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-cloudflare-black?style=for-the-badge&logo=cloudflare)](https://holo-card.mynameistito.com/)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/yewZYO4kmv1)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

### Vercel



### Cloudflare Workers

This project is configured to deploy to Cloudflare Workers using [OpenNext.js Cloudflare adapter](https://opennext.js.org/cloudflare).

#### Prerequisites

- Cloudflare account
- Wrangler CLI (included as dev dependency)

#### Build and Deploy

1. **Build for Cloudflare:**
   ```bash
   pnpm build:cloudflare
   ```

2. **Preview locally:**
   ```bash
   pnpm preview
   ```

3. **Deploy to Cloudflare:**
   ```bash
   pnpm deploy
   ```

   Or deploy manually:
   ```bash
   pnpm build:cloudflare
   wrangler deploy
   ```

#### Configuration

- `wrangler.jsonc` - Cloudflare Workers configuration
- `open-next.config.ts` - OpenNext.js Cloudflare adapter settings

For advanced features like caching (KV, R2, D1), see the [OpenNext.js Cloudflare documentation](https://opennext.js.org/cloudflare).

## Build your app

Continue building your app on:

**[https://v0.app/chat/yewZYO4kmv1](https://v0.app/chat/yewZYO4kmv1)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
