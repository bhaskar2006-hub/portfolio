'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  Layers,
  Lock,
  Server,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Section, SectionHeading } from '@/components/section'
import { projects, type Project } from '@/lib/resume'
import { CaseStudyModal } from '@/components/case-study-modal'

export function Projects() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null)

  return (
    <Section id="projects" className="relative">
      <SectionHeading
        index="02"
        title="Featured Projects"
        subtitle="Full-stack systems, secure backend architectures, and production cloud deployments."
      />

      <div className="grid gap-7 lg:grid-cols-3">
        {projects.map((project, i) => {
          const isDevFlow = project.id === 'devflow'
          const isGoCart = project.id === 'gocart'
          const isByteSecure = project.id === 'bytesecure'

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-white/95 p-6 sm:p-7 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl dark:bg-slate-900/90 ${
                isDevFlow
                  ? 'border-orange-500/40 shadow-orange-500/10 hover:border-primary'
                  : 'border-border/80 hover:border-primary/50'
              }`}
            >
              {/* Subtle ambient card glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-500/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Top Header Pill Bar */}
                <div className="mb-5 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 font-mono text-[11px] font-bold text-primary">
                    {project.category}
                  </span>

                  {project.liveUrl ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>LIVE DEMO</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 border border-border px-2.5 py-0.5 font-mono text-[10px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      <Lock className="h-3 w-3 text-primary" />
                      <span>BACKEND REST API</span>
                    </span>
                  )}
                </div>

                {/* Project Title & Tagline */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-semibold text-primary">
                    {project.tagline}
                  </p>
                </div>

                {/* Punchy Description */}
                <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                {/* Key Highlights Bullet Points */}
                <div className="mt-5 space-y-2 border-t border-border/70 pt-4">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Engineering Highlights
                  </div>
                  <ul className="space-y-1.5">
                    {project.highlights.slice(0, 3).map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-5 pt-4 border-t border-border/70">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border/80 bg-slate-50/90 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="mt-6 pt-4 border-t border-border/80 flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-orange-500/20 hover:bg-orange-600 transition-all cursor-pointer active:scale-95"
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-3 py-2 text-xs font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-all dark:bg-slate-800 shadow-2xs active:scale-95"
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
                    className="inline-flex items-center gap-1.5 rounded-xl border border-primary/30 bg-orange-500/10 px-3 py-2 text-xs font-mono font-bold text-primary hover:bg-primary hover:text-white transition-all cursor-pointer active:scale-95"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Case Study</span>
                  </button>
                )}
              </div>
            </motion.article>
          )
        })}
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
