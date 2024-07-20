// Thanks to eleventy-plugin-youtube-embed
const urlPattern =
	/(?:https?:\/\/)?(?:www\.)?youtu(be\.com|\.be)\/(?:watch\?v=|embed\/|shorts\/)?([a-z0-9_-]{11})/

/**
 * Extract a YouTube ID from a URL if it matches the pattern.
 * @param url URL to test
 * @returns A YouTube video ID or undefined if none matched
 */
export default function matcher(url: string): string | undefined {
	const match = url.match(urlPattern)
	return match?.[3]
}
