import {z, defineCollection} from "astro:content"

const blogCollection = defineCollection({
  type: "content",
  schema: ({image}) =>
    z.object({
      // meta_title: z.string().optional(),
      // meta_description: z.string().optional(),
      title: z.string(),
      date: z.date(),
      // card_image: image(),
      // blog_image: image(),
      // categories: z.array(z.string()),
      // tags: z.array(z.string()).optional(),
      // pinned: z.boolean().default(false),
      // preview: z.string().optional(),
      // cta_text: z.string().optional(),
      // cta_link: z.string().optional(),
      // color: z.string().optional(),
      content: z.string().optional(),
    }),
})

export const collections = {
  blog: blogCollection,
}
