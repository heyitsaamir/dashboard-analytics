# northstar Analytics

A polished, responsive dark-mode analytics dashboard built as an installable Progressive Web App. Northstar presents revenue, customer, conversion, acquisition, and transaction signals using a deterministic local dataset, so every demo is fast and repeatable without a backend.

## Getting started

Requires an active LTS release of Node.js (`20.19+`, `22.13+`, or `24+`).

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The default development experience always uses the deterministic fixtures in `src/data/demoData.ts`; it makes no backend or external data API calls. Restarting or refreshing the app returns the same KPI, chart, and transaction data.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite with local demo data and PWA support |
| `npm run test` | Run the focused Vitest suite once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Check TypeScript and React source with ESLint |
| `npm run typecheck` | Run TypeScript project checks without emitting files |
| `npm run build` | Type-check and create the production bundle |
| `npm run preview` | Serve the production bundle locally |

## Architecture

- **Vite + React + TypeScript** provide the application shell, strict typing, and fast local development.
- **Recharts** renders responsive revenue and acquisition visualizations.
- **Deterministic fixtures** in `src/data/demoData.ts` are the single local data source for KPIs, charts, and recent transactions.
- **Component-focused UI** separates navigation, header, metric cards, charts, and the activity table under `src/components`.
- **Vitest + Testing Library** cover critical rendering, navigation behavior, fixture stability, and data formatting.

## PWA behavior

`vite-plugin-pwa` generates the web app manifest and Workbox service worker. Production assets are precached for offline startup, outdated caches are cleaned automatically, and the service worker updates in the background. The app includes standalone display metadata, theme/background colors, Apple touch artwork, and standard plus maskable PNG/SVG icons.

To verify installation and offline behavior locally:

```bash
npm run build
npm run preview
```

Open the preview in a Chromium-based browser, use the browser's install action, and then test with the network disabled in DevTools. PWA support is also enabled during `npm run dev` for convenient development inspection.

## App overview

Northstar Analytics is a business analytics dashboard demo that brings financial performance, customer growth, acquisition trends, and transaction activity into a single dark-mode workspace. Summary cards highlight net revenue, active customers, conversion rate, and average order value, with supporting comparisons that make changes easy to scan. A revenue area chart compares performance against a target, while a horizontal acquisition chart breaks down sessions across organic, paid, direct, social, and referral channels; both charts provide tooltips for inspecting values. The recent transactions table adds customer and product details, invoice identifiers, payment statuses, amounts, and relative timestamps for a more granular view of business activity. Its responsive layout combines desktop sidebar navigation with a collapsible mobile menu, and its Progressive Web App support allows installation and offline startup after production assets have been cached. Built with React, TypeScript, Vite, and Recharts, the app uses deterministic local fixtures rather than live business integrations, making it a repeatable interface demo without a backend or external data API calls.
