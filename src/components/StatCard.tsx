import {motion} from 'framer-motion'
import '../styles/StatCard.css'

interface StatCardProps {
    number: string
    label: string
    delay: number
}

export default function StatCard({ number, label, delay} : StatCardProps) {
    return(
        <motion.div
            className='stat-card'
            initial={{ opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: delay}}
        >
            <div className='stat-card__number'>{number}</div>
            <div className='stat-card__label'>{label}</div>
        </motion.div>
    )
}