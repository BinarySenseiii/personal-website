import {Post} from '#site/content'
import React from 'react'

import Link from 'next/link'
import {Card, CardContent} from '~/components/ui/card'
import PostMetadata from './post-metadata'
import Tags from '../tags'

const PostItem: React.FC<Post> = ({
  date,
  title,
  description,
  metadata,
  slugAsParams,
  tags,
}) => {
  return (
    <li role="listitem" className="last:!border-b-0 border-b pb-4 ">
      <Card className="p-0 border-0  shadow-none rounded-none">
        <Link
          href={`/blog/${slugAsParams}`}
          className="rounded-md el-focus-styles inline-block group w-full"
        >
          <PostMetadata title={title} metadata={metadata} date={date} />
        </Link>

        <p
          className={
            'text-muted-foreground text-sm line-clamp-2 mt-1 mb-2 font-ubuntu'
          }
        >
          {description}
        </p>

        <CardContent className="p-0">
          <Tags tags={tags} />
        </CardContent>
      </Card>
    </li>
  )
}

export default PostItem
