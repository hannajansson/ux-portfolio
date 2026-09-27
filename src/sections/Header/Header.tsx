import { useState, useEffect } from 'react'
import { TogglePill } from '../../components/TogglePill/TogglePill'
import './Header.css'

interface HeaderProps {
  energyMode: boolean
  onToggle: () => void
  onLogoClick: () => void
  onNavClick: (section: string) => void
}

function DesktopToggleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="8" y="0" width="8" height="8"/>
      <rect x="0" y="8" width="8" height="8"/>
      <rect x="16" y="8" width="8" height="8"/>
      <rect x="8" y="16" width="8" height="8"/>
    </svg>
  )
}

function MobileToggleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M7 3.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zM7 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
      <rect x="5.6" y="0" width="2.8" height="2.2" rx="1.4"/>
      <rect x="5.6" y="11.8" width="2.8" height="2.2" rx="1.4"/>
      <rect x="0" y="5.6" width="2.2" height="2.8" rx="1.1"/>
      <rect x="11.8" y="5.6" width="2.2" height="2.8" rx="1.1"/>
    </svg>
  )
}

export function Header({ energyMode, onToggle, onLogoClick, onNavClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function handleNavClick(section: string) {
    setMenuOpen(false)
    onNavClick(section)
  }

  const toggleLabel = energyMode
    ? 'Thnx for browsing the energy efficient mode <3'
    : 'Hi! Browse the portfolio in energy efficient mode <3'

  return (
    <>
      <header className="header">
        <button className="header-logo" onClick={() => { setMenuOpen(false); onLogoClick() }}>HANNA JANSSON</button>

        <TogglePill
          checked={energyMode}
          onChange={onToggle}
          label={toggleLabel}
          knobIcon={<DesktopToggleIcon />}
        />

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

          <TogglePill
            checked={energyMode}
            onChange={onToggle}
            label={toggleLabel}
            knobIcon={<MobileToggleIcon />}
          />
        </div>
      )}
    </>
  )
}
