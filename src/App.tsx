import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { ActivityTable } from './components/ActivityTable'
import { ChannelChart } from './components/ChannelChart'
import { Header } from './components/Header'
import { MetricCard } from './components/MetricCard'
import { RevenueChart } from './components/RevenueChart'
import { Sidebar, type DashboardFont } from './components/Sidebar'
import { metrics } from './data/demoData'

const FONT_STORAGE_KEY = 'dashboard-font'

function isDashboardFont(value: string | null): value is DashboardFont {
  return value === 'sans' || value === 'serif' || value === 'mono'
}

function App() {
  const [navigationOpen, setNavigationOpen] = useState(false)
  const [font, setFont] = useState<DashboardFont>(() => {
    const savedFont = window.localStorage.getItem(FONT_STORAGE_KEY)
    return isDashboardFont(savedFont) ? savedFont : 'sans'
  })

  useEffect(() => {
    window.localStorage.setItem(FONT_STORAGE_KEY, font)
  }, [font])

  return (
    <div className="app-shell" data-font={font}>
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
        <Sidebar selectedFont={font} onFontChange={setFont} />
      </div>
      {navigationOpen && (
        <button
          className="navigation-scrim"
          aria-label="Close navigation"
          onClick={() => setNavigationOpen(false)}
        />
      )}
      <div className="desktop-navigation">
        <Sidebar selectedFont={font} onFontChange={setFont} />
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
