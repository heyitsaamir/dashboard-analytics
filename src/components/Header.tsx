import { Bell, CalendarDays, ChevronDown, Menu, Moon, Search, Sun } from 'lucide-react'

type HeaderProps = {
  onMenuClick: () => void
  theme: 'dark' | 'light'
  onThemeToggle: () => void
}

export function Header({ onMenuClick, theme, onThemeToggle }: HeaderProps) {
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
          className="icon-button theme-toggle"
          onClick={onThemeToggle}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}
