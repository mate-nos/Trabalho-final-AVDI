import './ThemeBackground.css'
// .tb-circle é fixo (carrega a máscara de opacidade, sempre à direita); .tb-spin gira com cores opacas.
export default function ThemeBackground({ circleRef }) {
  return (
    <div className="tb" aria-hidden="true">
      <div className="tb-circle"><div className="tb-spin" ref={circleRef} /></div>
    </div>
  )
}
