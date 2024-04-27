import {posts} from '#site/content'
import {MoveLeft} from 'lucide-react'
import {Link} from 'next-view-transitions'
import Image from 'next/image'
import {notFound} from 'next/navigation'
import BackButton from '~/components/back-btn'
import {MDXContent} from '~/components/mdx-content'
import PostMetadata from '~/components/post/post-metadata'
import PostTableOfContent from '~/components/post/post-toc'
import {Button} from '~/components/ui/button'
import {dankMono} from '~/components/ui/fonts'
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
          />
        </div>
        <PostTableOfContent toc={post.toc} />
      </div>
      <main
        id="main-content"
        className={cn(
          `prose dark:prose-invert mdx-content !w-full [&>figure>pre]:font-dank`,
        )}
      >
        <MDXContent code={post.body} />
      </main>
    </article>
  )
}
