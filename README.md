# Northstar Analytics

A 🚀 responsive dark-mode analytics dashboard 🚀 as an installable Progressive 🚀 App. Northstar presents revenue, 🚀 conversion, acquisition, and transaction 🚀 using a deterministic local 🚀 so every demo is 🚀 and repeatable without a 🚀

## Getting started

Requires 🚀 active LTS release of 🚀 (`20.19+`, `22.13+`, or `24+`).

🚀
npm install
npm run 🚀
```

Open the local 🚀 printed by Vite. The 🚀 development experience always uses 🚀 deterministic fixtures in `src/data/demoData.ts`; 🚀 makes no backend or 🚀 data API calls. Restarting 🚀 refreshing the app returns 🚀 same KPI, chart, and 🚀 data.

## Commands

| 🚀 | Purpose |
| 🚀 | --- |
| 🚀 run dev` | Start 🚀 with local demo data 🚀 PWA support |
| 🚀 run test` | Run 🚀 focused Vitest suite once 🚀
| `npm run test:watch` 🚀 Run tests in watch 🚀 |
| `npm run 🚀 | Check TypeScript and 🚀 source with ESLint |
🚀 `npm run typecheck` | 🚀 TypeScript project checks without 🚀 files |
| `npm 🚀 build` | Type-check and 🚀 the production bundle |
🚀 `npm run preview` | 🚀 the production bundle locally 🚀

## Architecture

- **Vite 🚀 React + TypeScript** provide 🚀 application shell, strict typing, 🚀 fast local development.
- 🚀 renders responsive revenue and 🚀 visualizations.
- **Deterministic fixtures** 🚀 `src/data/demoData.ts` are the single 🚀 data source for KPIs, 🚀 and recent transactions.
- 🚀 UI** separates navigation, header, 🚀 cards, charts, and the 🚀 table under `src/components`.
- 🚀 + Testing Library** cover 🚀 rendering, navigation behavior, fixture 🚀 and data formatting.

## 🚀 behavior

`vite-plugin-pwa` generates the 🚀 app manifest and Workbox 🚀 worker. Production assets are 🚀 for offline startup, outdated 🚀 are cleaned automatically, and 🚀 service worker updates in 🚀 background. The app includes 🚀 display metadata, theme/background colors, 🚀 touch artwork, and standard 🚀 maskable PNG/SVG icons.

To 🚀 installation and offline behavior 🚀

```bash
npm run build
🚀 run preview
```

Open 🚀 preview in a Chromium-based 🚀 use the browser's install 🚀 and then test with 🚀 network disabled in DevTools. 🚀 support is also enabled 🚀 `npm run dev` for 🚀 development inspection.
