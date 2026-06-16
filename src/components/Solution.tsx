import { motion } from 'framer-motion'
import { SearchIcon, Megaphone, HeartHandshake, RefreshCw } from 'lucide-react'
import SolutionStep from './SolutionStep'
import '../styles/Solution.css'

const steps = [
    {
        number: '01',
        icon: SearchIcon,
        title: 'Mapeamos seu negócio inteiro',
        description: 'Antes de rodar um único anúncio, a gente entende seu restaurante de verdade — ticket médio, horários de pico, perfil do cliente, diferenciais. Sem isso, qualquer estratégia é chute.',
    },
    {
        number: '02',
        icon: Megaphone,
        title: 'Atraímos clientes novos com precisão',
        description: 'Tráfego pago estratégico no Meta e Google direcionado para o cliente certo — não só curtidas, mas pessoas com fome e dinheiro no bolso prontas para ir até você.',
    },
    {
        number: '03',
        icon: HeartHandshake,
        title: 'Transformamos visita em fidelidade',
        description: 'A conquista é só o começo. Criamos fluxos de remarketing e relacionamento para que o cliente que veio uma vez vire frequentador — e ainda indique para os amigos.',
    },
    {
        number: '04',
        icon: RefreshCw,
        title: 'Repetimos e otimizamos o ciclo',
        description: 'Todo mês analisamos os dados reais do seu negócio, ajustamos o que não performa e escalamos o que funciona. Você acompanha tudo em relatórios que fazem sentido.',
    },
]

export default function Solution() {
    const scrollToForm = () => {
        document.getElementById('formulario')?.scrollIntoView({behavior : 'smooth'})
    }

    return(
        <section className='solution'>
            <motion.div
                className='solution__header'
                initial={{ opacity: 0, y: 30}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                viewport={{ once:true }}
            >
                <span className='solution__tag'>🔥 como a ember trabalha</span>
                <h2 className='solution__headline'>
                    Não vendemos serviço. <br />
                    <em>Viramos sua equipe</em> 
                </h2>
                <p className='solution__subtitle'>
                    Enquanto você foca no restaurante, a Ember cuida de cada etapa do crescimento do primeiro clique até o cliente fiel.
                </p>
            </motion.div>

            <div className='solution__steps'>
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: -30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{ duration: 0.5, delay: index * 0.12}}
                        viewport={{ once: true}}
                    >
                        <SolutionStep
                            number={step.number}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                            isLast={index === steps.length -1}
                        />
                    </motion.div>
                ))}
            </div>

            <motion.div
                className='solution__cta'
                initial={{ opacity: 0, y:20}}
                whileInView={{ opacity: 1, y:0}}
                transition={{ duration: 0.5, delay:0.5}}
                viewport={{ once: true}}
            >
                <button className='solution__cta-btn' onClick={scrollToForm}>
                    Quero essa estratégia no meu restaurante
                </button>
            </motion.div>
            
        </section>
    )
}