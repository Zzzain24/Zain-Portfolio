"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { ImageDithering } from "@paper-design/shaders-react"

export function DitherPanel({ className = "" }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <div
      className={`hidden sm:block pointer-events-none absolute -top-6 right-0 -z-10 w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] opacity-[0.35] dark:opacity-[0.28] ${className}`}
      style={{
        maskImage: "linear-gradient(to bottom left, black 30%, transparent 85%)",
        WebkitMaskImage: "linear-gradient(to bottom left, black 30%, transparent 85%)",
      }}
      aria-hidden="true"
    >
      <ImageDithering
        image="/images/fujifilm.jpg"
        width="100%"
        height="100%"
        style={{ display: "block" }}
        colorBack={isDark ? "#0a0a0a" : "#fafafa"}
        colorFront={isDark ? "#fafafa" : "#0a0a0a"}
        type="4x4"
        size={3}
        colorSteps={2}
        fit="cover"
      />
    </div>
  )
}
