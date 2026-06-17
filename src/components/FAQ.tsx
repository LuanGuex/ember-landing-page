import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import '../styles/FAQ.css'

interface FAQItem {
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        question: 'Quanto tempo leva para ver resultados?',
        answer: 'Os primeiros sinais aparecem entre 2 e 4 semanas após o início das campanhas. Resultados consistentes e escaláveis geralmente se consolidam no segundo mês, quando já temos dados suficientes para otimizar com precisão.',
    },
    {
        question: 'A Ember atende restaurantes em todo o Brasil?',
        answer: 'Sim. Atendemos restaurantes em qualquer cidade do Brasil de forma 100% remota. Toda a gestão, reuniões e relatórios são feitos online, sem perda de qualidade.',
    },
    {
        question: 'Preciso ter um orçamento alto para começar?',
        answer: 'Não. Trabalhamos com restaurantes em diferentes fases. O investimento em anúncios é definido junto com você baseado no seu faturamento atual e nos objetivos. O importante é começar com consistência.',
    },
    {
        question: 'O que diferencia a Ember de outras agências?',
        answer: 'A maioria das agências entrega tráfego pago e para por aí. A Ember mapeia todo o ciclo do seu negócio da atração ao retorno do cliente. Somos especializados em food service, não atendemos de tudo para todos.',
    },
    {
        question: 'Como funciona a análise gratuita?',
        answer: 'Você preenche o formulário, nossa equipe analisa seu perfil e o momento do seu restaurante, e em até 24h entramos em contato com um diagnóstico real" sem enrolação e sem compromisso.',
    },
]

interface FAQItemProps {
    item: FAQItem
    isOpen: boolean
    onClick: () => void
    index: number
}

function FAQItemComponent({ item, isOpen, onClick, index }: FAQItemProps) {
    return (
        <motion.div
            className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
        >
            <button className='faq__question' onClick={onClick}>
                <span>{item.question}</span>
                <ChevronDown
                    size={18}
                    className={`faq__chevron ${isOpen ? 'faq__chevron--open' : ''}`}
                />
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className="faq__answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <p>{item.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.div>
    )
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="faq">
            <motion.div
                className="faq__header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="faq__headline">Perguntas frequentes</h2>
                <p className="faq__subtitle">
                    Tire suas dúvidas antes de dar o próximo passo.
                </p>
            </motion.div>

            <div className="faq__list">
                {faqs.map((item, index) => (
                    <FAQItemComponent
                        key={index}
                        item={item}
                        isOpen={openIndex === index}
                        onClick={() => handleClick(index)}
                        index={index}
                    />
                ))}
            </div>
        </section>
    )
}