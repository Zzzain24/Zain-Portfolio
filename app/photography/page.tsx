"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PhotographySection } from "@/components/photography-section"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

export default function PhotographyPage() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <motion.main
        className="min-h-screen relative w-full overflow-x-hidden pt-28 md:pt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: [0.2, 0, 0.38, 0.9] }}
      >
        <div className="grid-container">
          <PhotographySection />
          <Footer />
        </div>
      </motion.main>
    </SmoothScrollProvider>
  )
}
