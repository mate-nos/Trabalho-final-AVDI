import { Link } from 'react-router-dom'
import Placeholder from './Placeholder.jsx'
import { IMAGES } from '../data/images.js'
import { money } from '../data/menus.js'
import './ProductCard.css'
export default function ProductCard({ menu, product }) {
  return (
    <article className="pc">
      <Placeholder className="pc-img" img={IMAGES.products[menu.slug]} />
      <div className="pc-body">
        <div className="pc-head"><h3 className="outline-title">{product.name}</h3><strong className="pc-price">{money(product.price)}</strong></div>
        <p>{product.desc}</p>
        <Link className="btn" to={`/cardapio/${menu.slug}`}>Conferir <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  )
}
