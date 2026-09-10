'use client'

import { useState, useMemo, useEffect } from 'react'
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
  ChevronLeft,
  ChevronRight,
  Layers,
  Filter,
  Grid3X3,
  SlidersHorizontal,
  X,
  Tag,
  ShieldCheck,
  Zap,
  Flame,
  Check
} from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { certifications, education, experience, type Certification } from '@/lib/resume'
import { CertificateModal } from '@/components/certificate-modal'

export function Experience() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel')
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Filter categories with count calculations
  const categories = useMemo(() => {
    return [
      { id: 'All', label: 'All Credentials', count: certifications.length },
      { id: 'Main Courses', label: 'Main Courses', count: certifications.filter((c) => c.isMain).length },
      { id: 'AI & Cloud', label: 'AI & Cloud', count: certifications.filter((c) => c.category === 'AI & Cloud').length },
      { id: 'Backend & APIs', label: 'Backend & APIs', count: certifications.filter((c) => c.category === 'Backend & APIs').length },
      { id: 'Data & Databases', label: 'Data & SQL', count: certifications.filter((c) => c.category === 'Data & Databases').length },
      { id: 'Hackathons & Events', label: 'Hackathons', count: certifications.filter((c) => c.category === 'Hackathons & Events').length },
      { id: 'DevOps & Tools', label: 'DevOps & Tools', count: certifications.filter((c) => c.category === 'DevOps & Tools').length },
    ]
  }, [])

  // Filtered certificates based on Category, Tag, and Search
  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) => {
      const matchesCategory = 
        activeCategory === 'All' 
          ? true 
          : activeCategory === 'Main Courses' 
            ? cert.isMain 
            : cert.category === activeCategory

      const matchesTag = selectedTag ? cert.tags.includes(selectedTag) : true

      const matchesSearch = 
        searchQuery === '' ||
        cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesCategory && matchesTag && matchesSearch
    })
  }, [activeCategory, selectedTag, searchQuery])

  // Reset carousel index when filtered list changes
  useEffect(() => {
    setCarouselIndex(0)
  }, [activeCategory, selectedTag, searchQuery])

  // Automatic Carousel Rotation (auto-plays every 2.2s, pauses smoothly on user hover/touch or when modal is open)
  useEffect(() => {
    if (isHovered || isModalOpen || viewMode !== 'carousel' || filteredCertifications.length <= 1) return
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % filteredCertifications.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [isHovered, isModalOpen, viewMode, filteredCertifications.length])

  const handleOpenCertificate = (cert: Certification) => {
    setSelectedCertificate(cert)
    setIsModalOpen(true)
  }

  const currentModalIndex = useMemo(() => {
    if (!selectedCertificate) return 0
    return filteredCertifications.findIndex((c) => c.id === selectedCertificate.id)
  }, [selectedCertificate, filteredCertifications])

  const handleModalPrev = () => {
    if (filteredCertifications.length === 0) return
    const prevIndex = (currentModalIndex - 1 + filteredCertifications.length) % filteredCertifications.length
    setSelectedCertificate(filteredCertifications[prevIndex])
  }

  const handleModalNext = () => {
    if (filteredCertifications.length === 0) return
    const nextIndex = (currentModalIndex + 1) % filteredCertifications.length
    setSelectedCertificate(filteredCertifications[nextIndex])
  }

  const handleCarouselPrev = () => {
    if (filteredCertifications.length === 0) return
    setCarouselIndex((prev) => (prev - 1 + filteredCertifications.length) % filteredCertifications.length)
  }

  const handleCarouselNext = () => {
    if (filteredCertifications.length === 0) return
    setCarouselIndex((prev) => (prev + 1) % filteredCertifications.length)
  }

  const activeCert = filteredCertifications[carouselIndex] || filteredCertifications[0]

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

          <div className="relative border-l-2 border-orange-500/30 pl-5 sm:pl-6 space-y-6 sm:space-y-8 ml-2 sm:ml-3">
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
                <span className="absolute -left-[29px] sm:-left-[33px] top-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full border-2 border-primary bg-white shadow-[0_0_12px_rgba(255,91,0,0.5)] transition-transform group-hover:scale-125" />

                <div className="rounded-3xl border border-border/80 bg-white/90 p-5 sm:p-6 shadow-md backdrop-blur-md transition-all group-hover:border-primary/50 group-hover:shadow-lg group-hover:translate-y-[-2px]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full border border-primary/30 bg-orange-500/10 px-3 py-0.5 font-mono text-[11px] font-bold text-primary">
                      {item.period}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground font-semibold">
                      {item.company}
                    </span>
                  </div>

                  <h4 className="mt-3 text-base sm:text-lg font-bold text-foreground">
                    {item.role}
                  </h4>

                  <ul className="mt-3.5 space-y-2">
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
                className="rounded-3xl border border-border/80 bg-white/90 p-5 sm:p-6 shadow-md backdrop-blur-md"
              >
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/40 bg-orange-500/10 text-primary shadow-2xs">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1">
                    <span className="rounded-full bg-orange-500/10 border border-orange-500/20 px-2.5 py-0.5 font-mono text-[10px] text-primary font-bold">
                      {edu.period}
                    </span>
                    <h4 className="mt-2 text-sm sm:text-base font-bold leading-snug text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground font-medium">
                      {edu.school}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-xl border border-primary/30 bg-orange-500/10 px-2.5 py-1 font-mono text-xs font-bold text-primary">
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
      {/* INTERACTIVE CERTIFICATIONS SHOWCASE (CAROUSEL & GRID) */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="mt-14 sm:mt-16 pt-10 sm:pt-12 border-t border-border/80">
        
        {/* Interactive Stats Cards (Clickable Quick Filters) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <motion.button
            type="button"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => { setActiveCategory('All'); setSelectedTag(null); }}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer shadow-sm ${
              activeCategory === 'All' && !selectedTag
                ? 'border-primary bg-orange-500/10 ring-2 ring-primary/20 shadow-md'
                : 'border-border/80 bg-white/90 hover:border-primary/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xl sm:text-2xl font-black text-primary">13</span>
              <Award className="h-4 w-4 text-primary" />
            </div>
            <p className="mt-1 text-xs font-bold text-foreground">Total Credentials</p>
            <p className="text-[10px] text-muted-foreground font-mono">100% Verified</p>
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => { setActiveCategory('Main Courses'); setSelectedTag(null); }}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer shadow-sm ${
              activeCategory === 'Main Courses' && !selectedTag
                ? 'border-primary bg-orange-500/10 ring-2 ring-primary/20 shadow-md'
                : 'border-border/80 bg-white/90 hover:border-primary/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xl sm:text-2xl font-black text-amber-600">8</span>
              <Sparkles className="h-4 w-4 text-amber-600" />
            </div>
            <p className="mt-1 text-xs font-bold text-foreground">Main Courses</p>
            <p className="text-[10px] text-muted-foreground font-mono">Oracle, Google, IBM, IIT</p>
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => { setActiveCategory('AI & Cloud'); setSelectedTag(null); }}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer shadow-sm ${
              activeCategory === 'AI & Cloud' && !selectedTag
                ? 'border-primary bg-orange-500/10 ring-2 ring-primary/20 shadow-md'
                : 'border-border/80 bg-white/90 hover:border-primary/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xl sm:text-2xl font-black text-foreground">5</span>
              <Zap className="h-4 w-4 text-orange-500" />
            </div>
            <p className="mt-1 text-xs font-bold text-foreground">AI &amp; Agentic</p>
            <p className="text-[10px] text-muted-foreground font-mono">LLMs &amp; Prompting</p>
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => { setActiveCategory('Hackathons & Events'); setSelectedTag(null); }}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer shadow-sm ${
              activeCategory === 'Hackathons & Events' && !selectedTag
                ? 'border-primary bg-orange-500/10 ring-2 ring-primary/20 shadow-md'
                : 'border-border/80 bg-white/90 hover:border-primary/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xl sm:text-2xl font-black text-rose-600">2</span>
              <Flame className="h-4 w-4 text-rose-600" />
            </div>
            <p className="mt-1 text-xs font-bold text-foreground">Hackathon Honors</p>
            <p className="text-[10px] text-muted-foreground font-mono">DevNovate &amp; HackITX</p>
          </motion.button>
        </div>

        {/* Section Interactive Control Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
          {/* Header Title */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/15 text-primary">
                <Award className="h-4 w-4" />
              </span>
              <h3 className="font-mono text-sm sm:text-base font-bold uppercase tracking-wider text-primary">
                Interactive Certificate Showcase
              </h3>
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {filteredCertifications.length} verified credential{filteredCertifications.length === 1 ? '' : 's'} available to inspect
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center rounded-xl border border-border/80 bg-white p-1 shadow-2xs self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode('carousel')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'carousel'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>Carousel</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Grid3X3 className="h-3.5 w-3.5" />
              <span>Grid</span>
            </button>
          </div>
        </div>

        {/* Filter Pills & Live Search Bar */}
        <div className="space-y-3 mb-6">
          {/* Category Pills (Horizontal Scrollable for Mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id && !selectedTag
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id)
                    setSelectedTag(null)
                  }}
                  className={`relative shrink-0 rounded-xl px-3 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-primary text-white shadow-md shadow-orange-500/25'
                      : 'border border-border/80 bg-white/90 text-slate-700 hover:border-primary/40 hover:text-primary'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span>{cat.label}</span>
                    <span className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${isActive ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      {cat.count}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* Search & Active Filters Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
            {/* Active Tag Filter Indicator */}
            {selectedTag ? (
              <div className="inline-flex items-center gap-2 rounded-xl bg-orange-500/10 border border-orange-500/30 px-3 py-1 text-xs font-mono font-semibold text-primary">
                <Tag className="h-3 w-3" />
                <span>Tag: <strong>{selectedTag}</strong></span>
                <button
                  type="button"
                  onClick={() => setSelectedTag(null)}
                  className="rounded-full p-0.5 hover:bg-orange-500/20 text-primary cursor-pointer"
                  title="Clear tag filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ) : (
              <div className="text-xs font-mono text-muted-foreground hidden sm:block">
                Tip: Click any skill tag to instantly filter certificates
              </div>
            )}

            {/* Search Input */}
            <div className="relative min-w-[220px] sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search certificate, skill, issuer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border/80 bg-white pl-9 pr-8 py-2 text-xs font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-foreground cursor-pointer"
                  title="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* VIEW MODE 1: 3D INTERACTIVE CAROUSEL / SLIDER SHOWCASE */}
        {/* ───────────────────────────────────────────────────────────── */}
        {viewMode === 'carousel' && (
          <div>
            {filteredCertifications.length > 0 ? (
              <div 
                className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-white/95 shadow-xl backdrop-blur-xl p-4 sm:p-7"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
              >
                {/* Carousel Card Animated Container */}
                <div className="grid lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left: Certificate Preview Frame (7 cols) */}
                  <div className="lg:col-span-7 relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeCert.id}
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, x: -20 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="group relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-orange-500/30 bg-slate-950 shadow-2xl cursor-pointer"
                        onClick={() => handleOpenCertificate(activeCert)}
                      >
                        <Image
                          src={activeCert.thumbnail}
                          alt={activeCert.name}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                        {/* Top Issuer Badge */}
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-xl bg-black/80 backdrop-blur-md px-3 py-1.5 text-xs font-mono font-bold text-white shadow-md">
                            <Award className="h-3.5 w-3.5 text-orange-400" />
                            <span>{activeCert.issuer}</span>
                          </span>

                          {activeCert.isMain && (
                            <span className="inline-flex items-center gap-1 rounded-xl bg-amber-500/90 backdrop-blur-md px-2.5 py-1.5 text-xs font-mono font-bold text-white shadow-md">
                              <Sparkles className="h-3.5 w-3.5" />
                              <span>Featured</span>
                            </span>
                          )}
                        </div>

                        {/* Inspect Overlay Action */}
                        <div className="absolute bottom-3 right-3 flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-mono font-bold text-white shadow-lg backdrop-blur-md hover:bg-orange-600 transition-colors">
                            <Eye className="h-3.5 w-3.5" />
                            <span>Inspect Full Certificate</span>
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Right: Certificate Details, Metadata & Actions (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeCert.id + '-details'}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {/* Category & Date Header */}
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-0.5 font-bold text-primary">
                            {activeCert.category}
                          </span>
                          <span className="font-semibold text-muted-foreground">
                            {activeCert.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-xl sm:text-2xl font-black text-foreground leading-snug">
                          {activeCert.name}
                        </h4>

                        {/* Description */}
                        {activeCert.description && (
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                            {activeCert.description}
                          </p>
                        )}

                        {/* Credential ID Badge */}
                        {activeCert.credentialId && (
                          <div className="flex items-center gap-2 text-xs font-mono">
                            <ShieldCheck className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground font-semibold">ID:</span>
                            <code className="rounded-md bg-slate-100 px-2 py-0.5 font-bold text-slate-800">
                              {activeCert.credentialId}
                            </code>
                          </div>
                        )}

                        {/* Clickable Verified Skill Tags */}
                        <div>
                          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                            <Tag className="h-3 w-3 text-primary" />
                            <span>Verified Competencies:</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {activeCert.tags.map((tag) => (
                              <button
                                key={tag}
                                type="button"
                                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                                className={`rounded-lg px-2.5 py-1 font-mono text-[11px] font-semibold transition-all cursor-pointer ${
                                  selectedTag === tag
                                    ? 'bg-primary text-white shadow-xs'
                                    : 'border border-border/80 bg-slate-50 text-slate-700 hover:border-primary/40 hover:text-primary hover:bg-orange-500/5'
                                }`}
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="pt-2 flex flex-wrap items-center gap-2.5">
                          <button
                            type="button"
                            onClick={() => handleOpenCertificate(activeCert)}
                            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 hover:opacity-95 transition-all cursor-pointer"
                          >
                            <Eye className="h-4 w-4" />
                            <span>Preview Certificate</span>
                          </button>

                          {activeCert.url && (
                            <a
                              href={activeCert.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-primary/40 bg-orange-500/10 px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                            >
                              <span>Verify</span>
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Interactive Carousel Navigation Bar */}
                    <div className="pt-4 border-t border-border/80 flex items-center justify-between">
                      <div className="flex items-center gap-1 font-mono text-xs font-bold text-primary">
                        <span>{String(carouselIndex + 1).padStart(2, '0')}</span>
                        <span className="text-muted-foreground font-normal">/</span>
                        <span className="text-muted-foreground font-normal">{String(filteredCertifications.length).padStart(2, '0')}</span>
                      </div>

                      {/* Pagination Dots (Scrollable if many) */}
                      <div className="flex items-center gap-1 max-w-[140px] sm:max-w-[180px] overflow-x-auto py-1 scrollbar-none">
                        {filteredCertifications.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setCarouselIndex(idx)}
                            className={`h-2 rounded-full transition-all cursor-pointer ${
                              idx === carouselIndex
                                ? 'w-6 bg-gradient-to-r from-orange-500 to-amber-500'
                                : 'w-2 bg-slate-200 hover:bg-slate-300'
                            }`}
                            aria-label={`Go to certificate ${idx + 1}`}
                          />
                        ))}
                      </div>

                      {/* Navigation Arrow Controls */}
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={handleCarouselPrev}
                          className="flex h-8 w-8 items-center justify-center rounded-xl border border-border/80 bg-white text-slate-700 hover:border-primary/40 hover:text-primary active:scale-95 transition-all cursor-pointer"
                          aria-label="Previous certificate"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleCarouselNext}
                          className="flex h-8 w-8 items-center justify-center rounded-xl border border-border/80 bg-white text-slate-700 hover:border-primary/40 hover:text-primary active:scale-95 transition-all cursor-pointer"
                          aria-label="Next certificate"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ) : (
              <div className="py-12 text-center rounded-3xl border border-dashed border-border bg-white/60 p-8">
                <Award className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm font-bold text-foreground">No matching certificates found</p>
                <p className="text-xs text-muted-foreground mt-1">Try clearing your search query or selecting &quot;All Credentials&quot;.</p>
                <button
                  type="button"
                  onClick={() => { setActiveCategory('All'); setSelectedTag(null); setSearchQuery(''); }}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-white shadow-sm"
                >
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* ───────────────────────────────────────────────────────────── */}
        {/* VIEW MODE 2: INTERACTIVE BENTO GRID VIEW */}
        {/* ───────────────────────────────────────────────────────────── */}
        {viewMode === 'grid' && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCertifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                onClick={() => handleOpenCertificate(cert)}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white/95 shadow-md backdrop-blur-md transition-all hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl cursor-pointer"
              >
                {/* Thumbnail Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-border/60">
                  <Image
                    src={cert.thumbnail}
                    alt={cert.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Issuer Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="inline-flex items-center gap-1 rounded-lg bg-black/75 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold text-white shadow-xs">
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-mono font-bold text-white shadow-lg">
                      <Eye className="h-3.5 w-3.5" />
                      <span>Inspect</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
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
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedTag(tag === selectedTag ? null : tag)
                          }}
                          className={`rounded-md px-2 py-0.5 font-mono text-[10px] font-medium transition-colors ${
                            selectedTag === tag
                              ? 'bg-primary text-white'
                              : 'border border-border/70 bg-slate-50 text-slate-600 hover:border-primary/50 hover:text-primary'
                          }`}
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
                      <Eye className="h-3 w-3" />
                      <span>Inspect</span>
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
        )}
      </div>

      {/* Interactive Lightbox Modal with Next / Prev */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPrev={handleModalPrev}
        onNext={handleModalNext}
        currentIndex={currentModalIndex}
        totalCount={filteredCertifications.length}
      />
    </Section>
  )
}
