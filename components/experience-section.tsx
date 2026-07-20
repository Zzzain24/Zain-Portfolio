"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const roles = [
  {
    company: "The Home Depot",
    logo: "/images/home_depot.jpeg",
    title: "Software Engineer",
    period: "Jun 2026 — Present",
    location: "Atlanta, GA - Remote",
    bullets: ["Sourcing Core team"],
  },
  {
    company: "Dematic",
    logo: "/images/dematic.svg.png",
    title: "Software Development Engineer Intern",
    period: "May 2024 — Jun 2026",
    location: "Grand Rapids, MI - Remote",
    bullets: [
      "Increased autonomous robot storage selection accuracy by 25% by developing pallet storage logistics software for optimal container selection",
      "Implemented 10+ Nocobase data interfaces enabling warehouse operators to manage device control system data, reducing manual data entry time across insert, update, and delete operations",
    ],
  },
  {
    company: "The Home Depot",
    logo: "/images/home_depot.jpeg",
    title: "Software Engineer Intern",
    period: "May 2025 — Jul 2025",
    location: "Atlanta, GA - Remote",
    bullets: [
      "Improved P95 API response times by 90% and cut cloud costs by 50% by migrating core sourcing service from Java to Go",
      "Optimized system performance by reducing memory usage 35x and CPU consumption by 40% on average across load levels",
      "Delivered project 1 week early and presented final readout to 100+ associates including executives, managers, and engineers",
    ],
  },
  {
    company: "Texas A&M University",
    logo: "/images/tamu.svg.png",
    title: "Undergraduate Research Assistant",
    period: "Jan 2024 — May 2024",
    location: "College Station, TX",
    bullets: [
      "Developed a Python script achieving 1.38% error in image distortion removal and contributed to a C++ visual odometry pipeline, improving feature tracking accuracy for autonomous navigation research",
    ],
  },
  {
    company: "CLOUDSUFI",
    logo: "/images/cloud_sufi.jpeg",
    title: "Data Engineering Intern",
    period: "Aug 2023 — Jan 2024",
    location: "Houston, TX - Remote",
    bullets: [
      "Explored Google Cloud Platform data engineering services including Cloud Cortex Framework for SAP and Looker, earning certifications in Google Analytics, Looker, and machine learning",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-8 md:py-12 relative">
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
                Experience
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#a8a8a8] dark:bg-[#525252] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#e0e0e0] dark:bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4d4d4] dark:from-[#404040] via-[#e0e0e0] dark:via-[#2a2a2a] to-transparent hidden md:block" />

          <div className="md:pl-6 space-y-10">
            {roles.map((role, index) => (
              <motion.div
                key={`${role.company}-${role.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, ease, delay: index * 0.08 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-3">
                  <h3 className="flex items-center gap-2.5 text-lg md:text-xl font-medium text-[#0a0a0a] dark:text-[#fafafa]">
                    <span className="w-6 h-6 md:w-7 md:h-7 rounded-md bg-white border border-[#e0e0e0] dark:border-[#2a2a2a] flex items-center justify-center overflow-hidden flex-shrink-0 p-1">
                      <img
                        src={role.logo}
                        alt={`${role.company} logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </span>
                    {role.company}{" "}
                    <span className="text-[#6b6b6b] dark:text-[#888] font-normal">
                      · {role.title}
                    </span>
                  </h3>
                  <span className="font-mono text-xs md:text-sm text-[#6b6b6b] dark:text-[#999] tracking-wide flex-shrink-0">
                    {role.period}
                  </span>
                </div>

                <p className="font-mono text-xs text-[#8a8a8a] dark:text-[#666] tracking-wide mb-4">
                  {role.location}
                </p>

                <ul className="space-y-2">
                  {role.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm md:text-base text-[#525252] dark:text-[#a1a1a1] leading-relaxed"
                    >
                      <span className="text-[#a8a8a8] dark:text-[#525252] mt-1.5">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

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
