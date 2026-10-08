# 🌌📊 Northstar Analytics 🚀✨

> 🧭 A polished, responsive, dark-mode analytics dashboard that turns
> deterministic demo data into clear, interactive business insights. 📈💡

## 🎯 What is Northstar? 🔭

Northstar Analytics is an installable **Progressive Web App** built for fast,
repeatable demos. ⚡ It presents revenue 💰, customer 👥, conversion 🔄,
acquisition 🧲, and transaction 💳 signals without relying on a backend or an
external data API. 🌐🚫

Every refresh uses the same local fixtures, so screenshots 📸, tests 🧪, and
product walkthroughs 🎬 remain stable and predictable. 🎯✅

## ✨ Highlights 🌟

- 🌙 **Responsive dark-mode UI** for desktop and mobile screens
- 📊 **Interactive visualizations** powered by Recharts
- 🧮 **Deterministic demo data** for consistent metrics and charts
- 🧩 **Component-focused architecture** for maintainable UI development
- 📲 **Installable PWA** with offline startup support
- 🧪 **Focused test coverage** with Vitest and Testing Library
- 🛡️ **Strict TypeScript checks** plus ESLint validation
- ⚡ **Fast development and builds** powered by Vite

## 🧰 Tech stack 🛠️

| Technology | Role |
| --- | --- |
| ⚛️ React | Component-based user interface |
| 🔷 TypeScript | Strong typing and safer refactoring |
| ⚡ Vite | Development server and production bundling |
| 📈 Recharts | Responsive charts and data visualization |
| 📲 vite-plugin-pwa | Manifest and Workbox service-worker generation |
| 🧪 Vitest | Fast, focused automated tests |
| 🧑‍🔬 Testing Library | User-focused component testing |
| 🧹 ESLint | Code-quality and consistency checks |

## 🚀 Getting started 🏁

### 📋 Prerequisites

Use an active Node.js LTS release: **20.19+**, **22.13+**, or **24+**. 🟢

### 📦 Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. 🌐 The development app automatically uses
the fixtures in `src/data/demoData.ts`; no backend configuration is needed.
🎉

## 🎮 Commands ⌨️

| Command | Purpose |
| --- | --- |
| `npm run dev` | 🚀 Start Vite with demo data and PWA support |
| `npm run test` | 🧪 Run the focused Vitest suite once |
| `npm run test:watch` | 👀 Run tests continuously while editing |
| `npm run lint` | 🧹 Check React and TypeScript source with ESLint |
| `npm run typecheck` | 🔍 Run TypeScript checks without emitting files |
| `npm run build` | 🏗️ Type-check and create the production bundle |
| `npm run preview` | 🌍 Serve the production bundle locally |

## 🏛️ Architecture map 🗺️

```text
src/
├── components/        🧩 Dashboard UI building blocks
├── data/
│   └── demoData.ts    🧮 Deterministic application fixtures
└── ...                ⚛️ App shell, styles, and tests
```

- 🐚 **Application shell:** Vite, React, and TypeScript provide a fast,
  strongly typed foundation.
- 📉 **Visualization layer:** Recharts renders responsive revenue and
  acquisition insights.
- 🗃️ **Data layer:** `src/data/demoData.ts` is the single source for KPI,
  chart, and recent-transaction fixtures.
- 🧱 **UI layer:** Navigation, headers, metric cards, charts, and activity
  tables live in focused components.
- ✅ **Quality layer:** Vitest and Testing Library protect rendering,
  navigation, fixture stability, and formatting behavior.

## 📲 PWA and offline mode 📴

`vite-plugin-pwa` creates the web app manifest and Workbox service worker. 🧰
Production assets are precached 📦, old caches are cleaned automatically 🧹,
and service-worker updates happen in the background 🔄.

The app also includes:

- 🖥️ Standalone display metadata
- 🎨 Theme and background colors
- 🍎 Apple touch artwork
- 🖼️ Standard and maskable PNG/SVG icons
- 🛫 Offline startup support for production assets

### 🔬 Test installation and offline behavior

```bash
npm run build
npm run preview
```

Then open the preview in a Chromium-based browser 🌐, install the app 📥, and
disable the network in DevTools 📴 to verify offline startup. PWA support is
also available during `npm run dev` for convenient inspection. 🔎

## 🧪 Quality checklist ✅

Before sharing changes, run:

```bash
npm run test
npm run lint
npm run typecheck
npm run build
```

Green checks mean the dashboard is ready to navigate by the stars. 🌟🧭💚

## 🤝 Contributing 🫶

1. 🌱 Create a focused branch.
2. 🛠️ Make a small, clear change.
3. 🧪 Run the relevant quality checks.
4. 📝 Explain the behavior and tradeoffs in your pull request.
5. 🚀 Submit for review.

---

Made for fast demos ⚡, dependable development 🧑‍💻, and clear decisions
📊 — follow the Northstar. 🌌🧭✨
