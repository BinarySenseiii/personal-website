import { useQuery } from '@tanstack/react-query'
import { fetchFunc } from '~/lib/axios'

type TPostView = { views: { slug: string; count: number } }

export const usePostViews = (slug: string) =>
  useQuery({
    queryKey: ['POST_VIEWS'],
    queryFn: () => fetchFunc<TPostView>(`/views/${slug}`, { method: 'GET' }),
    refetchOnWindowFocus: true,
  })
