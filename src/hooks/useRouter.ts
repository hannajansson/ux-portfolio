import { useState, useEffect } from 'react'

const base = import.meta.env.BASE_URL.replace(/\/$/, '') // e.g. '/portfolio'

function stripBase(pathname: string) {
  return pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname
}

export function useRouter() {
  const [path, setPath] = useState(stripBase(window.location.pathname))

  useEffect(() => {
    const onPop = () => setPath(stripBase(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  function navigate(to: string) {
    window.history.pushState({}, '', base + to)
    setPath(to)
    window.scrollTo(0, 0)
  }

  return { path, navigate }
}
