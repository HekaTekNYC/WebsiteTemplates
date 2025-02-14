import {z, defineCollection} from "astro:content"

const blogCollection = defineCollection({
  type: "content",
  schema: ({image}) =>
    z.object({
      meta_title: z.string().optional(), // SEO Meta Title
      meta_description: z.string().optional(), // SEO Meta Description
      title: z.string(), // Blog post title (required)
      date: z.date(), // Publish Date (required)
      card_image: image(), // Blog Card Image (required)
      blog_image: image(), // Banner Image (required)
      categories: z.array(z.string()), // Categories (required, list of strings)
      tags: z.array(z.string()).optional(), // Tags (optional, list of strings)
      pinned: z.boolean().default(false), // Pin Post (boolean, default false)
      preview: z.string().optional(), // Short description (optional)
      cta_text: z.string().optional(), // Call to Action Text (optional)
      cta_link: z.string().optional(), // Call to Action Link (optional)
      color: z.string().optional(), // Color (optional, stored as a string hex code)
      content: z.string(), // Ensure content is properly captured
    }),
})

export const collections = {
  blog: blogCollection,
}
