'use client'
import { Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { Input } from '~/components/ui/input'

const SearchInput = () => {
  const router = useRouter()
  const currentPath = usePathname()

  const params = useSearchParams()
  const search = params.get('search') ?? ''

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value

    const redirectUrl = searchValue ? `${currentPath}?search=${encodeURIComponent(e.target.value)}` : currentPath
    router.push(redirectUrl)
  }

  return (
    <div className="relative sm:max-w-xs w-full">
      <Search className="absolute left-2 top-2/4 -translate-y-2/4 size-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8"
        value={search}
        onChange={onChangeHandle}
      />
    </div>
  )
}

export default SearchInput
