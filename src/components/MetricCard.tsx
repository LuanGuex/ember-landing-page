import '../styles/MetricCard.css'

interface MetricCardProps {
  label: string
  value: string
}

export default function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="metric-card">
      <span className="metric-card__label">{label}</span>
      <span className="metric-card__value">{value}</span>
    </div>
  )
}