"use client"

import { motion } from "framer-motion"
import type { Photo } from "@/lib/photography-data"

const ease = [0.16, 1, 0.3, 1]

export function PhotoGrid({
  photos,
  onSelect,
}: {
  photos: Photo[]
  onSelect: (index: number) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease }}
      className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4"
    >
      {photos.map((photo, i) => (
        <button
          key={photo.id}
          type="button"
          onClick={() => onSelect(i)}
          className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-[#ececec] dark:border-[#1a1a1a] hover:border-[#d4d4d4] dark:hover:border-[#404040] transition-colors duration-300 focus-visible:outline-2 outline-offset-2 outline-[#525252]"
          aria-label={`Open ${photo.alt}`}
        >
          {photo.src ? (
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-mono text-[11px] text-[#a8a8a8] dark:text-[#444] tracking-widest">
                [ {photo.alt.match(/\d+$/)?.[0] ?? "photo"} ]
              </span>
            </div>
          )}
        </button>
      ))}
    </motion.div>
  )
}
