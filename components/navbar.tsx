"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Menu } from "lucide-react"
import { useScrollContext } from "./smooth-scroll-provider"
import { MobileMenu } from "./mobile-menu"

const ease = [0.16, 1, 0.3, 1]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { currentSection } = useScrollContext()

  const navItems = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
    { name: "Photography", href: "#photography", id: "photography" },
  ]

  const { scrollY } = useScroll()
  const pillScale = useTransform(scrollY, [0, 100], [1, 0.94])
  const pillPaddingY = useTransform(scrollY, [0, 100], [10, 6])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="fixed top-4 md:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto"
        role="navigation"
        aria-label="Main navigation"
      >
        <motion.div
          style={{ paddingTop: pillPaddingY, paddingBottom: pillPaddingY, scale: pillScale }}
          className={`flex items-center justify-between md:justify-start gap-1 md:gap-2 pl-4 pr-2 md:pl-5 md:pr-2.5 rounded-full border transition-colors duration-500 ${
            scrolled ? "bg-black/85 backdrop-blur-md border-[#2a2a2a]" : "bg-black/45 backdrop-blur-sm border-[#222]"
          }`}
        >
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 md:gap-3 group focus-visible:outline-2 outline-offset-2 outline-[#525252]"
            aria-label="Portfolio home"
          >
            <span className="text-sm tracking-wide text-[#888] group-hover:text-[#c4c4c4] transition-colors duration-200">Home</span>
          </a>

          <div className="w-px h-4 bg-[#2a2a2a] mx-1 hidden md:block" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main links">
            {navItems.map((item) => {
              const active = currentSection === item.id
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-2.5 md:px-3 py-2 text-xs md:text-sm tracking-wide transition-colors duration-200 focus-visible:outline-2 outline-offset-2 outline-[#525252] rounded-full"
                  style={{ color: active ? "#fafafa" : "#888888" }}
                  aria-current={active ? "page" : undefined}
                >
                  {/* Sliding active indicator */}
                  <AnimatePresence>
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-full"
                        style={{ background: "rgba(255,255,255,0.06)" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10 transition-colors duration-200" style={{ color: active ? "#fafafa" : undefined }}>
                    {item.name}
                  </span>
                  {/* Bottom dot indicator */}
                  <AnimatePresence>
                    {active && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#555]"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2, ease }}
                      />
                    )}
                  </AnimatePresence>
                </a>
              )
            })}
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-[#2a2a2a] text-[#ededed]"
              whileHover={{ borderColor: "#444", backgroundColor: "rgba(255,255,255,0.03)" }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.15 }}
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              <Menu className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
