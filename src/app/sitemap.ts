import { posts } from '#site/content'
import { MetadataRoute } from 'next'
import { BasePath } from '~/lib/utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = posts.map(post => ({
    url: BasePath(`/blog/${post.slugAsParams.split('/')}`),
    lastModified: post.date,
  }))

  return [
    {
      url: BasePath(''),
      lastModified: new Date(),
    },

    {
      url: BasePath('/blog'),
      lastModified: new Date(),
    },
    {
      url: BasePath('/projects'),
      lastModified: new Date(),
    },
    {
      url: BasePath('/about'),
      lastModified: new Date(),
    },

    ...blogPosts,
  ]
}
