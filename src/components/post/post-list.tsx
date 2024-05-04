import {Post} from '#site/content'
import React from 'react'
import {CustomLink} from '../mdx'
import PostItem from './post-item'
import {Frown} from 'lucide-react'
import {typo} from '../ui/typograpghy'

type PostListProps = {
  posts: Post[]
  showRss?: boolean
}

const PostList: React.FC<PostListProps> = ({posts, showRss}) => {
  return (
    <section aria-label="Articles" className="space-y-6 mt-5" id="main-content">
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
          <li role="listitem" className=" h-60 flex items-center justify-center">
            <div className="space-y-3  flex flex-col items-center">
              <Frown />
              <h2 className="text-lg">No Articles found</h2>
            </div>
          </li>
        )}
      </ol>
    </section>
  )
}
export default PostList
