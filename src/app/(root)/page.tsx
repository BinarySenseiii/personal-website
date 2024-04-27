import React from 'react'
import {AboutSection} from '~/components/sections/home'
import {posts} from '#site/content'
import {PostItem} from '~/components/post'
import {sortPosts} from '~/lib/utils'

const HomePage = () => {
  const sortedPosts = sortPosts(posts.filter(post => post.published))
  return (
    <main id="#main-content">
      <AboutSection />

      <h2 className="font-bold mt-8 mb-2 text-xl">Latest Posts...</h2>
      {sortedPosts.length > 0 ? (
        <ol className="space-y-4" role="list">
          {sortedPosts.map(post => (
            <PostItem key={post.slug} {...post} />
          ))}
        </ol>
      ) : (
        'No posts found'
      )}
    </main>
  )
}

export default HomePage
