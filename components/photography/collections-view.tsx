"use client"

import { motion } from "framer-motion"
import { PhotographyShell } from "./photography-shell"
import { CollectionsGrid } from "./collections-grid"
import type { Collection } from "@/lib/photography-data"

const ease = [0.16, 1, 0.3, 1]

export function PhotographyCollectionsView({ collections }: { collections: Collection[] }) {
  return (
    <PhotographyShell>
      <div className="px-6 md:px-8">
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
              <span className="font-mono text-[#6b6b6b] dark:text-[#999] text-xs md:text-sm tracking-widest">
                Photography
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#a8a8a8] dark:bg-[#525252] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#e0e0e0] dark:bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        <CollectionsGrid collections={collections} />
      </div>
    </PhotographyShell>
  )
}
