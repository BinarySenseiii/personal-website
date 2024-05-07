import Logo from './logo'
import MobileNav from './mobile-nav'
import NavList from './nav-list'

const Navbar = () => {
  return (
    <nav className="mt-2 mb-4 gap-4 flex items-center justify-between" role="navigation">
      <Logo />

      <div className="hidden sm:block">
        <NavList />
      </div>

      <div className="block sm:hidden">
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
