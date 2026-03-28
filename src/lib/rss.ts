import { getAllPosts } from "./posts";

const SITE_URL = "https://nyo.ai";

export function generateRSSFeed(): string {
  const posts = getAllPosts();

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/kata/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/kata/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${post.author}</author>
      <category>${post.tag}</category>
    </item>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kata — PAX:Luma Development Blog</title>
    <link>${SITE_URL}/kata</link>
    <description>Building PAX:Luma in public. Architecture decisions, implementation details, and the practical reality of building a synthetic construct.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/kata/feed.xml" rel="self" type="application/rss+xml"/>${items}
  </channel>
</rss>`;
}
