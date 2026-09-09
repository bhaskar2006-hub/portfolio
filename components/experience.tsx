'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, GraduationCap, ArrowUpRight, Briefcase, Sparkles, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { certifications, education, experience } from '@/lib/resume'

export function Experience() {
  const [showAllCertifications, setShowAllCertifications] = useState(false)

  // Keep top 4 strongest certifications visible by default
  const primaryCertifications = certifications.slice(0, 4)
  const additionalCertifications = certifications.slice(4)

  return (
    <Section id="experience" className="relative bg-orange-500/[0.02]">
      <SectionHeading
        index="04"
        title="Experience & Education"
        subtitle="Practical development milestones, academic credentials, and verified industry certifications."
      />

      <div className="grid gap-10 lg:grid-cols-12">
        {/* Experience Timeline (7 cols) */}
        <div className="lg:col-span-7">
          <div className="mb-6 flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-primary" />
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
              Work &amp; Club Experience
            </h3>
          </div>

          <div className="relative border-l-2 border-orange-500/30 pl-6 space-y-8 ml-3">
            {experience.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative group"
              >
                {/* Timeline node */}
                <span className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-white shadow-[0_0_12px_rgba(255,91,0,0.5)] transition-transform group-hover:scale-125" />

                <div className="rounded-3xl border border-border/80 bg-white/90 p-6 shadow-md backdrop-blur-md transition-all group-hover:border-primary/50 group-hover:shadow-lg group-hover:translate-y-[-2px]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full border border-primary/30 bg-orange-500/10 px-3 py-0.5 font-mono text-[11px] font-bold text-primary">
                      {item.period}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground font-semibold">
                      {item.company}
                    </span>
                  </div>

                  <h4 className="mt-3 text-lg font-bold text-foreground">
                    {item.role}
                  </h4>

                  <ul className="mt-4 space-y-2.5">
                    {item.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-slate-600"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education (5 cols) */}
        <div className="lg:col-span-5">
          <div className="mb-6 flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-primary" />
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
              Academic Background
            </h3>
          </div>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-border/80 bg-white/90 p-6 shadow-md backdrop-blur-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/40 bg-orange-500/10 text-primary shadow-2xs">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <span className="rounded-full bg-orange-500/10 border border-orange-500/20 px-2.5 py-0.5 font-mono text-[10px] text-primary font-bold">
                      {edu.period}
                    </span>
                    <h4 className="mt-2 text-base font-bold leading-snug text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground font-medium">
                      {edu.school}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-orange-500/10 px-3 py-1 font-mono text-xs font-bold text-primary">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>{edu.detail}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Verified Certifications Showcase (Clean & Compact) */}
      <div className="mt-14 pt-10 border-t border-border/80">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-primary" />
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
              Verified Certifications
            </h3>
          </div>
          <span className="font-mono text-[11px] text-muted-foreground font-semibold">
            {certifications.length} Credentials
          </span>
        </div>

        {/* Primary Top 4 Certifications */}
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {primaryCertifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-white/90 p-4 shadow-xs backdrop-blur-md transition-all hover:border-primary/40 hover:shadow-md hover:translate-y-[-1px]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-orange-500/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Award className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">{cert.date}</span>
                </div>
                <h4 className="font-bold text-xs leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {cert.name}
                </h4>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>

              {cert.url && (
                <div className="mt-3 pt-2.5 border-t border-border/60 flex justify-end">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-primary hover:underline"
                  >
                    <span>Verify</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Expandable Additional Certifications */}
        {additionalCertifications.length > 0 && (
          <div className="mt-4">
            <AnimatePresence>
              {showAllCertifications && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 pt-2 pb-4 overflow-hidden"
                >
                  {additionalCertifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="flex flex-col justify-between rounded-2xl border border-border/70 bg-slate-50/70 p-4 shadow-2xs"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-mono text-[10px] text-muted-foreground">{cert.issuer}</span>
                          <span className="font-mono text-[10px] text-muted-foreground">{cert.date}</span>
                        </div>
                        <h4 className="font-bold text-xs leading-snug text-foreground">
                          {cert.name}
                        </h4>
                      </div>
                      {cert.url && (
                        <div className="mt-3 pt-2 border-t border-border/50 flex justify-end">
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-primary hover:underline"
                          >
                            <span>Verify</span>
                            <ArrowUpRight className="h-3 w-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-center mt-3">
              <button
                type="button"
                onClick={() => setShowAllCertifications((prev) => !prev)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-4 py-2 font-mono text-xs font-semibold text-slate-700 hover:border-primary/40 hover:text-primary transition-all shadow-xs cursor-pointer"
              >
                {showAllCertifications ? (
                  <>
                    <span>Collapse Additional Certifications</span>
                    <ChevronUp className="h-3.5 w-3.5" />
                  </>
                ) : (
                  <>
                    <span>+ {additionalCertifications.length} Additional Technical Certifications</span>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}


