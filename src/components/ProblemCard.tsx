import { type LucideIcon } from 'lucide-react'
import '../styles/ProblemCard.css'

interface ProblemCardProps {
    icon: LucideIcon
    title: string
    description: string
}

export default function ProblemCard ({ icon: Icon, title, description }: ProblemCardProps) {
    return(
        <div className='problem-card'>
            <div className='problem-card__icon'>
                <Icon size={20} color="#FF3D00"/>
            </div>
            <h3 className='problem-card__title'>{title}</h3>
            <p className='problem-card__description'>{description}</p>
        </div>
    )
}