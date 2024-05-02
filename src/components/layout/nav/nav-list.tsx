import React from 'react'
import NavItem from './nav-item'
import {navData} from './_nav-mock'

const NavList = () => {
  return (
    <ul role="list" className="flex items-center gap-4 sm:gap-6">
      {navData.map(nav => (
        <NavItem key={nav.id} {...nav} />
      ))}
    </ul>
  )
}

export default NavList
