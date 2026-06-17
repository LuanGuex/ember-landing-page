import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2 } from 'lucide-react'
import '../styles/Formulario.css'

interface FormData {
  nome: string
  email: string
  whatsapp: string
  empresa: string
  segmento: string
  faturamento: string
  dificuldade: string
}

export default function Formulario() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    whatsapp: '',
    empresa: '',
    segmento: '',
    faturamento: '',
    dificuldade: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="formulario" id="formulario">

      <motion.div
        className="formulario__inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="formulario__urgencia">
          <span className="formulario__urgencia-dot" />
          <span>Mêsversário Ember: condições encerram esse mês</span>
        </div>

        <h2 className="formulario__headline">
          Vamos analisar seu<br />
          <em>restaurante gratuitamente.</em>
        </h2>
        <p className="formulario__subtitle">
          Preencha abaixo. Nosso time entra em contato em até 24h com um diagnóstico completo do seu negócio.
        </p>

        {success ? (
          <div className="formulario__success">
            <span>🔥</span>
            <h3>Recebemos seu contato!</h3>
            <p>Nossa equipe vai analisar seu restaurante e entrar em contato em até 24h.</p>
          </div>
        ) : (
          <form className="formulario__form" onSubmit={handleSubmit}>

            <div className="formulario__row">
              <div className="formulario__field">
                <label htmlFor="nome">Nome completo *</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="João Silva"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formulario__field">
                <label htmlFor="empresa">Nome do estabelecimento *</label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Empório da Pizza"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="formulario__row">
              <div className="formulario__field">
                <label htmlFor="email">E-mail *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="joao@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formulario__field">
                <label htmlFor="whatsapp">WhatsApp *</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="Seu contato"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="formulario__row">
              <div className="formulario__field">
                <label htmlFor="segmento">Segmento *</label>
                <select
                  id="segmento"
                  name="segmento"
                  value={formData.segmento}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="Pizzaria">Pizzaria</option>
                  <option value="Hamburgueria">Hamburgueria</option>
                  <option value="Japonês">Japonês / Sushi</option>
                  <option value="Italiano">Italiano</option>
                  <option value="Churrascaria">Churrascaria</option>
                  <option value="Café / Padaria">Café / Padaria</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div className="formulario__field">
                <label htmlFor="faturamento">Faturamento médio mensal *</label>
                <select
                  id="faturamento"
                  name="faturamento"
                  value={formData.faturamento}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="Até R$10k">Até R$ 10.000</option>
                  <option value="R$10k–30k">R$ 10.000 – R$ 30.000</option>
                  <option value="R$30k–60k">R$ 30.000 – R$ 60.000</option>
                  <option value="R$60k–100k">R$ 60.000 – R$ 100.000</option>
                  <option value="Acima de R$100k">Acima de R$ 100.000</option>
                </select>
              </div>
            </div>

            <div className="formulario__field">
              <label htmlFor="dificuldade">
                Qual é sua maior dificuldade hoje? <span>(opcional)</span>
              </label>
              <textarea
                id="dificuldade"
                name="dificuldade"
                placeholder="Ex: não consigo atrair clientes novos, meu movimento cai durante a semana, nunca investi..."
                value={formData.dificuldade}
                onChange={handleChange}
                rows={4}
              />
            </div>

            {error && (
              <p className="formulario__error">
                Algo deu errado. Tente novamente ou nos chame no WhatsApp.
              </p>
            )}

            <button
              className="formulario__submit"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="formulario__spinner" />
                  Enviando...
                </>
              ) : (
                <>
                  Quero minha análise gratuita
                  <ArrowRight size={16} />
                </>
              )}
            </button>

          </form>
        )}
      </motion.div>
    </section>
  )
}