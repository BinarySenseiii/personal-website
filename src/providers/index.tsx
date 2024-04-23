'use client'
import React, {ReactNode} from 'react'
import ThemeProvider from './theme-provider'

const RootProviders = ({children}: {children: ReactNode}) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default RootProviders
