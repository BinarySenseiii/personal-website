'use client'
import {Tooltip, TooltipTrigger} from '@radix-ui/react-tooltip'
import {motion} from 'framer-motion'
import {Link} from 'next-view-transitions'
import {usePathname} from 'next/navigation'
import {IoCallOutline, IoHomeOutline} from 'react-icons/io5'
import {TooltipContent} from '../ui/tooltip'
import {Button} from '../ui/button'
import {LuPencilRuler} from 'react-icons/lu'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {FaRegUser} from 'react-icons/fa6'

const t = [
  {
    label: 'Home',
    path: '/',
    icon: <IoHomeOutline />,
  },
  {
    label: 'Blogs',
    path: '/blogs',
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
    label: 'Contact',
    path: '/contact',
    icon: <IoCallOutline />,
  },
]

const Navbar = () => {
  const pathName = usePathname()

  return (
    <nav
      className="fixed bottom-6 left-2/4 -translate-x-2/4  rounded-lg py-2 flex items-center w-fit px-3  dark:bg-gray-950 bg-slate-50 gap-4 "
      role="navigation"
    >
      {t.map(tab => (
        <Tooltip key={tab.label}>
          <TooltipTrigger>
            <Button
              className={`${
                pathName === tab.path
                  ? 'dark:text-black text-white hover:text-white'
                  : 'dark:text-slate-300 text-gray-900'
              }  transition-colors size-9 flex items-center justify-center rounded-full relative hover:opacity-90`}
              role="link"
              variant="ghost"
              asChild
              aria-label={tab.label}
            >
              <Link href={tab.path} className="!p-0">
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
            </Button>
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
