import { useEffect, useRef } from 'react'
import Placeholder from './Placeholder.jsx'
import { IMAGES } from '../data/images.js'
import './AboutSection.css'

export default function AboutSection() {
  const ref = useRef(null)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const upd = () => { raf = 0; ref.current.style.setProperty('--y', Math.min(scrollY, innerHeight * 1.5)) }
    const on = () => { if (!raf) raf = requestAnimationFrame(upd) }
    upd(); addEventListener('scroll', on, { passive: true })
    return () => { removeEventListener('scroll', on); cancelAnimationFrame(raf) }
  }, [])
  return (
    <section id="quem-somos" className="about" ref={ref}>
      <div className="sky">
        <span className="cloud c1" /><span className="cloud c2" /><span className="cloud c3" />
      </div>
      <div className="about-stack">
        <div className="hero-img"><Placeholder img={IMAGES.hero} /></div>
        <div className="about-box">
          <h2>QUEM SOMOS</h2>
          <p>O YUMDEX nasceu de uma mesa de lanchonete e de uma Pokédex gasta: cada cardápio é inspirado em um tipo de Pokémon,
            com sabores pensados para combinar com o temperamento de cada um. Escolha seu tipo, explore a carta como quem explora
            uma nova região e leve para casa o que mais combina com o seu time.</p>
        </div>
      </div>
    </section>
  )
}
