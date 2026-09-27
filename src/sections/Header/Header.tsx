import { useState, useEffect } from 'react'
import './Header.css'

interface HeaderProps {
  onLogoClick: () => void
  onNavClick: (section: string) => void
}

export function Header({ onLogoClick, onNavClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function handleNavClick(section: string) {
    setMenuOpen(false)
    onNavClick(section)
  }

  return (
    <>
      <header className="header">
        <button className="header-logo" onClick={() => { setMenuOpen(false); onLogoClick() }}>HANNA JANSSON</button>

        <nav className="header-nav">
          <button onClick={() => handleNavClick('work')}>WORK</button>
          <button onClick={() => handleNavClick('about')}>ABOUT</button>
          <button onClick={() => handleNavClick('contact')}>CONTACT</button>
        </nav>

        <button
          className="header-burger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="4" y1="4" x2="20" y2="20"/>
              <line x1="20" y1="4" x2="4" y2="20"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="3" y1="7" x2="21" y2="7"/>
              <line x1="3" y1="17" x2="21" y2="17"/>
            </svg>
          )}
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Navigation menu">
          <nav className="mobile-menu-nav">
            <div className="mobile-menu-divider" />
            <button className="mobile-menu-item" onClick={() => handleNavClick('work')}>WORK</button>
            <div className="mobile-menu-divider" />
            <button className="mobile-menu-item" onClick={() => handleNavClick('about')}>ABOUT</button>
            <div className="mobile-menu-divider" />
            <button className="mobile-menu-item" onClick={() => handleNavClick('contact')}>CONTACT</button>
            <div className="mobile-menu-divider" />
          </nav>
        </div>
      )}
    </>
  )
}
