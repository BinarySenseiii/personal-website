import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { fetchFunc } from '~/lib/axios'
import { contactSchemaType } from '~/schema'

export const useSendContactData = () =>
  useMutation({
    mutationFn: (data: contactSchemaType) => fetchFunc('/contact', { method: 'POST', data }),
    onError: error => toast.error(error.message),
    onSuccess: () => toast.success("I'll be in touch shortly."),
  })

type TViewCount = { message: string }

export const useIncrementViewCount = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (slug: string) => fetchFunc<TViewCount>(`/views/${slug}`, { method: 'POST' }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['POST_VIEWS'] }),
  })
}
