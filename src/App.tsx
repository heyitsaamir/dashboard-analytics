import { useState, type CSSProperties } from 'react'
import { X } from 'lucide-react'
import { ActivityTable } from './components/ActivityTable'
import { ChannelChart } from './components/ChannelChart'
import { Header } from './components/Header'
import { MetricCard } from './components/MetricCard'
import { RevenueChart } from './components/RevenueChart'
import { Sidebar } from './components/Sidebar'
import { metrics } from './data/demoData'
import {
  DEFAULT_FONT,
  FONT_STORAGE_KEY,
  fontOptions,
  isFontId,
  type FontId,
} from './fonts'

function App() {
  const [navigationOpen, setNavigationOpen] = useState(false)
  const [font, setFont] = useState<FontId>(() => {
    const savedFont = localStorage.getItem(FONT_STORAGE_KEY)
    return isFontId(savedFont) ? savedFont : DEFAULT_FONT
  })

  const handleFontChange = (nextFont: FontId) => {
    setFont(nextFont)
    localStorage.setItem(FONT_STORAGE_KEY, nextFont)
  }

  return (
    <div
      className="app-shell"
      style={{ '--app-font-family': fontOptions[font].stack } as CSSProperties}
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
        <Sidebar font={font} onFontChange={handleFontChange} />
      </div>
      {navigationOpen && (
        <button
          className="navigation-scrim"
          aria-label="Close navigation"
          onClick={() => setNavigationOpen(false)}
        />
      )}
      <div className="desktop-navigation">
        <Sidebar font={font} onFontChange={handleFontChange} />
      </div>

      <div className="workspace">
        <Header onMenuClick={() => setNavigationOpen(true)} />
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
