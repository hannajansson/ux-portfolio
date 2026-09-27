import { useState } from 'react'
import { useRouter } from './hooks/useRouter'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useDeferredClarity } from './hooks/useDeferredClarity'
import { Header } from './sections/Header/Header'
import { Hero } from './sections/Hero/Hero'
import { LogoBanner } from './sections/LogoBanner/LogoBanner'
import { SelectedWork } from './sections/SelectedWork/SelectedWork'
import { About } from './sections/About/About'
import { Footer } from './sections/Footer/Footer'
import { ProjectPage } from './pages/ProjectPage'
import { CustomCursor } from './components/CustomCursor/CustomCursor'
import { MusicPlayer } from './components/MusicPlayer/MusicPlayer'

function App() {
  const { path, navigate } = useRouter()
  useScrollReveal(path)
  useDeferredClarity()
  const [fading, setFading] = useState(false)

  const projectMatch = path.match(/^\/projects\/(.+)$/)
  const projectId = projectMatch?.[1]

  function goHome() {
    if (!projectId) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    setFading(true)
    setTimeout(() => {
      navigate('/')
      window.scrollTo(0, 0)
      setFading(false)
    }, 250)
  }

  return (
    <div>
      <CustomCursor />
      <MusicPlayer />
      <Header
        onLogoClick={goHome}
        onNavClick={(section) => {
          if (projectId) {
            navigate('/')
            setTimeout(() => {
              document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
            }, 50)
          } else {
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
          }
        }}
      />

      <div className={`page-transition${fading ? ' page-transition--fading' : ''}`}>
        {projectId ? (
          <ProjectPage id={projectId} navigate={navigate} />
        ) : (
          <main>
            <Hero />
            <LogoBanner />
            <SelectedWork navigate={navigate} />
            <About />
          </main>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default App
