'use client'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '~/components/ui/sheet'
import Logo from './logo'
import NavList from './nav-list'
import { useState } from 'react'

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="px-4">
        <SheetHeader>
          <SheetTitle className="text-left">
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <NavList setOpen={setOpen} />
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
