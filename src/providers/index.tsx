'use client'
import { ReactNode } from 'react'

import ScrollProgress from '~/components/scroll-progress'
import { TooltipProvider } from '~/components/ui/tooltip'
import TopLoader from '~/components/ui/top-loader'
import ReactQueryProvider from './react-query'
import { Toaster } from '~/components/ui/sonner'

const RootProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ReactQueryProvider>
      <TooltipProvider>
        <ScrollProgress />
        <TopLoader />
        {children}
        <Toaster />
      </TooltipProvider>
    </ReactQueryProvider>
  )
}

export default RootProviders
