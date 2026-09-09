'use client'

import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, 
  RefreshCw, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Flame, 
  Cpu, 
  ShieldCheck,
  Compass
} from 'lucide-react'

export type TechCategory = 'All' | 'Frontend' | 'Backend' | 'Database' | 'Cloud & DevOps' | 'Languages'

export interface Tech {
  name: string
  icon: string
  color: string
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud & DevOps' | 'Languages'
  proficiency: number // Percentage 0 - 100
  level: 'Expert' | 'Advanced' | 'Proficient'
  desc: string
  highlight: string
}

export const techs: Tech[] = [
  {
    name: 'React',
    icon: '/tech/react.svg',
    color: '#06B6D4',
    category: 'Frontend',
    proficiency: 95,
    level: 'Expert',
    desc: 'Hooks, Component Architecture, Virtual DOM & State Management',
    highlight: 'Built DevFlow & GoCart frontend Single Page Applications',
  },
  {
    name: 'Node.js',
    icon: '/tech/nodedotjs.svg',
    color: '#22C55E',
    category: 'Backend',
    proficiency: 92,
    level: 'Advanced',
    desc: 'Asynchronous Event Loop, Streaming, NPM & Microservices',
    highlight: 'HackerRank Node.js Certified backend architectures',
  },
  {
    name: 'JavaScript',
    icon: '/tech/javascript.svg',
    color: '#EAB308',
    category: 'Languages',
    proficiency: 95,
    level: 'Expert',
    desc: 'ES6+, Closures, Async/Await, Prototypes & High Performance V8',
    highlight: 'HackerRank JavaScript Intermediate Verified Credential',
  },
  {
    name: 'MongoDB',
    icon: '/tech/mongodb.svg',
    color: '#10B981',
    category: 'Database',
    proficiency: 90,
    level: 'Advanced',
    desc: 'Aggregation Pipelines, Document Schemas, Indexing & Atlas Clusters',
    highlight: 'Multi-tenant organization data modeling for SaaS platforms',
  },
  {
    name: 'Express.js',
    icon: '/tech/express.svg',
    color: '#0284C7',
    category: 'Backend',
    proficiency: 92,
    level: 'Advanced',
    desc: 'REST API Design, Middleware Chaining, Error Handling & RBAC',
    highlight: 'ByteSecure & DevFlow enterprise authorization layers',
  },
  {
    name: 'Python',
    icon: '/tech/python.svg',
    color: '#3B82F6',
    category: 'Languages',
    proficiency: 90,
    level: 'Advanced',
    desc: 'Agentic AI Frameworks, Pandas, NumPy, Scripting & Data Engineering',
    highlight: 'IBM Data Science, AI & Python Specialization Certified',
  },
  {
    name: 'Flask',
    icon: '/tech/flask.svg',
    color: '#F97316',
    category: 'Backend',
    proficiency: 88,
    level: 'Advanced',
    desc: 'Python Microservices, AI Model APIs & Lightweight Web Services',
    highlight: 'IBM Developing AI Applications with Python & Flask Certified',
  },
  {
    name: 'AWS',
    icon: '/tech/aws.svg',
    color: '#FF9900',
    category: 'Cloud & DevOps',
    proficiency: 85,
    level: 'Proficient',
    desc: 'EC2 Instances, S3 Storage, Nginx Reverse Proxy & PM2 Daemon',
    highlight: 'Configured and deployed production full-stack systems on AWS',
  },
  {
    name: 'Git',
    icon: '/tech/git.svg',
    color: '#EF4444',
    category: 'Cloud & DevOps',
    proficiency: 95,
    level: 'Expert',
    desc: 'Branching Strategies, Interactive Rebase, Conflict Resolution & CLI',
    highlight: 'Advanced Git & GitHub Professional Certified by Scrimba',
  },
  {
    name: 'GitHub',
    icon: '/tech/github.svg',
    color: '#A855F7',
    category: 'Cloud & DevOps',
    proficiency: 92,
    level: 'Advanced',
    desc: 'CI/CD Actions, Pull Request Reviews, Issues & Project Tracking',
    highlight: 'Open-source maintainer and team collaboration workflows',
  },
  {
    name: 'C++',
    icon: '/tech/cplusplus.svg',
    color: '#2563EB',
    category: 'Languages',
    proficiency: 88,
    level: 'Advanced',
    desc: 'Data Structures, Algorithms, Memory Allocation & OOP Concepts',
    highlight: 'Competitive problem solving and high-performance algorithms',
  },
]

