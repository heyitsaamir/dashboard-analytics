import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import type { Metric } from '../data/demoData'

export function MetricCard({ metric }: { metric: Metric }) {
  const isPositive = metric.direction === 'up'
  const ChangeIcon = isPositive ? ArrowUpRight : ArrowDownRight

  return (
    <article className="metric-card">
      <div className="metric-heading">
        <span>{metric.label}</span>
        <span className={`change-pill ${isPositive ? 'positive' : 'negative'}`}>
          <ChangeIcon size={13} />
          {metric.change}
        </span>
      </div>
      <strong className="metric-value">{metric.value}</strong>
      <span className="metric-detail">{metric.detail}</span>
    </article>
  )
}
