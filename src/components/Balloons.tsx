const balloonCount = 10

export function Balloons() {
  return (
    <div className="balloon-field" aria-hidden="true">
      {Array.from({ length: balloonCount }, (_, index) => (
        <span className="balloon" key={index} />
      ))}
    </div>
  )
}
