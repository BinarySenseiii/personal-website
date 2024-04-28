'use client'
import {Tooltip, TooltipTrigger} from '@radix-ui/react-tooltip'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {FaRegUser} from 'react-icons/fa6'
import {FiEdit} from 'react-icons/fi'
import {IoHomeOutline} from 'react-icons/io5'
import {LuPencilRuler} from 'react-icons/lu'
import {cn} from '~/lib/utils'
import {TooltipContent} from '../ui/tooltip'

const tabs = [
  {
    label: 'Home',
    path: '/',
    icon: <IoHomeOutline />,
  },
  {
    label: 'Blog',
    path: '/blog',
    icon: <LuPencilRuler />,
  },
  {
    label: 'Projects',
    path: '/projects',
    icon: <IoHomeOutline />,
  },
  {
    label: 'About',
    path: '/about',
    icon: <FaRegUser />,
  },

  {
    label: 'Guests',
    path: '/guests',
    icon: <FiEdit />,
  },
]

const Navbar = () => {
  const pathName = usePathname()

  return (
    <nav
      className="fixed bottom-2 z-50 left-2/4 -translate-x-2/4  rounded-lg py-2 flex items-center w-fit px-3  dark:bg-[#0e0e0e] bg-[#f9f9f9] gap-4 "
      role="navigation"
    >
      {tabs.map(tab => (
        <Tooltip key={tab.label}>
          <TooltipTrigger asChild>
            <div className="relative">
              <Link
                href={tab.path}
                className={cn(
                  '!p-0 link-outline rounded-full relative hover:opacity-90 border-0 dark:text-slate-300 text-gray-900',
                  {
                    'dark:text-black text-white hover:text-white':
                      pathName === tab.path,
                  },
                )}
                aria-label={tab.label}
              >
                <span className="relative z-10 inline-block !text-lg">
                  {tab.icon}
                </span>

                {pathName === tab.path && (
                  <motion.span
                    layoutId="pill-tab"
                    transition={{type: 'spring', duration: 0.5}}
                    className="absolute inset-0 z-0 dark:bg-white bg-black  rounded-full"
                  ></motion.span>
                )}
                <span className="sr-only">{tab.label}</span>
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <span>{tab.label}</span>
          </TooltipContent>
        </Tooltip>
      ))}
    </nav>
  )
}

export default Navbar
