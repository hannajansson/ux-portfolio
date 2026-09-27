import { useEffect, useRef, useState } from 'react'
import { Button } from '../Button/Button'
import './MusicPlayer.css'

const TRACK_URI = 'spotify:track:2J8gE4IMrJhOpKad0UgM25'

declare global {
  interface Window {
    onSpotifyIframeApiReady: (api: SpotifyIFrameAPI) => void
  }
}

interface SpotifyIFrameAPI {
  createController: (
    el: HTMLElement,
    options: { uri: string; width: number; height: number },
    callback: (controller: SpotifyEmbedController) => void
  ) => void
}

interface SpotifyEmbedController {
  play: () => void
  pause: () => void
  addListener: (event: string, callback: (e: { data: { isPaused: boolean } }) => void) => void
}

interface MusicPlayerProps {
  energyMode: boolean
}

function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <path d="M2 1.5l9 4.5-9 4.5V1.5z"/>
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <rect x="2" y="1.5" width="3" height="9" rx="1"/>
      <rect x="7" y="1.5" width="3" height="9" rx="1"/>
    </svg>
  )
}

export function MusicPlayer({ energyMode }: MusicPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const controllerRef = useRef<SpotifyEmbedController | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastToggleRef = useRef(0)
  const startingRef = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  function resetPlaying() {
    setPlaying(false)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  useEffect(() => {
    // Load Spotify iFrame API script once
    if (!document.querySelector('script[data-spotify-api]')) {
      const script = document.createElement('script')
      script.src = 'https://open.spotify.com/embed/iframe-api/v1'
      script.async = true
      script.setAttribute('data-spotify-api', '1')
      document.body.appendChild(script)
    }

    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      if (!containerRef.current) return
      IFrameAPI.createController(
        containerRef.current,
        { uri: TRACK_URI, width: 1, height: 1 },
        (controller) => {
          controllerRef.current = controller
          setReady(true)
          controller.addListener('playback_update', ({ data }) => {
            if (data.isPaused) {
              // Only treat as a real pause once Spotify has confirmed playback started.
              // On mobile, isPaused:true fires during the initial seek before the
              // first isPaused:false — startingRef guards against that false positive.
              if (!startingRef.current) resetPlaying()
            } else {
              // Spotify confirmed actual playback — safe to respond to pauses now
              startingRef.current = false
            }
          })
        }
      )
    }
  }, [])

  // Pause when switching to dark/energy mode
  useEffect(() => {
    if (energyMode && playing) {
      controllerRef.current?.pause()
      setPlaying(false)
    }
  }, [energyMode, playing])

  function toggle() {
    const now = Date.now()
    if (now - lastToggleRef.current < 400) return
    lastToggleRef.current = now
    const ctrl = controllerRef.current
    if (!ctrl) return
    if (playing) {
      ctrl.pause()
      resetPlaying()
    } else {
      startingRef.current = true
      ctrl.play()
      setPlaying(true)
      // Fallback: reset after 31s in case Spotify doesn't fire the end event
      timeoutRef.current = setTimeout(resetPlaying, 31000)
    }
  }

  return (
    <>
      {/* Always mounted so Spotify script never re-initialises on mode switch */}
      <div
        ref={containerRef}
        aria-hidden="true"
        style={{ position: 'fixed', top: '-9999px', left: '-9999px', width: 1, height: 1 }}
      />

      {/* Button only visible in light mode */}
      {!energyMode && (
        <div className="music-player-wrap">
          <Button
            onClick={toggle}
            disabled={!ready}
            aria-label={playing ? 'Pause music' : 'Play music'}
            icon={playing ? <PauseIcon /> : <PlayIcon />}
          >
            {playing ? 'Pause' : '30s vibe'}
          </Button>
        </div>
      )}
    </>
  )
}
