import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    situation: z.string(),
    context: z.string(),
    role: z.string(),
    period: z.string(),
    result: z.string(),
    order: z.number(),
    summary: z.array(z.string()),
    stack: z.array(z.string()),
  }),
});

// Blog posts: see src/content/blog/_template.md. Files starting with "_" are ignored.
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'pt']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    translation: z.string().optional(),
  }),
});

export const collections = { work, blog };
