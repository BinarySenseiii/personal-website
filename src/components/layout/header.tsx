import site from '~/config/site'
import Socials from '../socials'
import UserInfo from '../user-info'

const Header = () => {
  return (
    <header className="space-y-5">
      <div className="gap-4 flex items-center flex-col sm:flex-row justify-between ">
        <UserInfo />
        <Socials />
      </div>

      <p className="text-muted-foreground  text-center sm:text-left">
        {site.appDescription}
      </p>
    </header>
  )
}

export default Header
