import {posts} from '#site/content'
import Image from 'next/image'
import {notFound} from 'next/navigation'
import BackButton from '~/components/back-btn'
import {MDXContent} from '~/components/mdx'
import {
  JsonSchemaLD,
  PostComments,
  PostMetadata,
  TableOfContent,
} from '~/components/post'
import Tags from '~/components/tags'
import {getSEOTags} from '~/lib/seo'
import {cn} from '~/lib/utils'
import '~/styles/mdx.css'

interface BlogPostParams {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: BlogPostParams['params']) {
  const slug = params?.slug?.join('/')
  const post = posts.find(post => post.slugAsParams === slug)

  if (post === undefined || !post.published) {
    return notFound()
  }

  return post
}

export async function generateStaticParams(): Promise<
  BlogPostParams['params'][]
> {
  return posts.map(post => ({slug: post.slugAsParams.split('/')}))
}

export async function generateMetadata({params}: BlogPostParams) {
  const post = await getPostFromParams(params)

  return getSEOTags({
    title: post.title,
    description: post.description,
    canonicalUrlRelative: `/blog/${post.slugAsParams.split('/')}`,
    extraTags: {
      openGraph: {
        title: post.title,
        description: post.description,
        url: `/blog/${post.slug.split('/')}`,
        images: [
          {
            url: post.cover.src,
            width: 1200,
            height: 660,
          },
        ],
        locale: 'en_US',
        type: 'website',
      },
    },
  })
}

export default async function BlogDetail({params}: BlogPostParams) {
  const post = await getPostFromParams(params)

  return (
    <>
      {/* SCHEMA JSON-LD MARKUP FOR GOOGLE */}
      <JsonSchemaLD post={post} />
      <article className="w-full">
        <BackButton>Back to Posts</BackButton>
        <div className="space-y-6 mb-6 mt-2">
          <PostMetadata
            isDetailPage
            title={post.title}
            metadata={post.metadata}
            date={post.date}
            slug={post.slugAsParams}
          />

          <TableOfContent toc={post.toc} />

          <div className="relative aspect-video">
            <Image
              src={post.cover}
              alt={post.title}
              placeholder="blur"
              priority
              fill
              className="rounded-md size-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <main
          id="main-content"
          className={cn(`prose-invert mdx-content  !w-full`)}
        >
          <MDXContent code={post.body} />
        </main>

        <div className="my-4 space-y-1">
          <hr className="!mb-4" />
          <h3 className="font-bold">Tags</h3>
          <Tags tags={post.tags} />
        </div>

        <PostComments />
      </article>
    </>
  )
}
