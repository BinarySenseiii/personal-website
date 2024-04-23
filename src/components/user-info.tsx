import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import site from '~/config/site'

const UserInfo = () => {
  return (
    <Link href="/" role="link">
      <figure className="flex items-center flex-col sm:flex-row text-center sm:text-left  gap-4">
        <Image
          src="/images/personal.webp"
          alt="Faisal TariQ photo"
          height={100}
          width={100}
          className="rounded-full object-cover size-16"
        />
        <figcaption className="space-y-0">
          <h2 className="font-bold text-xl">{site.appName}</h2>
          <p className="">{site.appDesignation}</p>
        </figcaption>
      </figure>
    </Link>
  )
}

export default UserInfo
