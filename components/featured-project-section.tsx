"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "aggie-ai",
    title: "Aggie AI",
    image: "/images/aggie_ai.png",
    alt: "Aggie AI - RAG-based course and professor recommendation platform for Texas A&M students",
    description:
      "Aggie AI is a RAG-based AI platform serving over 1,500 active users, providing natural language course recommendations for Texas A&M students based on course GPA distributions and professor reviews.",
    sections: [
      {
        title: "The Challenge",
        content:
          "Texas A&M students need to weigh course GPA distributions and professor reviews scattered across different sources to make informed registration decisions, with no simple way to ask questions in plain language.",
      },
      {
        title: "What I Built",
        content:
          "A RAG-based AI system combined with web search and a PostgreSQL backend to answer natural language questions about courses and professors. Built a Python data pipeline with automated PDF extraction and web scraping to collect and process academic data and professor reviews, integrating results into an optimized PostgreSQL database schema.",
      },
      {
        title: "The Impact",
        content: "Serving over 1,500 active users.",
      },
    ],
    role: "Full-Stack Development, Data Pipeline, RAG AI",
    links: [{ text: "Live", url: "https://www.aggieai.us" }],
  },
  {
    id: "umari",
    title: "Umari",
    image: "/images/umari.png",
    alt: "Umari - web-based ordering platform for small food vendors",
    description:
      "Umari is a web-based ordering platform built with Next.js, Stripe, and Supabase that enables small food vendors to accept orders via shareable links or QR codes, processing 150+ transactions in production.",
    sections: [
      {
        title: "The Challenge",
        content:
          "Small food vendors need a simple, low-cost way to take orders online without adopting a heavy point-of-sale system.",
      },
      {
        title: "What I Built",
        content:
          "A full-stack SaaS architecture with real-time order management, Stripe Connect payouts, and a responsive UI using Radix UI and Framer Motion, letting vendors accept orders through shareable links or QR codes.",
      },
      {
        title: "The Impact",
        content: "Deployed in production, processing 150+ transactions.",
      },
    ],
    role: "Full-Stack Development, Product Design",
    links: [{ text: "Live", url: "https://www.umari.app" }],
  },
  {
    id: "moodsort",
    title: "MoodSort",
    image: "/images/mood_sort.png",
    alt: "MoodSort - AI playlist curation app built with Spotify Web API",
    description:
      "MoodSort is a full-stack AI playlist curation app built with Next.js, Supabase, and the Spotify Web API that generates personalized playlists from a user's existing liked songs library.",
    sections: [
      {
        title: "The Challenge",
        content:
          "Existing playlist tools don't let users describe a vibe in plain language and get a playlist built from music they already like.",
      },
      {
        title: "What I Built",
        content:
          "A playlist curation engine that takes natural language vibe descriptions and seed songs, then pulls from a user's existing Spotify liked-songs library to generate a personalized playlist.",
      },
    ],
    role: "Full-Stack Development",
    links: [{ text: "Live", url: "https://mood-sort.vercel.app" }],
  },
];

const slideEase = [0.4, 0, 0.2, 1];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export function FeaturedProject() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    projects.forEach((p) => {
      const img = new window.Image();
      img.src = p.image;
    });
  }, []);

  const paginate = (dir: number) => {
    setDirection(dir);
    setActiveIndex((prev) => (prev + dir + projects.length) % projects.length);
  };

  const goTo = (i: number) => {
    setDirection(i > activeIndex ? 1 : -1);
    setActiveIndex(i);
  };

  const project = projects[activeIndex];

  return (
    <section id="projects" className="py-12 md:py-16 relative">
      <div className="px-6 md:px-8">
        {/* Section header */}
        <div className="relative mb-8 md:mb-10">
          <div className="h-px bg-[#e0e0e0] dark:bg-[#2a2a2a] mb-6" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#d4d4d4] dark:bg-[#404040]" />
              <span className="font-mono text-[#6b6b6b] dark:text-[#999] text-xs md:text-sm font-medium tracking-widest">
                Projects
              </span>
            </div>

            {/* Dots + arrows */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to project ${i + 1}`}
                  >
                    <div
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-[18px] bg-[#6b6b6b] dark:bg-[#888]"
                          : "w-1.5 bg-[#cccccc] dark:bg-[#333]"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => paginate(-1)}
                className="flex items-center justify-center w-7 h-7 border border-[#e0e0e0] dark:border-[#2a2a2a] text-[#9a9a9a] dark:text-[#555] hover:border-[#9a9a9a] dark:hover:border-[#555] hover:text-[#3a3a3a] dark:hover:text-[#c4c4c4] transition-colors duration-200 rounded-sm"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="flex items-center justify-center w-7 h-7 border border-[#e0e0e0] dark:border-[#2a2a2a] text-[#9a9a9a] dark:text-[#555] hover:border-[#9a9a9a] dark:hover:border-[#555] hover:text-[#3a3a3a] dark:hover:text-[#c4c4c4] transition-colors duration-200 rounded-sm"
                aria-label="Next project"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={project.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: slideEase }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.08}
              onDragEnd={(_, info) => {
                if (info.offset.x < -40) paginate(1);
                else if (info.offset.x > 40) paginate(-1);
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <div className="md:pl-6">
                {/* Image */}
                <div className="group relative mb-8 md:mb-12 rounded-lg overflow-hidden bg-[#f5f5f5] dark:bg-[#0a0a0a] border border-[#ececec] dark:border-[#1a1a1a] hover:border-[#d4d4d4] dark:hover:border-[#404040] transition-all duration-300 select-none">
                  <div className="relative w-full aspect-video">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover pointer-events-none"
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6 md:pl-4">
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-[#0a0a0a] dark:text-[#fafafa] text-pretty">
                      {project.title}
                    </h3>

                    <div className="space-y-4 text-base md:text-lg leading-relaxed">
                      <p className="text-[#3a3a3a] dark:text-[#c4c4c4]">{project.description}</p>

                      <div className="space-y-5 md:space-y-6 pt-2 text-[#525252] dark:text-[#a1a1a1]">
                        {project.sections.map((section, idx) => (
                          <div key={idx}>
                            <h4 className="text-sm md:text-base text-[#0a0a0a] dark:text-[#fafafa] font-semibold mb-2">
                              {section.title}
                            </h4>
                            <p className="text-sm md:text-base leading-relaxed">
                              {section.content}
                            </p>
                          </div>
                        ))}

                        <p className="text-sm text-[#6b6b6b] dark:text-[#999] pt-2">
                          <span className="text-[#0a0a0a] dark:text-[#fafafa] font-medium">
                            Role:
                          </span>{" "}
                          {project.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="pt-4 flex items-center gap-4 flex-wrap">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="group/link inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#0a0a0a] dark:text-[#fafafa] hover:text-black dark:hover:text-white transition-colors duration-300"
                      >
                        {link.text}
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#a8a8a8] dark:bg-[#525252] rounded-full" />
          <div className="w-12 md:w-16 h-px bg-[#e0e0e0] dark:bg-[#2a2a2a]" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#bbbbbb] dark:bg-[#363636] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
