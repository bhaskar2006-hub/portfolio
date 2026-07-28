'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpen, ExternalLink } from 'lucide-react'
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
        title="Featured projects"
        subtitle="Selected full-stack builds — from RESTful e-commerce on AWS EC2 to secure role-based authentication."
      />
      
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xl transition-all duration-300 hover:border-primary/40"
          >
            <div>
              {/* Visual UI Preview Banner */}
              <div className="mb-6">
                {project.id === 'gocart' ? <GoCartPreview /> : <ByteSecurePreview />}
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="mt-1 font-mono text-sm font-semibold text-primary">
                  {project.tagline}
                </p>
              </div>

              <p className="mt-4 leading-relaxed text-muted-foreground text-sm">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 text-xs leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border/60 bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
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
                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-secondary px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-card"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>View Source</span>
                  </a>
                )}
              </div>

              {project.caseStudy && (
                <button
                  onClick={() => setActiveCaseStudy(project)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-primary/40 bg-primary/10 px-3.5 py-2.5 font-mono text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
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

