import Image from 'next/image'
import React from 'react'
import powerUpLogo from '~/assets/images/power-up.webp'
import mintKutoLogo from '~/assets/images/mint-kuto.avif'
import NftConnectLogo from '~/assets/images/nft-connect.jpg'
import worldRankLogo from '~/assets/images/world-rank.png'
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
export const MintKuto = () => {
  return (
    <div className={cn(DEFAULT_CLASS, 'bg-transparent p-0  overflow-hidden')}>
      <Image
        alt="Unlocking the Potential of Kuto Digital Characters"
        src={mintKutoLogo}
        placeholder="blur"
      />
    </div>
  )
}
export const NftConnect = () => {
  return (
    <div className={cn(DEFAULT_CLASS, 'bg-transparent p-2 bg-white')}>
      <Image
        alt="Unlocking the Potential of Kuto Digital Characters"
        src={NftConnectLogo}
        placeholder="blur"
      />
    </div>
  )
}

export const PodPortal = () => {
  return (
    <div className={cn(DEFAULT_CLASS, 'bg-transparent p-2 bg-neutral-900')}>
      <h3 className="font-semibold text-5xl font-ubuntu">P</h3>
    </div>
  )
}

export const worldRank = () => {
  return (
    <div className={cn(DEFAULT_CLASS, 'bg-transparent p-0 border-0')}>
      <Image
        alt="ultimate source for country rankings"
        src={worldRankLogo}
        placeholder="blur"
      />
    </div>
  )
}
