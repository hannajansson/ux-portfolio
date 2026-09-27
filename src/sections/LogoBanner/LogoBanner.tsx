import './LogoBanner.css'

const base = import.meta.env.BASE_URL

const LOGOS_ANIMATED = [
  { name: 'Property Finder', file: 'logo-propertyfinder.webp', size: 'sm' },
  { name: 'Ovulai',          file: 'logo-ovulai.webp',          size: 'xs' },
  { name: 'Polestar',        file: 'logo-polestar.webp',        size: 'lg' },
  { name: 'Omega Point',     file: 'logo-omegapoint.webp',      size: 'sm' },
  { name: 'Scania',          file: 'logo-scania.webp',          size: 'xl' },
  { name: 'Coompanion',      file: 'logo-coompanion.webp',      size: 'xs' },
  { name: 'Senseworks',      file: 'logo-senseworks.webp',      size: 'xs' },
  { name: 'WFP',             file: 'logo-wfp.webp',             size: 'xl' },
]

const LOGOS_STATIC = [
  { name: 'Ovulai',          file: 'logo-ovulai.webp',          size: 'xs' },
  { name: 'Polestar',        file: 'logo-polestar.webp',        size: 'lg' },
  { name: 'Omega Point',     file: 'logo-omegapoint.webp',      size: 'sm' },
  { name: 'Scania',          file: 'logo-scania.webp',          size: 'xl' },
  { name: 'Coompanion',      file: 'logo-coompanion.webp',      size: 'xs' },
  { name: 'Senseworks',      file: 'logo-senseworks.webp',      size: 'xs' },
  { name: 'WFP',             file: 'logo-wfp.webp',             size: 'xl' },
  { name: 'Property Finder', file: 'logo-propertyfinder.webp', size: 'sm' },
]

interface LogoBannerProps {
  energyMode: boolean
}

function LogoImg({ name, file, size }: { name: string; file: string; size: string }) {
  return (
    <span className="banner-item">
      <img
        src={`${base}images/${file}`}
        alt={name}
        loading="lazy"
        className={`banner-logo${size ? ` banner-logo--${size}` : ''}`}
      />
    </span>
  )
}

export function LogoBanner({ energyMode }: LogoBannerProps) {
  if (energyMode) {
    return (
      <div className="banner" data-animate>
        <div className="banner-track banner-track--static">
          {LOGOS_STATIC.map((logo) => (
            <LogoImg key={logo.name} {...logo} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="banner" data-animate>
      <div className="banner-track" aria-hidden="true">
        {[...LOGOS_ANIMATED, ...LOGOS_ANIMATED].map((logo, i) => (
          <LogoImg key={i} {...logo} />
        ))}
      </div>
    </div>
  )
}
