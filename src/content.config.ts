import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    category: z.enum(['TVC 商业广告', '宣传片', '短片', '个人创作', 'MV', '纪录片', '电影', '产品TVC', '企业家IP形象片', '短视频']),
    coverImage: z.string(),
    videoUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { works };
