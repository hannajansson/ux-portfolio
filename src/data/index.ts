/* ─── Project registry ────────────────────────────────────────────────────
 *
 * Add, remove, or reorder projects here.
 * The order here determines the order on the landing page AND the
 * Previous / Next navigation on project pages.
 *
 * ──────────────────────────────────────────────────────────────────────── */

import { wfp } from './projects/wfp'
import { scania } from './projects/scania'
import { netlightFeedback } from './projects/netlightFeedback'
import { netlightWebsite } from './projects/netlightWebsite'
import { senseworks } from './projects/senseworks'
import { bucky } from './projects/bucky'
import type { Project } from './types'

export const PROJECTS: Project[] = [
  wfp,
  scania,
  netlightFeedback,
  netlightWebsite,
  senseworks,
  bucky,
]

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id)
}

export function getAdjacentProjects(id: string): { prev?: Project; next?: Project } {
  const index = PROJECTS.findIndex((p) => p.id === id)
  if (index === -1) return {}
  return {
    prev: PROJECTS[index - 1],
    next: PROJECTS[index + 1],
  }
}
