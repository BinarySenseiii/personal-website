import {Linkedin} from 'lucide-react'
import {FaInstagram} from 'react-icons/fa6'
import {FiGithub} from 'react-icons/fi'
import {TbBrandDiscord} from 'react-icons/tb'
import config from '~/config'
import {Button} from './ui/button'
import {Tooltip, TooltipContent, TooltipTrigger} from './ui/tooltip'

const socialsIcons = [
  {
    id: 1,
    label: 'Github',
    icon: <FiGithub className="size-[1.2rem]" />,
    href: config.social.github,
  },
  {
    id: 2,
    label: 'Linkedin',
    icon: <Linkedin className="size-[1.2rem]" />,
    href: config.social.linkedin,
  },
  {
    id: 3,
    label: 'Instagram',
    icon: <FaInstagram className="size-[1.2rem]" />,
    href: config.social.instagram,
  },
  {
    id: 4,
    label: 'Discord',
    icon: <TbBrandDiscord className="size-[1.2rem]" />,
    href: config.social.discord,
  },
]
const Socials = () => {
  return (
    <ul className="flex items-center gap-2">
      {socialsIcons.map(social => (
        <li key={social.id}>
          <Tooltip>
            <TooltipTrigger tabIndex={-1}>
              <Button variant="outline" size="icon" asChild>
                <a href={social.href} target="_blank" aria-label={social.label}>
                  {social.icon}
                </a>
              </Button>
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
