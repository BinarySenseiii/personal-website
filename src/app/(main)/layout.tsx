import {ReactNode} from 'react'
import Footer from '~/components/layout/footer'
import Navbar from '~/components/layout/nav'
import SkipContent from '~/components/ui/skip-content'

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex flex-col space-y-4 min-h-dvh container py-2 relative">
      <div className="space-y-4 !mb-6">
        <SkipContent />
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
