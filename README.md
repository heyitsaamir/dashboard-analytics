# Northstar Analytics, Arrr!

Ahoy! Northstar be a polished, responsive dark-mode analytics dashboard built as an installable Progressive Web App. It charts yer revenue, customers, conversions, acquisitions, and transactions from a deterministic local dataset, so every voyage be fast and repeatable without a backend lurking below deck.

## Set sail

Before ye cast off, make sure an active LTS release of Node.js (`20.19+`, `22.13+`, or `24+`) be aboard.

```bash
npm install
npm run dev
```

Open the local URL Vite prints in yer terminal. By default, the development voyage always sails with the deterministic fixtures in `src/data/demoData.ts`; no backend or external data API calls be made. Restart or refresh the app, and the same KPI, chart, and transaction data will return to port.

## Captain's commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Hoist Vite with local demo data and PWA support |
| `npm run test` | Run the focused Vitest suite once across the deck |
| `npm run test:watch` | Keep tests on lookout in watch mode |
| `npm run lint` | Inspect the TypeScript and React cargo with ESLint |
| `npm run typecheck` | Check the TypeScript charts without emitting files |
| `npm run build` | Type-check the cargo and pack the production bundle |
| `npm run preview` | Serve the production bundle from yer local port |

## How the ship be built

- **Vite + React + TypeScript** form the application hull, keep the typing shipshape, and make local development swift.
- **Recharts** draws responsive maps of revenue and acquisition waters.
- **Deterministic fixtures** in `src/data/demoData.ts` be the single local source of truth for KPIs, charts, and recent transactions.
- **Component-focused UI** keeps navigation, the header, metric cards, charts, and the activity table in separate quarters under `src/components`.
- **Vitest + Testing Library** stand watch over critical rendering, navigation behavior, fixture stability, and data formatting.

## PWA behavior aboard ship

`vite-plugin-pwa` forges the web app manifest and Workbox service worker. Production assets be precached for offline startup, stale caches walk the plank automatically, and the service worker updates quietly in the background. The app carries standalone display metadata, theme and background colors, Apple touch artwork, and standard plus maskable PNG/SVG icons.

To inspect the installation and offline behavior in yer local waters:

```bash
npm run build
npm run preview
```

Open the preview in a Chromium-based browser, use the browser's install action, then cut the network in DevTools to test it offline. PWA support also stays aboard during `npm run dev` for convenient development inspection.
