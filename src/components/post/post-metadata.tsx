import {Post} from '#site/content'
import {Calendar, Timer} from 'lucide-react'
import React from 'react'
import {cn, formatDate} from '~/lib/utils'
import PostViews from './post-views'

interface PostMetaProps {
  title: string
  date: string
  metadata: Post['metadata']
  isDetailPage?: boolean
  slug?: string
}
const PostMetadata: React.FC<PostMetaProps> = ({
  title,
  date,
  metadata,
  isDetailPage,
  slug,
}) => {
  return (
    <hgroup className={cn('p-0 space-y-2', {'p-0': isDetailPage})}>
      <h3
        className={cn(
          `font-ubuntu text-lg transition-colors group-hover:text-ring group-hover:underline`,
          {
            'text-xl font-semibold': isDetailPage,
          },
        )}
      >
        {title}
      </h3>

      <div
        className={cn('flex items-center gap-2', {
          'justify-between flex-wrap': isDetailPage,
        })}
      >
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd
            className={cn(
              'flex items-center gap-1 text-xs text-muted-foreground',
              {
                'text-sm gap-2 block': isDetailPage,
              },
            )}
          >
            {isDetailPage ? (
              <span>Published on </span>
            ) : (
              <Calendar
                className={cn('size-3', {'size-4': isDetailPage})}
                aria-hidden="true"
              />
            )}
            <time
              dateTime={date}
              aria-label={`Published on ${formatDate(date)}`}
            >
              {formatDate(date)}
            </time>
          </dd>
        </dl>

        <div className="flex items-center gap-3">
          {isDetailPage && <PostViews slug={slug!} />}
          <dl>
            <dt className="sr-only">Reading time</dt>
            <dd
              className={cn(
                'flex items-center gap-1 text-xs text-muted-foreground',
                {
                  'text-sm gap-1': isDetailPage,
                },
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
      </div>
    </hgroup>
  )
}

export default PostMetadata
