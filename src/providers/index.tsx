'use client'
import {ReactNode} from 'react'
import ScrollProgress from '~/components/scroll-progress'
import {TooltipProvider} from '~/components/ui/tooltip'
import TopLoader from '~/components/ui/top-loader'
import ThemeProvider from './theme-provider'

const RootProviders = ({children}: {children: ReactNode}) => {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <TopLoader />
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  )
}

export default RootProviders
