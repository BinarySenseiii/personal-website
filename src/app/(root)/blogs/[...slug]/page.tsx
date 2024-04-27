import {posts} from '#site/content'
import {notFound} from 'next/navigation'
import React from 'react'
import {MDXContent} from '~/components/mdx-content'
import {workSans} from '~/components/ui/fonts'

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
    <article>
      {post.title}
      <div className={workSans.className}>
        <MDXContent code={post.body} />
      </div>
    </article>
  )
}
