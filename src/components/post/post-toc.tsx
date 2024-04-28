import {Post} from '#site/content'
import React from 'react'

const PostTableOfContent = ({toc}: {toc: Post['toc']}) => {
  return (
    <aside className=" sticky top-4 w-max">
      <h2 className="font-semibold text-sm font-ubuntu">ON THIS PAGE</h2>
      <ul role="list" className="space-y-0 mt-2 ">
        {toc.map(t => (
          <li key={t.url} className="text-sm" role="listitem">
            <a
              href={t.url}
              className="el-focus-styles rounded-sm hover:underline text-ring whitespace-nowrap"
              aria-label={`Go to ${t.title}`}
            >
              {t.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default PostTableOfContent
