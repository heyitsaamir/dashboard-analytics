import { Bell, CalendarDays, ChevronDown, Menu, Moon, Search, Sun } from 'lucide-react'

type HeaderProps = {
  onMenuClick: () => void
  onThemeToggle: () => void
  theme: 'dark' | 'light'
}

export function Header({ onMenuClick, onThemeToggle, theme }: HeaderProps) {
  const isDark = theme === 'dark'

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
        <button
          className="icon-button"
          onClick={onThemeToggle}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
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
