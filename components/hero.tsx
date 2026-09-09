'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Download,
  Flame,
  Globe,
  Layers,
  Mail,
  Play,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '@/components/brand-icons'
import { profile } from '@/lib/resume'

type CodeTab = 'developer' | 'server' | 'database' | 'aws'

const codeSnippets: Record<CodeTab, { filename: string; language: string; lines: { text: string; indent: number; color?: string }[] }> = {
  developer: {
    filename: 'developer.ts',
    language: 'TypeScript',
    lines: [
      { text: '// Full-Stack Engineer Profile', indent: 0, color: 'text-muted-foreground/60' },
      { text: 'const engineer = {', indent: 0, color: 'text-primary' },
      { text: `name: '${profile.name}',`, indent: 1, color: 'text-foreground' },
      { text: "focus: 'Full-Stack Web Systems & Cloud',", indent: 1, color: 'text-foreground' },
      { text: "degree: 'B.Tech CSE (Artificial Intelligence)',", indent: 1, color: 'text-foreground' },
      { text: 'cgpa: 9.33,', indent: 1, color: 'text-emerald-400' },
      { text: "coreStack: ['React', 'Node.js', 'Express', 'MongoDB'],", indent: 1, color: 'text-cyan-300' },
      { text: "cloud: ['AWS EC2', 'Nginx', 'PM2', 'REST APIs'],", indent: 1, color: 'text-violet-300' },
      { text: 'status: "Ready to ship & build",', indent: 1, color: 'text-emerald-400' },
      { text: '};', indent: 0, color: 'text-primary' },
      { text: '', indent: 0 },
      { text: 'export default engineer;', indent: 0, color: 'text-primary font-bold' },
    ],
  },
  server: {
    filename: 'server.ts',
    language: 'Express.js',
    lines: [
      { text: "import express from 'express';", indent: 0, color: 'text-primary' },
      { text: "import { authenticateJWT } from './middleware/auth';", indent: 0, color: 'text-primary' },
      { text: '', indent: 0 },
      { text: 'const app = express();', indent: 0, color: 'text-foreground' },
      { text: "app.use('/api/v1/auth', authRouter);", indent: 0, color: 'text-cyan-300' },
      { text: "app.use('/api/v1/orders', authenticateJWT, orderRouter);", indent: 0, color: 'text-emerald-400' },
      { text: '', indent: 0 },
      { text: 'app.listen(5000, () => {', indent: 0, color: 'text-primary' },
      { text: "  console.log('⚡ REST API running on AWS EC2 :5000');", indent: 1, color: 'text-muted-foreground' },
      { text: '});', indent: 0, color: 'text-primary' },
    ],
  },
  database: {
    filename: 'models.ts',
    language: 'MongoDB',
    lines: [
      { text: "import mongoose, { Schema } from 'mongoose';", indent: 0, color: 'text-primary' },
      { text: '', indent: 0 },
      { text: 'const UserSchema = new Schema({', indent: 0, color: 'text-primary' },
      { text: '  email: { type: String, required: true, unique: true },', indent: 1, color: 'text-foreground' },
      { text: '  passwordHash: { type: String, select: false },', indent: 1, color: 'text-foreground' },
      { text: "  role: { type: String, enum: ['ADMIN', 'USER'], default: 'USER' },", indent: 1, color: 'text-cyan-300' },
      { text: '  cartSession: { type: Schema.Types.ObjectId, ref: "Cart" }', indent: 1, color: 'text-emerald-400' },
      { text: '}, { timestamps: true });', indent: 0, color: 'text-primary' },
    ],
  },
  aws: {
    filename: 'deploy.sh',
    language: 'Bash / AWS',
    lines: [
      { text: '#!/bin/bash', indent: 0, color: 'text-muted-foreground/60' },
      { text: 'echo "🚀 Deploying Full-Stack app to AWS EC2..."', indent: 0, color: 'text-emerald-400' },
      { text: 'git pull origin main', indent: 0, color: 'text-foreground' },
      { text: 'npm run build', indent: 0, color: 'text-cyan-300' },
      { text: 'pm2 reload ecosystem.config.js --env production', indent: 0, color: 'text-primary' },
      { text: 'sudo systemctl reload nginx', indent: 0, color: 'text-foreground' },
      { text: 'echo "✅ SSL Terminated & Proxy active on :443"', indent: 0, color: 'text-emerald-400 font-bold' },
    ],
  },
}

