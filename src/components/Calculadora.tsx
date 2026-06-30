import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Users, ShoppingBag, DollarSign, TrendingUp } from 'lucide-react'
import ResultCard from './ResultCard'
import '../styles/Calculadora.css'

export default function Calculadora() {
  const [investimento, setInvestimento] = useState(5000)
  const [ticketMedio, setTicketMedio] = useState(60)

  const resultados = useMemo(() => {
    const cpl = 12
    const taxaConversao = 0.28

    const leads = Math.round(investimento / cpl)
    const vendas = Math.round(leads * taxaConversao)
    const faturamento = vendas * ticketMedio
    const roi = Math.round(((faturamento - investimento) / investimento) * 100)

    return { leads, vendas, faturamento, roi }
  }, [investimento, ticketMedio])

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value)

  return (
    <section className="calculadora" id="calculadora">
      <motion.div
        className="calculadora__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="calculadora__tag">🧮 ferramenta exclusiva · gratuita</span>
        <h2 className="calculadora__headline">
          Calcule o retorno real do<br />
          <em>seu investimento.</em>
        </h2>
        <p className="calculadora__subtitle">
          Ajuste os valores e veja quantos leads, vendas e faturamento seu restaurante pode gerar.
        </p>
      </motion.div>

      <motion.div
        className="calculadora__card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <div className="calculadora__inputs">

          <div className="calculadora__input-group">
            <div className="calculadora__input-label">
              <span>Investimento mensal em ads</span>
              <strong>{formatCurrency(investimento)}</strong>
            </div>
            <input
              type="range"
              min={500}
              max={30000}
              step={500}
              value={investimento}
              onChange={(e) => setInvestimento(Number(e.target.value))}
              className="calculadora__slider"
            />
          </div>

          <div className="calculadora__input-group">
            <div className="calculadora__input-label">
              <span>Ticket médio do seu produto</span>
              <strong>{formatCurrency(ticketMedio)}</strong>
            </div>
            <input
              type="range"
              min={20}
              max={300}
              step={5}
              value={ticketMedio}
              onChange={(e) => setTicketMedio(Number(e.target.value))}
              className="calculadora__slider"
            />
          </div>

        </div>

        <div className="calculadora__results">
          <ResultCard icon={<Users size={18} />} label="Leads estimados" value={`${resultados.leads}/mês`} />
          <ResultCard icon={<ShoppingBag size={18} />} label="Vendas projetadas" value={`${resultados.vendas}/mês`} />
          <ResultCard icon={<DollarSign size={18} />} label="Faturamento adicional" value={formatCurrency(resultados.faturamento)} />
          <ResultCard icon={<TrendingUp size={18} />} label="ROI projetado" value={`${resultados.roi}%`} highlight />
        </div>
      </motion.div>
    </section>
  )
}