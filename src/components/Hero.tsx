import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import '../styles/Hero.css'
import StatCard from './StatCard'

export default function Hero() {

    const scrollToForm = () => {
        document.getElementById("formulario")?.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToCase = () => {
        document.getElementById("cases")?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className='hero'>
            <motion.div
                className='hero__badge'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span>🔥 Mêsversário Ember — condições especiais esse mês</span>

            </motion.div>

            <motion.h1
                className='hero__headline'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                Seu restaurante merece<br />
                <em>lotar de verdade.</em><br />
                Não só nas redes sociais.

            </motion.h1>

            <motion.p
                className='hero__subtitle'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                A Ember mapeia cada etapa do seu negócio
                da conquista do cliente até o retorno dele
                e transforma isso em resultado real.

            </motion.p>

            <motion.div
                className='hero__ctas'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <button className='hero__cta-primary' onClick={scrollToForm}>
                    Quero uma analise gratuita
                    <ArrowRight size={16} />
                </button>

                <button className='hero__cta-secondary' onClick={scrollToCase}>
                    <Play size={14} />
                    Ver resultados reais
                </button>

            </motion.div>

            <motion.div
                className='hero__stats'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
            >
                <StatCard number="+200" label="restaurantes atendidos" delay={0.50} />
                <StatCard number="+6" label="anos de experiência" delay={0.60} />
                <StatCard number="3x" label="mais retorno nos anúncios" delay={0.70} />
                <StatCard number="100%" label="foco em food service" delay={0.80} />
            </motion.div>

        </section>
    )

}
