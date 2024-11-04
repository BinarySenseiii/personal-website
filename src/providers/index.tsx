'use client'

import { ReactNode } from 'react'

import ScrollProgress from '~/components/scroll-progress'
import { TooltipProvider } from '~/components/ui/tooltip'
import TopLoader from '~/components/ui/top-loader'
import { Toaster } from '~/components/ui/sonner'

import ReactQueryProvider from './react-query'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

const providers = [NuqsAdapter, ReactQueryProvider, TooltipProvider]

const globalComponents = [ScrollProgress, TopLoader, Toaster]

const RootProviders = ({ children }: { children: ReactNode }) => {
	return providers.reduceRight(
		(acc, Provider) => <Provider>{acc}</Provider>,
		<>
			{globalComponents.map((Component, index) => (
				<Component key={index} />
			))}
			{children}
		</>,
	)
}

export default RootProviders
