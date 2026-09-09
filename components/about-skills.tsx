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
} from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { TechStack } from '@/components/tech-stack'
import { profile, skillGroups } from '@/lib/resume'

const coreStrengths = [
  {
    icon: Server,
    title: 'Full-Stack Architecture',
    desc: 'Designing scalable RESTful APIs in Express/Node with modular route handlers and middleware.',
  },
  {
    icon: Lock,
    title: 'Robust Security & RBAC',
    desc: 'Implementing secure JWT workflows, bcrypt salt hashing, and role-based route guards.',
  },
  {
    icon: Database,
    title: 'Schema & Query Design',
    desc: 'Structuring normalized & indexed MongoDB collections with atomic CRUD operations.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Linux Hosting',
    desc: 'Deploying Ubuntu instances on AWS EC2, configuring Nginx reverse proxy, and PM2 process management.',
  },
]

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        index="01"
        title="About & Engineering Mindset"
        subtitle="Bridging solid theoretical CS fundamentals with hands-on full-stack cloud production."
      />

      {/* Modern Bento Grid */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Main Bio & Philosophy Card (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-card/90 via-card/70 to-card/40 p-8 shadow-xl backdrop-blur-xl lg:col-span-7 flex flex-col justify-between"
        >
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-primary/10 blur-[90px]" />

          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-primary uppercase tracking-widest mb-3">
              <Sparkles className="h-4 w-4" />
              <span>Full-Stack Engineer · AI Specialization</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
              <div className="relative shrink-0">
                <div className="h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-2xl border-2 border-primary/40 shadow-lg shadow-primary/20 bg-muted">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-background bg-emerald-500" title="Available for work" />
              </div>

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl leading-snug">
                  Crafting resilient web applications from database schemas to cloud deployment.
                </h3>
              </div>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground font-normal">
              {profile.summary}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">
              I focus on engineering reliable web architectures where frontend interactivity seamlessly coordinates with scalable backend microservices. From handling state desynchronization in real-time e-commerce carts to deploying hardened Ubuntu servers on AWS EC2, I build for resilience.
            </p>
          </div>

          {/* Key Metric Highlights */}
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border/60 pt-6">
            <div className="rounded-2xl border border-border/80 bg-background/60 p-4 backdrop-blur-sm">
              <div className="font-mono text-2xl font-black text-primary">9.33</div>
              <div className="mt-0.5 text-xs text-muted-foreground font-medium">B.Tech CGPA / 10</div>
            </div>
            <div className="rounded-2xl border border-border/80 bg-background/60 p-4 backdrop-blur-sm">
              <div className="font-mono text-2xl font-black text-foreground">100%</div>
              <div className="mt-0.5 text-xs text-muted-foreground font-medium">Verified Code</div>
            </div>
            <div className="rounded-2xl border border-border/80 bg-background/60 p-4 backdrop-blur-sm">
              <div className="font-mono text-2xl font-black text-emerald-400">AWS</div>
              <div className="mt-0.5 text-xs text-muted-foreground font-medium">EC2 Deployed</div>
            </div>
          </div>
        </motion.div>

        {/* Interactive System Capabilities Visual Card (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/80 p-6 shadow-xl backdrop-blur-xl lg:col-span-5 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between border-b border-border/60 pb-4">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider">
                Full-Stack Pipeline
              </span>
            </div>
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-primary">
              LIVE ARCHITECTURE
            </span>
          </div>

          {/* Interactive Stack Flow Visual */}
          <div className="my-5 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-3 text-cyan-300">
              <div className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 text-cyan-400" />
                <span className="font-semibold">Client Tier</span>
              </div>
              <span className="text-[11px] text-cyan-400/80">React 19 · SPA · Context API</span>
            </div>

            <div className="flex items-center justify-center text-muted-foreground/60">
              <span className="text-xs">↓ REST API / HTTPS Requests</span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3 text-emerald-300">
              <div className="flex items-center gap-2.5">
                <Server className="h-4 w-4 text-emerald-400" />
                <span className="font-semibold">API Gateway Tier</span>
              </div>
              <span className="text-[11px] text-emerald-400/80">Node.js · Express · JWT Auth</span>
            </div>

            <div className="flex items-center justify-center text-muted-foreground/60">
              <span className="text-xs">↓ Mongoose ORM / Connection Pool</span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-amber-500/30 bg-amber-950/20 p-3 text-amber-300">
              <div className="flex items-center gap-2.5">
                <Database className="h-4 w-4 text-amber-400" />
                <span className="font-semibold">Database &amp; Cloud</span>
              </div>
              <span className="text-[11px] text-amber-400/80">MongoDB Atlas · AWS EC2</span>
            </div>
          </div>

          {/* Footer Badge */}
          <div className="flex items-center justify-between rounded-xl border border-border/80 bg-secondary/60 px-3.5 py-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <Zap className="h-3.5 w-3.5 text-primary" />
              <span>Nginx Proxy · PM2 Daemon</span>
            </span>
            <span className="text-emerald-400 font-mono text-[11px] font-bold">● Active</span>
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
              className="group rounded-2xl border border-border/80 bg-card/60 p-5 shadow-lg backdrop-blur-md transition-all hover:border-primary/50 hover:bg-card/90 lg:col-span-3 sm:col-span-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground mb-3">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
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
    <Section id="skills" className="relative bg-card/20 border-y border-border/40">
      <SectionHeading
        index="02"
        title="Technical Arsenal & 3D Orbit"
        subtitle="Languages, frameworks, databases, and DevOps tools powering my full-stack engineering workflow."
      />

      {/* 3D Interactive Orbit Stack */}
      <TechStack />

      {/* Categorized Bento Skill Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group rounded-2xl border border-border/80 bg-card/80 p-5 shadow-lg backdrop-blur-md transition-all hover:border-primary/40"
          >
            <div className="mb-3.5 flex items-center justify-between border-b border-border/50 pb-2.5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                {group.label}
              </h3>
              <span className="font-mono text-[10px] text-muted-foreground">
                {group.items.length} skills
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border/70 bg-secondary/80 px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-card"
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
