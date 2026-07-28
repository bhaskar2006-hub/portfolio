'use client'

import { motion } from 'framer-motion'
import { Award, GraduationCap, ArrowUpRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { certifications, education, experience } from '@/lib/resume'

export function Experience() {
  return (
    <Section id="experience" className="bg-card/30">
      <SectionHeading
        index="04"
        title="Experience & education"
        subtitle="Where I've built, deployed, and learned."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Experience timeline */}
        <div>
          <h3 className="mb-6 font-mono text-sm text-muted-foreground">
            Experience
          </h3>
          <div className="relative border-l border-border pl-6">
            {experience.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pb-8 last:pb-0"
              >
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <p className="font-mono text-xs text-primary">{item.period}</p>
                <h4 className="mt-1 font-semibold text-foreground">
                  {item.role}
                </h4>
                <p className="text-sm text-muted-foreground">{item.company}</p>
                <ul className="mt-3 space-y-2">
                  {item.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="mb-6 font-mono text-sm text-muted-foreground">
            Education
          </h3>
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-xs text-primary">{edu.period}</p>
                  <h4 className="mt-1 font-semibold leading-snug text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {edu.school}
                  </p>
                  <p className="mt-2 inline-block rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">
                    {edu.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-14">
        <h3 className="mb-6 font-mono text-sm text-muted-foreground">
          Certifications ({certifications.length})
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                  <Award className="h-5 w-5" />
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium leading-snug text-foreground group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {cert.issuer} · {cert.date}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground/80">
                    {cert.meta}
                  </p>
                </div>
              </div>

              {cert.url && (
                <div className="mt-3 pt-3 border-t border-border/50 flex justify-end">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    <span>Verify Credential</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

