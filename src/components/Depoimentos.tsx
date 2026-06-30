import { motion } from 'framer-motion'
import TestimonialCard from './TestimonialCard'
import '../styles/Depoimentos.css'
import MartLogo from '../assets/Martlogo.jpg'

const testimonials = [
  {
    text: 'Em 2 meses meu delivery triplicou. Antes eu gastava em anúncio e não sabia se voltava. Agora sei exatamente quanto cada real investido traz de volta.',
    name: 'Marcos Silveira',
    role: 'Hamburgueria · Curitiba',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    text: 'A campanha de dia dos namorados foi bom demais! Já estou pensando nas próximas promoções.',
    name: 'Violattis Pizzaria',
    role: 'Pizzaria · São Paulo',
    avatar: 'https://i.pravatar.cc/150?img=45',
  },
  {
    text: 'Bom dia! Passando para dar os parabéns o primeiro dia, deu muito certo, o remarketing funcionou apareceu clientes antigos, estamos no caminho!',
    name: 'Estação Mart',
    role: 'Pizzaria · Martinópolis',
    avatar: MartLogo,
  },
  {
    text: 'Meu fim de semana virou outro depois que comecei com a Ember. Lotado, com gente nova toda semana.',
    name: 'Camila Rocha',
    role: 'Pizzaria · Blumenau',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    text: 'O time é extremamente próximo, sinto que tenho sócios cuidando do marketing, não fornecedores.',
    name: 'João Pedro Alves',
    role: 'Hamburgueria · Joinville',
    avatar: 'https://i.pravatar.cc/150?img=14',
  },
]

export default function Depoimentos() {
  return (
    <section className="depoimentos" id="depoimentos">
      <motion.div
        className="depoimentos__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="depoimentos__tag">💬 quem confia na ember</span>
        <h2 className="depoimentos__headline">
          Restaurantes reais,<br />
          <em>resultados reais.</em>
        </h2>
      </motion.div>

      <div className="depoimentos__track-wrapper">
        <div className="depoimentos__track">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} {...t} />
          ))}
          {testimonials.map((t, index) => (
            <TestimonialCard key={`clone-${index}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}