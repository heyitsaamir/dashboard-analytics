import { Bell, CalendarDays, ChevronDown, Menu, Search, Sparkles } from 'lucide-react'

type HeaderProps = {
  onMenuClick: () => void
  decoration: 'none' | 'balloons'
  onDecorationChange: (decoration: 'none' | 'balloons') => void
}

export function Header({ decoration, onDecorationChange, onMenuClick }: HeaderProps) {
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
        <label className="decoration-control">
          <Sparkles size={14} aria-hidden="true" />
          <span className="sr-only">Page decoration</span>
          <select
            aria-label="Page decoration"
            value={decoration}
            onChange={(event) =>
              onDecorationChange(event.target.value as 'none' | 'balloons')
            }
          >
            <option value="none">None</option>
            <option value="balloons">Balloons</option>
          </select>
          <ChevronDown size={13} aria-hidden="true" />
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
