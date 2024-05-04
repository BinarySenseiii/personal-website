import {ClassValue} from 'clsx'
import {Linkedin} from 'lucide-react'
import {FaInstagram} from 'react-icons/fa6'
import {FiGithub} from 'react-icons/fi'
import {TbBrandDiscord} from 'react-icons/tb'
import config from '~/config'
import {cn} from '~/lib/utils'
import {Tooltip, TooltipContent, TooltipTrigger} from './ui/tooltip'

const socialsIcons = [
  {
    id: 1,
    label: 'Github',
    icon: <FiGithub className="size-[1.2rem]" />,
    href: config.social.github,
    className: 'hover:bg-gray-400 hover:text-black' as ClassValue,
  },
  {
    id: 2,
    label: 'Linkedin',
    icon: <Linkedin className="size-[1.2rem]" />,
    href: config.social.linkedin,
    className: 'hover:bg-blue-700 hover:text-white' as ClassValue,
  },
  {
    id: 3,
    label: 'Instagram',
    icon: <FaInstagram className="size-[1.2rem]" />,
    href: config.social.instagram,
    className:
      ' hover:bg-gradient-to-r from-rose-400 to-red-500 hover:text-white' as ClassValue,
  },
  {
    id: 4,
    label: 'Discord',
    icon: <TbBrandDiscord className="size-[1.2rem]" />,
    href: config.social.discord,
    className: 'hover:bg-blue-400 hover:text-white' as ClassValue,
  },
]
const Socials = () => {
  return (
    <ul className="flex items-center gap-2">
      {socialsIcons.map(social => (
        <li key={social.id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={social.href}
                className={cn(
                  'border border-input bg-background  hover:text-accent-foreground size-9  flex items-center justify-center rounded-md  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-ring focus-visible:ring-offset-2',
                  social.className,
                )}
                aria-label={social.label}
                target="_blank"
                rel="external"
              >
                {social.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <span>{social.label}</span>
            </TooltipContent>
          </Tooltip>
        </li>
      ))}
    </ul>
  )
}

export default Socials
