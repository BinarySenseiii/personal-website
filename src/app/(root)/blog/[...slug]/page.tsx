import {posts} from '#site/content'
import Image from 'next/image'
import {notFound} from 'next/navigation'
import Script from 'next/script'
import BackButton from '~/components/back-btn'
import {MDXContent} from '~/components/mdx-content'
import PostMetadata from '~/components/post/post-metadata'
import config from '~/config'
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

  return typeof post === 'undefined' || !post.published ? notFound() : post
}

export async function generateStaticParams(): Promise<
  BlogPostParams['params'][]
> {
  return posts.map(post => ({slug: post.slugAsParams.split('/')}))
}

export async function generateMetadata({params}: BlogPostParams) {
  const post = await getPostFromParams(params)
  console.log('post::: ', post)

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
      <Script
        type="application/ld+json"
        id={`json-ld-article-${post.slug.split('/')}`}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://${config.domainName}/blog/${post.slug.split(
                '/',
              )}`,
            },
            name: post.title,
            headline: post.title,
            description: post.description,
            image: `https://${config.domainName}${post.cover}`,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              '@type': 'Person',
              name: 'Faisal tariq',
            },
          }),
        }}
      />

      <article id="main-content" className="w-full">
        <BackButton>Back to Posts</BackButton>
        <div className="space-y-6 mb-6 mt-2">
          <PostMetadata
            isDetailPage
            title={post.title}
            description={post.description}
            metadata={post.metadata}
            date={post.date}
          />

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
        <div className="flex items-start gap-4">
          <div
            id="main-content"
            className={cn(
              `prose dark:prose-invert mdx-content col-span-2 !w-full`,
            )}
          >
            <MDXContent code={post.body} />
          </div>
          {/* <PostTableOfContent toc={post.toc} /> */}
        </div>
      </article>
    </>
  )
}
