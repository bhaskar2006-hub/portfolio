'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Award, 
  GraduationCap, 
  ArrowUpRight, 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Eye, 
  Search, 
  ChevronDown, 
  ChevronUp,
  Layers,
  Filter
} from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { certifications, education, experience, type Certification } from '@/lib/resume'
import { CertificateModal } from '@/components/certificate-modal'

export function Experience() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [isExploreExpanded, setIsExploreExpanded] = useState(false)

  // Main certifications (featured first)
  const mainCertifications = useMemo(() => {
    return certifications.filter((c) => c.isMain)
  }, [])

  // Additional certifications
  const additionalCertifications = useMemo(() => {
    return certifications.filter((c) => !c.isMain)
  }, [])

  // Filter categories
  const categories = useMemo(() => {
    const cats = ['All', 'Main Courses', 'AI & Cloud', 'Backend & APIs', 'Data & Databases', 'Hackathons & Events', 'DevOps & Tools']
    return cats
  }, [])

  // Filtered list for the Explore section
  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) => {
      const matchesCategory = 
        activeCategory === 'All' 
          ? true 
          : activeCategory === 'Main Courses' 
            ? cert.isMain 
            : cert.category === activeCategory

      const matchesSearch = 
        searchQuery === '' ||
        cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const handleOpenCertificate = (cert: Certification) => {
    setSelectedCertificate(cert)
    setIsModalOpen(true)
  }

  return (
    <Section id="experience" className="relative bg-orange-500/[0.02]">
      <SectionHeading
        index="04"
        title="Experience & Certifications"
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

      {/* ───────────────────────────────────────────────────────────── */}
      {/* VERIFIED CERTIFICATIONS SHOWCASE */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="mt-16 pt-12 border-t border-border/80">
        {/* Section Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/15 text-primary">
                <Award className="h-4 w-4" />
              </span>
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-primary">
                Main Course Certifications
              </h3>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
              Verified certifications from Oracle, Google, IBM, DataCamp, and IIT Kharagpur.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full border border-primary/30 bg-orange-500/10 px-3 py-1 font-mono text-xs font-bold text-primary">
              {certifications.length} Total Verified Credentials
            </span>
          </div>
        </div>

        {/* MAIN CERTIFICATES GRID (FEATURED FIRST IN FULL RICH UI CARDS) */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mainCertifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => handleOpenCertificate(cert)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white/95 shadow-md backdrop-blur-md transition-all hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl cursor-pointer dark:bg-slate-900/90"
            >
              {/* Card Image Preview Banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950/80 border-b border-border/60">
                <Image
                  src={cert.thumbnail}
                  alt={cert.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Floating Issuer Badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1 rounded-lg bg-black/75 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold text-white shadow-xs">
                    {cert.issuer}
                  </span>
                </div>

                {/* Hover Inspect Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-mono font-bold text-white shadow-lg">
                    <Eye className="h-3.5 w-3.5" />
                    <span>View Certificate</span>
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                <div>
                  <div className="flex items-center justify-between gap-2 text-[10px] font-mono text-muted-foreground mb-1.5">
                    <span className="font-bold text-primary">{cert.category}</span>
                    <span>{cert.date}</span>
                  </div>

                  <h4 className="font-bold text-sm leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {cert.name}
                  </h4>

                  {/* Skills tags */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {cert.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/70 bg-slate-50 px-2 py-0.5 font-mono text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {cert.tags.length > 3 && (
                      <span className="rounded-md bg-orange-500/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-primary">
                        +{cert.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-slate-600 group-hover:text-primary transition-colors">
                    <span>Inspect</span>
                    <Eye className="h-3 w-3" />
                  </span>

                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 rounded-lg border border-primary/30 bg-orange-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <span>Verify</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="font-mono text-[10px] font-semibold text-muted-foreground">
                      Verified
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* EXPLORE ALL CERTIFICATES INTERACTIVE DRAWER / SECTION */}
        {/* ───────────────────────────────────────────────────────────── */}
        <div className="mt-10 rounded-3xl border border-orange-500/20 bg-gradient-to-b from-orange-500/[0.04] to-white/90 p-5 sm:p-7 shadow-lg backdrop-blur-md dark:bg-slate-900/60">
          {/* Explore Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-amber-500 text-white shadow-md shadow-orange-500/25">
                <Compass className="h-5 w-5 animate-[spin_10s_linear_infinite]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground flex items-center gap-2">
                  <span>Explore All Certificates</span>
                  <span className="rounded-full bg-primary/15 text-primary text-xs font-mono font-bold px-2.5 py-0.5">
                    {certifications.length}
                  </span>
                </h4>
                <p className="text-xs text-muted-foreground">
                  Filter by category, search by skill, or inspect any technical credential.
                </p>
              </div>
            </div>

            {/* Explore Toggle Button */}
            <button
              type="button"
              onClick={() => setIsExploreExpanded((prev) => !prev)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-xs font-mono font-bold text-white shadow-md shadow-orange-500/20 hover:bg-orange-600 transition-all cursor-pointer"
            >
              <Compass className="h-4 w-4" />
              <span>{isExploreExpanded ? 'Close Certificate Explorer' : 'Explore All Certificates'}</span>
              {isExploreExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>

          {/* Expandable Explorer Content */}
          <AnimatePresence>
            {isExploreExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-6 border-t border-border/80 space-y-5">
                  {/* Filter Pills & Search Input */}
                  <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-1.5">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setActiveCategory(cat)}
                          className={`rounded-xl px-3 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
                            activeCategory === cat
                              ? 'bg-primary text-white shadow-sm'
                              : 'border border-border bg-white text-slate-600 hover:border-primary/40 hover:text-primary dark:bg-slate-800 dark:text-slate-300'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    {/* Search Input */}
                    <div className="relative min-w-[240px]">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search skill, topic, issuer..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-xl border border-border bg-white pl-9 pr-3 py-1.5 text-xs font-medium text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-slate-800"
                      />
                    </div>
                  </div>

                  {/* Filtered Grid */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-2">
                    {filteredCertifications.map((cert) => (
                      <motion.div
                        key={cert.id}
                        layout
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => handleOpenCertificate(cert)}
                        className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-white p-4 shadow-sm backdrop-blur-md transition-all hover:border-primary/40 hover:shadow-md hover:translate-y-[-2px] cursor-pointer dark:bg-slate-800/80"
                      >
                        <div className="flex items-start gap-3.5">
                          {/* Mini Thumbnail */}
                          <div className="relative h-14 w-18 shrink-0 overflow-hidden rounded-xl border border-border/60 bg-slate-950">
                            <Image
                              src={cert.thumbnail}
                              alt={cert.name}
                              fill
                              className="object-cover object-top"
                              sizes="80px"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1 text-[10px] font-mono text-muted-foreground mb-1">
                              <span className="font-semibold text-primary truncate">{cert.issuer}</span>
                              <span className="shrink-0">{cert.date}</span>
                            </div>

                            <h5 className="text-xs font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                              {cert.name}
                            </h5>

                            <p className="mt-1 text-[11px] text-muted-foreground font-mono">
                              {cert.category}
                            </p>
                          </div>
                        </div>

                        {/* Footer in list item */}
                        <div className="mt-3 pt-2.5 border-t border-border/50 flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {cert.tags.slice(0, 2).map((t) => (
                              <span
                                key={t}
                                className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[9px] font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-2">
                            {cert.url && (
                              <a
                                href={cert.url}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-primary hover:underline"
                              >
                                <span>Verify</span>
                                <ArrowUpRight className="h-3 w-3" />
                              </a>
                            )}
                            <span className="inline-flex items-center gap-1 rounded bg-orange-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-primary">
                              <Eye className="h-3 w-3" />
                              Inspect
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {filteredCertifications.length === 0 && (
                    <div className="py-8 text-center text-xs font-mono text-muted-foreground">
                      No certificates match your search query &ldquo;{searchQuery}&rdquo;.
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Section>
  )
}
