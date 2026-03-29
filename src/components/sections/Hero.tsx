"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-nyo-black via-nyo-black to-nyo-gray-900" />

      {/* Subtle radial glow behind logo area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-nyo-orange/[0.03] blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,0,144,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,144,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* NYO Logo text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-nyo-gray-800/60 bg-nyo-gray-900/40 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-nyo-orange animate-pulse" />
            <span className="text-xs font-medium text-nyo-gray-400 tracking-wider uppercase">
              Now in development
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-[-0.05em] leading-[0.95]"
        >
          <span className="block">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #2563EB 0%, #7C5CFC 50%, #C74BE0 100%)",
              }}
            >
              Thinking requires
            </span>
          </span>
          <span className="block">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #B04CDA 0%, #B04CDA 100%)" }}>a{" "}</span>
            <span
              className="bg-clip-text text-transparent relative"
              style={{
                backgroundImage: "linear-gradient(90deg, #D93BA8 0%, #FF0090 100%)",
              }}
            >
              mind
              <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full" style={{ background: "linear-gradient(90deg, #D93BA8, #FF0090)" }} />
            </span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #FF0090, #FF0090)" }}>.</span>
          </span>
          <span className="block mt-2">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #FF0090 0%, #E8364F 50%, #D4542C 100%)",
              }}
            >
              Understanding requires
            </span>
          </span>
          <span className="block">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #D4542C, #D4542C)" }}>a{" "}</span>
            <span
              className="bg-clip-text text-transparent relative"
              style={{
                backgroundImage: "linear-gradient(90deg, #D4542C 0%, #E87C1A 50%, #F0A000 100%)",
              }}
            >
              body
              <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full" style={{ background: "linear-gradient(90deg, #E87C1A, #F0A000)" }} />
            </span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #F0A000, #F0A000)" }}>.</span>
          </span>
        </motion.h1>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-10 text-lg sm:text-xl text-nyo-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          <span className="text-nyo-white font-semibold">PAX:Luma</span> &mdash; Embodied
          synthetic intelligence by{" "}
          <span className="text-nyo-white font-semibold">NYO</span>, an Ichinyo
          Corporation brand.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-nyo-orange text-white font-semibold text-lg hover:bg-nyo-orange-hover active:scale-[0.98] transition-all duration-200 shadow-lg shadow-nyo-orange/20"
          >
            Join the Waitlist
          </a>
          <a
            href="/archai"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-transparent text-nyo-gray-200 font-medium text-lg border border-nyo-gray-600 hover:border-nyo-gray-400 hover:text-nyo-white transition-all duration-200"
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
          className="flex flex-col items-center gap-2 text-nyo-gray-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
