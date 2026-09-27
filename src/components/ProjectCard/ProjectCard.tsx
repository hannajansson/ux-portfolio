import type { Project } from '../../data/types'
import { AsciiImage } from '../AsciiImage/AsciiImage'
import './ProjectCard.css'

const base = import.meta.env.BASE_URL.replace(/\/$/, '')

interface ProjectCardProps {
  project: Project
  navigate: (to: string) => void
  energyMode: boolean
}

export function ProjectCard({ project, navigate, energyMode }: ProjectCardProps) {
  return (
    <article
      className="project-card"
      onClick={() => navigate(`/projects/${project.id}`)}
      role="button"
      tabIndex={0}
      data-cursor="expand"
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/projects/${project.id}`)}
    >
      <div className="project-meta">
        <span className="body-small">{project.client}</span>
        <span className="body-small">{project.year}</span>
      </div>
      <div className="project-image">
        {project.coverImage
          ? energyMode
            ? <AsciiImage src={base + project.coverImage} alt={project.title} className="project-img" fill />
            : <img src={base + project.coverImage} alt={project.title} loading="lazy" className="project-img" />
          : <div className="project-image-placeholder" />}
      </div>
      <div className="project-info">
        <h5 className="project-title">{project.title}</h5>
        <p className="project-role body-small">{project.role}</p>
      </div>
    </article>
  )
}
