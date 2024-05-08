'use client'

import { createId } from '@paralleldrive/cuid2'
import binance from '~/assets/images/binance.webp'
import dubaiCon from '~/assets/images/f-dubai-police.webp'
import lake from '~/assets/images/lake.webp'
import { CardStack } from './ui/card-stack'

export default function CardStackDemo() {
  return (
    <div className="size-full">
      <CardStack items={CARDS} />
    </div>
  )
}

const CARDS = [
  {
    id: createId(),
    src: dubaiCon,
    alt: 'Speaking on stage at Dubai police station during a presentation',
  },

  {
    id: createId(),
    src: lake,
    alt: 'Enjoying the serene view by the lake.',
  },

  {
    id: createId(),
    src: binance,
    alt: 'Presenting on stage with the Binance logo in the background.',
  },
]
