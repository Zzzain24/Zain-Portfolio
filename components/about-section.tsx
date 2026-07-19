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
          <div className="h-px bg-[#2a2a2a] mb-6 md:mb-6" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#404040]" />
              <span className="font-mono text-[#999] text-xs md:text-sm">
                About
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
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
              <p className="text-base md:text-lg text-[#c4c4c4] leading-relaxed">
                [ Placeholder: intro paragraph about who you are and what you
                build. ]
              </p>
            </div>

            <div>
              <p className="text-base md:text-lg text-[#c4c4c4] leading-relaxed">
                Currently a Software Engineer at{" "}
                <a
                  href="https://www.homedepot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fafafa] underline decoration-[#a1a1a1] hover:decoration-[#fafafa] transition-colors duration-300"
                >
                  The Home Depot
                </a>
                .
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-base md:text-lg text-[#c4c4c4] leading-relaxed">
                [ Placeholder: what you care about — how you approach problems,
                what drives your work. ]
              </p>
            </div>

            <div>
              <p className="text-base md:text-lg text-[#c4c4c4] leading-relaxed">
                When I'm not writing code, you'll find me behind a camera,
                tinkering with AI tools, or [ placeholder ].
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
