'use client'
import {Eye} from 'lucide-react'
import React, {useEffect} from 'react'
import {useIncrementViewCount} from '~/actions/mutations'
import {usePostViews} from '~/actions/queries'

const PostViews = ({slug}: {slug: string}) => {
  const {data, isLoading} = usePostViews(slug)
  const incrCount = useIncrementViewCount()

  useEffect(() => {
    incrCount.mutate(slug)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <dl>
      <dt className="sr-only">Blog Post views</dt>
      <dd className="flex items-center text-muted-foreground text-sm gap-1">
        <Eye className="size-4" aria-hidden="true" />
        <span>{isLoading ? '...' : data?.views?.count ?? 0} Views</span>
      </dd>
    </dl>
  )
}

export default PostViews
