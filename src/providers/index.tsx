'use client'
import {ReactNode} from 'react'
import ScrollProgress from '~/components/scroll-progress'
import {TooltipProvider} from '~/components/ui/tooltip'
import ThemeProvider from './theme-provider'
import TopLoader from '~/components/ui/top-loader'

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
