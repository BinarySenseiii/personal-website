import {ReactNode} from 'react'
import Navbar from '~/components/layout/nav'
import SkipContent from '~/components/ui/skip-content'

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className="space-y-4 container py-2 relative">
      <SkipContent />
      <Navbar />
      <div className="pb-8">{children}</div>
    </div>
  )
}

export default Layout
