"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "sylvan",
    title: "Sylvan",
    image: "/images/sylvan-featured.gif",
    alt: "Sylvan - Revenue intelligence platform",
    description:
      "Sylvan helps teams understand what actually drives revenue by making customer data simple to read. Most analytics tools bury you in reports and slow dashboards. Sylvan cuts through that.",
    sections: [
      {
        title: "The Challenge",
        content:
          "Revenue teams need to spot the small changes in customer behavior that matter. The problem is most platforms make this harder, not easier. We needed to build an identity that felt like the opposite of cluttered analytics tools.",
      },
      {
        title: "What We Built",
        content:
          "We created the signal mark—a visual system that shows how customer actions create patterns over time. It shifts and adapts, kind of like how real opportunities appear in customer journeys. The mark became the core of Sylvan's identity.",
      },
      {
        title: "The Approach",
        content:
          "Keep it simple but make it mean something. The identity had to communicate clarity without feeling cold or technical. Every piece of the system reinforces the idea that Sylvan turns noise into signal.",
      },
    ],
    role: "Brand Design, Logo Design, Web Design, Visual System",
    links: [{ text: "Website", url: "https://sylvanlabs.com" }],
  },
  {
    id: "chessever",
    title: "ChessEver",
    image: "/images/chessever-featured.png",
    alt: "ChessEver - Real-time chess tournament tracking",
    description:
      "ChessEver is a mobile app that lets you follow professional chess tournaments and players in real time. With FollowChess gone, there was no simple way to track live games, standings, and player stats in one place. We built ChessEver to bring that back.",
    sections: [
      {
        title: "The Problem",
        content:
          "Chess fans had no intuitive way to follow live tournaments. Existing platforms were clunky, outdated, or shut down entirely. Serious players and fans needed something that felt natural. Swipe between games, pin favorites, search any player or event instantly.",
      },
      {
        title: "What We Built",
        content:
          "We designed the entire product from zero. Clean interface. Real-time game tracking. Engine evaluation. Complete player stats and head-to-head records. Everything works exactly how you'd expect it to. No learning curve.",
      },
      {
        title: "The Approach",
        content:
          "Every feature had to earn its place. We focused on getting the core experience right. Watching games unfold with precision, following your favorite players, curating your own feed. Simple to use, built for people who actually care about chess.",
      },
      {
        title: "The Impact",
        content:
          "Launched on iOS and Android. Averaging 200+ sign-ups daily since launch. Selected as Top 10 finalist in TWIST Gamma Pitch Deck Competition. Growing Discord community. We're still actively building, refining based on user feedback.",
      },
    ],
    role: "0-1 Product Experience",
    links: [
      { text: "Website", url: "https://chessever.com" },
      {
        text: "iOS",
        url: "https://apps.apple.com/us/app/chessever/id6752567269",
      },
      {
        text: "Android",
        url: "https://play.google.com/store/apps/details?id=com.chessEver.app",
      },
    ],
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export function FeaturedProject() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

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
          <div className="h-px bg-[#2a2a2a] mb-6" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#404040]" />
              <span className="font-mono text-[#999] text-xs md:text-sm font-medium tracking-widest">
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
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: i === activeIndex ? "18px" : "6px",
                        height: "6px",
                        backgroundColor: i === activeIndex ? "#888" : "#333",
                      }}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => paginate(-1)}
                className="flex items-center justify-center w-7 h-7 border border-[#2a2a2a] text-[#555] hover:border-[#555] hover:text-[#c4c4c4] transition-colors duration-200 rounded-sm"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="flex items-center justify-center w-7 h-7 border border-[#2a2a2a] text-[#555] hover:border-[#555] hover:text-[#c4c4c4] transition-colors duration-200 rounded-sm"
                aria-label="Next project"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={project.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
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
                <div className="group relative mb-8 md:mb-12 rounded-lg overflow-hidden bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#404040] transition-all duration-300 select-none">
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
                    <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-[#fafafa] text-pretty">
                      {project.title}
                    </h3>

                    <div className="space-y-4 text-base md:text-lg leading-relaxed">
                      <p className="text-[#c4c4c4]">{project.description}</p>

                      <div className="space-y-5 md:space-y-6 pt-2 text-[#a1a1a1]">
                        {project.sections.map((section, idx) => (
                          <div key={idx}>
                            <h4 className="text-sm md:text-base text-[#fafafa] font-semibold mb-2">
                              {section.title}
                            </h4>
                            <p className="text-sm md:text-base leading-relaxed">
                              {section.content}
                            </p>
                          </div>
                        ))}

                        <p className="text-sm text-[#999] pt-2">
                          <span className="text-[#fafafa] font-medium">
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
                        className="group/link inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#fafafa] hover:text-white transition-colors duration-300"
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
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
          <div className="w-12 md:w-16 h-px bg-[#2a2a2a]" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#363636] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
