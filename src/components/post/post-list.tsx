import {Post} from '#site/content'
import React from 'react'
import RssFeed from '../ui/rss'
import PostItem from './post-item'

type PostListProps = {
  posts: Post[]
  showRss?: boolean
}

const PostList: React.FC<PostListProps> = ({posts, showRss}) => {
  return (
    <section aria-label="Articles" className="space-y-4 mt-5">
      {showRss && (
        <div className="flex items-center justify-between">
          <h2 className="font-bold font-ubuntu text-lg">Latest Articles</h2>
          <RssFeed />
        </div>
      )}
      <ol className="space-y-4" role="list">
        {posts.splice(0, 3).map(post => (
          <PostItem key={post.slug} {...post} />
        ))}
      </ol>
    </section>
  )
}
export default PostList
