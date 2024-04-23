import React, {ReactNode} from 'react'
import Header from '~/components/layout/header'

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <main className="space-y-4 container py-4">
      <Header />
      {children}
    </main>
  )
}

export default Layout
