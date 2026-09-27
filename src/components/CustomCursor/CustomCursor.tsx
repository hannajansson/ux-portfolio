import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let targetX = 0, targetY = 0
    let currentX = 0, currentY = 0
    let rafId = 0

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t
    }

    function animate() {
      currentX = lerp(currentX, targetX, 0.18)
      currentY = lerp(currentY, targetY, 0.18)
      cursor!.style.left = `${currentX}px`
      cursor!.style.top = `${currentY}px`
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    function onMouseMove(e: MouseEvent) {
      targetX = e.clientX
      targetY = e.clientY
    }

    function onMouseOver(e: MouseEvent) {
      const target = e.target as Element
      if (target.closest('[data-cursor="expand"]')) setHovering(true)
    }

    function onMouseOut(e: MouseEvent) {
      const target = e.target as Element
      if (target.closest('[data-cursor="expand"]')) setHovering(false)
    }

    function onMouseClick(e: MouseEvent) {
      const target = e.target as Element
      if (target.closest('[data-cursor="expand"]')) setHovering(false)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)
    window.addEventListener('mouseout', onMouseOut)
    window.addEventListener('click', onMouseClick)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mouseout', onMouseOut)
      window.removeEventListener('click', onMouseClick)
    }
  }, [])

  return (
    <div ref={cursorRef} className={`cursor${hovering ? ' cursor--hover' : ''}`}>
      <svg
        className="cursor-arrow"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </div>
  )
}
