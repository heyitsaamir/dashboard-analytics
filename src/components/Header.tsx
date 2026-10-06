import { Bell, CalendarDays, ChevronDown, Menu, Search, Type } from 'lucide-react'
import { dashboardFonts, isDashboardFont, type DashboardFont } from '../dashboardFonts'

type HeaderProps = {
  dashboardFont: DashboardFont
  onFontChange: (font: DashboardFont) => void
  onMenuClick: () => void
}

export function Header({ dashboardFont, onFontChange, onMenuClick }: HeaderProps) {
  return (
    <header className="topbar">
      <div className="topbar-start">
        <button
          className="icon-button mobile-menu"
          onClick={onMenuClick}
          aria-label="Open navigation"
        >
          <Menu size={20} />
        </button>
        <label className="font-control">
          <Type className="font-control-icon" size={16} aria-hidden="true" />
          <span className="sr-only">Dashboard font</span>
          <select
            aria-label="Dashboard font"
            value={dashboardFont}
            onChange={(event) => {
              if (isDashboardFont(event.target.value)) {
                onFontChange(event.target.value)
              }
            }}
          >
            {dashboardFonts.map((font) => (
              <option value={font.id} key={font.id}>
                {font.label}
              </option>
            ))}
          </select>
          <ChevronDown className="font-control-chevron" size={14} aria-hidden="true" />
        </label>
        <div className="search-box">
          <Search size={17} aria-hidden="true" />
          <input aria-label="Search dashboard" placeholder="Search metrics..." />
          <kbd>⌘ K</kbd>
        </div>
      </div>
      <div className="topbar-actions">
        <button className="icon-button notification-button" aria-label="Notifications">
          <Bell size={19} />
          <span className="notification-dot" />
        </button>
        <button className="date-control">
          <CalendarDays size={17} />
          <span>Last 30 days</span>
          <ChevronDown size={15} />
        </button>
      </div>
    </header>
  )
}
