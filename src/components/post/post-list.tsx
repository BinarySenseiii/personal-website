import {Post} from '#site/content'
import React from 'react'
import RssFeed from '../ui/rss'
import PostItem from './post-item'

type PostListProps = {
  posts: Post[]
}

const PostList: React.FC<PostListProps> = ({posts}) => {
  return (
    <>
      <div className="flex mt-8 mb-6 items-center justify-between">
        <h2 className="font-bold font-ubuntu text-lg">Latest Articles</h2>

        <RssFeed />
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
