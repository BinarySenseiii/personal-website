import {posts} from '#site/content'
import {PostList} from '~/components/post'
import {AboutSection} from '~/components/sections/home'
import {sortPosts} from '~/lib/utils'

const HomePage = () => {
  const sortedPosts = sortPosts(posts.filter(post => post.published))
  return (
    <main id="#main-content">
      <AboutSection />
      <PostList posts={sortedPosts} />
    </main>
  )
}

export default HomePage
