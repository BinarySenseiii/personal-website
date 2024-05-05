import {Post} from '#site/content'
import React from 'react'
import {CustomLink} from '../mdx'
import PostItem from './post-item'
import {Frown} from 'lucide-react'
import {typo} from '../ui/typograpghy'
import ContentNotFound from '../ui/content-not-found'

type PostListProps = {
  posts: Post[]
  showRss?: boolean
}

const PostList: React.FC<PostListProps> = ({posts, showRss}) => {
  return (
    <section aria-label="articles" className="space-y-6 mt-5">
      {showRss && (
        <div className="flex items-center justify-between">
          <h2 className={typo({variant: 'h2'})}>Most recent articles</h2>
          <CustomLink href="/blog" aria-label="view all blogs">
            View All
          </CustomLink>
        </div>
      )}
      <ol className="space-y-3" role="list">
        {posts.length > 0 ? (
          posts.splice(0, 3).map(post => <PostItem key={post.slug} {...post} />)
        ) : (
          <ContentNotFound text="No Articles Found" />
        )}
      </ol>
    </section>
  )
}
export default PostList
