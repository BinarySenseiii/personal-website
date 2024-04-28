import React from 'react'
import {Button} from '../ui/button'
import Link from 'next/link'
import PostItem from './post-item'
import {Post} from '#site/content'

type PostListProps = {
  posts: Post[]
}

const PostList: React.FC<PostListProps> = ({posts}) => {
  return (
    <>
      <div className="flex mt-8 mb-2 items-center justify-between">
        <h2 className="font-bold  text-xl">Latest Posts...</h2>
        <Button variant="link" className="p-0 h-full" asChild>
          <Link href="/blog" aria-label="view all blog posts">
            View All
          </Link>
        </Button>
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
