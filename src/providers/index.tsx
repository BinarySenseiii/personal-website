'use client'
import {ReactNode} from 'react'
import ScrollProgress from '~/components/scroll-progress'
import {TooltipProvider} from '~/components/ui/tooltip'
import TopLoader from '~/components/ui/top-loader'

const RootProviders = ({children}: {children: ReactNode}) => {
  return (
    <>
      <ScrollProgress />
      <TopLoader />
      <TooltipProvider>{children}</TooltipProvider>
    </>
  )
}

export default RootProviders
