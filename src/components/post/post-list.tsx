import React from 'react'
import {Button} from '../ui/button'
import Link from 'next/link'
import PostItem from './post-item'
import {Post} from '#site/content'
import {Rss} from 'lucide-react'

type PostListProps = {
  posts: Post[]
}

const PostList: React.FC<PostListProps> = ({posts}) => {
  return (
    <>
      <div className="flex mt-8 mb-6 items-center justify-between">
        <h2 className="font-bold font-ubuntu  text-lg">Latest Articles</h2>

        <Link
          href="/feed.xml"
          aria-label="Rss feed"
          className="!font-ubuntu flex items-center gap-2 text-sm el-focus-styles"
        >
          <div className="bg-[#ff9100] rounded-sm text-black p-1">
            <Rss className="size-4" />
          </div>
          RSS Feed
        </Link>
      </div>
      <ol className="space-y-4" role="list">
        {posts.splice(0, 3).map(post => (
          <PostItem key={post.slug} {...post} />
        ))}
      </ol>
    </>
  )
}
export default PostList
