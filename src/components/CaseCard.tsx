import '../styles/CaseCard.css'

interface CaseMetric {
    value: string
    label: string
}

interface CaseCardProps {
    image: string
    segment: string
    title: string
    description: string
    metrics: CaseMetric[]
}

export default function CaseCard({ image, segment, title, description, metrics }: CaseCardProps) {
    return (
        <div className="case-card">

            <div className="case-card__image">
                <img src={image} alt={title} />
                <span className="case-card__segment">{segment}</span>
            </div>

            <div className="case-card__body">
                <h3 className="case-card__title">{title}</h3>
                <p className="case-card__description">{description}</p>

                <div className="case-card__metrics">
                    {metrics.map((metric, index) => (
                        <div key={index} className="case-card__metric">
                            <span className="case-card__metric-value">{metric.value}</span>
                            <span className="case-card__metric-label">{metric.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}