import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'
import { Site } from '@/consts'
import { getPosts } from '@/lib/getPosts'

/**
 * Retrieves posts, generates an RSS feed, and returns the feed data.
 *
 * @param {Object} context - An object containing site information.
 * @return {Promise<Object>} The generated RSS feed data.
 */
export async function GET(context: { site: string } ): Promise<object> {
	const posts = getPosts(await getCollection('blog'))

	return rss({
		title: Site.title,
		description: Site.description,
		site: context.site,
		customData: `<language>${Site.lang}</language>`,
		items: posts.map((post) => ({
			...post.data,
			description: post.data.spoiler,
			link: `/${post.slug}/`,
		})),
	})
}
