import {Post} from '#site/content'
import React from 'react'
import RssFeed from '../ui/rss'
import PostItem from './post-item'
import {CustomLink} from '../mdx'

type PostListProps = {
  posts: Post[]
  showRss?: boolean
}

const PostList: React.FC<PostListProps> = ({posts, showRss}) => {
  return (
    <section aria-label="Articles" className="space-y-4 mt-5" id="main-content">
      {showRss && (
        <div className="flex items-center justify-between">
          <h2 className="font-bold font-ubuntu text-lg">Recent Publications</h2>
          <CustomLink href="/blog" aria-label="view all blogs">
            View All
          </CustomLink>
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
