'use client'
import React, {useCallback, useEffect, useState} from 'react'
import {Search} from 'lucide-react'
import {Input} from '~/components/ui/input'
import {useRouter} from 'next/navigation'
import {useDebounce} from 'use-debounce'

const PostSearch = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [debouncedSearch] = useDebounce(search, 1000)

  const onChangeHandle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value.toLowerCase())
    },
    [],
  )

  useEffect(() => {
    if (!debouncedSearch) {
      router.push(`/blog`)
    } else {
      router.push(`/blog?query=${encodeURIComponent(debouncedSearch)}`)
    }
  }, [debouncedSearch, router])

  return (
    <div className="relative  sm:max-w-xs w-full">
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

export default PostSearch
