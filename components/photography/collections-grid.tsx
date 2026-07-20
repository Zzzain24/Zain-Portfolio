"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { type Collection, getCoverSrc } from "@/lib/photography-data"

const ease = [0.16, 1, 0.3, 1]

export function CollectionsGrid({ collections }: { collections: Collection[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-3 md:gap-4"
    >
      {collections.map((collection, i) => {
        const cover = getCoverSrc(collection)
        return (
          <motion.div
            key={collection.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease, delay: i * 0.06 }}
          >
            <Link
              href={`/photography/${collection.slug}`}
              className="group block rounded-lg overflow-hidden border border-[#ececec] dark:border-[#1a1a1a] hover:border-[#d4d4d4] dark:hover:border-[#404040] bg-[#f5f5f5] dark:bg-[#0a0a0a] transition-colors duration-300 focus-visible:outline-2 outline-offset-2 outline-[#525252]"
            >
              <div className="relative w-full aspect-[4/3] flex items-center justify-center bg-[#f2f2f2] dark:bg-[#0e0e0e] overflow-hidden">
                {cover ? (
                  <img
                    src={cover}
                    alt={`${collection.title} cover`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <span className="font-mono text-xs text-[#a8a8a8] dark:text-[#444] tracking-widest">
                    [ {collection.title.toLowerCase()} ]
                  </span>
                )}
              </div>
              <div className="px-4 py-3.5 border-t border-[#e8e8e8] dark:border-[#1e1e1e] flex items-center justify-between">
                <span className="text-sm md:text-base font-medium text-[#0a0a0a] dark:text-[#fafafa]">
                  {collection.title}
                </span>
                <span className="font-mono text-[11px] text-[#8a8a8a] dark:text-[#666] tracking-wide">
                  {collection.photos.length} photos
                </span>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
