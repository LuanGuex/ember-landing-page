import '../styles/ResultCard.css'

interface ResultCardProps {
  icon: React.ReactNode
  label: string
  value: string
  highlight?: boolean
}

export default function ResultCard({ icon, label, value, highlight }: ResultCardProps) {
  return (
    <div className={`result-card ${highlight ? 'result-card--highlight' : ''}`}>
      <div className="result-card__icon">{icon}</div>
      <span className="result-card__label">{label}</span>
      <span className="result-card__value">{value}</span>
    </div>
  )
}