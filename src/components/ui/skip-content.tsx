'use client'
import {usePathname} from 'next/navigation'
import {useEffect, useRef} from 'react'

const SkipContent = () => {
  const pathname = usePathname()
  const isTagsPage = pathname.includes('tag')
  const skipLinkRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (skipLinkRef.current) {
      skipLinkRef.current.focus()
    }
  }, [pathname])

  return (
    <>
      <span className="sr-only" ref={skipLinkRef} tabIndex={0}></span>
      <a
        aria-label={`Skip to ${isTagsPage ? 'navigation' : 'main content'}`}
        role="link"
        href={isTagsPage ? '#main-nav' : '#main-content'}
        className="bg-background p-3 border inset-x-0 fixed top-1 text-center z-50 el-focus-styles opacity-0 pointer-events-none focus-visible:opacity-100 focus-visible:pointer-events-auto focus-visible:underline container rounded-sm text-ring transition-opacity duration-500 ease-in-out"
      >
        Skip to {isTagsPage ? 'navigation' : 'main content'}
      </a>
    </>
  )
}

export default SkipContent
