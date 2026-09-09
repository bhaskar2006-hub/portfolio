'use client'

import { motion } from 'framer-motion'
import {
  Award,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  GraduationCap,
  Layers,
  Lock,
  Server,
  Sparkles,
  Zap,
  ShieldCheck,
  Workflow,
  ArrowDown,
} from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { TechStack } from '@/components/tech-stack'
import { AnimatedCounter } from '@/components/animated-counter'
import { profile, skillGroups } from '@/lib/resume'

const strengtheningSkills = [
  'DSA & Algorithms',
  'Backend Engineering',
  'System Design',
  'Cloud & DevOps',
]

const coreStrengths = [
  {
    icon: Server,
    title: 'REST API & Services',
    desc: 'Designing modular controllers, request validation, and centralized error handling pipelines.',
  },
  {
    icon: Lock,
    title: 'Auth & RBAC Security',
    desc: 'Enforcing JWT authentication, bcrypt salt hashing, and multi-tier role permissions.',
  },
  {
    icon: Database,
    title: 'Database Modeling',
    desc: 'Structuring relational document schemas, indexing, and Mongoose connection management.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Containerization',
    desc: 'Deploying full-stack applications with Docker, Render web services, Vercel, and AWS EC2.',
  },
]

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        index="03"
        title="ABOUT & ARCHITECTURE"
        subtitle="Bridging computer science fundamentals with hands-on full-stack and cloud development."
      />

      {/* Modern Bento Grid */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Main Bio & Philosophy Card (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border/80 bg-white/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl lg:col-span-7 flex flex-col justify-between"
        >
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-orange-500/10 blur-[90px]" />

          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-primary uppercase tracking-widest mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Engineering Philosophy</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-5">
              <div className="relative shrink-0">
                <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-2xl border-2 border-primary/40 shadow-lg shadow-orange-500/10 bg-muted">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-orange-500" title="Available for work" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug">
                  I build full-stack applications from database design to deployment.
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground font-normal">
              I focus on reliable APIs, authentication systems, responsive React interfaces, database design and cloud deployment.
            </p>

            {/* Currently Strengthening Badges */}
            <div className="mt-5 rounded-2xl border border-border/80 bg-slate-50/70 p-4">
              <div className="text-xs font-mono font-bold text-foreground uppercase tracking-wider mb-2.5">
                Currently Strengthening:
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {strengtheningSkills.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-primary/30 bg-orange-500/10 px-2.5 py-1 text-primary font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Metric Highlights */}
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border/80 pt-5">
            <div className="rounded-2xl border border-border/80 bg-slate-50/80 p-3.5 backdrop-blur-sm shadow-2xs">
              <div className="font-mono text-xl font-black text-primary">
                <AnimatedCounter value={9.33} decimals={2} />
              </div>
              <div className="mt-0.5 text-[11px] text-muted-foreground font-medium">B.Tech CGPA / 10</div>
            </div>
            <div className="rounded-2xl border border-border/80 bg-slate-50/80 p-3.5 backdrop-blur-sm shadow-2xs">
              <div className="font-mono text-xl font-black text-foreground">
                <AnimatedCounter value={3} suffix="+" />
              </div>
              <div className="mt-0.5 text-[11px] text-muted-foreground font-medium">Full-Stack Apps</div>
            </div>
            <div className="rounded-2xl border border-border/80 bg-slate-50/80 p-3.5 backdrop-blur-sm shadow-2xs">
              <div className="font-mono text-xl font-black text-orange-600">Cloud</div>
              <div className="mt-0.5 text-[11px] text-muted-foreground font-medium">Vercel &amp; Render</div>
            </div>
          </div>
        </motion.div>

        {/* Updated Architecture Diagram (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-border/80 bg-white/90 p-6 shadow-xl backdrop-blur-xl lg:col-span-5 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between border-b border-border/80 pb-3.5">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider">
                Full-Stack Architecture
              </span>
            </div>
            <span className="rounded-full bg-orange-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-primary">
              END-TO-END FLOW
            </span>
          </div>

          {/* Interactive Stack Flow Visual */}
          <div className="my-4 space-y-2 font-mono text-xs">
            {/* 1. Client */}
            <motion.div
              whileHover={{ scale: 1.02, x: 2 }}
              className="flex items-center justify-between rounded-xl border border-orange-500/30 bg-orange-500/5 p-2.5 text-orange-950 shadow-2xs transition-colors"
            >
              <div className="flex items-center gap-2">
                <Globe className="h-3.5 w-3.5 text-orange-500" />
                <span className="font-bold text-xs">CLIENT</span>
              </div>
              <span className="text-[11px] text-orange-700 font-medium">React + TypeScript + Context API</span>
            </motion.div>

            <div className="flex items-center justify-center py-0.5">
              <motion.span
                animate={{ y: [0, 3, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="text-xs font-bold text-primary"
              >
                ↓
              </motion.span>
            </div>

            {/* 2. API */}
            <motion.div
              whileHover={{ scale: 1.02, x: 2 }}
              className="flex items-center justify-between rounded-xl border border-amber-500/30 bg-amber-500/5 p-2.5 text-amber-950 shadow-2xs transition-colors"
            >
              <div className="flex items-center gap-2">
                <Server className="h-3.5 w-3.5 text-amber-600" />
                <span className="font-bold text-xs">API</span>
              </div>
              <span className="text-[11px] text-amber-700 font-medium">Node.js + Express + REST APIs</span>
            </motion.div>

            <div className="flex items-center justify-center py-0.5">
              <motion.span
                animate={{ y: [0, 3, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="text-xs font-bold text-primary"
              >
                ↓
              </motion.span>
            </div>

            {/* 3. Authorization */}
            <motion.div
              whileHover={{ scale: 1.02, x: 2 }}
              className="flex items-center justify-between rounded-xl border border-rose-500/30 bg-rose-500/5 p-2.5 text-rose-950 shadow-2xs transition-colors"
            >
              <div className="flex items-center gap-2">
                <Lock className="h-3.5 w-3.5 text-rose-600" />
                <span className="font-bold text-xs">AUTHORIZATION</span>
              </div>
              <span className="text-[11px] text-rose-700 font-medium">JWT + RBAC + Validation</span>
            </motion.div>

            <div className="flex items-center justify-center py-0.5">
              <motion.span
                animate={{ y: [0, 3, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="text-xs font-bold text-primary"
              >
                ↓
              </motion.span>
            </div>

            {/* 4. Database */}
            <motion.div
              whileHover={{ scale: 1.02, x: 2 }}
              className="flex items-center justify-between rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-2.5 text-yellow-950 shadow-2xs transition-colors"
            >
              <div className="flex items-center gap-2">
                <Database className="h-3.5 w-3.5 text-yellow-600" />
                <span className="font-bold text-xs">DATABASE</span>
              </div>
              <span className="text-[11px] text-yellow-700 font-medium">MongoDB + Mongoose</span>
            </motion.div>

            <div className="flex items-center justify-center py-0.5">
              <motion.span
                animate={{ y: [0, 3, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
                className="text-xs font-bold text-primary"
              >
                ↓
              </motion.span>
            </div>

            {/* 5. Cloud */}
            <motion.div
              whileHover={{ scale: 1.02, x: 2 }}
              className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-2.5 text-emerald-950 shadow-2xs transition-colors"
            >
              <div className="flex items-center gap-2">
                <Cloud className="h-3.5 w-3.5 text-emerald-600" />
                <span className="font-bold text-xs">CLOUD</span>
              </div>
              <span className="text-[11px] text-emerald-700 font-medium">Vercel + Render + MongoDB Atlas</span>
            </motion.div>
          </div>

          {/* Footer Badge */}
          <div className="flex items-center justify-between rounded-xl border border-border bg-slate-50/90 px-3.5 py-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <Zap className="h-3.5 w-3.5 text-primary" />
              <span>Docker Containers · REST Pipeline</span>
            </span>
            <span className="text-orange-600 font-mono text-[11px] font-bold">● Operational</span>
          </div>
        </motion.div>

        {/* 4 Core Strengths Cards (Grid Row) */}
        {coreStrengths.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group rounded-2xl border border-border/80 bg-white/90 p-5 shadow-md backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-lg hover:translate-y-[-2px] lg:col-span-3 sm:col-span-6"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white mb-3">
                <Icon className="h-4 w-4" />
              </div>
              <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" className="relative bg-orange-500/[0.02] border-y border-border/60">
      <SectionHeading
        index="02"
        title="ENGINEERING STACK"
        subtitle="Languages, frameworks, databases, and DevOps tools powering my full-stack workflow."
      />

      {/* 3D Interactive Orbit Stack */}
      <TechStack />

      {/* Categorized Engineering Stack Cards (6 compact categories) */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group rounded-2xl border border-border/80 bg-white/90 p-5 shadow-md backdrop-blur-md transition-all hover:border-primary/40 hover:shadow-lg"
          >
            <div className="mb-3 flex items-center justify-between border-b border-border/80 pb-2.5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                {group.label}
              </h3>
              <span className="font-mono text-[10px] text-muted-foreground">
                {group.items.length} technologies
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border/80 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-primary/50 hover:bg-orange-500/5 hover:text-primary font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

