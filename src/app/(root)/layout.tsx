import React, {ReactNode} from 'react'
import Header from '~/components/layout/header'
import Navbar from '~/components/layout/navbar'

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className="space-y-4 container py-4 relative">
      <Header />
      {children}
      <Navbar />
    </div>
  )
}

export default Layout
