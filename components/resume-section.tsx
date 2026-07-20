"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

export function ResumeSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="resume" className="py-8 md:py-12 relative">
      <div className="px-6 md:px-8">
        {/* Section header */}
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
                Resume
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#a8a8a8] dark:bg-[#525252] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#e0e0e0] dark:bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease }}
          className="md:pl-6 rounded-lg border border-[#e0e0e0] dark:border-[#2a2a2a] bg-[#f5f5f5] dark:bg-[#0a0a0a] p-5 md:p-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-base md:text-lg font-medium text-[#0a0a0a] dark:text-[#fafafa] mb-1">
                Zain Bharde — Resume
              </h3>
              <p className="font-mono text-xs text-[#8a8a8a] dark:text-[#666] tracking-wide">
                PDF · Updated 2026
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#0a0a0a] dark:text-[#fafafa] hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                Open Resume
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300" />
              </a>

              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#6b6b6b] dark:text-[#999] hover:text-[#0a0a0a] dark:hover:text-[#fafafa] transition-colors duration-300"
              >
                Preview
                <motion.span
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="flex items-center justify-center"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease }}
                style={{ overflow: "hidden" }}
              >
                <div className="pt-6 mt-6 border-t border-[#e8e8e8] dark:border-[#1e1e1e]">
                  <iframe
                    src="/resume.pdf"
                    className="w-full aspect-[8.5/11] md:aspect-[1.4/1] rounded-lg border border-[#e0e0e0] dark:border-[#2a2a2a]"
                    title="Resume preview"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-14 flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 bg-[#e0e0e0] dark:bg-[#2a2a2a] rounded-full" />
          <div className="w-12 md:w-16 h-px bg-[#e8e8e8] dark:bg-[#1e1e1e]" />
          <div className="w-1 h-1 bg-[#e8e8e8] dark:bg-[#1e1e1e] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
