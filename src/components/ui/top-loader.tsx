'use client'
import {useTheme} from 'next-themes'
import React from 'react'
import {useIsClient} from '@uidotdev/usehooks'
import {AppProgressBar as ProgressBar} from 'next-nprogress-bar'

const TopLoader = () => {
  const {theme} = useTheme()
  const isClient = useIsClient()

  return (
    isClient && (
      <ProgressBar
        height="4px"
        color={theme === 'light' ? '#c2007e' : '#00adb5'}
        shallowRouting
      />
    )
  )
}

export default TopLoader
