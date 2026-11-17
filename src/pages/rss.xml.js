import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";
import { getCollection } from "astro:content";
import { isPublished } from "../lib/posts";
import createSlug from "../lib/createSlug";

export async function GET(context) {
  const blog = ((await getCollection("blog")) ?? []).filter(isPublished);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Must match the route generated in src/pages/blog/[slug].astro.
      link: `/blog/${createSlug(post.data.title, post.slug)}/`,
    })),
  });
}
