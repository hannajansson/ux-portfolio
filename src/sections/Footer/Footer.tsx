import { useEffect, useRef } from 'react'
import './Footer.css'

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        if (document.querySelector('script[data-wcb]')) return
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js'
        script.async = true
        script.setAttribute('data-wcb', '1')
        document.body.appendChild(script)
      },
      { rootMargin: '200px' }
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="footer" id="contact">
      <div id="wcb" className="carbonbadge wcb-d footer-badge" />
      <p className="footer-copy body-small">2025 © Hanna Jansson</p>
    </footer>
  )
}
