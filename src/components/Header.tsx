import { Bell, CalendarDays, ChevronDown, Menu, Search, Sparkles } from 'lucide-react'

type HeaderProps = {
  balloonsVisible: boolean
  onBalloonsChange: (visible: boolean) => void
  onMenuClick: () => void
}

export function Header({ balloonsVisible, onBalloonsChange, onMenuClick }: HeaderProps) {
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
        <label className="celebration-picker">
          <span className="sr-only">Celebration effect</span>
          <Sparkles size={15} aria-hidden="true" />
          <select
            aria-label="Celebration effect"
            value={balloonsVisible ? 'balloons' : 'none'}
            onChange={(event) => onBalloonsChange(event.target.value === 'balloons')}
          >
            <option value="none">No effect</option>
            <option value="balloons">Balloons</option>
          </select>
          <ChevronDown size={14} aria-hidden="true" />
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
