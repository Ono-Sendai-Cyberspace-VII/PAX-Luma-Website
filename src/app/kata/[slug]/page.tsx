import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ShareButtons from "@/components/kata/ShareButtons";
import { getPostBySlug, getAllPosts } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function KataPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `https://nyo.ai/kata/${slug}`;

  // Simple markdown-like rendering for the content
  const contentHtml = post.content
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("## ")) {
        return `<h2 class="text-2xl font-bold text-nyo-white mt-10 mb-4">${block.slice(3)}</h2>`;
      }
      if (block.startsWith("- ")) {
        const items = block
          .split("\n")
          .filter((l) => l.startsWith("- "))
          .map((l) => `<li>${l.slice(2)}</li>`)
          .join("");
        return `<ul class="list-disc pl-6 space-y-2 mb-6">${items}</ul>`;
      }
      if (block.startsWith("1. ")) {
        const items = block
          .split("\n")
          .filter((l) => /^\d+\.\s/.test(l))
          .map((l) => `<li>${l.replace(/^\d+\.\s/, "")}</li>`)
          .join("");
        return `<ol class="list-decimal pl-6 space-y-2 mb-6">${items}</ol>`;
      }
      if (block.startsWith("---")) {
        return `<hr class="border-nyo-gray-800 my-8" />`;
      }
      if (block.startsWith("*") && block.endsWith("*")) {
        return `<p class="text-sm text-nyo-gray-500 italic mb-4">${block.slice(1, -1)}</p>`;
      }
      // Bold text
      const processed = block.replace(/\*\*(.+?)\*\*/g, '<strong class="text-nyo-white">$1</strong>');
      return `<p class="mb-4">${processed}</p>`;
    })
    .join("");

  return (
    <div className="min-h-screen pt-24 pb-32">
      <article className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/kata"
          className="inline-flex items-center gap-2 text-sm text-nyo-gray-500 hover:text-nyo-orange transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Kata
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="orange">{post.tag}</Badge>
            <span className="text-[10px] font-mono text-nyo-gray-700 bg-nyo-gray-800/50 px-2 py-0.5 rounded">
              FPO
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-nyo-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-nyo-gray-500">
            <span className="flex items-center gap-1.5">
              <User size={14} />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readingTime}
            </span>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose-nyo"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Share + footer */}
        <footer className="mt-16 pt-8 border-t border-nyo-gray-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <ShareButtons url={url} title={post.title} />
            <Link
              href="/kata"
              className="text-sm text-nyo-gray-500 hover:text-nyo-orange transition-colors"
            >
              &larr; All posts
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
