"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  const easing = [0.2, 0, 0.38, 0.9];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: easing,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: easing,
      },
    },
  };

  return (
    <section id="about" className="py-8 md:py-12 relative">
      <div className="px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15, ease: [0.2, 0, 0.38, 0.9] }}
          className="relative mb-8 md:mb-10"
        >
          <div className="h-px bg-[#e0e0e0] dark:bg-[#2a2a2a] mb-6 md:mb-6" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#d4d4d4] dark:bg-[#404040]" />
              <span className="font-mono text-[#6b6b6b] dark:text-[#999] text-xs md:text-sm">
                About
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#a8a8a8] dark:bg-[#525252] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#e0e0e0] dark:bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: [0.2, 0, 0.38, 0.9] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          <div className="space-y-8">
            <div>
              <p className="text-base md:text-lg text-[#3a3a3a] dark:text-[#c4c4c4] leading-relaxed">
                I'm a Texas A&M University graduate with a B.S. in Data
                Engineering and a minor in Computer Science, based in Houston,
                TX.
              </p>
            </div>

            <div>
              <p className="text-base md:text-lg text-[#3a3a3a] dark:text-[#c4c4c4] leading-relaxed">
                Currently a Software Engineer at{" "}
                <a
                  href="https://www.homedepot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0a0a0a] dark:text-[#fafafa] underline decoration-[#525252] dark:decoration-[#a1a1a1] hover:decoration-[#0a0a0a] dark:hover:decoration-[#fafafa] transition-colors duration-300"
                >
                  The Home Depot
                </a>
                , building on the Sourcing Core team. My role focuses primarily
                on testing and maintaining features for the Sourcing Core API,
                which is responsible for aggregating valid sourcing paths for
                items in Home Depot orders.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-base md:text-lg text-[#3a3a3a] dark:text-[#c4c4c4] leading-relaxed">
                I have the most fun experimenting with modern AI tools like
                Claude Code and Cursor, building projects with modern full-stack
                frameworks, and applying these skills to solve real user
                problems.
              </p>
            </div>

            <div>
              <p className="text-base md:text-lg text-[#3a3a3a] dark:text-[#c4c4c4] leading-relaxed">
                Outside of work, I enjoy playing basketball, traveling, and
                photography. I currently shoot with a Fujifilm X-T30 III and
                plan to capture more moments as I travel more in the future.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
