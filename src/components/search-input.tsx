'use client'
import {Search} from 'lucide-react'
import {usePathname, useRouter} from 'next/navigation'
import React, {useEffect, useState} from 'react'
import {useDebounce} from 'use-debounce'
import {Input} from '~/components/ui/input'

const SearchInput = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [debouncedSearch] = useDebounce(search, 1000)
  const currentPath = usePathname()

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase())
  }

  useEffect(() => {
    if (!debouncedSearch) {
      router.push(currentPath)
    } else {
      router.push(`${currentPath}?query=${encodeURIComponent(debouncedSearch)}`)
    }
  }, [currentPath, debouncedSearch, router])

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
