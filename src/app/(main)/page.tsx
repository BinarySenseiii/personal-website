import {posts} from '#site/content'
import AboutSection from '~/components/about-section'
import {PostList} from '~/components/post'
import {ProjectList, projects} from '~/components/project'
import Skills from '~/components/skills'
import {sortPosts} from '~/lib/utils'
import ContactUs from '../../components/contact-us'

const HomePage = () => {
  const sortedPosts = sortPosts(posts.filter(post => post.published))
  return (
    <div className="!mt-8 space-y-14">
      <AboutSection />
      <Skills />
      <ProjectList projects={projects.slice(0, 4)} metadata />
      <PostList posts={sortedPosts.slice(0, 3)} showRss />
      <ContactUs />
    </div>
  )
}

export default HomePage
