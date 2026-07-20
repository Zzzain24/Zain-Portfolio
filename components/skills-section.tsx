"use client"

import { motion } from "framer-motion"

const ease = [0.16, 1, 0.3, 1]

const skills = [
  {
    name: "Claude Code",
    icon: "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/claudecode-color.svg",
  },
  {
    name: "Cursor",
    icon: "https://cdn.simpleicons.org/cursor/000000",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Golang",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Gcloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Postgres",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-8 md:py-12 relative">
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
                Technical Skills
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#a8a8a8] dark:bg-[#525252] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#e0e0e0] dark:bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        {/* Icon grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease }}
          className="grid grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-5 sm:gap-x-8 sm:gap-y-10 md:gap-x-10 max-w-2xl mx-auto justify-items-center"
        >
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white border border-[#e0e0e0] dark:border-[#2a2a2a] hover:border-[#c8c8c8] dark:hover:border-[#404040] transition-colors duration-300 flex items-center justify-center p-3.5 md:p-4">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  title={skill.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="font-mono text-xs md:text-sm text-[#6b6b6b] dark:text-[#888] text-center tracking-wide leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
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
  )
}
