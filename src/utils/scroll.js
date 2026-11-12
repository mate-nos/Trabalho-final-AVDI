import { MENUS } from '../data/menus.js'
// target: { id, idx? } — idx indica a etapa dentro do storytelling
export function scrollToTarget({ id, idx }) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  let top = el.getBoundingClientRect().top + scrollY
  if (idx != null) top += (idx / (MENUS.length - 1)) * (el.offsetHeight - innerHeight) + 1
  scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' })
}
export const norm = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
