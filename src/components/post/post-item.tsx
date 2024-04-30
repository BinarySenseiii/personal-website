import {Post} from '#site/content'
import React from 'react'

import Link from 'next/link'
import {Card, CardContent} from '~/components/ui/card'
import PostMetadata from './post-metadata'
import Tags from '../tags'

const PostItem: React.FC<Post> = ({
  slug,
  date,
  title,
  description,
  metadata,
  slugAsParams,
  tags,
}) => {
  return (
    <li key={slug} role="listitem">
      <Card className="p-0 border-0 border-b shadow-none rounded-none pb-4">
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

        <CardContent className="p-0">
          <Tags tags={tags} />
        </CardContent>
      </Card>
    </li>
  )
}

export default PostItem
