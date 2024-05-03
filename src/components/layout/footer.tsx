import config from '~/config'
import {CustomLink} from '../mdx'

const Footer = () => {
  return (
    <footer className="py-4 !mt-auto flex items-center flex-col justify-center px-4 bg-neutral-900 rounded-md border  shadow-sm">
      <div className="flex items-center justify-center sm:justify-between gap-2 w-full flex-wrap text-center">
        <span>&copy; {new Date().getFullYear()} Design & Developed by ❤️</span>

        <ul role="list" className="flex items-center gap-2">
          <li role="listitem">
            <CustomLink aria-label="visit rss feed" href={`https://${config.domainName}/feed.xml`}>
              RSS Feed
            </CustomLink>
          </li>
          <span> / </span>
          <li role="listitem">
            <CustomLink href="/privacy">Privacy Policy</CustomLink>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
