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
      FaisalT
    </Link>
  )
}

export default Logo
