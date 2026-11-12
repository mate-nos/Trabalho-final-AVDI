export default function Placeholder({ img, className = '' }) {
  if (img.src) return <img className={className} src={img.src} alt={img.label} style={{ aspectRatio: img.ratio, objectFit: 'cover' }} />
  return <div className={`ph ${className}`} style={{ aspectRatio: img.ratio }} role="img" aria-label={img.label}><span>{img.label}</span></div>
}
