import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

export type Post = CollectionEntry<'blog'>;

/** Published posts, newest first. Drafts only appear when running `npm run dev`. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', (p) => import.meta.env.DEV || !p.data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Finds the other-language version of a post. Declaring `translation` in either file links both. */
export function findTranslation(post: Post, posts: Post[]): Post | undefined {
  return posts.find(
    (p) => p.id !== post.id && p.data.lang !== post.data.lang && (p.id === post.data.translation || p.data.translation === post.id),
  );
}

/** Every post for a language's list. A post written in one language shows in both lists,
 *  unless it has a translation, in which case only the matching version shows. */
export async function postsFor(lang: Lang): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((p) => p.data.lang === lang || !findTranslation(p, posts));
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'pt-BR', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date);
}

export function readingMinutes(body = ''): number {
  return Math.max(1, Math.round(body.trim().split(/\s+/).length / 220));
}
