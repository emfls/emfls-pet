import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    slug: z.string(), title: z.string(), description: z.string(), petType: z.enum(['dog', 'cat']),
    category: z.enum(['먹이', '행동', '생활', '용품', '훈련', '놀이', '위생', '입양/준비']),
    tags: z.array(z.string()), updated: z.coerce.date(), summary: z.string(), relatedGuides: z.array(z.string()).default([])
  })
});
export const collections = { guides };
