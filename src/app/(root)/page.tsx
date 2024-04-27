import React from 'react'
import {AboutSection} from '~/components/sections/home'
import {posts} from '#site/content'

const HomePage = () => {
  const displayPosts = posts
  console.log('displayPosts::: ', displayPosts)
  return (
    <main id="#main-content">
      <AboutSection />

      <h2 className="font-bold mt-8 mb-4 text-2xl uppercase">Blogs</h2>
      {displayPosts.length > 0 ? (
        <ul>
          {displayPosts.map(post => {
            const {description, slug, date, title, slugAsParams, metadata} =
              post
            console.log('metadata::: ', metadata)
            return (
              <article key={slug} className="space-y-2">
                <h2 className="font-bold  text-xl uppercase">{title}</h2>
                <p className="text-muted-foreground text-sm">{description}</p>
                <p>{date}</p>
                <p>
                  <strong>Reading time: {metadata.readingTime} minutes</strong>
                </p>
                <p>
                  <strong>Word Count: {metadata.wordCount} Words</strong>
                </p>
              </article>
            )
          })}
        </ul>
      ) : (
        'No posts found'
      )}
    </main>
  )
}

export default HomePage
