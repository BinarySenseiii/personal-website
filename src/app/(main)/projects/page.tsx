import { ProjectList, projects } from '~/components/project'
import SearchInput from '~/components/search-input'
import config from '~/config'
import { getSEOTags } from '~/lib/seo'

import { searchParamsCache } from '~/lib/nuqs'
import { type SearchParams } from 'nuqs/server'

export const metadata: ReturnType<typeof getSEOTags> = getSEOTags({
	title: `All Projects - ${config.appName}`,
	description:
		'Explore a digital garden of my projects, where I showcase insights on shipping exceptional products, advancing as a developer, and thriving in the tech industry',
	canonicalUrlRelative: '/projects',
	keywords: [
		'JavaScript',
		'TypeScript',
		'React',
		'Testing',
		'Career',
		'Software Development',
	],
})

const ProjectsPage = async ({
	searchParams,
}: {
	searchParams: Promise<SearchParams>
}) => {
	const { q: query } = searchParamsCache.parse(await searchParams)

	const filteredProjects = projects.filter(project =>
		project.title.toLowerCase().includes(decodeURIComponent(query)),
	)

	return (
		<div className="!mt-8">
			<div className="flex sm:items-center flex-col sm:flex-row flex-wrap gap-4 justify-between">
				<h1 className="font-medium text-xl text-left"> All Projects </h1>
				<SearchInput />
			</div>

			<div className="mt-6">
				<ProjectList projects={filteredProjects} metadata={false} />
			</div>
		</div>
	)
}

export default ProjectsPage
