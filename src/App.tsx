import { useEffect, useState, type CSSProperties } from 'react'
import { X } from 'lucide-react'
import { ActivityTable } from './components/ActivityTable'
import { ChannelChart } from './components/ChannelChart'
import { Header } from './components/Header'
import { MetricCard } from './components/MetricCard'
import { RevenueChart } from './components/RevenueChart'
import { Sidebar } from './components/Sidebar'
import { metrics } from './data/demoData'
import { fontOptions, isFontId, type FontId } from './data/fontOptions'

const FONT_STORAGE_KEY = 'northstar-dashboard-font'

function App() {
  const [navigationOpen, setNavigationOpen] = useState(false)
  const [fontId, setFontId] = useState<FontId>(() => {
    const storedFont = window.localStorage.getItem(FONT_STORAGE_KEY)
    return isFontId(storedFont) ? storedFont : 'inter'
  })
  const selectedFont = fontOptions.find((font) => font.id === fontId) ?? fontOptions[0]

  useEffect(() => {
    window.localStorage.setItem(FONT_STORAGE_KEY, fontId)
  }, [fontId])

  return (
    <div
      className="app-shell"
      style={{ '--font-family': selectedFont.family } as CSSProperties}
    >
      <div className={`mobile-navigation${navigationOpen ? ' open' : ''}`}>
        {navigationOpen && (
          <button
            className="nav-close"
            onClick={() => setNavigationOpen(false)}
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        )}
        <Sidebar />
      </div>
      {navigationOpen && (
        <button
          className="navigation-scrim"
          aria-label="Close navigation"
          onClick={() => setNavigationOpen(false)}
        />
      )}
      <div className="desktop-navigation">
        <Sidebar />
      </div>

      <div className="workspace">
        <Header
          fontId={fontId}
          onFontChange={setFontId}
          onMenuClick={() => setNavigationOpen(true)}
        />
        <main>
          <div className="page-heading">
            <div>
              <p className="eyebrow">Tuesday, September 22</p>
              <h1>Good evening, Aamir</h1>
              <p>Here’s what’s happening across your business today.</p>
            </div>
            <span className="live-indicator">
              <i />
              Live data
            </span>
          </div>

          <section className="metric-grid" aria-label="Business summary">
            {metrics.map((metric) => (
              <MetricCard metric={metric} key={metric.label} />
            ))}
          </section>

          <div className="chart-grid">
            <RevenueChart />
            <ChannelChart />
          </div>

          <ActivityTable />
        </main>
      </div>
    </div>
  )
}

export default App
