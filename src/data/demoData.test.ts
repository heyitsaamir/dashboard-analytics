import { activities, formatCompactCurrency, metrics, revenueSeries } from './demoData'

describe('demo data', () => {
  it('provides complete, deterministic dashboard fixtures', () => {
    expect(metrics).toHaveLength(4)
    expect(revenueSeries).toHaveLength(10)
    expect(activities.map((activity) => activity.id)).toEqual([
      'INV-2048',
      'INV-2047',
      'INV-2046',
      'INV-2045',
      'INV-2044',
    ])
  })

  it('formats chart currency values compactly', () => {
    expect(formatCompactCurrency(8100)).toBe('$8.1K')
  })
})
