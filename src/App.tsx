import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { ActivityTable } from './components/ActivityTable'
import { ChannelChart } from './components/ChannelChart'
import { Header } from './components/Header'
import { MetricCard } from './components/MetricCard'
import { RevenueChart } from './components/RevenueChart'
import { Sidebar } from './components/Sidebar'
import { metrics } from './data/demoData'

type Theme = 'dark' | 'light'

const getInitialTheme = (): Theme => {
  const savedTheme = window.localStorage.getItem('northstar-theme')

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme
  }

  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function App() {
  const [navigationOpen, setNavigationOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'light' ? '#f3f6f9' : '#0b0f17',
    )
    window.localStorage.setItem('northstar-theme', theme)
  }, [theme])

  return (
    <div className="app-shell">
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
          onMenuClick={() => setNavigationOpen(true)}
          onThemeToggle={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
          theme={theme}
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