function TechIcon({ tech, className = 'h-8 w-8' }: { tech: Tech; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`${className} shrink-0 bg-current transition-all duration-300`}
      style={{
        WebkitMaskImage: `url(${tech.icon})`,
        maskImage: `url(${tech.icon})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  )
}

export function TechStack() {
  const [angle, setAngle] = useState(0)
  const [targetAngle, setTargetAngle] = useState<number | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [hoveredTech, setHoveredTech] = useState<Tech | null>(null)
  const [activeCategory, setActiveCategory] = useState<TechCategory>('All')
  const [activeFrontIndex, setActiveFrontIndex] = useState<number>(0)
  
  const requestRef = useRef<number | null>(null)
  const autoRotateSpeed = 0.0035

  const radiusX = 320 // Horizontal radius
  const radiusY = 82 // Vertical tilt radius

  const categories: TechCategory[] = ['All', 'Frontend', 'Backend', 'Database', 'Cloud & DevOps', 'Languages']

  // Handle smooth auto-rotation and easing to target angle
  const updatePhysics = useCallback(() => {
    if (targetAngle !== null) {
      // Smoothly ease toward target angle
      setAngle((current) => {
        const diff = targetAngle - current
        if (Math.abs(diff) < 0.002) {
          setTargetAngle(null)
          return targetAngle
        }
        return current + diff * 0.08
      })
    } else if (!isDragging && !hoveredTech) {
      // Continuous idle auto-rotation
      setAngle((prev) => (prev + autoRotateSpeed) % (Math.PI * 2))
    }
    requestRef.current = requestAnimationFrame(updatePhysics)
  }, [isDragging, hoveredTech, targetAngle])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    requestRef.current = requestAnimationFrame(updatePhysics)
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [isMounted, updatePhysics])

  // Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setTargetAngle(null)
    setIsDragging(true)
    setDragStartX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const deltaX = e.clientX - dragStartX
    setAngle((prev) => prev + deltaX * 0.006)
    setDragStartX(e.clientX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTargetAngle(null)
    setIsDragging(true)
    setDragStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const deltaX = e.touches[0].clientX - dragStartX
    setAngle((prev) => prev + deltaX * 0.008)
    setDragStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Smoothly rotate clicked icon to the front (z = 1)
  const handleSelectTech = (techIndex: number) => {
    const itemTargetAngle = Math.PI / 2 - (techIndex * 2 * Math.PI) / techs.length
    
    // Normalize target angle to closest path
    let currentNorm = angle % (Math.PI * 2)
    if (currentNorm < 0) currentNorm += Math.PI * 2
    let targetNorm = itemTargetAngle % (Math.PI * 2)
    if (targetNorm < 0) targetNorm += Math.PI * 2
    
    let diff = targetNorm - currentNorm
    if (diff > Math.PI) diff -= Math.PI * 2
    if (diff < -Math.PI) diff += Math.PI * 2
    
    setTargetAngle(angle + diff)
    setHoveredTech(techs[techIndex])
  }

  // Step rotation controls (< and >)
  const handleStepRotate = (direction: 'prev' | 'next') => {
    const step = (2 * Math.PI) / techs.length
    const diff = direction === 'next' ? -step : step
    setTargetAngle(angle + diff)
  }

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handleStepRotate('prev')
    } else if (e.key === 'ArrowRight') {
      handleStepRotate('next')
    }
  }

  // Calculate 3D positions, parallax depth, and active front item
  const nodesWithPositions = useMemo(() => {
    let maxZ = -Infinity
    let frontIdx = 0

    const nodes = techs.map((tech, i) => {
      const nodeAngle = angle + (i * 2 * Math.PI) / techs.length
      const x = Number((Math.sin(nodeAngle) * radiusX).toFixed(2))
      const z = Math.cos(nodeAngle) // -1 (back) to +1 (front)
      const y = Number((Math.cos(nodeAngle) * radiusY).toFixed(2))

      // Track active frontmost icon
      if (z > maxZ) {
        maxZ = z
        frontIdx = i
      }

      // Parallax depth scaling: Front items are larger (1.2x), back items fade (0.6x)
      const scale = Number((0.82 + z * 0.38).toFixed(3))
      const opacity = Number((0.32 + (z + 1) * 0.34).toFixed(3)) // 0.32 to 1.0
      const zIndex = Math.round((z + 1) * 100)

      const isCategoryMatch = activeCategory === 'All' || tech.category === activeCategory

      return {
        tech,
        index: i,
        x,
        y,
        z,
        scale,
        opacity: isCategoryMatch ? opacity : opacity * 0.4,
        zIndex,
        isCategoryMatch,
      }
    })

    return { nodes, frontIdx }
  }, [angle, radiusX, radiusY, activeCategory])

  useEffect(() => {
    setActiveFrontIndex(nodesWithPositions.frontIdx)
  }, [nodesWithPositions.frontIdx])

  // Sort nodes so front items render above back items
  const sortedNodes = useMemo(() => {
    return [...nodesWithPositions.nodes].sort((a, b) => a.zIndex - b.zIndex)
  }, [nodesWithPositions.nodes])

  // When active category changes, rotate first matching item to front
  const handleCategoryClick = (cat: TechCategory) => {
    setActiveCategory(cat)
    if (cat !== 'All') {
      const firstMatchIndex = techs.findIndex((t) => t.category === cat)
      if (firstMatchIndex !== -1) {
        handleSelectTech(firstMatchIndex)
      }
    }
  }

  const activeTech = hoveredTech || techs[activeFrontIndex]

  return (
    <div
      className="mb-14 flex flex-col items-center focus:outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="3D Interactive Engineering Tech Orbit"
    >
      {/* Category Sync Filters */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryClick(cat)}
              className={`rounded-xl px-3.5 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-primary text-white shadow-md shadow-orange-500/25 scale-105'
                  : 'border border-border/80 bg-white/90 text-slate-600 hover:border-primary/40 hover:text-primary dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* 3D Orbit Stage Container */}
      <div
        className="relative flex h-[420px] w-full max-w-5xl select-none items-center justify-center overflow-hidden rounded-3xl border border-orange-500/25 bg-gradient-to-b from-white/95 via-orange-500/[0.02] to-white/90 shadow-xl backdrop-blur-xl cursor-grab active:cursor-grabbing dark:from-slate-900/90 dark:to-slate-950/80"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Subtle Sci-Fi Perspective Ground Grid Lines */}
        <div 
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48 opacity-[0.18]"
          style={{
            backgroundImage: 'linear-gradient(to right, #ea580c 1px, transparent 1px), linear-gradient(to bottom, #ea580c 1px, transparent 1px)',
            backgroundSize: '40px 24px',
            transform: 'perspective(300px) rotateX(60deg)',
          }}
        />

        {/* Outer Radiant Ambient Glow */}
        <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-orange-500/15 blur-[100px] animate-pulse" />

        {/* ─── CENTRAL BREATHING SPARKLE HUB ─── */}
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-tr from-orange-500/30 via-amber-500/20 to-transparent p-1.5 border border-orange-500/30 shadow-[0_0_80px_rgba(255,91,0,0.3)] animate-pulse">
          {/* Inner core */}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white shadow-xl">
            <Sparkles className="h-11 w-11 animate-[spin_12s_linear_infinite] drop-shadow-md" />
            <span className="absolute -bottom-1 rounded-full bg-black/75 px-2 py-0.5 text-[9px] font-mono font-bold text-orange-300 backdrop-blur-md">
              MERN &bull; AI
            </span>
          </div>

          {/* Central Pulsing Energy Waves */}
          <div className="pointer-events-none absolute -inset-4 rounded-full border border-orange-500/20 animate-ping opacity-30" />
        </div>

        {/* ─── CONNECTING ORBITAL RINGS & COMET PATHS ─── */}
        {/* Primary Ellipse Orbit Ring */}
        <div
          className="pointer-events-none absolute h-[164px] w-[640px] rounded-[100%] border border-dashed border-orange-500/35 shadow-[0_0_40px_rgba(255,91,0,0.18)]"
          style={{ transform: 'rotateX(65deg)' }}
        />

        {/* Secondary Concentric Inner Guide Ring */}
        <div
          className="pointer-events-none absolute h-[110px] w-[460px] rounded-[100%] border border-orange-400/20"
          style={{ transform: 'rotateX(65deg)' }}
        />

        {/* ─── ORBITING 3D TECH NODES ─── */}
        {sortedNodes.map(({ tech, index, x, y, z, scale, opacity, zIndex, isCategoryMatch }) => {
          const isSelected = hoveredTech?.name === tech.name
          const isFront = activeFrontIndex === index
          const currentScale = isSelected ? Number((scale * 1.3).toFixed(3)) : scale

          // Skill circle stroke calculations
          const circleRadius = 26
          const circumference = 2 * Math.PI * circleRadius
          const strokeDashoffset = circumference - (circumference * tech.proficiency) / 100

          return (
            <motion.div
              key={tech.name}
              className="absolute cursor-pointer select-none"
              style={{
                transform: `translate3d(${x}px, ${y}px, 0px) scale(${currentScale})`,
                opacity: isSelected ? 1 : opacity,
                zIndex: isSelected ? 999 : zIndex,
              }}
              onClick={() => handleSelectTech(index)}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
              transition={{ type: 'spring', stiffness: 350, damping: 26 }}
              aria-label={`${tech.name} (${tech.category}) - ${tech.proficiency}% proficiency`}
            >
              <div
                className={`group relative flex h-18 w-18 items-center justify-center rounded-2xl border bg-white p-3 shadow-md transition-all duration-300 dark:bg-slate-900 ${
                  isCategoryMatch ? 'ring-2 ring-primary/30' : ''
                }`}
                style={{
                  borderColor: isSelected ? tech.color : isFront ? 'var(--color-primary)' : 'var(--border)',
                  color: isSelected ? tech.color : isFront ? tech.color : '#334155',
                  boxShadow: isSelected
                    ? `0 0 35px ${tech.color}90, 0 14px 28px -6px ${tech.color}60`
                    : isFront
                    ? `0 0 25px rgba(255,91,0,0.35)`
                    : '0 8px 18px -4px rgba(0,0,0,0.1)',
                }}
              >
                {/* SVG Radial Proficiency Indicator Ring */}
                <svg
                  className="absolute -inset-1.5 h-[84px] w-[84px] -rotate-90 pointer-events-none"
                  viewBox="0 0 60 60"
                >
                  <circle
                    cx="30"
                    cy="30"
                    r={circleRadius}
                    className="stroke-slate-200/50 dark:stroke-slate-700/50"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r={circleRadius}
                    stroke={tech.color}
                    strokeWidth="2.5"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="none"
                    className="transition-all duration-500"
                    style={{ opacity: z > 0 ? 0.9 : 0.4 }}
                  />
                </svg>

                {/* Tech Icon */}
                <TechIcon tech={tech} className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />

                {/* Floating Micro Label Pill */}
                <div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-mono font-bold tracking-wide shadow-md transition-all duration-200 border"
                  style={{
                    backgroundColor: isSelected ? tech.color : isFront ? '#ffffff' : 'rgba(255,255,255,0.92)',
                    color: isSelected ? '#ffffff' : '#1e293b',
                    borderColor: isSelected ? tech.color : 'var(--border)',
                    opacity: isSelected || z > 0 ? 1 : 0.75,
                  }}
                >
                  {tech.name}
                </div>

                {/* Front Star Badge */}
                {isFront && !isSelected && (
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-white text-[9px] font-bold shadow-md animate-bounce">
                    ★
                  </span>
                )}
              </div>
            </motion.div>
          )
        })}

        {/* ─── STAGE CONTROLS & HINT OVERLAYS ─── */}
        {/* Previous / Next Quick Step Buttons */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              handleStepRotate('prev')
            }}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-white/90 text-slate-700 shadow-md backdrop-blur-md hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer dark:bg-slate-800 dark:text-slate-200"
            aria-label="Previous skill in orbit"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              handleStepRotate('next')
            }}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-white/90 text-slate-700 shadow-md backdrop-blur-md hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer dark:bg-slate-800 dark:text-slate-200"
            aria-label="Next skill in orbit"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Drag / Click Interaction Hint Pill */}
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-border bg-white/90 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-md shadow-sm dark:bg-slate-800/90">
          <RefreshCw className="h-3.5 w-3.5 animate-spin text-primary" style={{ animationDuration: '9s' }} />
          <span>Click any icon to center &bull; Drag to spin &bull; Use ← → keys</span>
        </div>
      </div>

      {/* ─── ACTIVE SKILL CARD / TOOLTIP INSPECTION BAR ─── */}
      <div className="mt-5 w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {activeTech && (
            <motion.div
              key={activeTech.name}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-2xl border border-border/80 bg-white/95 p-4 sm:p-5 shadow-lg backdrop-blur-md dark:bg-slate-900/95"
              style={{ borderLeftColor: activeTech.color, borderLeftWidth: '5px' }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Tech Icon & Info */}
                <div className="flex items-start sm:items-center gap-3.5">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-2.5 shadow-inner border border-border/60 dark:bg-slate-800"
                    style={{ color: activeTech.color }}
                  >
                    <TechIcon tech={activeTech} className="h-7 w-7" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-foreground">
                        {activeTech.name}
                      </h4>
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-mono font-bold"
                        style={{
                          backgroundColor: `${activeTech.color}18`,
                          color: activeTech.color,
                        }}
                      >
                        {activeTech.category}
                      </span>
                      <span className="rounded-md bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 text-[10px] font-mono font-bold text-primary">
                        {activeTech.level}
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-muted-foreground font-medium">
                      {activeTech.desc}
                    </p>
                    <p className="mt-1 text-xs text-slate-700 font-medium flex items-center gap-1 dark:text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{activeTech.highlight}</span>
                    </p>
                  </div>
                </div>

                {/* Skill Level Radial Progress */}
                <div className="flex items-center gap-3 sm:border-l sm:border-border/80 sm:pl-4">
                  <div className="text-right">
                    <div className="font-mono text-sm font-black text-foreground">
                      {activeTech.proficiency}%
                    </div>
                    <div className="font-mono text-[10px] text-muted-foreground uppercase">
                      Proficiency
                    </div>
                  </div>

                  {/* Micro Progress Bar */}
                  <div className="h-2 w-16 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${activeTech.proficiency}%`,
                        backgroundColor: activeTech.color,
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="mt-4 flex items-center gap-1.5">
        {techs.map((tech, idx) => (
          <button
            key={tech.name}
            type="button"
            onClick={() => handleSelectTech(idx)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              activeFrontIndex === idx
                ? 'w-6 bg-primary shadow-xs'
                : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700'
            }`}
            aria-label={`Go to ${tech.name}`}
          />
        ))}
      </div>
    </div>
  )
}
