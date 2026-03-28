import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight, Rss } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Kata \u2014 PAX:Luma Development Blog",
  description:
    "Building PAX:Luma in public. Architecture decisions, implementation details, and the reality of building a synthetic construct.",
};

export default function KataPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-24 pb-32">
      <header className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <Badge variant="orange" className="mb-4">The How</Badge>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-nyo-white mb-3">
              Kata
            </h1>
            <p className="text-lg text-nyo-gray-400 max-w-xl">
              Development blog &mdash; building PAX:Luma in public. Every step documented.
            </p>
          </div>
          <a
            href="/kata/feed.xml"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-nyo-gray-700 text-sm text-nyo-gray-400 hover:text-nyo-orange hover:border-nyo-orange/30 transition-all"
            aria-label="RSS Feed"
          >
            <Rss size={16} />
            RSS Feed
          </a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/kata/${post.slug}`} className="block group">
              <Card hover className="p-6 sm:p-8 relative">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                  <Badge variant="orange">{post.tag}</Badge>
                  <span className="flex items-center gap-1.5 text-xs text-nyo-gray-600">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-xs text-nyo-gray-600">&middot; {post.readingTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-nyo-white mb-3 group-hover:text-nyo-orange transition-colors">
                  {post.title}
                </h2>
                <p className="text-nyo-gray-400 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="text-sm text-nyo-orange font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Read more <ArrowRight size={14} />
                </span>
                <span className="absolute top-3 right-3 text-[10px] font-mono text-nyo-gray-700 bg-nyo-gray-800/50 px-2 py-0.5 rounded">
                  FPO
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