const floatingBadges = [
  { label: 'React 19', pos: '-top-3 left-4', color: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/40' },
  { label: 'Node & Express', pos: 'top-1/4 -right-4', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/40' },
  { label: 'MongoDB Atlas', pos: 'bottom-24 -left-4', color: 'border-green-500/40 text-green-400 bg-green-950/40' },
  { label: 'AWS EC2 Deployed', pos: '-bottom-3 right-6', color: 'border-amber-500/40 text-amber-400 bg-amber-950/40' },
]

export function Hero() {
  const [activeTab, setActiveTab] = useState<CodeTab>('developer')
  const [isRunning, setIsRunning] = useState(false)
  const [runSuccess, setRunSuccess] = useState(false)

  const handleRunCode = () => {
    setIsRunning(true)
    setTimeout(() => {
      setIsRunning(false)
      setRunSuccess(true)
      setTimeout(() => setRunSuccess(false), 3000)
    }, 800)
  }

  return (
    <section id="top" className="relative overflow-hidden px-6 pt-28 pb-20 md:pt-36 lg:pb-28">
      {/* Dynamic Aurora Ambient Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute top-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[140px]" />
        <div className="absolute -bottom-20 left-1/3 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[120px]" />

        {/* Tech Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
          style={{
            backgroundImage:
              'linear-gradient(to right, color-mix(in oklch, var(--border) 60%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--border) 60%, transparent) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12">
        {/* Left Column: Bio, Value Proposition, Action CTAs */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs shadow-[0_0_15px_rgba(16,185,129,0.15)] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold text-emerald-400">Available for Internships &amp; Full-Stack Roles</span>
          </motion.div>

          {/* Main Hero Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-3 flex items-center gap-2 font-mono text-lg font-semibold text-primary sm:text-xl"
          >
            <Terminal className="h-5 w-5 text-primary shrink-0" />
            <span>{profile.title} &amp; AI Undergraduate</span>
          </motion.div>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Building end-to-end full-stack applications with{' '}
            <strong className="font-semibold text-foreground">React, Node.js, Express, MongoDB</strong>, and deployed on{' '}
            <strong className="font-semibold text-foreground">AWS EC2</strong>. Focused on clean architecture, resilient auth, and production scalability.
          </motion.p>

          {/* Key Metrics Quick Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-6 grid grid-cols-3 gap-3 border-y border-border/60 py-4 max-w-lg"
          >
            <div>
              <div className="font-mono text-2xl font-black text-foreground">9.33</div>
              <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">CGPA / 10</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-black text-primary">2+</div>
              <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Full-Stack Apps</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-black text-foreground">7+</div>
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
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Projects</span>
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="/Bhaskar_Reddy_Resume.pdf"
              download="Bhaskar_Reddy_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-card/90 px-5 py-3.5 text-sm font-semibold text-foreground shadow-md backdrop-blur-md transition-all hover:border-primary hover:text-primary hover:bg-primary/5 active:scale-[0.98]"
            >
              <Download className="h-4 w-4 text-primary" />
              <span>Resume PDF</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-secondary/80 px-5 py-3.5 text-sm font-semibold text-muted-foreground transition-all hover:text-foreground hover:bg-secondary active:scale-[0.98]"
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
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/70">Connect:</span>
            <div className="flex items-center gap-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-foreground hover:scale-105"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-blue-400 hover:text-blue-400 hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.links.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-amber-400 hover:text-amber-400 hover:scale-105"
                aria-label="LeetCode Profile"
              >
                <Code2 className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Developer Cockpit / IDE Showcase (Image-Free) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative lg:col-span-6 mx-auto w-full max-w-lg lg:max-w-none"
        >
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-indigo-500/20 opacity-60 blur-2xl transition-opacity" />

          {/* Floating Badges */}
          {floatingBadges.map((badge, idx) => (
            <motion.span
              key={badge.label}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: idx * 0.4,
              }}
              className={`absolute z-30 hidden sm:inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] font-semibold shadow-xl backdrop-blur-md ${badge.pos} ${badge.color}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
              {badge.label}
            </motion.span>
          ))}

          {/* IDE Window Frame */}
          <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-[#080d1a]/95 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
            {/* Window Title Bar */}
            <div className="flex items-center justify-between border-b border-border/80 bg-[#050811] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block shadow-sm" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
                <span className="ml-2 font-mono text-xs text-muted-foreground/80 flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-primary" />
                  <span>bhaskar-reddy-workspace</span>
                </span>
              </div>

              {/* Server Live Pill */}
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/60 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>ONLINE · 18ms</span>
              </div>
            </div>

            {/* File Tab Switcher */}
            <div className="flex items-center overflow-x-auto border-b border-border/60 bg-[#090e1c] px-2 pt-2 scrollbar-none">
              {(['developer', 'server', 'database', 'aws'] as CodeTab[]).map((tab) => {
                const isCurrent = activeTab === tab
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-2 border-t-2 px-3.5 py-2 font-mono text-xs font-medium transition-all ${
                      isCurrent
                        ? 'border-primary bg-[#080d1a] text-foreground font-semibold shadow-inner'
                        : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-[#0d1428]'
                    }`}
                  >
                    {tab === 'developer' && <Sparkles className="h-3.5 w-3.5 text-primary" />}
                    {tab === 'server' && <Server className="h-3.5 w-3.5 text-cyan-400" />}
                    {tab === 'database' && <Database className="h-3.5 w-3.5 text-emerald-400" />}
                    {tab === 'aws' && <Cpu className="h-3.5 w-3.5 text-amber-400" />}
                    <span>{codeSnippets[tab].filename}</span>
                  </button>
                )
              })}
            </div>

            {/* Code Body */}
            <div className="relative p-4 font-mono text-xs leading-relaxed min-h-[280px] select-text">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                >
                  <table className="w-full border-collapse">
                    <tbody>
                      {codeSnippets[activeTab].lines.map((line, i) => (
                        <tr key={i} className="hover:bg-white/[0.03]">
                          <td className="w-8 select-none pr-4 text-right text-[11px] text-muted-foreground/40">
                            {i + 1}
                          </td>
                          <td className="py-0.5 whitespace-pre">
                            <span style={{ paddingLeft: `${line.indent * 1}rem` }} className={line.color || 'text-muted-foreground'}>
                              {line.text}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Interactive Terminal Execution Bar */}
            <div className="flex items-center justify-between border-t border-border/70 bg-[#050811] px-4 py-3">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="text-emerald-400">node</span>
                <span>{codeSnippets[activeTab].filename}</span>
                {runSuccess && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-1 text-emerald-400 font-semibold"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Compiled 100% OK</span>
                  </motion.span>
                )}
              </div>

              <button
                type="button"
                onClick={handleRunCode}
                disabled={isRunning}
                className="flex items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/20 px-3 py-1.5 font-mono text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                {isRunning ? (
                  <>
                    <Sparkles className="h-3.5 w-3.5 animate-spin" />
                    <span>Executing...</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Run File</span>
                  </>
                )}
              </button>
            </div>

            {/* Architecture Metrics Footer Bar */}
            <div className="grid grid-cols-3 border-t border-border/60 bg-[#070b16] py-2.5 px-4 font-mono text-[11px] text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-cyan-400" />
                <span>AWS EC2 Ubuntu</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>JWT RBAC Secured</span>
              </div>
              <div className="flex items-center justify-end gap-1.5">
                <Zap className="h-3.5 w-3.5 text-amber-400" />
                <span>MERN Full-Stack</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

