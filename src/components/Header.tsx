import { Bell, CalendarDays, ChevronDown, Menu, Search, Type } from 'lucide-react'

type HeaderProps = {
  font: 'courier' | 'comic'
  onFontToggle: () => void
  onMenuClick: () => void
}

export function Header({ font, onFontToggle, onMenuClick }: HeaderProps) {
  const fontName = font === 'courier' ? 'Courier' : 'Comic Sans'
  const nextFontName = font === 'courier' ? 'Comic Sans' : 'Courier'

  return (
    <header className="topbar">
      <button
        className="icon-button mobile-menu"
        onClick={onMenuClick}
        aria-label="Open navigation"
      >
        <Menu size={20} />
      </button>
      <div className="search-box">
        <Search size={17} aria-hidden="true" />
        <input aria-label="Search dashboard" placeholder="Search metrics..." />
        <kbd>⌘ K</kbd>
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
        <button
          className="font-toggle"
          onClick={onFontToggle}
          aria-label={`Switch to ${nextFontName}`}
        >
          <Type size={17} aria-hidden="true" />
          <span>{fontName}</span>
        </button>
      </div>
    </header>
  )
}
