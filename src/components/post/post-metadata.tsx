import {Post} from '#site/content'
import {Calendar, Timer} from 'lucide-react'
import React from 'react'
import {cn, formatDate} from '~/lib/utils'

interface PostMetaProps {
  title: string
  date: string
  metadata: Post['metadata']
  description: string | undefined
  isDetailPage?: boolean
}
const PostMetadata: React.FC<PostMetaProps> = ({
  title,
  date,
  metadata,
  description,
  isDetailPage,
}) => {
  return (
    <hgroup className={cn('p-0 space-y-2', {'p-0': isDetailPage})}>
      <h3
        className={cn(
          `font-semibold text-lg transition-colors group-hover:text-ring group-hover:underline`,
          {
            'text-xl': isDetailPage,
          },
        )}
      >
        {title}
      </h3>

      <div className="flex items-center gap-2">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd
            className={cn(
              'flex items-center gap-1 text-xs text-muted-foreground',
              {'text-sm gap-2': isDetailPage},
            )}
          >
            <Calendar
              className={cn('size-3', {'size-4': isDetailPage})}
              aria-hidden="true"
            />
            <time
              dateTime={date}
              aria-label={`Published on ${formatDate(date)}`}
            >
              {formatDate(date)}
            </time>
          </dd>
        </dl>

        <dl>
          <dt className="sr-only">Reading time</dt>
          <dd
            className={cn(
              'flex items-center gap-1 text-xs text-muted-foreground',
              {'text-sm gap-1': isDetailPage},
            )}
          >
            <Timer
              className={cn('size-3', {'size-4': isDetailPage})}
              aria-hidden="true"
            />
            <span>{metadata.readingTime} min read</span>
          </dd>
        </dl>
      </div>

      <p
        className={cn(
          'text-muted-foreground text-sm line-clamp-2 font-ubuntu',
          {
            'line-clamp-none text-base': isDetailPage,
          },
        )}
      >
        {description}
      </p>
    </hgroup>
  )
}

export default PostMetadata
