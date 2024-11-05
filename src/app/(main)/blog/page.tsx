import { posts } from '#site/content'
import { PostList } from '~/components/post'
import SearchInput from '~/components/search-input'
import config from '~/config'
import { getSEOTags } from '~/lib/seo'

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

const BlogPage = async ({ searchParams }: { searchParams: { search: string | undefined } }) => {
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(decodeURIComponent(searchParams.search || '')),
  )

  return (
    <div className="!mt-8">
      <div className="flex sm:items-center flex-col sm:flex-row flex-wrap gap-4 justify-between">
        <h1 className="font-medium text-xl text-left"> All Publications </h1>
        <SearchInput />
      </div>

      <PostList posts={filteredPosts} />
    </div>
  )
}

export default BlogPage
