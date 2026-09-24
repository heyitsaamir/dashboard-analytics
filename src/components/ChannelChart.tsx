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

const colors = ['#60a5fa', '#4f8fe8', '#3f7bd3', '#3268ba', '#28569e']

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
            <CartesianGrid stroke="#213657" horizontal={false} strokeDasharray="3 3" />
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#667b9e', fontSize: 11 }}
              tickFormatter={(value: number) => `${value / 1000}k`}
            />
            <YAxis
              dataKey="channel"
              type="category"
              width={62}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#667b9e', fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: 'rgba(255,255,255,0.025)' }}
              formatter={(value) => [Number(value ?? 0).toLocaleString(), 'Sessions']}
              contentStyle={{
                background: '#10213e',
                border: '1px solid #2c4770',
                borderRadius: 10,
                color: '#f8fafc',
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
