import {Post} from '#site/content'
import {Calendar, Timer} from 'lucide-react'
import React from 'react'

import {Link} from 'next-view-transitions'
import {Card, CardContent} from '~/components/ui/card'
import {formatDate} from '~/lib/utils'
import {workSans} from '../ui/fonts'

const PostItem: React.FC<Post> = ({
  slug,
  date,
  title,
  description,
  metadata,
  slugAsParams,
}) => {
  return (
    <li key={slug} role="listitem">
      <Card>
        <Link
          href={`/blogs/${slugAsParams}`}
          className="rounded-md el-focus-styles inline-block group"
        >
          <hgroup className="p-3 space-y-2">
            <h3
              className={`font-semibold text-lg transition-colors group-hover:text-ring group-hover:underline`}
            >
              {title}
            </h3>

            <div className="flex items-center gap-2">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="size-3" aria-hidden="true" />
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
                <dd className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Timer className="size-3" aria-hidden="true" />
                  <span>{metadata.readingTime} min read</span>
                </dd>
              </dl>
            </div>

            <p
              className={`text-muted-foreground text-sm line-clamp-2 ${workSans.className}`}
            >
              {description}
            </p>
          </hgroup>
        </Link>

        <CardContent className="p-0"></CardContent>
      </Card>
    </li>
  )
}

export default PostItem
