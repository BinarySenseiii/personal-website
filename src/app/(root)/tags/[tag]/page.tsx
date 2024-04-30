import {posts} from '#site/content'
import React, {Fragment} from 'react'
import {PostList} from '~/components/post'
import {getAllTags, getPostsByTagSlug, sortedTagsCount} from '~/lib/utils'

interface TagPageProps {
  params: {
    tag: string
  }
}

const TagDetailPage: React.FC<TagPageProps> = ({params}) => {
  const {tag} = params
  const title = tag.split('-').join(' ')

  const displayPosts = getPostsByTagSlug(posts, tag)

  const tags = getAllTags(posts)
  const sortedTags = sortedTagsCount(tags)

  console.log(tags)

  return (
    <Fragment>
      <h2 className="text-xl text-center mt-6 dark:bg-neutral-800/50 bg-slate-100 p-2 rounded-md">
        Tagged [ {title} ]
      </h2>

      <PostList posts={displayPosts} showRss={false} />
    </Fragment>
  )
}

export default TagDetailPage
