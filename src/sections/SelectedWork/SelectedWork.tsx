import { useState } from 'react'
import { PROJECTS } from '../../data/index'
import { Button } from '../../components/Button/Button'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import './SelectedWork.css'

const FILTER_TAGS = ['AI', 'UX/UI', 'Product', 'Energy Efficient Design']

interface SelectedWorkProps {
  navigate: (to: string) => void
  energyMode: boolean
}

export function SelectedWork({ navigate, energyMode }: SelectedWorkProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag
    ? PROJECTS.filter((p) => p.tags.includes(activeTag))
    : PROJECTS

  return (
    <section className="work" id="work">
      <div className="work-header" data-animate>
        <h3 className="work-title">Selected work</h3>
        <div className="work-filters" role="group" aria-label="Filter projects">
          <Button
            variant="filter"
            active={activeTag === null}
            onClick={() => setActiveTag(null)}
          >
            All
          </Button>
          {FILTER_TAGS.map((tag) => (
            <Button
              key={tag}
              variant="filter"
              active={activeTag === tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <div className="work-grid" data-animate style={{ transitionDelay: '0.1s' }}>
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            navigate={navigate}
            energyMode={energyMode}
          />
        ))}
      </div>
    </section>
  )
}
