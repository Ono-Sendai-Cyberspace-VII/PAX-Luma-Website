import { generateRSSFeed } from "@/lib/rss";

export async function GET() {
  const feed = generateRSSFeed();
  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
