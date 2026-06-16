import { motion } from 'framer-motion'
import {Mail, Phone } from 'lucide-react'
import Logo from '../assets/Logotipo.png'
import '../styles/Footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <motion.div
        className="footer__inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <div className="footer__top">
          <div className="footer__brand">
            <button className="footer__logo" onClick={scrollToTop}>
              <img src={Logo} alt="Ember" />
              <span>Ember</span>
            </button>
            <p className="footer__tagline">
              A alma do seu restaurante.<br />Do primeiro clique ao cliente fiel.
            </p>
          </div>

          <div className="footer__links">
            <h4>Contato</h4>
            <a href="https://instagram.com/embermarketing.food" target="_blank" rel="noopener noreferrer">
              <Mail size={15} />
              @embermarketing.food
            </a>
            <a href="mailto:contato@emberagencia.com.br">
              <Mail size={15} />
              contato@emberagencia.com.br
            </a>
            <a href="https://wa.me/5545999999999" target="_blank" rel="noopener noreferrer">
              <Phone size={15} />
              (45) 99999-9999
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Ember Food Service. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>

      </motion.div>
    </footer>
  )
}