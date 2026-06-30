import { useState } from 'react'
import { motion } from 'framer-motion'
import MetricCard from './MetricCard'
import '../styles/Comparativo.css'

interface MetricRange {
  label: string
  sem: string
  com: string
  unit: string
}

const metrics: MetricRange[] = [
  { label: 'Custo por pedido', sem: 'R$ 22,50', com: 'R$ 6,80', unit: '' },
  { label: 'ROAS médio', sem: '1.1x', com: '4.6x', unit: '' },
  { label: 'Clientes novos/mês', sem: '32', com: '186', unit: '' },
  { label: 'Taxa de retorno', sem: '8%', com: '41%', unit: '' },
]

export default function Comparativo() {
  const [sliderValue, setSliderValue] = useState(50)

  const isComMode = sliderValue > 50

  return (
    <section className="comparativo" id="comparativo">
      <motion.div
        className="comparativo__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="comparativo__tag">📊 a diferença é real</span>
        <h2 className="comparativo__headline">
          Arraste e veja o que muda<br />
          <em>com gestão profissional.</em>
        </h2>
        <p className="comparativo__subtitle">
          Os números refletem a média dos nossos clientes de food service nos últimos 6 meses.
        </p>
      </motion.div>

      <motion.div
        className="comparativo__card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <div className="comparativo__slider-row">
          <span className={`comparativo__slider-label ${!isComMode ? 'comparativo__slider-label--active' : ''}`}>
            SEM AGÊNCIA
          </span>

          <input
            type="range"
            min={0}
            max={100}
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="comparativo__slider"
          />

          <span className={`comparativo__slider-label ${isComMode ? 'comparativo__slider-label--active' : ''}`}>
            COM EMBER →
          </span>
        </div>

        <div className="comparativo__metrics">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              label={metric.label}
              value={isComMode ? metric.com : metric.sem}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}