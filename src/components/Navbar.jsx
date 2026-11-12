import { useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MENUS } from '../data/menus.js'
import { scrollToTarget, norm } from '../utils/scroll.js'
import './Navbar.css'

export default function Navbar() {
  const [q, setQ] = useState(''), [open, setOpen] = useState(false), [cur, setCur] = useState(0)
  const nav = useNavigate(), { pathname } = useLocation()
  const entries = useMemo(() => [
    { label: 'Quem Somos', sub: 'Seção', target: { id: 'quem-somos' } },
    { label: 'Cardápios', sub: 'Seção', target: { id: 'cardapios', idx: 0 } },
    ...MENUS.flatMap((m, idx) => [
      { label: `Cardápio ${m.name}`, sub: 'Tipo', target: { id: 'cardapios', idx }, terms: [m.name] },
      ...m.pokemon.map((p) => ({ label: p, sub: `Cardápio ${m.name}`, target: { id: 'cardapios', idx }, terms: [p] })),
    ]),
  ], [])
  const results = q.trim() ? entries.filter((e) => norm([e.label, ...(e.terms || [])].join(' ')).includes(norm(q.trim()))).slice(0, 6) : []
  const go = (target) => {
    setOpen(false); setQ('')
    if (pathname !== '/') nav('/', { state: { target } }); else scrollToTarget(target)
  }
  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setCur((c) => Math.min(c + 1, results.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setCur((c) => Math.max(c - 1, 0)) }
    else if (e.key === 'Enter' && results[cur]) go(results[cur].target)
    else if (e.key === 'Escape') setOpen(false)
  }
  return (
    <header className="nav">
      <Link to="/" className="logo" aria-label="YUMDEX, início"><b>Y</b><i>UM</i>DEX</Link>
      <nav className="nav-links">
        <button onClick={() => go({ id: 'quem-somos' })}>Quem Somos</button>
        <button onClick={() => go({ id: 'cardapios', idx: 0 })}>Cardápios</button>
      </nav>
      <div className="search">
        <input type="search" placeholder="Buscar tipo ou Pokémon" value={q} role="combobox" aria-expanded={open && results.length > 0}
          aria-controls="res" onChange={(e) => { setQ(e.target.value); setOpen(true); setCur(0) }} onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)} onKeyDown={onKey} />
        {open && q.trim() && (
          <ul id="res" role="listbox">
            {results.length ? results.map((r, i) => (
              <li key={r.label + r.sub} role="option" aria-selected={i === cur} className={i === cur ? 'on' : ''}
                onMouseDown={() => go(r.target)} onMouseEnter={() => setCur(i)}>{r.label}<small>{r.sub}</small></li>
            )) : <li className="none">Nenhum resultado</li>}
          </ul>
        )}
      </div>
    </header>
  )
}
