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
            className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-white/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_15px_40px_rgba(255,91,0,0.12)] hover:translate-y-[-2px]"
          >
            {/* Ambient backlight glow on card hover */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

            <div>
              {/* Card Top Pill: Status */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-primary font-bold">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>PROJECT 0{i + 1}</span>
                </div>
                {project.liveUrl ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 px-2.5 py-0.5 font-mono text-[10px] text-orange-600 font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                    <span>AWS EC2 LIVE</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] text-amber-700 font-semibold">
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
                <p className="mt-1 font-mono text-xs font-bold text-primary">
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
              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border/80 pt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-slate-50 px-2.5 py-1 font-mono text-[11px] text-slate-700 font-medium transition-colors hover:border-primary/40 hover:text-primary"
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
                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-[0_4px_15px_rgba(255,91,0,0.3)] transition-all hover:bg-orange-600 active:scale-95"
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
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:bg-slate-50 hover:border-primary/40 active:scale-95 shadow-sm"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>Code</span>
                  </a>
                )}
              </div>

              {project.caseStudy && (
                <button
                  type="button"
                  onClick={() => setActiveCaseStudy(project)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-primary/30 bg-orange-500/10 px-3.5 py-2 text-xs font-mono font-semibold text-primary transition-all hover:bg-primary hover:text-white cursor-pointer"
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
      {activeCaseStudy && activeCaseStudy.caseStudy && (
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

