import {defineConfig, defineCollection, s} from 'velite'

const computedFields = <T extends {slug: string}>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split('/').slice(1).join('/'),
})

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.path(),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      body: s.mdx(),
      toc: s.toc(),
      metadata: s.metadata(),
    })
    .transform(computedFields),
})

export default defineConfig({
  root: 'src/content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: {posts},
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
})
