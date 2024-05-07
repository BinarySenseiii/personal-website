import React from 'react'
import { cn } from '~/lib/utils'
import { CustomLink } from '../mdx'
import { typo } from '../ui/typograpghy'
import { TProject } from './_project-mock'

type ProjectItemProps = {} & TProject

const ProjectItem: React.FC<ProjectItemProps> = ({ Icon, title, description, deployedURL }) => {
  return (
    <li
      role="listitem"
      className="border-b bg-neutral-900 sm:bg-transparent p-3 sm:p-0 last:border-b-0 sm:pb-4 last:pb-0 rounded-md  sm:rounded-none"
    >
      <CustomLink
        href={deployedURL}
        className="flex flex-col sm:flex-row sm:items-center gap-4 group el-focus-styles rounded-md"
      >
        <div className="flex-shrink-0">
          <Icon />
        </div>
        <hgroup className="space-y-2 sm:space-y-1">
          <h2 className="font-medium font-ubuntu text-base group-hover:text-ring group-hover:underline">
            {title}
          </h2>
          <p className={cn(typo({ variant: 'paragraph', size: 'sm' }), 'line-clamp-2')}>
            {description}
          </p>
        </hgroup>
      </CustomLink>
    </li>
  )
}
export default ProjectItem

{
  /* <div className="flex gap-2 items-center">
<div className="size-8 rounded-full grid place-content-center bg-neutral-900">
  <SquareArrowOutUpRight className="size-3" />
</div>

<div className="size-8 rounded-full grid place-content-center bg-neutral-900">
  <Github className="size-3" />
</div>
</div> */
}
