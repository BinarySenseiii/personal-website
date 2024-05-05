import React from 'react'
import {CustomLink} from '../mdx'
import {typo} from '../ui/typograpghy'
import projects, {TProject} from './_project-mock'
import ProjectItem from './project-item'

const ProjectList = () => {
  return (
    <section aria-label="projects" className="space-y-6 mt-5" id="main-content">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className={typo({variant: 'h2'})}>Projects i&apos;ve worked on</h2>
          <CustomLink href="/projects" aria-label="view all projects">
            View All
          </CustomLink>
        </div>
        <p className={typo({variant: 'paragraph', size: 'sm'})}>
          I assist brands, companies, institutions, and startups in creating exceptional
          digital experiences for their businesses through strategic development services.
        </p>
      </div>

      <ul role="list" className="space-y-4 ">
        {projects.slice(0, 3).map(project => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </ul>
    </section>
  )
}

export default ProjectList
