import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
      href="/"
      role="link"
      aria-label="Home"
      className="el-focus-styles font-bold italic text-2xl rounded-md"
    >
      <Image
        src="/images/logo.png"
        alt="personal avatar"
        height={40}
        width={40}
        className=" shadow-sm border rounded-md"
      />
    </Link>
  )
}

export default Logo
