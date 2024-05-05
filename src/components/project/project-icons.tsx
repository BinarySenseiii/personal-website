import Image from 'next/image'
import React from 'react'
import powerUpLogo from '~/assets/images/power-up.webp'
import {cn} from '~/lib/utils'

const DEFAULT_CLASS =
  'size-16 border bg-[#11117c] grid place-content-center rounded-md p-3'

export const PowerUp = () => {
  return (
    <div className={cn(DEFAULT_CLASS, 'bg-[#11117c]')}>
      <Image alt="Power up brain battles" src={powerUpLogo} placeholder="blur" />
    </div>
  )
}
