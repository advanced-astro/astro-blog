const SITE_TITLE = 'Astro Weblog'
const SITE_DESCRIPTION = 'Welcome to subscribe to my blog'

const year = new Date().getFullYear()

type Author = {
	name: string
}

type Settings = {
	showDrafts: boolean
}

type Site = {
	author: Author
	copyright: string
	devMode: Settings
	lang?: string
	title: string
	description: string
	url: string
}

export const Site: Site = {
	author: {
		name: 'Marc Redwerkz',
	},
	copyright: `&copy; ${year} ${SITE_TITLE}. Some Rights Reserved.`,
	description: SITE_DESCRIPTION,
	devMode: {
		showDrafts: true,
	},
	lang: 'de',
	title: `${SITE_TITLE} - ${SITE_DESCRIPTION}`,
	url: 'https://aweblog.vercel.app',
}
