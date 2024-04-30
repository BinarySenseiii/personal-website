import React from 'react'
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

const BlogPage = () => {
  return <div>BlogPage</div>
}

export default BlogPage
