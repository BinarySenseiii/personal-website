import React from 'react'
import {TProject} from './_project-mock'
import {typo} from '../ui/typograpghy'
import {CustomLink} from '../mdx'
import {cn} from '~/lib/utils'
import {ExternalLink, Github, SquareArrowOutUpRight} from 'lucide-react'

type ProjectItemProps = {} & TProject

const ProjectItem: React.FC<ProjectItemProps> = ({
  Icon,
  title,
  description,
  deployedURL,
}) => {
  return (
    <li
      role="listitem"
      className="relative border-b items-center last:border-b-0 pb-4 last:pb-0 flex gap-4 transition ease-in-out group"
    >
      <div className="flex-shrink-0">
        <Icon />
      </div>
      <hgroup className="space-y-1">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-medium font-ubuntu text-base ">{title}</h2>
          <div className="flex gap-2 items-center">
            <a>
              <SquareArrowOutUpRight className="size-3" />
            </a>
            {/* <Github className="size-3" /> */}
          </div>
        </div>
        <p className={cn(typo({variant: 'paragraph', size: 'sm'}), 'line-clamp-2')}>
          {description}
        </p>
      </hgroup>
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
