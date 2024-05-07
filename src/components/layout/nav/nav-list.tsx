import { Button } from '~/components/ui/button'
import { navData } from './_nav-mock'
import NavItem from './nav-item'
import { Dispatch, SetStateAction } from 'react'

interface NavProps {
  setOpen?: Dispatch<SetStateAction<boolean>>
}

const NavList: React.FC<NavProps> = ({ setOpen }) => {
  return (
    <ul
      role="list"
      className="flex mt-6 sm:mt-0   flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
    >
      {navData.map(nav => (
        <NavItem key={nav.id} setOpen={setOpen} {...nav} />
      ))}
      <li className="absolute sm:static left-0 w-full px-4 sm:px-0 bottom-4">
        <Button asChild size="xs" className="w-full sm:w-max">
          <a
            aria-label="download resume"
            target="_blank"
            href="/resume.pdf"
            download
            className="font-semibold flex items-center gap-1"
          >
            <span className="inline sm:hidden"> Download </span>
            <span className="hidden sm:inline"> Get </span> Resume
          </a>
        </Button>
      </li>
    </ul>
  )
}

export default NavList
