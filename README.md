# Northstar Analytics, Arrr!

Ahoy, matey! Northstar be a shipshape, responsive analytics dashboard with light and dark themes, built as an installable Progressive Web App. Chart yer revenue, customer, conversion, acquisition, and transaction waters with a deterministic local dataset, so every demo sails fast and repeatable without a backend aboard.

```text
 /\_/\
( o.o )
 > ^ <
```

## Set sail

Before ye weigh anchor, bring an active LTS release of Node.js (`20.19+`, `22.13+`, or `24+`).

```bash
npm install
npm run dev
```

Steer yer browser to the local URL printed by Vite. The default development voyage always uses the deterministic fixtures in `src/data/demoData.ts`; no backend or external data API calls leave this ship. Restart or refresh the app, and ye'll find the same KPI, chart, and transaction treasure waiting.

## Hoist yer colors

Tap the sun/moon button at the top right to sail between light and dark mode on desktop or mobile. Dark mode be the default; yer choice is stowed in local browser storage and restored when ye return to port. If browser storage be unavailable, ye can still switch colors for the current visit.

## Captain's orders

| Command | Orders |
| --- | --- |
| `npm run dev` | Weigh anchor with Vite, local demo data, and PWA support |
| `npm run test` | Muster the focused Vitest crew for one test run |
| `npm run test:watch` | Keep a lookout with tests in watch mode |
| `npm run lint` | Inspect the TypeScript and React rigging with ESLint |
| `npm run typecheck` | Check the TypeScript charts without emitting files |
| `npm run build` | Type-check the ship and pack the production bundle |
| `npm run preview` | Serve the production bundle in yer local harbor |

## The ship's rigging

- **Vite + React + TypeScript** keep the application shell shipshape with strict typing and swift local development.
- **Recharts** maps yer revenue and acquisition waters with responsive visualizations.
- **Deterministic fixtures** in `src/data/demoData.ts` be the single local treasure chest for KPIs, charts, and recent transactions.
- **Component-focused UI** gives navigation, header, metric cards, charts, and the activity table their own berths under `src/components`.
- **Vitest + Testing Library** stand watch over critical rendering, navigation behavior, fixture stability, and data formatting.

## Sail offline with the PWA

`vite-plugin-pwa` crafts the web app manifest and Workbox service worker. Production assets be precached so ye can launch offline, outdated caches are cleared automatically, and the service worker updates below deck in the background. The app carries standalone display metadata, theme/background colors, Apple touch artwork, and standard plus maskable PNG/SVG icons.

To put local installation and offline sailing through their sea trials:

```bash
npm run build
npm run preview
```

Open the preview in a Chromium-based browser, use the browser's install action, then disable the network in DevTools to test yer offline sea legs. PWA support be enabled during `npm run dev` too, so ye can inspect the ship while she's under construction.
