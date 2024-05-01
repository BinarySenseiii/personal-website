'use client'

import {usePathname} from 'next/navigation'

const SkipContent = () => {
  const pathname = usePathname()
  const isTagsPage = pathname.includes('tag')

  return (
    <a
      href={isTagsPage ? '#main-nav' : '#main-content'}
      className="dark:bg-black bg-white p-3 border  inset-x-0 fixed top-1 text-center z-10 el-focus-styles opacity-0 pointer-events-none focus-visible:opacity-100 focus-visible:pointer-events-auto focus-visible:underline container rounded-sm text-ring transition-opacity duration-500 ease-in-out"
      tabIndex={0}
    >
      Skip to {isTagsPage ? 'navigation' : 'main content'}
    </a>
  )
}
export default SkipContent
