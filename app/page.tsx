"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { FeaturedProject } from "@/components/featured-project-section"
import { WorkSection } from "@/components/work-section"
import { PhotographySection } from "@/components/photography-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { SmoothScrollProvider, SectionTransition } from "@/components/smooth-scroll-provider"
export default function Home() {
  const aboutRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const featuredRef = useRef<HTMLElement>(null)
  const workRef = useRef<HTMLElement>(null)
  const photographyRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const footerRef = useRef<HTMLElement>(null)
  return (
    <SmoothScrollProvider>
      <Navbar />
      <motion.main
        className="min-h-screen relative w-full overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: [0.2, 0, 0.38, 0.9] }}
      >
        {/* Full-width container with centered content */}
        <div className="relative w-full">
          {/* Centered content container with scroll preview effect */}
          <div className="grid-container scroll-preview-container">
            <section id="hero" aria-label="Hero section" className="scroll-section">
              <SectionTransition id="hero">
                <HeroSection />
              </SectionTransition>
            </section>

            <section id="about" ref={aboutRef} aria-label="About" className="scroll-section">
              <SectionTransition id="about">
                <AboutSection />
              </SectionTransition>
            </section>

            <section id="experience" ref={experienceRef} aria-label="Experience" className="scroll-section">
              <SectionTransition id="experience">
                <ExperienceSection />
              </SectionTransition>
            </section>

            <section id="projects" ref={featuredRef} aria-label="Projects" className="scroll-section">
              <SectionTransition id="projects">
                <FeaturedProject />
              </SectionTransition>
            </section>

            <section id="work" ref={workRef} aria-label="Experiments" className="scroll-section">
              <SectionTransition id="work">
                <WorkSection />
              </SectionTransition>
            </section>

            <section id="contact" ref={contactRef} aria-label="Contact" className="scroll-section">
              <SectionTransition id="contact">
                <ContactSection />
              </SectionTransition>
            </section>

            <section id="photography" ref={photographyRef} aria-label="Photography" className="scroll-section">
              <SectionTransition id="photography">
                <PhotographySection />
              </SectionTransition>
            </section>

            <footer ref={footerRef} className="scroll-section">
              <Footer />
            </footer>
          </div>
        </div>
      </motion.main>
    </SmoothScrollProvider>
  )
}
