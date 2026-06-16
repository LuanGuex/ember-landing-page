import { type LucideIcon } from 'lucide-react'
import '../styles/SolutionStep.css'

interface SolutionStepProps {
    number: string
    icon: LucideIcon
    title: string
    description: string
    isLast: boolean
}

export default function SolutionStep({ number, icon: Icon, title, description, isLast}: SolutionStepProps) {
    return (
        <div className='solution-step'>
            <div className='solution-step__left'>
                <div className='solution-step__number'>
                    <span>{number}</span>
                </div>
                {!isLast && <div className='solution-step__line' />}   
            </div>  

            <div className='solution-step__content'>
                <div className='solution-step__icon'>
                    <Icon size={18} color="FF3D00" />
                </div>
                <h3 className='solution-step__title'>{title}</h3>
                <p className='solution-step__description'>{description}</p>
            </div>
            
        </div>
    )
}