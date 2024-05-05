import {posts} from '#site/content'
import {slug} from 'github-slugger'
import React, {Fragment} from 'react'
import {CustomLink} from '~/components/mdx'
import {PostList} from '~/components/post'
import SkipContent from '~/components/ui/skip-content'
import config from '~/config'
import {getSEOTags} from '~/lib/seo'
import {getAllTags, getPostsByTagSlug} from '~/lib/utils'

interface TagPageProps {
  params: {
    tag: string
  }
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<ReturnType<typeof getSEOTags>> {
  const {tag} = params

  return getSEOTags({
    title: `Tagged “${tag}” - ${config.appName}`,
    description: `Posts on the topic of ${tag}`,
    canonicalUrlRelative: `/tags/${slug(tag)}`,
  })
}

export const generateStaticParams = () => {
  const tags = getAllTags(posts)
  const paths = Object.keys(tags).map(tag => ({tag: slug(tag)}))
  return paths
}

const TagDetailPage: React.FC<TagPageProps> = ({params}) => {
  const {tag} = params
  const title = tag.split('-').join(' ')

  const displayPosts = getPostsByTagSlug(posts, tag)

  return (
    <div className="!mt-8">
      <h2 className="text-xl text-center bg-neutral-800/50  p-2 rounded-md">
        Tagged [ {title} ]
      </h2>

      <PostList posts={displayPosts} showRss={false} />

      <h3 className="mt-4 text-muted-foreground" id="main-nav">
        Alternatively, <CustomLink href="/tags">choose from all tags</CustomLink> or{' '}
        <CustomLink href="/blog">view all posts</CustomLink>
      </h3>
    </div>
  )
}

export default TagDetailPage
