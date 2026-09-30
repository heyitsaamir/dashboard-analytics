const balloonColors = [
  '#6ee7b7',
  '#60a5fa',
  '#f472b6',
  '#fbbf24',
  '#a78bfa',
  '#fb7185',
  '#34d399',
  '#38bdf8',
  '#f9a8d4',
  '#facc15',
]

export function BalloonOverlay() {
  return (
    <div className="balloon-overlay" data-testid="balloon-overlay" aria-hidden="true">
      {balloonColors.map((color, index) => (
        <span className="balloon" style={{ backgroundColor: color }} key={`${color}-${index}`}>
          <i />
        </span>
      ))}
    </div>
  )
}
