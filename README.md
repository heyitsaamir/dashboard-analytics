# Northstar Analytics, Arrr!

Ahoy! Northstar be a polished, responsive analytics dashboard with light and dark themes, rigged as an installable Progressive Web App. Chart yer revenue, customer, conversion, acquisition, and transaction signals with a deterministic local dataset, so every demo sails fast and repeatably without a backend aboard.

## Getting underway

Before ye hoist the sails, ye need an active LTS release of Node.js (`20.19+`, `22.13+`, or `24+`).

```bash
npm install
npm run dev
```

Set course for the local URL printed by Vite. The default development voyage always uses the deterministic fixtures in `src/data/demoData.ts`; no backend or external data API calls leave this ship. Restart or refresh the app, and ye'll find the same KPI, chart, and transaction data waiting on deck.

## Dress yer ship

Use the sun/moon button at the top right to sail between light and dark mode on desktop or mobile. Dark mode be the default; yer choice is stowed in local browser storage and restored when ye next come aboard. If browser storage be unavailable, switching still works for the current voyage.

## Orders from the quarterdeck

| Command | Purpose |
| --- | --- |
| `npm run dev` | Hoist Vite's sails with local demo data and PWA support |
| `npm run test` | Muster the focused Vitest suite for one inspection |
| `npm run test:watch` | Keep a lookout with tests in watch mode |
| `npm run lint` | Inspect the TypeScript and React rigging with ESLint |
| `npm run typecheck` | Check the TypeScript project without sending files overboard |
| `npm run build` | Type-check the ship and pack the production bundle |
| `npm run preview` | Serve the production bundle in yer local harbor |

## How the ship be rigged

- **Vite + React + TypeScript** form the hull: an application shell, strict typing, and swift local development.
- **Recharts** draws responsive revenue and acquisition charts for yer spyglass.
- **Deterministic fixtures** in `src/data/demoData.ts` be the single local treasure chest of data for KPIs, charts, and recent transactions.
- **Component-focused UI** keeps navigation, header, metric cards, charts, and the activity table in separate berths under `src/components`.
- **Vitest + Testing Library** stand watch over critical rendering, navigation behavior, fixture stability, and data formatting.

## PWA: sailing beyond the network

`vite-plugin-pwa` crafts the web app manifest and Workbox service worker. Production assets be precached so ye can get underway offline, outdated caches are swabbed automatically, and the service worker updates below deck in the background. The app carries standalone display metadata, theme/background colors, Apple touch artwork, and standard plus maskable PNG/SVG icons.

To inspect installation and offline sailing in yer local harbor, run:

```bash
npm run build
npm run preview
```

Open the preview in a Chromium-based browser, use the browser's install action to bring the app aboard, then test with the network disabled in DevTools. PWA support also be enabled during `npm run dev`, so ye can inspect the rigging while developing. Fair winds and following seas!
