"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { Photo } from "@/lib/photography-data"

const ease = [0.16, 1, 0.3, 1]

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
}

interface LightboxProps {
  photos: Photo[]
  isOpen: boolean
  index: number
  onIndexChange: (index: number) => void
  onClose: () => void
}

export function Lightbox({ photos, isOpen, index, onIndexChange, onClose }: LightboxProps) {
  const [mounted, setMounted] = useState(false)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const paginate = (dir: number) => {
    setDirection(dir)
    onIndexChange((index + dir + photos.length) % photos.length)
  }

  useEffect(() => {
    if (!isOpen) return
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      else if (e.key === "ArrowLeft") paginate(-1)
      else if (e.key === "ArrowRight") paginate(1)
    }
    window.addEventListener("keydown", handleKeydown)
    return () => window.removeEventListener("keydown", handleKeydown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, index])

  // Preload the neighboring photos so paginating doesn't wait on a fresh network fetch mid-animation.
  useEffect(() => {
    if (!isOpen || photos.length <= 1) return
    const neighbors = [index - 1, index + 1].map((i) => (i + photos.length) % photos.length)
    const preloaded = neighbors.map((i) => {
      const src = photos[i]?.src
      if (!src) return null
      const img = new window.Image()
      img.src = src
      return img
    })
    return () => {
      preloaded.forEach((img) => {
        if (img) img.src = ""
      })
    }
  }, [isOpen, index, photos])

  if (!mounted) return null

  const photo = photos[index]

  return createPortal(
    <AnimatePresence>
      {isOpen && photo && (
        <div className="fixed inset-0 z-[9999] isolate" role="dialog" aria-modal="true" aria-label={photo.alt}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-white/92 dark:bg-black/92 backdrop-blur-md"
            onClick={onClose}
            style={{ zIndex: 1 }}
          />

          {/* Content */}
          <div className="fixed inset-0 flex items-center justify-center px-6 md:px-8" style={{ zIndex: 2 }}>
            <motion.button
              type="button"
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center justify-center w-9 h-9 rounded-full border border-[#e0e0e0] dark:border-[#2a2a2a] text-[#1a1a1a] dark:text-[#ededed] hover:border-[#c8c8c8] dark:hover:border-[#444] transition-colors duration-200"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </motion.button>

            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => paginate(-1)}
                  className="absolute left-2 md:left-6 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-[#e0e0e0] dark:border-[#2a2a2a] text-[#1a1a1a] dark:text-[#ededed] hover:border-[#c8c8c8] dark:hover:border-[#444] transition-colors duration-200"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => paginate(1)}
                  className="absolute right-2 md:right-6 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-[#e0e0e0] dark:border-[#2a2a2a] text-[#1a1a1a] dark:text-[#ededed] hover:border-[#c8c8c8] dark:hover:border-[#444] transition-colors duration-200"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </>
            )}

            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={photo.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease }}
                drag={photos.length > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.08}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -40) paginate(1)
                  else if (info.offset.x > 40) paginate(-1)
                }}
                className="max-w-[90vw] max-h-[75vh] md:max-h-[80vh] cursor-grab active:cursor-grabbing"
              >
                {photo.src ? (
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    draggable={false}
                    className="max-w-[90vw] max-h-[75vh] md:max-h-[80vh] w-auto h-auto object-contain pointer-events-none rounded-md"
                  />
                ) : (
                  <div className="w-[70vw] max-w-[480px] aspect-[4/5] flex items-center justify-center rounded-md border border-[#e0e0e0] dark:border-[#2a2a2a] bg-[#f5f5f5] dark:bg-[#0a0a0a]">
                    <span className="font-mono text-xs text-[#8a8a8a] dark:text-[#666] tracking-widest">
                      [ {photo.alt} ]
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
