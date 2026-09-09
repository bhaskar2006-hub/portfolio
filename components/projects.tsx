'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpen, ExternalLink, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Section, SectionHeading } from '@/components/section'
import { projects } from '@/lib/resume'
import { GoCartPreview, ByteSecurePreview, DevFlowPreview } from '@/components/project-preview'
import { CaseStudyModal } from '@/components/case-study-modal'

export function Projects() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<(typeof projects)[0] | null>(null)

  const devflow = projects.find((p) => p.id === 'devflow') || projects[0]
  const otherProjects = projects.filter((p) => p.id !== 'devflow')

  return (
    <Section id="projects">
      <SectionHeading
        index="01"
        title="FEATURED ENGINEERING WORK"
        subtitle="Real applications, real systems, real engineering."
      />

      {/* -------------------------------------------------------------------- */}
      {/*                    FLAGSHIP PROJECT: DEVFLOW                        */}
      {/* -------------------------------------------------------------------- */}
      {devflow && (
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="group relative overflow-hidden rounded-3xl border border-orange-500/30 bg-white/95 p-6 sm:p-9 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-primary hover:shadow-[0_20px_50px_rgba(255,91,0,0.14)]"
        >
          {/* Ambient backlight glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/10 opacity-70 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

          {/* Top Pill Header */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-primary tracking-wider">
              <Sparkles className="h-4 w-4" />
              <span>01 / FEATURED ENGINEERING PROJECT</span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-bold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>● PRODUCTION / LIVE</span>
            </span>
          </div>

          {/* Large Real App UI Preview Banner */}
          <div className="mb-8 overflow-hidden rounded-2xl border border-border/90 shadow-sm transition-transform duration-500 group-hover:scale-[1.01]">
            <DevFlowPreview />
          </div>

          {/* DevFlow Information & Metadata */}
          <div className="grid gap-6 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7 space-y-3">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {devflow.name}
                </h3>
                <p className="font-mono text-xs sm:text-sm font-bold text-primary mt-1">
                  {devflow.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground font-normal">
                A full-stack collaboration platform for development teams to manage organizations, projects, issues, assignments, comments and development activity from a centralized workspace.
              </p>

              {/* Core Stack Inline Tag */}
              <div className="pt-1 font-mono text-xs text-slate-700 font-semibold flex items-center gap-2">
                <span className="text-primary font-bold">Stack:</span>
                <span>React · TypeScript · Node.js · Express · MongoDB</span>
              </div>
            </div>

            {/* Feature Metadata Badges & CTAs (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5 lg:border-l lg:border-border/80 lg:pl-6">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-2.5">
                  Core Engineering Capabilities
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {[
                    'JWT Authentication',
                    'Google OAuth',
                    'RBAC (4 Roles)',
                    'REST APIs',
                    'Issue Management',
                    'Activity Tracking',
                    'Docker Container',
                    'MongoDB Atlas',
                  ].map((feat) => (
                    <span
                      key={feat}
                      className="rounded-lg border border-border bg-slate-50 px-2.5 py-1 text-slate-700 font-medium transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-border/80">
                <button
                  type="button"
                  onClick={() => setActiveCaseStudy(devflow)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-[0_4px_15px_rgba(255,91,0,0.3)] transition-all hover:bg-orange-600 active:scale-95 cursor-pointer"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>View Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                {devflow.liveUrl && (
                  <a
                    href={devflow.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-primary/40 bg-orange-500/10 px-4 py-2.5 text-xs font-bold text-primary transition-all hover:bg-primary hover:text-white active:scale-95"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}

                {devflow.repoUrl && (
                  <a
                    href={devflow.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-3.5 py-2.5 text-xs font-semibold text-foreground transition-all hover:bg-slate-50 hover:border-primary/40 active:scale-95 shadow-sm"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.article>
      )}

      {/* -------------------------------------------------------------------- */}
      {/*                 OTHER PROJECTS (2-COLUMN GRID)                       */}
      {/* -------------------------------------------------------------------- */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {otherProjects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-white/90 p-6 sm:p-7 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:translate-y-[-2px]"
          >
            {/* Ambient hover glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-orange-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

            <div>
              {/* Card Header Pill */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-primary font-bold">
                  <span>{project.id === 'gocart' ? '02 / E-COMMERCE SYSTEM' : '03 / SECURITY & RBAC'}</span>
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

              {/* UI Preview Frame */}
              <div className="mb-5 overflow-hidden rounded-2xl border border-border/80 shadow-inner">
                {project.id === 'gocart' ? <GoCartPreview /> : <ByteSecurePreview />}
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-0.5 font-mono text-xs font-bold text-primary">
                  {project.tagline}
                </p>
              </div>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack Summary */}
              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border/80 pt-3">
                {project.stack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-slate-50 px-2 py-0.5 font-mono text-[10px] text-slate-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons Footer */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-2.5 border-t border-border/80 pt-4">
              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-xl bg-primary px-3.5 py-2 text-xs font-bold text-white shadow-sm hover:bg-orange-600 transition-colors"
                  >
                    <span>Launch</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-3 py-2 text-xs font-semibold text-foreground hover:bg-slate-50 transition-colors shadow-xs"
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
                  className="inline-flex items-center gap-1 rounded-xl border border-primary/30 bg-orange-500/10 px-3 py-2 text-xs font-mono font-semibold text-primary hover:bg-primary hover:text-white transition-all cursor-pointer"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Case Study →</span>
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


