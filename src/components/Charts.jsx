// Minimal, dependency-free charts (SVG)
export function BarChart({ data = [], height = 120, width = '100%', barColor = 'var(--color-primary)' }){
  const max = Math.max(1, ...data)
  const barWidth = 100 / data.length
  return (
    <div style={{ width, height }} aria-label="Gráfico de barras">
      <svg viewBox={`0 0 100 ${height}`} preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
        {data.map((v, i) => {
          const h = (v / max) * (height - 20)
          const x = i * barWidth + 3
          const y = height - h - 2
          return <rect key={i} x={x} y={y} width={barWidth - 6} height={h} rx="2" fill={barColor} opacity="0.9" />
        })}
      </svg>
    </div>
  )
}

export function Sparkline({ data = [], height = 36, width = '100%', stroke = 'var(--color-primary)' }){
  const max = Math.max(1, ...data)
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1 || 1)) * 100
    const y = height - (v / max) * (height - 6) - 3
    return `${x},${y}`
  }).join(' ')
  return (
    <div style={{ width, height }} aria-label="Gráfico de linha">
      <svg viewBox={`0 0 100 ${height}`} preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
        <polyline fill="none" stroke={stroke} strokeWidth="2" points={points} />
      </svg>
    </div>
  )
}
