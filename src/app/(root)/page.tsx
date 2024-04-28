import {posts} from '#site/content'
import {PostList} from '~/components/post'
import {AboutSection} from '~/components/sections/home'
import Skills from '~/components/skills'
import {sortPosts} from '~/lib/utils'

const HomePage = () => {
  const sortedPosts = sortPosts(posts.filter(post => post.published))
  return (
    <main id="#main-content">
      <AboutSection />
      <PostList posts={sortedPosts} />
      <Skills />
    </main>
  )
}

export default HomePage
