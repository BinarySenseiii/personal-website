import {posts} from '#site/content'
import RSS from 'rss'
import config from '~/config'
import {BasePath} from '~/lib/utils'

export async function GET() {
  const feed = new RSS({
    title: `${config.appName} Personal Website`,
    generator: 'RSS for Personal Portfolio',
    feed_url: BasePath('/feed.xml'),
    site_url: BasePath('/'),
    managingEditor: `${config.social.email} (${config.appName})`,
    webMaster: `${config.social.email} (${config.appName})`,
    copyright: `Copyright ${new Date().getFullYear().toString()}, ${
      config.appName
    }`,
    language: 'en-US',
    pubDate: new Date().toUTCString(),
    ttl: 60,
  })

  posts.forEach(post => {
    feed.item({
      title: post.title,
      url: BasePath(`/blog/${post.slugAsParams.split('/')}`),
      date: post.date,
      description: post.description,
      author: 'Faisal Tariq',
    })
  })

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
