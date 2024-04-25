import Image from 'next/image'
import Link from 'next/link'
import config from '~/config'
import Socials from '../socials'
import ThemeToggle from '../theme-toggle'

const Header = () => {
  return (
    <header className="my-4 gap-4 flex items-center flex-col sm:flex-row justify-between ">
      <Link href="/" role="link" aria-label="Home">
        <div className="flex items-center flex-col sm:flex-row text-center sm:text-left  gap-4">
          <Image
            src="/images/personal.webp"
            alt="Faisal TariQ photo"
            height={100}
            width={100}
            className="rounded-full object-cover size-16"
            priority
          />
          <div className="space-y-0">
            <h1 className="font-bold text-xl">{config.appName}</h1>
            <h2 className="font-normal">{config.appDesignation}</h2>
          </div>
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <Socials />
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
