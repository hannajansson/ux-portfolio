import { useEffect } from 'react'

const CLARITY_PROJECT_ID = 'wsyt78v6bh'

// Only a tap/click counts as engagement
const INTERACTION_EVENTS = ['touchstart', 'click'] as const

function loadClarity() {
  if (document.querySelector('script[data-clarity]')) return

  /* eslint-disable @typescript-eslint/no-explicit-any */
  ;(function (c: any, l: Document, a: string, r: string, i: string) {
    c[a] =
      c[a] ||
      function (...args: unknown[]) {
        (c[a].q = c[a].q || []).push(args)
      }
    const t = l.createElement(r) as HTMLScriptElement
    t.async = true
    t.src = 'https://www.clarity.ms/tag/' + i
    t.setAttribute('data-clarity', '1')
    const y = l.getElementsByTagName(r)[0]
    y.parentNode?.insertBefore(t, y)
  })(window, document, 'clarity', 'script', CLARITY_PROJECT_ID)
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

// Loads Microsoft Clarity only after the visitor actually engages with the page, instead of on every load. Bounced visits never pay for it.
export function useDeferredClarity() {
  useEffect(() => {
    function onInteract() {
      loadClarity()
      INTERACTION_EVENTS.forEach((event) => window.removeEventListener(event, onInteract))
    }

    INTERACTION_EVENTS.forEach((event) =>
      window.addEventListener(event, onInteract, { passive: true })
    )

    return () => INTERACTION_EVENTS.forEach((event) => window.removeEventListener(event, onInteract))
  }, [])
}
