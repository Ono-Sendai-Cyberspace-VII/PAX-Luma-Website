"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface SidebarTOCProps {
  items: TOCItem[];
}

export default function SidebarTOC({ items }: SidebarTOCProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      {/* Mobile TOC toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-40 p-3 rounded-full bg-nyo-gray-800 border border-nyo-gray-700 text-nyo-gray-200 shadow-xl hover:bg-nyo-gray-700 transition-colors"
        aria-label="Toggle table of contents"
      >
        <List size={20} />
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`
          fixed z-50 lg:z-10
          ${isOpen ? "inset-y-0 right-0 w-72 bg-nyo-gray-900 border-l border-nyo-gray-800 p-6" : "hidden"}
          lg:block lg:sticky lg:top-24 lg:w-64 lg:bg-transparent lg:border-0 lg:p-0
          lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto
          scrollbar-thin
        `}
        aria-label="Table of contents"
      >
        <h4 className="text-xs font-semibold text-nyo-gray-400 uppercase tracking-widest mb-4">
          Contents
        </h4>
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`
                  block py-1.5 text-sm transition-all duration-200 border-l-2
                  ${item.level === 1 ? "pl-4" : item.level === 2 ? "pl-7" : "pl-10"}
                  ${
                    activeId === item.id
                      ? "border-nyo-orange text-nyo-orange font-medium"
                      : "border-transparent text-nyo-gray-500 hover:text-nyo-gray-300 hover:border-nyo-gray-600"
                  }
                `}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
