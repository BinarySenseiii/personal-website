'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

let interval: any

type Card = {
  id: string
  src: StaticImageData
  alt: string
}

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[]
  offset?: number
  scaleFactor?: number
}) => {
  const CARD_OFFSET = offset || 8
  const SCALE_FACTOR = scaleFactor || 0.04
  const [cards, setCards] = useState<Card[]>(items)

  useEffect(() => {
    startFlipping()

    return () => clearInterval(interval)
  }, [])

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]
        newArray.unshift(newArray.pop()!)
        return newArray
      })
    }, 5000)
  }

  return (
    <div className="relative  h-full w-full">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute h-full rounded-md "
            style={{
              transformOrigin: 'top center',
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <Image
              alt={card.alt}
              src={card.src}
              priority
              className="rounded-md h-full  object-cover !m-0"
              placeholder="blur"
            />
          </motion.div>
        )
      })}
    </div>
  )
}
