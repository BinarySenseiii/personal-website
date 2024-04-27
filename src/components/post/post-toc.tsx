import {Post} from '#site/content'
import React from 'react'

const PostTableOfContent = ({toc}: {toc: Post['toc']}) => {
  return (
    <div className="min-h-8 w-full bg-[#f5f5f5] dark:bg-[#131313] p-4 rounded-md">
      <h2 className="font-semibold text-xl">Table of Content</h2>
      <ul role="list" className="space-y-2 mt-2 list-decimal list-inside">
        {toc.map(t => (
          <li key={t.url} className="" role="listitem">
            <a
              href={t.url}
              className="el-focus-styles rounded-sm hover:underline text-ring"
              aria-label={`Go to ${t.title}`}
            >
              {t.title}
            </a>

            {t.items.length > 0 && (
              <ul className="list-disc list-inside">
                {t.items.map(tocItem => (
                  <li key={tocItem.url}>
                    <a
                      href={tocItem.url}
                      className="el-focus-styles rounded-sm hover:underline text-ring"
                      aria-label={`Go to ${tocItem.title}`}
                    >
                      {tocItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostTableOfContent
