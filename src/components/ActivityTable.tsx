import { ArrowUpRight, MoreHorizontal } from 'lucide-react'
import { activities } from '../data/demoData'

export function ActivityTable() {
  return (
    <section className="panel activity-panel">
      <div className="panel-header activity-header">
        <div>
          <p className="eyebrow">Latest activity</p>
          <h2>Recent transactions</h2>
        </div>
        <button className="text-button">
          View all
          <ArrowUpRight size={15} />
        </button>
      </div>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Product</th>
              <th>Invoice</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Time</th>
              <th><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td>
                  <div className="customer-cell">
                    <span
                      className="avatar"
                      style={{ '--avatar-accent': activity.accent } as React.CSSProperties}
                    >
                      {activity.initials}
                    </span>
                    <span>
                      <strong>{activity.customer}</strong>
                      <small>{activity.email}</small>
                    </span>
                  </div>
                </td>
                <td className="muted-cell">{activity.product}</td>
                <td className="muted-cell mono">{activity.id}</td>
                <td>
                  <span className={`status-badge ${activity.status.toLowerCase()}`}>
                    {activity.status}
                  </span>
                </td>
                <td className="amount-cell">{activity.amount}</td>
                <td className="muted-cell">{activity.time}</td>
                <td>
                  <button className="row-action" aria-label={`Actions for ${activity.id}`}>
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
