import {posts} from '#site/content'
import Image from 'next/image'
import {notFound} from 'next/navigation'
import React from 'react'
import {MDXContent} from '~/components/mdx-content'
import PostMetadata from '~/components/post/post-metadata'
import {workSans} from '~/components/ui/fonts'
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

export default async function BlogDetail({params}: BlogPostParams) {
  const post = await getPostFromParams(params)

  return (
    <article id="main-content" className="w-full">
      <div className="space-y-6 mb-6">
        <div className="relative aspect-video">
          <Image
            src={post.cover}
            alt={post.title}
            placeholder="blur"
            priority
            fill
            className="rounded-md size-full object-cover"
          />
        </div>
        <PostMetadata
          isDetailPage
          title={post.title}
          description={post.description}
          metadata={post.metadata}
          date={post.date}
        />
      </div>
      <main id="main-content" className={cn('prose dark:prose-invert !w-full')}>
        <MDXContent code={post.body} />
      </main>
    </article>
  )
}
