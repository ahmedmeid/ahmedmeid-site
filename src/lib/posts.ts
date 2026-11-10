import type { CollectionEntry } from "astro:content";

// Drafts are excluded from production builds (listings, tag pages, RSS, and
// therefore the sitemap, since unpublished posts simply get no route) but
// stay visible while running `pnpm run dev`.
export function isPublished(post: CollectionEntry<"blog">) {
  return !post.data.draft || import.meta.env.DEV;
}
