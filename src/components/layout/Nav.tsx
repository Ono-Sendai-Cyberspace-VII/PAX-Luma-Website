"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/archai", label: "Archai" },
  { href: "/poroi", label: "Poroi" },
  { href: "/kata", label: "Kata" },
  { href: "/waitlist", label: "Waitlist" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nyo-black/80 backdrop-blur-xl border-b border-nyo-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="NYO Home">
          <Image
            src="/images/nyo-logo.svg"
            alt="NYO"
            width={80}
            height={28}
            className="h-7 w-auto transition-opacity group-hover:opacity-80"
            priority
          />
          <span className="hidden sm:inline text-xs text-nyo-gray-400 tracking-widest uppercase font-medium">
            PAX:Luma
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-nyo-gray-400 hover:text-nyo-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nyo-orange transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link href="/login">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-nyo-gray-400 hover:text-nyo-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-nyo-black/95 backdrop-blur-xl border-b border-nyo-gray-800/50">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-nyo-gray-200 hover:text-nyo-orange transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" size="sm" className="w-full mt-2">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
