import {Post} from '#site/content'
import React from 'react'

import {Link} from 'next-view-transitions'
import {Card, CardContent} from '~/components/ui/card'
import PostMetadata from './post-metadata'

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
          href={`/blog/${slugAsParams}`}
          className="rounded-md el-focus-styles inline-block group"
        >
          <PostMetadata
            title={title}
            description={description}
            metadata={metadata}
            date={date}
          />
        </Link>

        <CardContent className="p-0"></CardContent>
      </Card>
    </li>
  )
}

export default PostItem
