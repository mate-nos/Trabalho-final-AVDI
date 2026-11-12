import { useEffect, useRef, useState } from 'react'
import { MENUS } from '../data/menus.js'
import { scrollToTarget } from '../utils/scroll.js'
import ThemeBackground from './ThemeBackground.jsx'
import MenuSection from './MenuSection.jsx'
import './MenuStorytelling.css'

const KEYS = ['main', 'soft', 'deep', 'bg1', 'bg2', 'ink']
export default function MenuStorytelling() {
  const root = useRef(null), stage = useRef(null), circle = useRef(null)
  const [active, setActive] = useState(0)
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0, last = -1
    const update = () => {
      raf = 0
      const r = root.current.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)))   // progresso real do scroll
      const t = p * (MENUS.length - 1), i = Math.min(MENUS.length - 2, Math.floor(t)), f = t - i
      const a = MENUS[i].colors, b = MENUS[i + 1].colors, s = stage.current.style
      for (const k of KEYS) s.setProperty('--' + k, a[k].map((v, j) => Math.round(v + (b[k][j] - v) * f)).join(','))
      if (!reduce) circle.current.style.transform = `rotate(${p * 540}deg)`
      const n = Math.round(t); if (n !== last) { last = n; setActive(n) }
    }
    const on = () => { if (!raf) raf = requestAnimationFrame(update) }
    update(); addEventListener('scroll', on, { passive: true }); addEventListener('resize', on)
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); cancelAnimationFrame(raf) }
  }, [])
  const c0 = MENUS[0].colors
  return (
    <section id="cardapios" className="story" ref={root} style={{ height: `${MENUS.length * 100}vh` }} aria-label="Cardápios">
      <div className="story-stage" ref={stage} style={Object.fromEntries(KEYS.map((k) => ['--' + k, c0[k].join(',')]))}>
        <ThemeBackground circleRef={circle} />
        {MENUS.map((m, i) => <MenuSection key={m.slug} menu={m} active={i === active} />)}
        <nav className="story-dots" aria-label="Escolher cardápio">
          {MENUS.map((m, i) => (
            <button key={m.slug} className={i === active ? 'on' : ''} aria-label={`Cardápio ${m.name}`} onClick={() => scrollToTarget({ id: 'cardapios', idx: i })} />
          ))}
        </nav>
      </div>
    </section>
  )
}
