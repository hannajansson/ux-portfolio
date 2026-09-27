import { useEffect, useState } from 'react'
import './Hero.css'

const base = import.meta.env.BASE_URL

let introPlayed = false

type Phase = 'jacquarda' | 'primary' | 'done'

function TangleSVG() {
  return (
    <span className="hero-svg hero-svg--tangle" aria-hidden="true">
      <img src={`${base}images/tangle-darkmode.svg`} alt="" className="hero-img hero-img--dark" />
      <img src={`${base}images/tangle-lightmode.svg`} alt="" className="hero-img hero-img--light" />
    </span>
  )
}

function RainbowSVG() {
  return (
    <span className="hero-svg hero-svg--rainbow" aria-hidden="true">
      <img src={`${base}images/rainbow-darkmode.svg`} alt="" className="hero-img hero-img--dark" />
      <img src={`${base}images/rainbow-lightmode.svg`} alt="" className="hero-img hero-img--light" />
    </span>
  )
}

export function Hero() {
  const [phase, setPhase] = useState<Phase>(introPlayed ? 'done' : 'jacquarda')
  const [fontsReady, setFontsReady] = useState(false)

  useEffect(() => {
    if (introPlayed) return
    document.fonts.load('400 2.1rem "Jacquarda Bastarda 9"').then(() => setFontsReady(true))
  }, [])

  useEffect(() => {
    if (!fontsReady) return
    const t1 = setTimeout(() => setPhase('primary'), 1200)
    const t2 = setTimeout(() => {
      setPhase('done')
      introPlayed = true
    }, 2200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [fontsReady])

  return (
    <section className="hero" id="top">
      <div className={`hero-intro${fontsReady ? ' hero-intro--ready' : ''}${phase === 'done' ? ' hero-intro--gone' : ''}`}>
        <span className={`hero-intro-word hero-intro-word--jacquarda${phase !== 'jacquarda' ? ' hero-intro-word--out' : ''}`}>
          COMPLEXITY
        </span>
        <span className={`hero-intro-word hero-intro-word--primary${phase === 'jacquarda' ? ' hero-intro-word--out' : ''}`}>
          COMPLEXITY
        </span>
      </div>
      <div className={`hero-content${phase === 'done' ? ' hero-content--visible' : ''}`}>
        <div className="hero-line">TRANSFORMING</div>
        <div className="hero-line">
          <TangleSVG />
          <span className="hero-complexity" aria-label="COMPLEXITY">
            {'COMPLEXITY'.split('').map((letter, i) => (
              <span key={i} className="hero-complexity-letter" data-letter={letter}>{letter}</span>
            ))}
          </span>
        </div>
        <div className="hero-line">
          <span>INTO</span>
          <RainbowSVG />
          <span>CLARITY</span>
        </div>
      </div>
      <p className={`hero-subtitle${phase === 'done' ? ' hero-subtitle--visible' : ''}`}>
        Based in Stockholm, I turn thoughts into impactful products{' '}
        <br />by uniting innovation, design, and strategic management.
      </p>
    </section>
  )
}
