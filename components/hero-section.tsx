"use client"

import { motion } from "framer-motion"

const ease = [0.16, 1, 0.3, 1]

export const HeroSection = () => {
  const bioWords = "Software Engineer at The Home Depot, passionate about building software and tinkering with AI tools.".split(" ")

  return (
    <section id="hero" className="pt-24 pb-14 md:pt-36 md:pb-24 relative">
      <div className="px-6 md:px-8 flex flex-col items-center text-center">

        {/* Profile photo — centered, larger */}
        <motion.div
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border border-[#e0e0e0] dark:border-[#2a2a2a]">
            <img
              src="/images/Zain_PFP.jpg"
              alt="Zain Bharde"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center top" }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-2xl md:text-3xl lg:text-[2.6rem] font-medium text-[#0a0a0a] dark:text-[#fafafa] tracking-tight mb-7 md:mb-10 leading-tight"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          Zain Bharde
        </motion.h1>

        {/* Bio — word-by-word stagger */}
        <p className="text-base md:text-lg text-[#3a3a3a] dark:text-[#c4c4c4] max-w-xl leading-relaxed">
          {bioWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.28em]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                ease,
                delay: 0.18 + i * 0.022,
              }}
            >
              {word}
            </motion.span>
          ))}
        </p>

        {/* Decorative rule */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.55 }}
          style={{ transformOrigin: "center" }}
          className="mt-10 md:mt-14 flex items-center gap-3"
        >
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#8a8a8a] dark:bg-[#636363] rounded-full" />
          <div className="w-16 md:w-24 h-px bg-[#e0e0e0] dark:bg-[#2a2a2a]" />
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#c8c8c8] dark:bg-[#3a3a3a] rounded-full" />
        </motion.div>

      </div>
    </section>
  )
}
