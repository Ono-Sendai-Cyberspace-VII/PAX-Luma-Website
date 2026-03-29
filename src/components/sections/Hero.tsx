"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    // Start slow playback
    video.playbackRate = 0.3;

    let lastScroll = 0;
    let rafId: number;
    let decayId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const scrollDelta = Math.abs(window.scrollY - lastScroll);
        lastScroll = window.scrollY;

        // Only speed up when the hero is visible
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          // Map scroll velocity to playback rate: 0.3 (idle) → 4.0 (fast scroll)
          const speed = Math.min(4.0, 0.3 + scrollDelta * 0.08);
          video.playbackRate = speed;

          // Decay back to slow after scrolling stops
          clearTimeout(decayId);
          decayId = window.setTimeout(() => {
            smoothDecay(video, 0.3);
          }, 100);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
      clearTimeout(decayId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/hero-bg.mp4"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Gradient fade at bottom for transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-nyo-black to-transparent" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-nyo-orange animate-pulse" />
            <span className="text-xs font-medium text-white/70 tracking-wider uppercase">
              Now in development
            </span>
          </div>
        </motion.div>

        {/* Main headline — clean white for video bg */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-[-0.05em] leading-[0.95] text-white"
        >
          <span className="block">Thinking requires</span>
          <span className="block">
            a{" "}
            <span className="relative">
              mind
              <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full bg-nyo-orange" />
            </span>
            .
          </span>
          <span className="block mt-2">Understanding requires</span>
          <span className="block">
            a{" "}
            <span className="relative">
              body
              <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full bg-nyo-orange" />
            </span>
            .
          </span>
        </motion.h1>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="mt-10 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          <span className="text-white font-semibold">PAX:Luma</span> &mdash;
          Embodied synthetic intelligence by{" "}
          <span className="text-white font-semibold">NYO</span>, an Ichinyo
          Corporation brand.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-nyo-orange text-white font-semibold text-lg hover:bg-nyo-orange-hover active:scale-[0.98] transition-all duration-200 shadow-lg shadow-nyo-orange/30"
          >
            Join the Waitlist
          </a>
          <a
            href="/archai"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-medium text-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-200"
          >
            Read Archai
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/** Smoothly ease the playback rate back to a target */
function smoothDecay(video: HTMLVideoElement, target: number) {
  const step = () => {
    const diff = video.playbackRate - target;
    if (Math.abs(diff) < 0.05) {
      video.playbackRate = target;
      return;
    }
    video.playbackRate -= diff * 0.15;
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
