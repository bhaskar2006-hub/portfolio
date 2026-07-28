'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, RefreshCw } from 'lucide-react'

type Tech = {
  name: string
  icon: string
  color: string
  category: string
  desc: string
}

const techs: Tech[] = [
  {
    name: 'JavaScript',
    icon: '/tech/javascript.svg',
    color: '#F7DF1E',
    category: 'Language',
    desc: 'ES6+, Async, Web APIs',
  },
  {
    name: 'Python',
    icon: '/tech/python.svg',
    color: '#3776AB',
    category: 'Language',
    desc: 'Backend, Data, Scripting',
  },
  {
    name: 'C++',
    icon: '/tech/cplusplus.svg',
    color: '#00599C',
    category: 'Language',
    desc: 'DSA, OOP, Memory & Performance',
  },
  {
    name: 'React',
    icon: '/tech/react.svg',
    color: '#61DAFB',
    category: 'Frontend',
    desc: 'Hooks, Virtual DOM, State',
  },
  {
    name: 'Node.js',
    icon: '/tech/nodedotjs.svg',
    color: '#5FA04E',
    category: 'Backend',
    desc: 'Event-loop, NPM, REST APIs',
  },
  {
    name: 'Express',
    icon: '/tech/express.svg',
    color: '#38BDF8',
    category: 'Backend',
    desc: 'Middleware, Routing, Auth',
  },
  {
    name: 'Flask',
    icon: '/tech/flask.svg',
    color: '#E2E8F0',
    category: 'Backend',
    desc: 'Microservices, WSGI, Python APIs',
  },
  {
    name: 'MongoDB',
    icon: '/tech/mongodb.svg',
    color: '#47A248',
    category: 'Database',
    desc: 'NoSQL, Aggregation, Schemas',
  },
  {
    name: 'AWS',
    icon: '/tech/aws.svg',
    color: '#FF9900',
    category: 'Cloud',
    desc: 'EC2, S3, Deployment',
  },
  {
    name: 'Git',
    icon: '/tech/git.svg',
    color: '#F05032',
    category: 'Tool',
    desc: 'Version Control, Branching',
  },
  {
    name: 'GitHub',
    icon: '/tech/github.svg',
    color: '#A855F7',
    category: 'Tool',
    desc: 'CI/CD, Workflows, Collaboration',
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

/* -------------------------------------------------------------------------- */
/*                          3D Interactive Orbit                              */
/* -------------------------------------------------------------------------- */

export function TechStack() {
  const [angle, setAngle] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [hoveredTech, setHoveredTech] = useState<Tech | null>(null)
  const requestRef = useRef<number | null>(null)
  const velocityRef = useRef(0.005)

  const radiusX = 300 // horizontal radius
  const radiusY = 75 // vertical radius for 3D tilt

  const updateAngle = useCallback(() => {
    if (!isDragging && !hoveredTech) {
      setAngle((prev) => (prev + velocityRef.current) % (Math.PI * 2))
    }
    requestRef.current = requestAnimationFrame(updateAngle)
  }, [isDragging, hoveredTech])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateAngle)
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [updateAngle])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStartX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const deltaX = e.clientX - dragStartX
    setAngle((prev) => prev + deltaX * 0.005)
    setDragStartX(e.clientX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
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

  // Calculate position & depth scale for each tech node
  const nodesWithPositions = techs.map((tech, i) => {
    const nodeAngle = angle + (i * 2 * Math.PI) / techs.length
    const x = Math.sin(nodeAngle) * radiusX
    const z = Math.cos(nodeAngle) // -1 (back) to 1 (front)
    const y = Math.cos(nodeAngle) * radiusY

    // Perspective projection scale (front = 1.15, back = 0.55)
    const scale = 0.85 + z * 0.3
    const opacity = 0.35 + (z + 1) * 0.325 // 0.35 to 1.0
    const zIndex = Math.round((z + 1) * 100)

    return { tech, x, y, z, scale, opacity, zIndex }
  })

  // Sort nodes so front items render on top
  const sortedNodes = [...nodesWithPositions].sort((a, b) => a.zIndex - b.zIndex)

  return (
    <div className="mb-12 flex flex-col items-center">
      {/* 3D Orbit Container */}
      <div
        className="relative flex h-[380px] w-full max-w-4xl select-none items-center justify-center overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-b from-card/40 via-card/20 to-transparent backdrop-blur-md cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Core Center Sun / Planet */}
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent p-1 border border-primary/30 shadow-[0_0_60px_rgba(45,212,191,0.25)] animate-pulse">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card/90 text-primary shadow-lg border border-border">
            <Sparkles className="h-10 w-10 animate-spin" style={{ animationDuration: '14s' }} />
          </div>
        </div>

        {/* Orbit Path Visual Ring */}
        <div
          className="pointer-events-none absolute h-[150px] w-[600px] rounded-[100%] border border-primary/20 shadow-[0_0_40px_rgba(45,212,191,0.15)]"
          style={{ transform: 'rotateX(65deg)' }}
        />

        {/* Orbiting Tech Icon Nodes */}
        {sortedNodes.map(({ tech, x, y, scale, opacity, zIndex }) => {
          const isSelected = hoveredTech?.name === tech.name

          return (
            <motion.div
              key={tech.name}
              className="absolute cursor-pointer"
              style={{
                transform: `translate3d(${x}px, ${y}px, 0px) scale(${isSelected ? scale * 1.35 : scale})`,
                opacity: isSelected ? 1 : opacity,
                zIndex: isSelected ? 999 : zIndex,
              }}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div
                className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border bg-card/90 p-3.5 shadow-xl transition-all duration-300"
                style={{
                  borderColor: isSelected ? tech.color : 'var(--border)',
                  color: isSelected ? tech.color : 'var(--foreground)',
                  boxShadow: isSelected
                    ? `0 0 30px ${tech.color}70, 0 12px 24px -6px ${tech.color}50`
                    : '0 8px 16px -4px rgba(0,0,0,0.4)',
                }}
              >
                <TechIcon tech={tech} className="h-8 w-8" />

                {/* Micro Label Pill */}
                <div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2.5 py-0.5 text-[11px] font-medium tracking-wide shadow-md transition-all duration-200"
                  style={{
                    backgroundColor: isSelected ? tech.color : 'var(--card)',
                    color: isSelected ? '#000000' : 'var(--muted-foreground)',
                    opacity: isSelected ? 1 : 0.85,
                  }}
                >
                  {tech.name}
                </div>
              </div>
            </motion.div>
          )
        })}

        {/* Drag Hint */}
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-md shadow-sm">
          <RefreshCw className="h-3.5 w-3.5 animate-spin text-primary" style={{ animationDuration: '8s' }} />
          <span>Drag horizontally to spin 3D tech orbit</span>
        </div>
      </div>

      {/* Detail Popover card for hovered tech */}
      <div className="mt-4 h-16 w-full max-w-md">
        <AnimatePresence mode="wait">
          {hoveredTech ? (
            <motion.div
              key={hoveredTech.name}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-between rounded-xl border border-border/80 bg-card p-3 shadow-lg"
              style={{ borderLeftColor: hoveredTech.color, borderLeftWidth: '4px' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background p-2"
                  style={{ color: hoveredTech.color }}
                >
                  <TechIcon tech={hoveredTech} className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {hoveredTech.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{hoveredTech.desc}</p>
                </div>
              </div>
              <span
                className="rounded-full px-2.5 py-1 text-[10px] font-mono font-medium"
                style={{
                  backgroundColor: `${hoveredTech.color}20`,
                  color: hoveredTech.color,
                }}
              >
                {hoveredTech.category}
              </span>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center rounded-xl border border-dashed border-border/50 p-4 text-xs text-muted-foreground"
            >
              Hover or tap any orbiting skill icon to inspect details
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}


