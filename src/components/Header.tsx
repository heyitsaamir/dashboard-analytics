import { Bell, CalendarDays, ChevronDown, Menu, Search, Sparkles } from 'lucide-react'
import type { CelebrationType } from './Celebration'

type HeaderProps = {
  onCelebrate: (type: CelebrationType) => void
  onMenuClick: () => void
}

export function Header({ onCelebrate, onMenuClick }: HeaderProps) {
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
          <span className="sr-only">Choose a celebration effect</span>
          <Sparkles size={16} aria-hidden="true" />
          <select
            aria-label="Celebration effect"
            value=""
            onChange={(event) => {
              const type = event.target.value

              if (type === 'balloons' || type === 'confetti' || type === 'sparkles') {
                onCelebrate(type)
              }
            }}
          >
            <option value="" disabled>
              Celebrate
            </option>
            <option value="balloons">Balloons</option>
            <option value="confetti">Confetti</option>
            <option value="sparkles">Sparkles</option>
          </select>
          <ChevronDown className="celebration-chevron" size={14} aria-hidden="true" />
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
