import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { MENUS, themeVars, money } from '../data/menus.js'
import Navbar from './Navbar.jsx'
import ThemeBackground from './ThemeBackground.jsx'
import './MenuPage.css'

export default function MenuPage() {
  const { slug } = useParams()
  const menu = MENUS.find((m) => m.slug === slug)
  useEffect(() => { window.scrollTo(0, 0) }, [slug])
  if (!menu) return <Navigate to="/" replace />
  return (
    <div className="mp" style={themeVars(menu.colors)} data-theme={menu.slug}>
      <Navbar />
      <ThemeBackground />
      <main className="mp-main">
        <Link to="/" className="btn mp-back"><span aria-hidden="true">←</span> Voltar para a Home</Link>
        <div className="mp-head">
          <span className="mp-badge">Tipo {menu.name}</span>
          <h1 className="outline-title">Cardápio {menu.name}</h1>
          <p>{menu.tagline} Pokémon da casa: {menu.pokemon.join(', ')}.</p>
        </div>
        <div className="mp-grid">
          {menu.items.map((it) => (
            <article className="mp-card" key={it.name}>
              <span className="mp-cat">{menu.name}</span>
              <h2>{it.name}</h2>
              <p>{it.desc}</p>
              <strong>{money(it.price)}</strong>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
