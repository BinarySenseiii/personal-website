import {posts} from '#site/content'
import React from 'react'
import {PostList, PostSearch} from '~/components/post'
import config from '~/config'
import {getSEOTags} from '~/lib/seo'

export const metadata: ReturnType<typeof getSEOTags> = getSEOTags({
  title: `All Blogs - ${config.appName}`,
  description:
    "Welcome to my digital garden where I share what I'm learning about shipping great products, becoming a better developer and growing a career in tech.",
  canonicalUrlRelative: '/blogs',
  keywords: [
    'JavaScript',
    'TypeScript',
    'React',
    'Testing',
    'Career',
    'Software Development',
    'Faisal tariq Blog',
  ],
})

const BlogPage = async ({
  searchParams,
}: {
  searchParams: {query: string | undefined}
}) => {
  const filteredPosts = posts.filter(post =>
    post.title
      .toLowerCase()
      .includes(decodeURIComponent(searchParams.query || '')),
  )

  return (
    <div className="!mt-8 space-y-6">
      <div className="space-y-3">
        <div className="flex sm:items-center flex-col sm:flex-row flex-wrap gap-4 justify-between">
          <h1 className="font-medium text-xl text-left"> All Publications </h1>
          <PostSearch />
        </div>
      </div>

      <PostList posts={filteredPosts} />
    </div>
  )
}

export default BlogPage
