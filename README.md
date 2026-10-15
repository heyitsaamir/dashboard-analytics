# Northstar Analytics

A responsive, dark-mode analytics dashboard built with React and TypeScript. Northstar displays revenue, customer, conversion, acquisition, and transaction data from local demo fixtures, with installable Progressive Web App (PWA) support.

## Getting started

### Prerequisites

- Node.js `20.19+` within 20.x, `22.13+` within 22.x, or `24+`, matching the engines in `package.json`. An LTS release is recommended.
- npm and Git.

### Run locally

```bash
git clone https://github.com/heyitsaamir/dashboard-analytics.git
cd dashboard-analytics
npm ci
npm run dev
```

Open the local URL printed by Vite. No backend, API keys, or environment variables are required.

## Demo data

All metrics, charts, and recent transactions use deterministic fixtures in [`src/data/demoData.ts`](src/data/demoData.ts). Refreshing or restarting the app returns the same data; the dashboard makes no backend or external data API calls.

The UI's "Live data" indicator is part of the demo, not a live data connection.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm test` | Run the Vitest suite once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Check the project with ESLint |
| `npm run typecheck` | Run TypeScript project checks without emitting files |
| `npm run build` | Type-check and create the production bundle |
| `npm run preview` | Serve the production bundle locally after building |

## Architecture

The app uses **Vite, React, and TypeScript**, with **Recharts** for revenue and acquisition charts and **Lucide** for icons. **Vitest and Testing Library** cover dashboard rendering, mobile navigation, fixture stability, and currency formatting.

| Path | Purpose |
| --- | --- |
| [`src/App.tsx`](src/App.tsx) | Dashboard layout and mobile navigation state |
| [`src/components/`](src/components/) | Navigation, header, metric cards, charts, and transaction table |
| [`src/data/demoData.ts`](src/data/demoData.ts) | Shared demo fixtures and currency formatting |
| [`src/index.css`](src/index.css) | Dashboard styling and responsive layout |
| [`public/`](public/) | App icons and other static assets |
| [`vite.config.ts`](vite.config.ts) | Build, PWA manifest, and service worker configuration |

## PWA support

`vite-plugin-pwa` generates the web app manifest and a Workbox service worker. The app supports standalone display, standard and maskable icons, and an Apple touch icon. The service worker precaches production assets for offline startup, cleans outdated caches, and updates automatically.

### Check installation and offline startup

```bash
npm run build
npm run preview
```

1. Open the preview URL in a Chromium-based browser while online.
2. Wait for the service worker to activate and finish caching the app.
3. Use the browser's install action to install Northstar.
4. Set the network to **Offline** in DevTools and reload to check offline startup.

PWA support is also enabled during `npm run dev` for development inspection. Use the production preview to verify the built app's offline behavior. Deployment requires HTTPS; localhost is supported for local checks.
