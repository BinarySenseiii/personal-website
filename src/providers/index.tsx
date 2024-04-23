'use client'
import React, {ReactNode} from 'react'
import ThemeProvider from './theme-provider'
import {TooltipProvider} from '~/components/ui/tooltip'

const RootProviders = ({children}: {children: ReactNode}) => {
  return (
    <ThemeProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  )
}

export default RootProviders
