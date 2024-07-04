import Image from 'next/image'
import React from 'react'
import {FaExternalLinkAlt} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa6'
import {cn} from '~/lib/utils'
import {CustomLink} from '../mdx'
import {typo} from '../ui/typograpghy'
import {TProject} from './_project-mock'

type ProjectItemProps = {} & TProject

const linkClass =
  '!p-0 h-full hover:!text-[#25dde5] !flex items-center gap-2 !text-sm !text-ring'

const ProjectItem: React.FC<ProjectItemProps> = ({
  Icon,
  title,
  description,
  deployedURL,
  cover,
  stacks,
  isRepo,
  repoUrl,
}) => {
  return (
    <li role="listitem">
      <div className="grid  gap-4 group el-focus-styles rounded-md">
        <div className="aspect-video relative">
          <Image
            alt={`${title} not found`}
            priority
            placeholder="blur"
            src={cover}
            className="size-full object-cover rounded-md"
          />

          <div className="absolute size-full group-hover:opacity-100 opacity-0 inset-0 bg-black/60 transition grid place-content-center">
            <Icon />
          </div>
        </div>

        <hgroup className="space-y-2 sm:space-y-1">
          <h2 className="font-medium font-ubuntu text-base">{title}</h2>

          <p className={'text-xs text-ring'} aria-label="project stacks">
            {stacks.join(' / ')}
          </p>

          <p
            className={cn(
              typo({variant: 'paragraph', size: 'sm'}),
              'line-clamp-2 !mt-4',
            )}
          >
            {description}
          </p>

          <div className="flex items-center gap-4 !mt-2">
            <CustomLink
              aria-label={`visit ${title} live URL}`}
              href={deployedURL}
              className={linkClass}
            >
              <FaExternalLinkAlt size={12} />
              <span> Live Preview</span>
            </CustomLink>

            {isRepo && (
              <CustomLink
                aria-label={`visit ${title} Github Repo`}
                href={repoUrl as string}
                className={linkClass}
              >
                <FaGithub />
                <span> Repo Url</span>
              </CustomLink>
            )}
          </div>
        </hgroup>
      </div>
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
