"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PhotographyShell } from "./photography-shell"
import { PhotoGrid } from "./photo-grid"
import { Lightbox } from "./lightbox"
import type { Collection } from "@/lib/photography-data"

export function PhotographyCollectionView({ collection }: { collection: Collection }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <PhotographyShell>
      <div className="px-6 md:px-8">
        <Link
          href="/photography"
          className="inline-flex items-center gap-2 mb-6 md:mb-8 text-xs md:text-sm font-mono text-[#6b6b6b] dark:text-[#999] hover:text-[#3a3a3a] dark:hover:text-[#c4c4c4] transition-colors duration-200"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Collections
        </Link>

        <div className="relative mb-8 md:mb-10">
          <div className="h-px bg-[#e0e0e0] dark:bg-[#2a2a2a] mb-6" />
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-medium text-[#0a0a0a] dark:text-[#fafafa] tracking-tight">
                {collection.title}
              </h1>
              {collection.description && (
                <p className="mt-2 text-sm md:text-base text-[#525252] dark:text-[#a1a1a1]">
                  {collection.description}
                </p>
              )}
            </div>
            <span className="font-mono text-xs md:text-sm text-[#6b6b6b] dark:text-[#999] tracking-wide flex-shrink-0">
              {collection.photos.length} photo{collection.photos.length === 1 ? "" : "s"}
            </span>
          </div>
        </div>

        <PhotoGrid photos={collection.photos} onSelect={setActiveIndex} />
      </div>

      <Lightbox
        photos={collection.photos}
        isOpen={activeIndex !== null}
        index={activeIndex ?? 0}
        onIndexChange={setActiveIndex}
        onClose={() => setActiveIndex(null)}
      />
    </PhotographyShell>
  )
}
