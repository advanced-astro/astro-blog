import type { CollectionEntry } from 'astro:content'
import { Site } from '@/consts'

/**
 * Filters and sorts all blog posts based on publication status and publication date.
 *
 * @param {CollectionEntry<'blog'>[]} allPosts - array of all blog posts
 * @return {CollectionEntry<'blog'>[]} filtered and sorted array of blog posts
 */
export const getPosts = (allPosts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] => {
	return allPosts
		.filter((post) => {
			if (import.meta.env.PROD) {
				return post.data.isPublished
			}

			return Site.devMode.showDrafts ? true : post.data.isPublished
		})
		.sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf())
}
