export type Metric = {
  label: string
  value: string
  change: string
  direction: 'up' | 'down'
  detail: string
}

export type ActivityStatus = 'Completed' | 'Pending' | 'Refunded'

export type Activity = {
  id: string
  customer: string
  email: string
  product: string
  amount: string
  status: ActivityStatus
  time: string
  initials: string
  accent: string
}

export const metrics: Metric[] = [
  {
    label: 'Net revenue',
    value: '$128,430',
    change: '+12.4%',
    direction: 'up',
    detail: 'vs. previous 30 days',
  },
  {
    label: 'Active customers',
    value: '8,429',
    change: '+8.2%',
    direction: 'up',
    detail: '642 new this period',
  },
  {
    label: 'Conversion rate',
    value: '5.28%',
    change: '+0.6%',
    direction: 'up',
    detail: 'from 4.68% last month',
  },
  {
    label: 'Avg. order value',
    value: '$84.20',
    change: '-2.1%',
    direction: 'down',
    detail: 'across 1,525 orders',
  },
]

export const revenueSeries = [
  { day: 'Sep 1', revenue: 3100, target: 3400 },
  { day: 'Sep 4', revenue: 4200, target: 3800 },
  { day: 'Sep 7', revenue: 3900, target: 4100 },
  { day: 'Sep 10', revenue: 5600, target: 4500 },
  { day: 'Sep 13', revenue: 4800, target: 4800 },
  { day: 'Sep 16', revenue: 6200, target: 5100 },
  { day: 'Sep 19', revenue: 6800, target: 5400 },
  { day: 'Sep 22', revenue: 5900, target: 5700 },
  { day: 'Sep 25', revenue: 7400, target: 6000 },
  { day: 'Sep 28', revenue: 8100, target: 6300 },
]

export const channelSeries = [
  { channel: 'Organic', sessions: 18200 },
  { channel: 'Paid', sessions: 14800 },
  { channel: 'Direct', sessions: 10900 },
  { channel: 'Social', sessions: 7600 },
  { channel: 'Referral', sessions: 4900 },
]

export const activities: Activity[] = [
  {
    id: 'INV-2048',
    customer: 'Olivia Martin',
    email: 'olivia@north.io',
    product: 'Scale annual',
    amount: '$1,920.00',
    status: 'Completed',
    time: '2 min ago',
    initials: 'OM',
    accent: '#60a5fa',
  },
  {
    id: 'INV-2047',
    customer: 'Noah Williams',
    email: 'noah@vector.co',
    product: 'Growth monthly',
    amount: '$249.00',
    status: 'Completed',
    time: '18 min ago',
    initials: 'NW',
    accent: '#60a5fa',
  },
  {
    id: 'INV-2046',
    customer: 'Emma Thompson',
    email: 'emma@studio.design',
    product: 'Scale monthly',
    amount: '$420.00',
    status: 'Pending',
    time: '43 min ago',
    initials: 'ET',
    accent: '#c084fc',
  },
  {
    id: 'INV-2045',
    customer: 'Liam Chen',
    email: 'liam@pulse.ai',
    product: 'Growth annual',
    amount: '$2,490.00',
    status: 'Completed',
    time: '1 hr ago',
    initials: 'LC',
    accent: '#f59e0b',
  },
  {
    id: 'INV-2044',
    customer: 'Sophia Patel',
    email: 'sophia@frame.dev',
    product: 'Starter monthly',
    amount: '$79.00',
    status: 'Refunded',
    time: '3 hrs ago',
    initials: 'SP',
    accent: '#fb7185',
  },
]

export const formatCompactCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value)
