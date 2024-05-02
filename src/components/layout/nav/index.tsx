import Link from 'next/link'
import NavList from './nav-list'

const Navbar = () => {
  return (
    <nav
      className="mt-2 mb-4 gap-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between "
      role="navigation"
    >
      <Link
        href="/"
        role="link"
        aria-label="Home"
        className="el-focus-styles font-bold italic text-2xl rounded-md"
      >
        FaisalT
      </Link>

      <NavList />
    </nav>
  )
}

export default Navbar
