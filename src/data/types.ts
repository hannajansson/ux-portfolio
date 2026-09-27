/* ─── Project data types ──────────────────────────────────────────────────
 *
 * Each project lives in its own file under src/data/projects/.
 * To add a project: create a new file, export a Project object, then add
 * it to the array in src/data/index.ts.
 * To edit: update the relevant file.
 * To delete: remove the file and its entry from src/data/index.ts.
 *
 * ──────────────────────────────────────────────────────────────────────── */

export interface ProjectStat {
  value: string   // e.g. "10 000+"
  label: string   // e.g. "Page views every month"
}

/** One block of content in the project body */
export type ProjectSection =
  | {
      type: 'text-only'
      title: string
      text: string
    }
  | {
      type: 'text-image'
      title?: string
      text: string
      image: string        // path relative to /public, e.g. "/images/scania-1.jpg"
      imageAlt?: string
      imagePosition: 'left' | 'right'
      extraBlocks?: { title?: string; text: string }[]
    }
  | {
      type: 'full-image'
      image: string
      imageAlt?: string
    }

export interface Project {
  id: string               // used in the URL: /projects/<id>
  title: string
  description: string      // short intro paragraph
  client: string
  year: string
  industry: string
  role: string
  coverImage?: string      // full-width image below the intro
  tags: string[]           // for filtering on the landing page
  stats?: ProjectStat[]    // optional metrics strip (up to 3 recommended)
  sections: ProjectSection[]
}
