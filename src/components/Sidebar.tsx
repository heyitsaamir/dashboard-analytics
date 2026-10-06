import {
  BarChart3,
  CircleHelp,
  CreditCard,
  LayoutDashboard,
  Megaphone,
  Package,
  Settings,
  Sparkles,
  Type,
  Users,
} from 'lucide-react'
import { fontOptions, type FontId } from '../fonts'

const primaryNavigation = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'Customers', icon: Users },
  { label: 'Revenue', icon: CreditCard },
  { label: 'Products', icon: Package },
  { label: 'Campaigns', icon: Megaphone },
  { label: 'Reports', icon: BarChart3 },
]

type SidebarProps = {
  font: FontId
  onFontChange: (font: FontId) => void
}

export function Sidebar({ font, onFontChange }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark" aria-hidden="true">
          <Sparkles size={18} />
        </span>
        <span>Northstar</span>
      </div>

      <label className="font-control">
        <span>
          <Type size={14} aria-hidden="true" />
          Dashboard font
        </span>
        <select
          aria-label="Dashboard font"
          value={font}
          onChange={(event) => onFontChange(event.target.value as FontId)}
        >
          {Object.entries(fontOptions).map(([value, option]) => (
            <option value={value} key={value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <nav className="nav-list" aria-label="Primary navigation">
        {primaryNavigation.map(({ label, icon: Icon, active }) => (
          <a
            className={`nav-item${active ? ' active' : ''}`}
            href={`#${label.toLowerCase()}`}
            key={label}
            aria-current={active ? 'page' : undefined}
          >
            <Icon size={18} />
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <a className="nav-item" href="#help">
          <CircleHelp size={18} />
          <span>Help center</span>
        </a>
        <a className="nav-item" href="#settings">
          <Settings size={18} />
          <span>Settings</span>
        </a>
        <div className="profile-card">
          <div className="avatar avatar-owner">AJ</div>
          <div>
            <strong>Aamir Jawaid</strong>
            <span>Workspace owner</span>
          </div>
          <button className="profile-menu" aria-label="Open profile menu">
            •••
          </button>
        </div>
      </div>
    </aside>
  )
}
