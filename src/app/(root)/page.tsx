import {posts} from '#site/content'
import {PostList} from '~/components/post'
import {AboutSection} from '~/components/sections/home'
import Skills from '~/components/skills'
import {sortPosts} from '~/lib/utils'

const HomePage = () => {
  const sortedPosts = sortPosts(posts.filter(post => post.published))
  return (
    <>
      <AboutSection />
      <main id="main-content">
        <PostList posts={sortedPosts} showRss />
      </main>
      <Skills />
    </>
  )
}

export default HomePage
