import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import CaseCard from './CaseCard'
import '../styles/Cases.css'

import case1 from '../assets/case1.jpeg'
import case2 from '../assets/case2.jpeg'
import case3 from '../assets/case3.jpeg'

const cases = [
    {
        image: case1,
        segment: 'Hamburgueria',
        title: 'De invisível a referência no bairro',
        description: 'Em 60 dias estruturamos o tráfego pago e o processo de retenção. O resultado apareceu na semana 3.',
        metrics: [
            { value: '+127%', label: 'pedidos no mês' },
            { value: 'R$4,20', label: 'custo por lead' },
            { value: '4.8x', label: 'ROAS médio' },
            { value: '38%', label: 'clientes retornaram' },
        ],
    },
    {
        image: case2,
        segment: 'Pizzaria',
        title: 'Fim de semana lotado todo mês',
        description: 'Mapeamos os horários de baixo movimento e criamos campanhas específicas para cada período.',
        metrics: [
            { value: '+89%', label: 'faturamento mensal' },
            { value: '312', label: 'novos clientes' },
            { value: 'R$6,50', label: 'custo por pedido' },
            { value: '3.2x', label: 'ROAS médio' },
        ],
    },
    {
        image: case3,
        segment: 'Culinária Japonesa',
        title: 'Ticket médio subiu sem perder cliente',
        description: 'Reposicionamos a comunicação e atraímos o público certo — disposto a pagar pelo que o restaurante entrega.',
        metrics: [
            { value: '+64%', label: 'ticket médio' },
            { value: '5.1x', label: 'ROAS médio' },
            { value: '+203', label: 'novos seguidores/mês' },
            { value: '41%', label: 'taxa de retorno' },
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