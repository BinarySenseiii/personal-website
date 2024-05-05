import {Post, posts} from '#site/content'
import {CustomLink} from '~/components/mdx'
import {PostList} from '~/components/post'
import {Tag} from '~/components/tags'
import config from '~/config'
import {getSEOTags} from '~/lib/seo'
import {getAllTags, sortedTagsCount} from '~/lib/utils'

export const metadata: ReturnType<typeof getSEOTags> = getSEOTags({
  title: `All Tags - ${config.appName}`,
  canonicalUrlRelative: '/tags',
})

type OrganizedPost = Record<string, Post[]>

const TagsPage = () => {
  const tags = getAllTags(posts)
  const sortedTags = sortedTagsCount(tags)

  function organizePostsByTag(posts: Post[]): OrganizedPost {
    const organizedPosts: {[key: string]: Post[]} = {}

    posts.forEach(post => {
      post.tags.forEach(tag => {
        if (!organizedPosts[tag]) {
          organizedPosts[tag] = []
        }
        organizedPosts[tag].push(post)
      })
    })

    const sortedKeys = Object.keys(organizedPosts).sort()
    const result: OrganizedPost = {}

    sortedKeys.forEach(key => {
      result[key] = organizedPosts[key]
    })

    return result
  }

  const result: OrganizedPost = organizePostsByTag(posts)

  return (
    <div className="grid md:grid-cols-3 gap-4 !mt-8 items-start">
      <main id="main-content" className="md:col-span-2 order-2 md:order-1">
        <h3 className="mb-4 text-lg font-medium">Posts by Tag (A-Z)</h3>

        {Object.keys(result).map(tag => (
          <section
            key={tag}
            aria-labelledby={`posts-by-tag ${tag}-title`}
            className="space-y-2 border-b last:border-none pb-4 mb-4"
          >
            <h3 id={`${tag}-title`} className="text-base font-medium capitalize">
              {tag}
            </h3>

            <ul role="list" className="space-y-1 sm:list-disc sm:list-inside">
              {result[tag].map((post, index) => (
                <li key={index} className="sm:ps-2">
                  <CustomLink href={`/blog/${post.slugAsParams}`}>
                    {post.title}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      <div className="text-xl order-1 md:order-2 space-y-1 bg-neutral-800/50  p-2 rounded-md sm:sticky top-4">
        <h2 className="text-center uppercase">All Tags</h2>
        <ul role="list" className="flex flex-wrap gap-2 pb-1 justify-center">
          {sortedTags.map((tag, index) => (
            <Tag key={index} tag={tag} count={tags[tag]} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TagsPage
