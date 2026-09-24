import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { formatCompactCurrency, revenueSeries } from '../data/demoData'

export function RevenueChart() {
  return (
    <section className="panel revenue-panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Revenue performance</p>
          <h2>$38,420</h2>
          <span className="panel-subtitle">This month · 18.2% above target</span>
        </div>
        <div className="chart-legend" aria-label="Chart legend">
          <span><i className="legend-dot revenue-dot" />Revenue</span>
          <span><i className="legend-dot target-dot" />Target</span>
        </div>
      </div>
      <div className="chart-wrap" role="img" aria-label="Revenue and target trend over the last 30 days">
        <ResponsiveContainer
          width="100%"
          height="100%"
          initialDimension={{ width: 800, height: 270 }}
        >
          <AreaChart data={revenueSeries} margin={{ top: 12, right: 6, left: -16, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.32} />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#213657" vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#667b9e', fontSize: 12 }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#667b9e', fontSize: 12 }}
              tickFormatter={formatCompactCurrency}
            />
            <Tooltip
              formatter={(value) => [formatCompactCurrency(Number(value ?? 0)), '']}
              contentStyle={{
                background: '#10213e',
                border: '1px solid #2c4770',
                borderRadius: 10,
                color: '#f8fafc',
              }}
              labelStyle={{ color: '#8790a2', marginBottom: 5 }}
            />
            <Area
              type="monotone"
              dataKey="target"
              stroke="#667b9e"
              strokeWidth={2}
              strokeDasharray="5 5"
              fill="transparent"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#60a5fa"
              strokeWidth={2.5}
              fill="url(#revenueFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
