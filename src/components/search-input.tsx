'use client'
import { Search } from 'lucide-react'
import { useQueryState } from 'nuqs'
import { Input } from '~/components/ui/input'
import { searchParamsParsers } from '~/lib/nuqs'

const SearchInput = () => {
	const [query, setQuery] = useQueryState('search', searchParamsParsers.q)

	return (
		<div className="relative sm:max-w-xs w-full">
			<Search className="absolute left-2 top-2/4 -translate-y-2/4 size-4 text-muted-foreground" />
			<Input
				type="search"
				placeholder="Search..."
				className="w-full rounded-lg bg-background pl-8"
				value={query || ''}
				onChange={e => setQuery(e.target.value)}
			/>
		</div>
	)
}

export default SearchInput
