'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Section, SectionHeading } from '@/components/section'
import { projects } from '@/lib/resume'

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        index="03"
        title="Featured projects"
        subtitle="Selected full-stack builds — from RESTful e-commerce to secure role-based authentication."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-1 font-mono text-sm text-primary">
                  {project.tagline}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} repository`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} live demo`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-4 space-y-2">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
