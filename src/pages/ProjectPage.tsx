import { getProjectById, getAdjacentProjects } from '../data/index'
import type { ProjectSection } from '../data/types'
import { AsciiImage } from '../components/AsciiImage/AsciiImage'
import './ProjectPage.css'

const base = import.meta.env.BASE_URL  // e.g. '/portfolio/'
function asset(path: string) {
  // strip leading slash so base + path never double-slashes
  return path ? base + path.replace(/^\//, '') : path
}

interface ProjectPageProps {
  id: string
  navigate: (to: string) => void
  energyMode: boolean
}

function SectionBlock({ section, energyMode }: { section: ProjectSection; energyMode: boolean }) {
  switch (section.type) {
    case 'text-only':
      return (
        <div className="pp-section pp-section--text-only">
          {section.title && <h6 className="pp-section-title">{section.title}</h6>}
          <p className="pp-section-text">{section.text}</p>
        </div>
      )

    case 'text-image':
      return (
        <div className={`pp-section pp-section--text-image pp-section--image-${section.imagePosition}`}>
          <div className={`pp-section-media${energyMode ? ' pp-section-media--energy' : ''}`}>
            {section.image
              ? energyMode
                ? <AsciiImage src={asset(section.image)} alt={section.imageAlt ?? ''} className="pp-section-img" />
                : <img src={asset(section.image)} alt={section.imageAlt ?? ''} loading="lazy" className="pp-section-img" />
              : <div className="pp-img-placeholder" />}
          </div>
          <div className="pp-section-copy">
            {section.title && <h6 className="pp-section-title">{section.title}</h6>}
            <p className="pp-section-text">{section.text}</p>
            {section.extraBlocks?.map((block, i) => (
              <div key={i} className="pp-section-extra-block">
                {block.title && <h6 className="pp-section-title">{block.title}</h6>}
                <p className="pp-section-text">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      )

    case 'full-image':
      return (
        <div className="pp-section pp-section--full-image">
          {section.image
            ? energyMode
              ? <AsciiImage src={asset(section.image)} alt={section.imageAlt ?? ''} className="pp-full-img" />
              : <img src={asset(section.image)} alt={section.imageAlt ?? ''} loading="lazy" className="pp-full-img" />
            : <div className="pp-img-placeholder pp-img-placeholder--full" />}
        </div>
      )

    default:
      return null
  }
}

export function ProjectPage({ id, navigate, energyMode }: ProjectPageProps) {
  const project = getProjectById(id)
  const { prev, next } = getAdjacentProjects(id)

  if (!project) {
    navigate('/')
    return null
  }

  return (
    <article className="pp">

      {/* ── Intro ─────────────────────────────────────────────────── */}
      <section className="pp-intro">
        <h1 className="pp-title">{project.title}</h1>
        <div className="pp-meta">
          <div className="pp-meta-item">
            <span className="pp-meta-label body-small">Client</span>
            <span className="pp-meta-value body-small">{project.client}</span>
          </div>
          <div className="pp-meta-item">
            <span className="pp-meta-label body-small">Year</span>
            <span className="pp-meta-value body-small">{project.year}</span>
          </div>
          <div className="pp-meta-item">
            <span className="pp-meta-label body-small">Industry</span>
            <span className="pp-meta-value body-small">{project.industry}</span>
          </div>
          <div className="pp-meta-item">
            <span className="pp-meta-label body-small">Role</span>
            <span className="pp-meta-value body-small">{project.role}</span>
          </div>
        </div>
        <p className="pp-description">{project.description}</p>
      </section>

      {/* ── Cover image ───────────────────────────────────────────── */}
      {project.coverImage
        ? <div className="pp-cover-wrap">
            {energyMode
              ? <AsciiImage src={asset(project.coverImage)} alt={project.title} className="pp-cover" loading="eager" />
              : <img src={asset(project.coverImage)} alt={project.title} loading="eager" className="pp-cover" />}
          </div>
        : <div className="pp-cover pp-cover--placeholder" />}

      {/* ── Stats strip ───────────────────────────────────────────── */}
      {project.stats && project.stats.length > 0 && (
        <section className="pp-stats">
          {project.stats.map((stat, i) => (
            <div key={i} className="pp-stat">
              <span className="pp-stat-value">{stat.value}</span>
              <span className="pp-stat-label body-small">{stat.label}</span>
            </div>
          ))}
        </section>
      )}

      {/* ── Content sections ──────────────────────────────────────── */}
      <div className="pp-body">
        {project.sections.map((section, i) => (
          <SectionBlock key={i} section={section} energyMode={energyMode} />
        ))}
      </div>

      {/* ── Prev / Next navigation ────────────────────────────────── */}
      <nav className="pp-nav">
        {prev
          ? <button onClick={() => navigate(`/projects/${prev.id}`)} className="pp-nav-link pp-nav-link--prev" data-cursor="expand">
              <span className="pp-nav-project-title">{'< Previous'}</span>
            </button>
          : <span />}
        {next
          ? <button onClick={() => navigate(`/projects/${next.id}`)} className="pp-nav-link pp-nav-link--next" data-cursor="expand">
              <span className="pp-nav-project-title">{'Next >'}</span>
            </button>
          : <span />}
      </nav>

    </article>
  )
}
