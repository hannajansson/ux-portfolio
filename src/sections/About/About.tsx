import { useState } from 'react'
import profileImg from '../../assets/profile.webp'
import { AsciiImage } from '../../components/AsciiImage/AsciiImage'
import { Button } from '../../components/Button/Button'
import './About.css'

const EXPERIENCE = [
  'Product Designer',
  'Product Manager',
  'UX/UI Designer',
  'User Researcher',
  'Vibe Coder',
  'Sustainable Designer',
  'Brand & Visual Designer',
]

const CLIENTS = [
  'UNHCR, WFP',
  'Scania',
  'Polestar',
  'Senseworks',
  'Property Finder',
  'Ovulai',
  'Omegapoint',
  'Coompanion',
]

interface AboutProps {
  energyMode: boolean
}

export function About({ energyMode }: AboutProps) {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText('hannanov00@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-left">
          <h3 className="about-heading" data-animate>A journey of curiosity <br></br>led me here:</h3>
          <p className="about-bio" data-animate style={{ transitionDelay: '0.1s' }}>
            I'm Hanna Jansson, a Product Designer and Manager in Stockholm working at the intersection of AI,
            innovation, and human-centered design. I help organizations turn complex challenges
            into intuitive, scalable products. My mission? To merge user needs with business goals,
            creating solutions that are as smart as they are delightful. Fueled by creativity,
            design strategy, and a belief that fun is serious business.
          </p>

          <div className="about-lists" data-animate style={{ transitionDelay: '0.2s' }}>
            <div className="about-list">
              <p className="body-small about-list-label">Experience</p>
              <ul>
                {EXPERIENCE.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="about-list">
              <p className="body-small about-list-label">Clients</p>
              <ul>
                {CLIENTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-buttons" data-animate style={{ transitionDelay: '0.3s' }}>
            <Button
              href="https://www.linkedin.com/in/hannaajansson/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button onClick={copyEmail}>
              <span style={{ display: 'grid' }}>
                <span style={{ gridArea: '1/1', opacity: copied ? 0 : 1, transition: 'opacity 0.15s' }}>Copy my email</span>
                <span style={{ gridArea: '1/1', opacity: copied ? 1 : 0, transition: 'opacity 0.15s' }} aria-hidden={!copied}>Copied!</span>
              </span>
            </Button>
          </div>
        </div>

        <div className="about-right" data-animate style={{ transitionDelay: '0.15s' }}>
          {energyMode
            ? <div className="about-photo-wrap">
                <AsciiImage src={profileImg} alt="Hanna Jansson" loading="lazy" fill />
              </div>
            : <img src={profileImg} alt="Hanna Jansson" loading="lazy" className="about-photo" />}
        </div>
      </div>
    </section>
  )
}
