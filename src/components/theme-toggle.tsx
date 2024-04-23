'use client'
import {Around} from '@theme-toggles/react'
import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'
import '@theme-toggles/react/css/Around.css'
import {useIsClient} from '@uidotdev/usehooks'
// @ts-ignore
import useSound from 'use-sound'

export default function ThemeToggle() {
  const isClient = useIsClient()
  const {theme, setTheme} = useTheme()
  const [isToggled, setIsToggled] = useState(theme === 'dark')
  const [play] = useSound('/audio/switch-on.mp3')

  useEffect(() => {
    setIsToggled(theme === 'dark')
  }, [theme])

  const onToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    play()
  }

  return (
    isClient && (
      <div className="size-8 ">
        {/* @ts-ignore */}
        <Around
          key={theme}
          idPrefix="mg"
          toggled={isToggled}
          onToggle={onToggle}
          duration={750}
          style={{color: theme === 'dark' ? '#fff' : '#000'}}
          forceMotion
        />
        <span className="sr-only">Toggle theme</span>
      </div>
    )
  )
}
