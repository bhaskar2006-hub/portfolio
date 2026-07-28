'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Code2, Mail, Sparkles, Terminal } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/resume'

const codeLines = [
  { text: 'const dev = {', indent: 0 },
  { text: `name: '${profile.name}',`, indent: 1 },
  { text: "role: 'Full-Stack Developer',", indent: 1 },
  { text: "stack: ['MERN', 'Flask', 'AWS'],", indent: 1 },
  { text: 'cgpa: 9.33,', indent: 1 },
  { text: 'status: "Ready to ship",', indent: 1 },
  { text: '}', indent: 0 },
]

const floatingChips = [
  { label: 'React', top: '-12px', left: '-12px', delay: 0 },
  { label: 'Node.js', top: '30%', right: '-18px', delay: 0.4 },
  { label: 'MongoDB', bottom: '25%', left: '-18px', delay: 0.8 },
  { label: 'AWS EC2', bottom: '-12px', right: '15%', delay: 1.2 },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-28 md:pt-36"
    >
      {/* subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, color-mix(in oklch, var(--border) 60%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--border) 60%, transparent) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs text-muted-foreground shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
            <span className="text-foreground font-medium">Available for internships &amp; freelance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-3 font-mono text-lg font-semibold text-primary"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 shadow-lg"
            >
              View projects
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4" />
              Contact me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.36 }}
            className="mt-8 flex items-center gap-4 text-muted-foreground"
          >
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground" aria-label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground" aria-label="LinkedIn">
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href={profile.links.leetcode} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground" aria-label="LeetCode">
              <Code2 className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Glassmorphic Profile Card Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative lg:col-span-5 mx-auto w-full max-w-sm lg:max-w-none"
        >
          {/* Floating Technology Badges */}
          {floatingChips.map((chip) => (
            <motion.span
              key={chip.label}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: chip.delay,
              }}
              className="absolute z-20 rounded-full border border-primary/40 bg-card/95 px-3 py-1 font-mono text-xs font-semibold text-primary shadow-xl backdrop-blur-md"
              style={{
                top: chip.top,
                bottom: chip.bottom,
                left: chip.left,
                right: chip.right,
              }}
            >
              {chip.label}
            </motion.span>
          ))}

          {/* Portrait Container */}
          <div className="group relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-b from-card/90 via-card/70 to-card/40 p-3.5 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-primary/60">
            {/* Ambient backlight glow behind photo */}
            <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/30 via-emerald-400/20 to-teal-500/30 opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />

            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card aspect-[4/5] shadow-lg">
              <img
                src="/profile.jpg"
                alt={profile.name}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Bottom Glass Badge Overlay */}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl border border-white/20 bg-background/80 p-3 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">{profile.name}</div>
                    <div className="text-[10px] font-mono text-muted-foreground">B.Tech CSE (AI)</div>
                  </div>
                </div>
                <div className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-mono font-semibold text-primary">
                  CGPA 9.33
                </div>
              </div>
            </div>

            {/* Developer Code Snippet Footer */}
            <div className="mt-3 overflow-hidden rounded-xl border border-border/60 bg-background/90 p-3 shadow-inner">
              <div className="flex items-center gap-2 border-b border-border/40 pb-2 mb-2 font-mono text-[11px] text-muted-foreground">
                <Terminal className="h-3.5 w-3.5 text-primary" />
                <span>developer.ts</span>
              </div>
              <pre className="font-mono text-xs text-muted-foreground leading-snug">
                <code>
                  {codeLines.map((line, i) => (
                    <div key={i} style={{ paddingLeft: `${line.indent * 0.75}rem` }}>
                      {line.text}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

