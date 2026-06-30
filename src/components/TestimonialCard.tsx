import { Star } from 'lucide-react'
import '../styles/TestimonialCard.css'

interface TestimonialCardProps {
  text: string
  name: string
  role: string
  avatar: string
}

export default function TestimonialCard({ text, name, role, avatar }: TestimonialCardProps) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="#FF3D00" color="#FF3D00" />
        ))}
      </div>
      <p className="testimonial-card__text">"{text}"</p>
      <div className="testimonial-card__profile">
        <img src={avatar} alt={name} />
        <div>
          <span className="testimonial-card__name">{name}</span>
          <span className="testimonial-card__role">{role}</span>
        </div>
      </div>
    </div>
  )
}