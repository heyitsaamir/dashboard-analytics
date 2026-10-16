<p align="center">
  <img src="public/favicon.svg" alt="Northstar Analytics logo" width="80" height="80">
</p>

<h1 align="center">Northstar Analytics</h1>

<p align="center">
  <strong>Your business at a glance. A dashboard built to demo.</strong><br>
  A responsive, dark-mode analytics workspace with rich charts, repeatable demo data,<br>
  and an installable Progressive Web App experience.
</p>

<p align="center">
  <a href="#highlights">Highlights</a> &middot;
  <a href="#quick-start">Quick start</a> &middot;
  <a href="#commands">Commands</a> &middot;
  <a href="#project-map">Project map</a> &middot;
  <a href="#install-and-use-offline">Install &amp; use offline</a>
</p>

---

## Highlights

Northstar brings revenue, customer, conversion, acquisition, and transaction signals into one focused overview. Everything runs on local fixtures: no backend, API keys, or external data API calls.

| At a glance | What you get |
| --- | --- |
| **Business pulse** | KPI cards for net revenue, active customers, conversion rate, and average order value |
| **Revenue trends** | A responsive area chart comparing revenue with target |
| **Acquisition mix** | A channel-by-channel breakdown of traffic sessions |
| **Recent activity** | A transaction table with customer details, invoices, amounts, and status badges |
| **Responsive workspace** | A dark interface with desktop navigation and a collapsible mobile menu |
| **Installable PWA** | Standalone app support, offline startup after caching, and background service worker updates |

> **Demo-first by design:** Data is deterministic, not live, even where the interface says "Live data." Refreshing or restarting returns the same KPIs, chart series, and transactions. Search, date selection, report buttons, and other action controls are presentational; sidebar links are placeholders, not separate application routes.

## Quick start

**Prerequisites:** Git, npm, and Node.js matching `^20.19.0 || ^22.13.0 || >=24`, as declared in [`package.json`](package.json).

```bash
git clone https://github.com/heyitsaamir/dashboard-analytics.git
cd dashboard-analytics
npm ci
npm run dev
```

Open the local URL printed by Vite. No environment variables or backend configuration are required.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite with local demo data and PWA support |
| `npm run test` | Run the Vitest suite once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Check TypeScript and React source with ESLint |
| `npm run typecheck` | Run TypeScript project checks without emitting files |
| `npm run build` | Type-check and create the production bundle |
| `npm run preview` | Serve the production bundle locally |

## Built with

| Layer | Tools |
| --- | --- |
| **Application** | React 18, TypeScript, and Vite |
| **Visualization** | Recharts for responsive revenue and acquisition charts |
| **Iconography** | Lucide React |
| **Offline experience** | `vite-plugin-pwa` and Workbox |
| **Quality checks** | Vitest, Testing Library, ESLint, and TypeScript |

## Project map

```text
dashboard-analytics/
|-- public/                 # App icons and install artwork
|-- src/
|   |-- components/         # Navigation, header, KPI cards, charts, activity table
|   |-- data/demoData.ts    # Typed fixtures and currency formatting
|   |-- test/              # Shared test setup
|   |-- App.tsx            # Dashboard composition and mobile navigation state
|   |-- App.test.tsx       # Dashboard rendering and mobile navigation tests
|   |-- index.css          # Dashboard styling and responsive layouts
|   `-- main.tsx           # React entry point
|-- vite.config.ts         # Build configuration, PWA manifest, and service worker
`-- vitest.config.ts       # Test runner configuration
```

### Make it yours

- **Change the demo:** Edit [`src/data/demoData.ts`](src/data/demoData.ts), the shared source for KPIs, chart series, and recent transactions. Fixture stability and formatting are covered in [`src/data/demoData.test.ts`](src/data/demoData.test.ts).
- **Refine the interface:** Update [`src/components`](src/components) for individual dashboard elements and [`src/index.css`](src/index.css) for colors, spacing, and responsive layouts.
- **Customize installation:** Update the manifest in [`vite.config.ts`](vite.config.ts) and the icon assets in [`public`](public) for app branding and install metadata.

## Install and use offline

Northstar uses `vite-plugin-pwa` to generate its web app manifest and Workbox service worker. Production assets are precached for offline startup, outdated caches are cleaned automatically, and the service worker updates in the background.

The install experience includes standalone display metadata, theme and background colors, Apple touch artwork, and standard plus maskable PNG/SVG icons.

**Try the production experience locally:**

```bash
npm run build
npm run preview
```

1. Open the preview URL in a Chromium-based browser and allow the initial load to finish so the service worker can cache the app.
2. Use the browser's install action to open Northstar as a standalone app.
3. Disable the network in DevTools and reload to check offline startup.

PWA support is also enabled during `npm run dev` for development inspection. Use the production preview above to check the built offline experience.

---

<p align="center">
  <strong>Local data. Repeatable demos. One focused workspace.</strong><br>
  <a href="#northstar-analytics">Back to top</a>
</p>
