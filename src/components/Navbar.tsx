import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import Logo from '../assets/Logotipo.png'
import '../styles/Navbar.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false) //scrolled = a página foi rolada?

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    const scrollToForm = () => {
        document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar__logo">
                <img src={Logo} alt="Ember_Logo" />
                <span>Ember</span>
            </div>

            <button className='navbar__cta' onClick={scrollToForm}>
                Quero uma análise gratuita
                <ArrowRight size={15} />
            </button>
        </nav>
    )
}