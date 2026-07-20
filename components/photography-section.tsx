"use client"

import { motion } from "framer-motion"

const ease = [0.16, 1, 0.3, 1]

const photos = [1, 2, 3, 4, 5]

export function PhotographySection() {
  return (
    <section id="photography" className="py-8 md:py-12 relative">
      <div className="px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="relative mb-8 md:mb-10"
        >
          <div className="h-px bg-[#e0e0e0] dark:bg-[#2a2a2a] mb-6" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#d4d4d4] dark:bg-[#404040]" />
              <span className="font-mono text-[#6b6b6b] dark:text-[#999] text-xs md:text-sm tracking-widest">photography</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#a8a8a8] dark:bg-[#525252] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#e0e0e0] dark:bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, ease }}
        className="flex gap-4 overflow-x-auto px-6 md:px-8 pb-2"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {photos.map((n) => (
          <div
            key={n}
            className="flex-shrink-0 w-[240px] md:w-[300px] rounded-lg overflow-hidden bg-[#f0f0f0] dark:bg-[#111] border border-[#e8e8e8] dark:border-[#1e1e1e] flex flex-col"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="relative w-full aspect-[3/2] flex items-center justify-center bg-[#f2f2f2] dark:bg-[#0e0e0e]">
              <span className="font-mono text-xs text-[#a8a8a8] dark:text-[#444] tracking-widest">[ photo {n} ]</span>
            </div>
            <div className="px-3 py-2.5 border-t border-[#e8e8e8] dark:border-[#1e1e1e]">
              <span className="font-mono text-[11px] text-[#8a8a8a] dark:text-[#666] tracking-wide">[ caption placeholder ]</span>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-14 flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 bg-[#e0e0e0] dark:bg-[#2a2a2a] rounded-full" />
          <div className="w-12 md:w-16 h-px bg-[#e8e8e8] dark:bg-[#1e1e1e]" />
          <div className="w-1 h-1 bg-[#e8e8e8] dark:bg-[#1e1e1e] rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
