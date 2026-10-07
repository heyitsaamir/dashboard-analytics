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
import { useId } from 'react'

export type DashboardFont = 'sans' | 'serif' | 'mono'

type SidebarProps = {
  selectedFont: DashboardFont
  onFontChange: (font: DashboardFont) => void
}

const fontOptions: Array<{ value: DashboardFont; label: string }> = [
  { value: 'sans', label: 'Sans serif' },
  { value: 'serif', label: 'Serif' },
  { value: 'mono', label: 'Monospace' },
]

const primaryNavigation = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'Customers', icon: Users },
  { label: 'Revenue', icon: CreditCard },
  { label: 'Products', icon: Package },
  { label: 'Campaigns', icon: Megaphone },
  { label: 'Reports', icon: BarChart3 },
]

export function Sidebar({ selectedFont, onFontChange }: SidebarProps) {
  const fontSelectId = useId()

  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark" aria-hidden="true">
          <Sparkles size={18} />
        </span>
        <span>Northstar</span>
      </div>

      <div className="font-control">
        <label htmlFor={fontSelectId}>
          <Type size={15} aria-hidden="true" />
          Dashboard font
        </label>
        <select
          id={fontSelectId}
          value={selectedFont}
          onChange={(event) => onFontChange(event.target.value as DashboardFont)}
        >
          {fontOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

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
