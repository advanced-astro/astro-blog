import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		categories: z.array(z.enum(['video'])).optional(),
		spoiler: z.string(),
		title: z.string().min(10),
		pubDate: z.coerce.date(),
		updated: z.coerce.date().optional(),
		isPublished: z.boolean().default(false),
		heroImage: z.string().optional(),
	}),
})

export const collections = {
	blog,
}
