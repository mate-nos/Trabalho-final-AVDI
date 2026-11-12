import ProductCard from './ProductCard.jsx'
import './MenuSection.css'
// Uma etapa do storytelling
export default function MenuSection({ menu, active }) {
  return (
    <div className={`ms ${active ? 'on' : ''}`} aria-hidden={!active}>
      <p className="ms-kicker">Cardápio {menu.name}</p>
      <ProductCard menu={menu} product={menu.items[0]} />
    </div>
  )
}
