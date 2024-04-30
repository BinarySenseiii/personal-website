import React, {AnchorHTMLAttributes, ReactNode} from 'react'
import Link from 'next/link'
import {ClassValue} from 'clsx'
import {cn} from '~/lib/utils'
import {buttonVariants} from '../ui/button'

const CustomLink = (
  props: {
    href: string
    children: ReactNode
    className?: ClassValue
  } & AnchorHTMLAttributes<HTMLAnchorElement>,
) => {
  const href = props.href
  const isInternalLink = href && href.startsWith('/')

  const linkVariant = buttonVariants({
    variant: 'link',
    className: cn(
      '!p-0 h-full !inline-block !text-base !text-ring',
      props.className,
    ),
  })

  if (isInternalLink) {
    return (
      <Link className={linkVariant} {...props}>
        {props.children}
      </Link>
    )
  }

  return (
    <a
      target="_blank"
      rel="external"
      className={linkVariant}
      role="link"
      {...props}
    >
      {props.children}
    </a>
  )
}

export default CustomLink
