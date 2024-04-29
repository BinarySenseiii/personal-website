'use client'
import {useTheme} from 'next-themes'
import NextTopLoader from 'nextjs-toploader'
import React from 'react'
import {useIsClient} from '@uidotdev/usehooks'

const TopLoader = () => {
  const {theme} = useTheme()
  const isClient = useIsClient()

  return (
    isClient && (
      <NextTopLoader
        height={4}
        color={theme === 'light' ? '#c2007e' : '#00adb5'}
      />
    )
  )
}

export default TopLoader
