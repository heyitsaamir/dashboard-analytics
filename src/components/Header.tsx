import { Bell, CalendarDays, ChevronDown, Menu, Search, Type } from 'lucide-react'
import { fontOptions, isFontId, type FontId } from '../data/fontOptions'

type HeaderProps = {
  fontId: FontId
  onFontChange: (fontId: FontId) => void
  onMenuClick: () => void
}

export function Header({ fontId, onFontChange, onMenuClick }: HeaderProps) {
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
          <Type size={16} aria-hidden="true" />
          <select
            aria-label="Dashboard font"
            value={fontId}
            onChange={(event) => {
              if (isFontId(event.target.value)) {
                onFontChange(event.target.value)
              }
            }}
          >
            {fontOptions.map((font) => (
              <option value={font.id} key={font.id}>
                {font.label}
              </option>
            ))}
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
