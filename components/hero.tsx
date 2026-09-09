'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  Award,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Download,
  Flame,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { AnimatedCounter } from '@/components/animated-counter'
import { profile } from '@/lib/resume'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-28 pb-20 md:pt-36 lg:pb-28">
      {/* Dynamic Warm Ambient Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-orange-500/10 blur-[140px]" />
        <div className="absolute top-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[150px]" />
        <div className="absolute -bottom-20 left-1/3 h-[400px] w-[400px] rounded-full bg-orange-400/10 blur-[130px]" />

        {/* Tech Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
          style={{
            backgroundImage:
              'linear-gradient(to right, color-mix(in oklch, var(--border) 75%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--border) 75%, transparent) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12">
        {/* Left Column: Bio, Value Proposition, Action CTAs (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 font-mono text-xs shadow-[0_0_15px_rgba(255,91,0,0.12)] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600" />
            </span>
            <span className="font-semibold text-orange-600 uppercase tracking-wide">
              Available for Internships &amp; Full-Stack Roles
            </span>
          </motion.div>

          {/* Main Hero Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-rose-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-3 flex items-center gap-2 font-mono text-lg font-bold text-primary sm:text-xl"
          >
            <Terminal className="h-5 w-5 text-primary shrink-0" />
            <span>Full-Stack Developer &amp; AI Undergraduate</span>
          </motion.div>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Build production-ready web applications with{' '}
            <strong className="font-semibold text-foreground">React, Node.js, Express and MongoDB</strong>. Focused on backend architecture, authentication, REST APIs, databases and cloud deployment.
          </motion.p>

          {/* Key Metrics Quick Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-6 grid grid-cols-3 gap-3 border-y border-border/80 py-4 max-w-lg"
          >
            <div>
              <div className="font-mono text-2xl font-black text-foreground">
                <AnimatedCounter value={9.33} decimals={2} />
              </div>
              <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">CGPA / 10</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-black text-primary">
                <AnimatedCounter value={3} suffix="+" />
              </div>
              <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Full-Stack Apps</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-black text-foreground">
                <AnimatedCounter value={17} suffix="+" />
              </div>
              <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Certifications</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(255,91,0,0.35)] transition-all hover:bg-orange-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Projects</span>
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="/Bhaskar_Reddy_Resume.pdf"
              download="Bhaskar_Reddy_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-white px-5 py-3.5 text-sm font-semibold text-foreground shadow-sm backdrop-blur-md transition-all hover:border-primary hover:text-primary hover:bg-orange-500/5 active:scale-[0.98]"
            >
              <Download className="h-4 w-4 text-primary" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/80 px-5 py-3.5 text-sm font-semibold text-muted-foreground transition-all hover:text-foreground hover:bg-secondary active:scale-[0.98]"
            >
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </a>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.38 }}
            className="mt-8 flex items-center gap-4 text-muted-foreground"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/80">Connect:</span>
            <div className="flex items-center gap-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground transition-all hover:border-primary hover:text-primary hover:scale-105 shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground transition-all hover:border-blue-500 hover:text-blue-500 hover:scale-105 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.links.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground transition-all hover:border-amber-500 hover:text-amber-500 hover:scale-105 shadow-sm"
                aria-label="LeetCode Profile"
              >
                <Code2 className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Creative Developer Visual Portrait Showcase (6 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="relative lg:col-span-6 flex items-center justify-center"
        >
          {/* Outer Multi-Layer Glow Aura */}
          <div className="pointer-events-none absolute h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-orange-500/25 via-amber-500/20 to-yellow-500/20 blur-[90px] animate-pulse" />

          {/* Rotating Decorative Outer Ring */}
          <div className="pointer-events-none absolute h-[440px] w-[440px] sm:h-[480px] sm:w-[480px] rounded-full border border-dashed border-orange-500/30 animate-[spin_30s_linear_infinite]" />

          {/* Secondary Reverse Orbit Ring */}
          <div className="pointer-events-none absolute h-[380px] w-[380px] sm:h-[420px] sm:w-[420px] rounded-full border border-orange-400/20 animate-[spin_20s_linear_infinite_reverse]" />

          {/* Central Portrait Card */}
          <div className="relative z-10 w-full max-w-[340px] sm:max-w-[390px]">
            {/* Framed Glowing Card Container */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-orange-500/40 bg-gradient-to-b from-white via-white/95 to-orange-500/[0.06] p-3 shadow-2xl shadow-orange-500/15 backdrop-blur-xl transition-all duration-500 hover:border-primary hover:shadow-orange-500/25 hover:-translate-y-1 dark:from-slate-900 dark:via-slate-900/90 dark:to-orange-950/30">
              
              {/* Top Bar / Mac OS Header */}
              <div className="flex items-center justify-between px-3 py-2 mb-2 border-b border-border/70">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-primary">
                  <Terminal className="h-3 w-3" />
                  <span>bhaskar.dev</span>
                </div>
                <span className="rounded-full bg-orange-500/15 px-2 py-0.5 font-mono text-[9px] font-bold text-primary">
                  AI / MERN
                </span>
              </div>

              {/* Portrait Image Canvas */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-950 border border-orange-500/20 shadow-inner group">
                <Image
                  src="/profile.jpg"
                  alt={profile.name}
                  fill
                  className="object-cover object-top filter contrast-[1.03] brightness-[1.02] transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 320px, 400px"
                  priority
                />

                {/* Creative Ambient Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-base text-white drop-shadow-md">
                        {profile.name}
                      </h3>
                      <p className="font-mono text-[11px] text-orange-300 drop-shadow-sm flex items-center gap-1">
                        <Sparkles className="h-3 w-3" />
                        Full-Stack Engineer &bull; AI
                      </p>
                    </div>
                    <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-orange-500/90 text-white shadow-lg backdrop-blur-md">
                      <Zap className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Specs Bar */}
              <div className="mt-3 flex items-center justify-between rounded-xl bg-orange-500/10 border border-orange-500/20 px-3 py-2 font-mono text-[11px]">
                <div className="flex items-center gap-1.5 text-foreground font-semibold">
                  <Cpu className="h-3.5 w-3.5 text-primary" />
                  <span>MERN + Cloud</span>
                </div>
                <div className="flex items-center gap-1.5 text-primary font-bold">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Oracle &bull; Google Certified</span>
                </div>
              </div>
            </div>

            {/* ─── FLOATING CREATIVE CARDS AROUND PORTRAIT ─── */}

            {/* Top-Right Floating Pill: Agentic AI */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -right-6 z-20 flex items-center gap-2 rounded-2xl border border-orange-500/40 bg-white/95 px-3.5 py-2 shadow-xl shadow-orange-500/15 backdrop-blur-md dark:bg-slate-900"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-orange-500/15 text-primary">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <p className="font-mono text-[10px] text-muted-foreground uppercase font-bold">Certified</p>
                <p className="font-bold text-xs text-foreground">Agentic AI &amp; LLMs</p>
              </div>
            </motion.div>

            {/* Bottom-Left Floating Pill: Full-Stack Stack */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-6 -left-6 z-20 flex items-center gap-2.5 rounded-2xl border border-amber-500/40 bg-white/95 px-3.5 py-2 shadow-xl shadow-amber-500/15 backdrop-blur-md dark:bg-slate-900"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
                <Layers className="h-4 w-4" />
              </span>
              <div>
                <p className="font-mono text-[10px] text-muted-foreground uppercase font-bold">Core Stack</p>
                <p className="font-bold text-xs text-foreground">React · Node · Express · Mongo</p>
              </div>
            </motion.div>

            {/* Top-Left Floating Badge: Live Status */}
            <motion.div
              animate={{ x: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-16 -left-8 z-20 hidden sm:flex items-center gap-2 rounded-full border border-emerald-500/40 bg-white/95 px-3 py-1 shadow-lg backdrop-blur-md dark:bg-slate-900"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] font-bold text-slate-700 dark:text-slate-200">
                Open for Hire
              </span>
            </motion.div>

            {/* Bottom-Right Mini Badge: Academic Score */}
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute bottom-20 -right-7 z-20 hidden sm:flex items-center gap-1.5 rounded-full border border-orange-500/40 bg-white/95 px-3 py-1 shadow-lg backdrop-blur-md dark:bg-slate-900"
            >
              <GraduationCap className="h-3.5 w-3.5 text-primary" />
              <span className="font-mono text-[10px] font-bold text-primary">
                9.33 CGPA
              </span>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
