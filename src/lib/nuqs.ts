import { parseAsString as ParseClientString } from 'nuqs'
import {
	createSearchParamsCache,
	parseAsInteger,
	parseAsString as parseServerString,
} from 'nuqs/server'

export const searchParamsParsers = {
	q: ParseClientString.withDefault('').withOptions({
		shallow: false,
	}),
}

export const searchParamsCache = createSearchParamsCache({
	q: parseServerString.withDefault(''),
	maxResults: parseAsInteger.withDefault(10),
})
