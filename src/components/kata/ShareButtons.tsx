"use client";

import { useState } from "react";
import { AtSign, Link2 as LinkIcon, Globe, Link2, Check, Share2 } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Twitter / X",
      icon: AtSign,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      name: "LinkedIn",
      icon: LinkIcon,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: "Facebook",
      icon: Globe,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  async function handleNativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // User cancelled
      }
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-nyo-gray-500 mr-1">Share:</span>

      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-nyo-gray-500 hover:text-nyo-orange hover:bg-nyo-gray-800/50 transition-all duration-200"
          aria-label={`Share on ${link.name}`}
        >
          <link.icon size={16} />
        </a>
      ))}

      <button
        onClick={handleCopy}
        className="p-2 rounded-lg text-nyo-gray-500 hover:text-nyo-orange hover:bg-nyo-gray-800/50 transition-all duration-200"
        aria-label="Copy link"
      >
        {copied ? <Check size={16} className="text-green-400" /> : <Link2 size={16} />}
      </button>

      {typeof navigator !== "undefined" && "share" in navigator && (
        <button
          onClick={handleNativeShare}
          className="p-2 rounded-lg text-nyo-gray-500 hover:text-nyo-orange hover:bg-nyo-gray-800/50 transition-all duration-200"
          aria-label="Share"
        >
          <Share2 size={16} />
        </button>
      )}
    </div>
  );
}
