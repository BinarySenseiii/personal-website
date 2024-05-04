'use client'
import {ReactNode} from 'react'
import {Toaster} from 'react-hot-toast'
import ScrollProgress from '~/components/scroll-progress'
import {TooltipProvider} from '~/components/ui/tooltip'
import TopLoader from '~/components/ui/top-loader'
import ReactQueryProvider from './react-query'

const RootProviders = ({children}: {children: ReactNode}) => {
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
