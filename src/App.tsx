import { useState, lazy, Suspense } from 'react'
import { useRouter } from './hooks/useRouter'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useDeferredClarity } from './hooks/useDeferredClarity'
import { Header } from './sections/Header/Header'
import { Hero } from './sections/Hero/Hero'
import { LogoBanner } from './sections/LogoBanner/LogoBanner'
import { SelectedWork } from './sections/SelectedWork/SelectedWork'
import { About } from './sections/About/About'
import { Footer } from './sections/Footer/Footer'
const ProjectPage = lazy(() => import('./pages/ProjectPage').then(m => ({ default: m.ProjectPage })))
import { CustomCursor } from './components/CustomCursor/CustomCursor'
import { MusicPlayer } from './components/MusicPlayer/MusicPlayer'

function App() {
  const [energyMode, setEnergyMode] = useState(false)
  const { path, navigate } = useRouter()
  useScrollReveal(path)
  useDeferredClarity()

  const projectMatch = path.match(/^\/projects\/(.+)$/)
  const projectId = projectMatch?.[1]

  // energyMode ON  → dark (no class, default CSS)
  // energyMode OFF → light (.light-mode class)
  return (
    <div className={energyMode ? '' : 'light-mode'}>
      <CustomCursor />
      <MusicPlayer energyMode={energyMode} />
      <Header
        energyMode={energyMode}
        onToggle={() => setEnergyMode(v => !v)}
        onLogoClick={() => { navigate('/'); window.scrollTo(0, 0) }}
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

      {projectId ? (
        <Suspense fallback={null}>
          <ProjectPage id={projectId} navigate={navigate} energyMode={energyMode} />
        </Suspense>
      ) : (
        <main>
          <Hero />
          <LogoBanner energyMode={energyMode} />
          <SelectedWork navigate={navigate} energyMode={energyMode} />
          <About energyMode={energyMode} />
        </main>
      )}
      <Footer />
    </div>
  )
}

export default App
