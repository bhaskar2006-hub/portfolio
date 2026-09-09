'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpen, ExternalLink, Globe, Layers, ShieldCheck, Sparkles } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Section, SectionHeading } from '@/components/section'
import { projects } from '@/lib/resume'
import { GoCartPreview, ByteSecurePreview } from '@/components/project-preview'
import { CaseStudyModal } from '@/components/case-study-modal'

export function Projects() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<(typeof projects)[0] | null>(null)

  return (
    <Section id="projects">
      <SectionHeading
        index="03"
        title="Featured Engineering Projects"
        subtitle="Full-stack systems built from scratch — from scalable e-commerce on AWS EC2 to role-based access authentication."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-gradient-to-b from-card/90 via-card/70 to-card/40 p-6 sm:p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.12)]"
          >
            {/* Ambient backlight glow on card hover */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

            <div>
              {/* Card Top Pill: Status */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-primary font-semibold">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>PROJECT 0{i + 1}</span>
                </div>
                {project.liveUrl ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/50 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>AWS EC2 LIVE</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-950/50 px-2.5 py-0.5 font-mono text-[10px] text-violet-300">
                    <ShieldCheck className="h-3 w-3" />
                    <span>RBAC SECURED</span>
                  </span>
                )}
              </div>

              {/* Visual UI Preview Banner Frame */}
              <div className="mb-6 overflow-hidden rounded-2xl border border-border/80 shadow-inner">
                {project.id === 'gocart' ? <GoCartPreview /> : <ByteSecurePreview />}
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-1 font-mono text-xs font-semibold text-primary">
                  {project.tagline}
                </p>
              </div>

              <p className="mt-3.5 leading-relaxed text-muted-foreground text-sm">
                {project.description}
              </p>

              {/* Key Bullet Highlights */}
              <ul className="mt-4 space-y-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground/90"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border/70 bg-secondary/80 px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons: Live Demo, GitHub Repo, Read Case Study */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/80 pt-5">
              <div className="flex flex-wrap items-center gap-2.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all hover:opacity-90 active:scale-95"
                  >
                    <span>Launch App</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-secondary/90 px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:bg-card hover:border-primary/40 active:scale-95"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>

              {project.caseStudy && (
                <button
                  onClick={() => setActiveCaseStudy(project)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2.5 font-mono text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-md active:scale-95 cursor-pointer"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Case Study</span>
                </button>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Case Study Modal Popup */}
      {activeCaseStudy && (
        <CaseStudyModal
          isOpen={!!activeCaseStudy}
          onClose={() => setActiveCaseStudy(null)}
          projectName={activeCaseStudy.name}
          caseStudy={activeCaseStudy.caseStudy}
          liveUrl={activeCaseStudy.liveUrl}
          repoUrl={activeCaseStudy.repoUrl}
        />
      )}
    </Section>
  )
}

