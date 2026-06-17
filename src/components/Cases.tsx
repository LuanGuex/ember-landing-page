import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import CaseCard from './CaseCard'
import '../styles/Cases.css'

import case1 from '../assets/case1.png'
import case2 from '../assets/case2.png'
import case3 from '../assets/case3.png'

const cases = [
    {
        image: case1,
        segment: 'Hamburgueria',
        title: 'De invisível a referência no bairro',
        description: 'Em 60 dias estruturamos o tráfego pago e o processo de retenção. O resultado apareceu na semana 3.',
        metrics: [
            { value: '114', label: 'compras' },
            { value: '12.75x', label: 'ROAS médio'},
            { value: 'R$594,56', label: 'Investimento' },
            { value: 'R$7.577,73', label: 'Faturamento' },
        ],
    },
    {
        image: case2,
        segment: 'Pizzaria',
        title: 'Fim de semana lotado todo mês',
        description: 'Mapeamos os horários de baixo movimento e criamos campanhas específicas para cada período.',
        metrics: [
            { value: '235', label: 'compras' },
            { value: '11.74x', label: 'ROAS médio'},
            { value: 'R$915,82', label: 'Investimento' },
            { value: 'R$10.752,13', label: 'Faturamento' },
        ],
    },
    {
        image: case3,
        segment: 'Esfiharia',
        title: 'Ticket médio subiu sem perder cliente',
        description: 'Reposicionamos a comunicação e atraímos o público certo — disposto a pagar pelo que o restaurante entrega.',
        metrics: [
            { value: '146', label: 'compras' },
            { value: '14.33x', label: 'ROAS médio'},
            { value: 'R$989,12', label: 'Investimento' },
            { value: 'R$14.178,48', label: 'Faturamento' },
        ],
    },
]

export default function Cases() {
    const scrollToForm = () => {
        document.getElementById('formulario')?.scrollIntoView({behavior : 'smooth'})
    }

    return(
        <section className='cases' id='cases'>
            
            <motion.div
                className='cases__header'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 0.6 }}
                viewport={{ once : true }}
            >
                <span className='cases__tag'>Resultado Reais</span>
                <h2 className="cases__headline">
                    Números que o seu <br />
                    <em>contador vai gostar de ver.</em>
                </h2>
                <p className='cases__subtitle'>
                    Cada case abaixo foi construído com estratégia, dados e muito trabalho. Sem promessa vazia.
                </p>
            </motion.div>

            <div className='cases__grid'>
                {cases.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30}}
                        whileInView={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.5, delay: index * 0.12}}
                        viewport={{ once: true}}
                    >
                        <CaseCard 
                         image={item.image}
                         segment={item.segment}
                         title={item.title}
                         description={item.description}
                         metrics={item.metrics}
                        />
                    </motion.div>
                ))}
            </div>

            <motion.div
                className='cases__cta'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
            >

                <button className='cases__cta-btn' onClick={scrollToForm}>
                    Quero resultados assim
                    <ArrowRight size={16} />
                </button>
            </motion.div>

        </section>
    )
}