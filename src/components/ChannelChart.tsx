import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { channelSeries } from '../data/demoData'

const colors = [
  'var(--chart-1)',
  'var(--chart-2)',
  'var(--chart-3)',
  'var(--chart-4)',
  'var(--chart-5)',
]

export function ChannelChart() {
  return (
    <section className="panel channel-panel">
      <div className="panel-header compact">
        <div>
          <p className="eyebrow">Acquisition</p>
          <h2>56.4k sessions</h2>
          <span className="panel-subtitle">Traffic by top channel</span>
        </div>
        <button className="secondary-button">View report</button>
      </div>
      <div className="chart-wrap" role="img" aria-label="Sessions by acquisition channel">
        <ResponsiveContainer
          width="100%"
          height="100%"
          initialDimension={{ width: 420, height: 270 }}
        >
          <BarChart data={channelSeries} layout="vertical" margin={{ top: 6, right: 10, left: 2, bottom: 0 }}>
            <CartesianGrid stroke="var(--chart-grid)" horizontal={false} strokeDasharray="3 3" />
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--chart-label)', fontSize: 11 }}
              tickFormatter={(value: number) => `${value / 1000}k`}
            />
            <YAxis
              dataKey="channel"
              type="category"
              width={62}
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--chart-label)', fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: 'var(--chart-hover)' }}
              formatter={(value) => [Number(value ?? 0).toLocaleString(), 'Sessions']}
              contentStyle={{
                background: 'var(--tooltip-background)',
                border: '1px solid var(--border-strong)',
                borderRadius: 10,
                color: 'var(--text)',
              }}
            />
            <Bar dataKey="sessions" radius={[0, 6, 6, 0]} barSize={17}>
              {channelSeries.map((entry, index) => (
                <Cell key={entry.channel} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
