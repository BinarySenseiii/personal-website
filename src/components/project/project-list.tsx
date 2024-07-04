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
      {metadata && <h2 className={typo({variant: 'h2'})}>Featured Projects</h2>}

      <div className="!mt-8">
        {projects.length > 0 ? (
          <ol className="gap-8 grid md:grid-cols-2 " role="list">
            {projects.map(project => (
              <ProjectItem key={project.id} {...project} />
            ))}
          </ol>
        ) : (
          <ContentNotFound text="No Projects Found" />
        )}
      </div>
    </section>
  )
}

export default ProjectList
