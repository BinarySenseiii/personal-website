import {CustomLink} from '../mdx'
import ContentNotFound from '../ui/content-not-found'
import {typo} from '../ui/typograpghy'
import {TProject} from './_project-mock'

import ProjectItem from './project-item'

const ProjectList = ({
  projects,
  metadata,
}: {
  projects: TProject[]
  metadata?: boolean
}) => {
  return (
    <section aria-label="projects" className="space-y-6 mt-5" id="main-content">
      {metadata && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className={typo({variant: 'h2'})}>Projects i&apos;ve worked on</h2>
            <CustomLink href="/projects" aria-label="view all projects">
              View All
            </CustomLink>
          </div>
          <p className={typo({variant: 'paragraph', size: 'sm'})}>
            Transforming Businesses with Strategic Development Expertise
          </p>
        </div>
      )}

      <ol className="space-y-4" role="list">
        {projects.length > 0 ? (
          projects.map(project => <ProjectItem key={project.id} {...project} />)
        ) : (
          <ContentNotFound text="No Projects Found" />
        )}
      </ol>
    </section>
  )
}

export default ProjectList
