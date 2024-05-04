import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React from 'react'

function ReactQueryProvider({children}: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {staleTime: 5000, refetchOnWindowFocus: false},
      },
    }),
  )

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default ReactQueryProvider
