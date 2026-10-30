<div align="center">

# 🏴‍☠️ Northstar Analytics 🧭

### 🌌 Chart yer course through the seas of business data! 📊

```text
                         ☠️
                        ╱│╲
                  ┌──────┴──────┐
                  │  NORTHSTAR  │
                  │  ANALYTICS  │
                  └──────┬──────┘
                         │
              🏴‍☠️  ╭─────┴─────╮
                  ╱             ╲
             ____╱_______________╲____
             \                        /
          ~~~~\______________________/~~~~
       ~~~~~~~~~\___ TREASURE ___/~~~~~~~~~~
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

**⚓ A responsive, dark-mode analytics PWA for captains who navigate by data. ⚓**

💰 Revenue · 👥 Customers · 🔄 Conversion · 🧲 Acquisition · 💳 Transactions

</div>

---

## 🗺️ The Captain's Log

**Northstar Analytics** be an installable Progressive Web App built for quick,
repeatable voyages through business data. ⚡ It needs no backend harbor and
makes no calls to distant data APIs. 🌐🚫

The deterministic cargo in `src/data/demoData.ts` stays the same on every
voyage, so demos 🎬, screenshots 📸, and tests 🧪 never drift with the tide.

## 💎 The Treasure Hold

| Booty | What ye get |
| --- | --- |
| 🌙 **Dark waters** | A polished, responsive dark-mode interface |
| 📊 **Charts ahoy** | Interactive Recharts visualizations |
| 🧮 **Steady cargo** | Deterministic data for consistent demos |
| 🧩 **Tidy decks** | Focused, maintainable React components |
| 📲 **Pocket ship** | An installable PWA with offline startup |
| 🧪 **Battle tested** | Vitest and Testing Library coverage |
| 🛡️ **Strong hull** | Strict TypeScript and ESLint checks |
| ⚡ **Full sail** | Fast development and builds with Vite |

## 🧰 The Ship's Rigging

| Tool | Duty aboard ship |
| --- | --- |
| ⚛️ React | Builds the component-based decks |
| 🔷 TypeScript | Keeps the crew away from type-shaped reefs |
| ⚡ Vite | Gets development and production under way |
| 📈 Recharts | Draws charts worthy of a navigator |
| 📲 vite-plugin-pwa | Makes the ship installable and seaworthy offline |
| 🧪 Vitest | Fires the automated test cannons |
| 🧑‍🔬 Testing Library | Tests the voyage from a user's lookout |
| 🧹 ESLint | Swabs untidy code from the deck |

## 🚢 Set Sail

### 📜 Before ye board

Bring an active Node.js LTS release: **20.19+**, **22.13+**, or **24+**. 🟢

### ⚓ Launch the vessel

```bash
npm install
npm run dev
```

Open the local URL announced by Vite. 🌐 The app loads its fixtures from
`src/data/demoData.ts`, so no backend maps, secret keys, or external services
be required. 🗝️🚫

## 🦜 Orders for the Crew

| Command | Captain's order |
| --- | --- |
| `npm run dev` | 🚀 Raise the Vite development sails with PWA support |
| `npm run test` | 🧪 Fire the focused Vitest suite once |
| `npm run test:watch` | 👀 Keep watch and rerun tests while editing |
| `npm run lint` | 🧹 Swab React and TypeScript source with ESLint |
| `npm run typecheck` | 🔍 Scout for type trouble without emitting files |
| `npm run build` | 🏗️ Inspect the hull and pack the production cargo |
| `npm run preview` | 🔭 Preview the production vessel locally |

## 🧭 The Treasure Map

```text
dashboard-analytics/
│
├── 🏴‍☠️ src/
│   ├── 🧩 components/       Dashboard UI building blocks
│   ├── 🧮 data/
│   │   └── demoData.ts      Deterministic application fixtures
│   └── ⚛️ ...               App shell, styles, and tests
│
├── 🌐 public/               Static PWA cargo
├── ⚡ vite.config.ts        Vite and PWA navigation charts
├── 🧪 vitest.config.ts      Test-battle configuration
└── 📜 package.json          Commands and supplies
```

- 🐚 **The hull:** Vite, React, and TypeScript form a fast, strongly typed
  foundation.
- 📉 **The lookout:** Recharts renders responsive revenue and acquisition
  signals.
- 🗃️ **The cargo hold:** `src/data/demoData.ts` supplies KPIs, charts, and
  recent transactions.
- 🧱 **The decks:** Navigation, headers, metric cards, charts, and activity
  tables live in focused components.
- ✅ **The defenses:** Vitest and Testing Library guard rendering, navigation,
  fixture stability, and formatting.

## 🏝️ Offline Island

`vite-plugin-pwa` crafts the web app manifest and Workbox service worker. 🧰
Production assets enter the precache hold 📦, stale caches walk the plank 🪵,
and service-worker updates arrive quietly with the tide 🔄.

The vessel carries:

- 🖥️ Standalone display metadata
- 🎨 Theme and background colors
- 🍎 Apple touch artwork
- 🖼️ Standard and maskable PNG/SVG icons
- 📴 Offline startup support for production assets

### 🔭 Scout the PWA

```bash
npm run build
npm run preview
```

Open the preview in a Chromium-based browser 🌐, install the app 📥, then
disable the network in DevTools 📴 to test the offline voyage. PWA support also
sails during `npm run dev` for convenient inspection.

## ⚔️ Before Entering Battle

Run the full broadside:

```bash
npm run test
npm run lint
npm run typecheck
npm run build
```

Four green signals mean the ship be ready for open water. 🟢🟢🟢🟢

## 🤝 Join the Crew

1. 🌱 Cut a focused branch from the main shipping lane.
2. 🛠️ Make one clear, purposeful change.
3. 🧪 Test the vessel before leaving port.
4. 📝 Record behavior and tradeoffs in the pull request log.
5. 🚀 Hoist the colors and request a review.

---

<div align="center">

### 🏴‍☠️ Follow the Northstar. Find the signal. Claim the treasure. 💰

Made for swift demos ⚡, dependable development 🧑‍💻, and captains who make
decisions with data. 📊🧭🌌

**Yo ho ho, and a dashboard full of dough! 🦜**

</div>
