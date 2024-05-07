'use client'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import { NavType } from './_nav-mock'
import { usePathname } from 'next/navigation'
import { cn } from '~/lib/utils'
import { motion } from 'framer-motion'

const NavItem: React.FC<NavType[0] & { setOpen?: Dispatch<SetStateAction<boolean>> }> = ({
  label,
  path,
  setOpen,
}) => {
  const pathname = usePathname()

  const onClickHandler = () => {
    if (typeof setOpen === 'function') {
      setOpen(false)
    }
  }

  return (
    <li
      role="listitem"
      className={cn(
        'relative h-7 px-2 flex items-center  sm:px-0 font-medium rounded-md transition-colors duration-300 ',
        {
          'bg-ring sm:text-ring sm:bg-transparent': pathname === path,
        },
      )}
      onClick={onClickHandler}
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
          transition={{ type: 'spring', duration: 0.4, bounce: 0, delay: 0.1 }}
          className="hidden sm:flex absolute left-0 top-1  size-full h-full w-full items-end justify-center"
        >
          <span className="z-0 h-[3px] w-full rounded-t-full bg-ring"></span>
        </motion.span>
      )}
    </li>
  )
}

export default NavItem
