'use client'
import Link from 'next/link'
import React from 'react'
import {NavType} from './_nav-mock'
import {usePathname} from 'next/navigation'
import {cn} from '~/lib/utils'
import {motion} from 'framer-motion'

const NavItem: React.FC<NavType[0]> = ({label, path, id}) => {
  const pathname = usePathname()

  return (
    <li
      role="listitem"
      className={cn('relative rounded-md transition-colors duration-300 ', {
        'text-ring': pathname === path,
      })}
    >
      <Link
        href={path}
        role="link"
        aria-label={label}
        className="relative z-10 el-focus-styles rounded-sm"
      >
        {label}
      </Link>

      {pathname === path && (
        <motion.span
          layoutId="pill-tab"
          transition={{type: 'spring', duration: 0.4, bounce: 0, delay: 0.1}}
          className="absolute left-0 top-1 flex size-full h-full w-full items-end justify-center"
        >
          <span className="z-0 h-[3px] w-full rounded-t-full bg-ring"></span>
        </motion.span>
      )}
    </li>
  )
}

export default NavItem
