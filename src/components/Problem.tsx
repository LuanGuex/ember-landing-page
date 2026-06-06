import { motion } from 'framer-motion'
import { TrendingDown, Ghost, BarChart2, RefreshCw, DollarSign, Clock } from 'lucide-react'
import ProblemCard from './ProblemCard'
import '../styles/Problem.css'

const problems = [
    {
        icon: DollarSign,
        title: 'Investe em anúncios e não sabe se funciona',
        description: 'O dinheiro sai todo mês, mas você não consegue ligar o investimento a um cliente real sentado na sua mesa.'  
    },
    {
        icon: Ghost,
        title: 'Sua agência some depois do contrato',
        description: 'Reunião incrível na venda, depois disso: relatórios genéricos, respostas demoradas e zero estratégia.'
    },
    {
        icon: TrendingDown,
        title: 'Movimento caindo sem explicação',
        description: 'Às vezes lota, às vezes vazio. Você não sabe o que gerou resultado e não consegue repetir.'
    },
    {
        icon: BarChart2,
        title: 'Métricas que não significam nada',
        description: 'A agência mostra curtidas e alcance. Você quer saber quantos clientes novos entrou esse mês.'
    },
    {
        icon: RefreshCw,
        title: 'Cliente vem uma vez e não volta',
        description: 'Sem estratégia de retenção, você depende sempre de atrair gente nova. É caro e desgastante.'
    },
    {
        icon: Clock,
        title: 'Sem tempo pra gerir tudo isso',
        description: 'Você abre o restaurante, fecha o caixa, resolve problema de funcionário. Quem tem tempo pra pensar em marketing?'
    }
]

export default function Problem() {
    const scrollToForm = () => {
        document.getElementById('formulario')?.scrollIntoView({behavior : 'smooth'})
    }

    return(
        <section className='problem'>
            <motion.div
            className='problem__header'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
                <span className='problem__tag'>o que você vive todo dia</span>
                <h2 className='problem__headline'>
                    Você não precisa de mais<br />
                    <em>uma agência qualquer.</em>
                </h2>
                <p className='problem__subtitle'>
                    Se você se identificar com algum desses cenários, a Ember foi feita pra você.
                </p>
            </motion.div>

            <div className='problem__grid'>
                {problems.map((problem, index) =>(
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 30 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{ duration: 0.5, delay: index * 0.08}}
                        viewport={{once: true}}
                    >
                        <ProblemCard
                            icon={problem.icon}
                            title={problem.title}
                            description={problem.description}
                        />
                    </motion.div>
                ))}
            </div>

            <motion.div
                className='problem__CTA'
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{once: true}}
            >

                <button className='problem__cta-btn' onClick={scrollToForm}>
                    Quero resolver isso agora
                </button>
            </motion.div>
        </section>


    )
}

