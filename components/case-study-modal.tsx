'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Server, Database, ShieldAlert, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'

interface CaseStudy {
  overview: string
  architecture: string[]
  databaseSchema: string[]
  awsSetup: string
  challenges: { problem: string; solution: string }[]
}

interface CaseStudyModalProps {
  isOpen: boolean
  onClose: () => void
  projectName: string
  caseStudy: CaseStudy
  liveUrl?: string | null
  repoUrl?: string | null
}

export function CaseStudyModal({
  isOpen,
  onClose,
  projectName,
  caseStudy,
  liveUrl,
  repoUrl,
}: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<'architecture' | 'schema' | 'aws' | 'challenges'>('architecture')

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-3xl rounded-2xl border border-primary/30 bg-card p-6 shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/80 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs text-primary font-semibold">TECHNICAL CASE STUDY</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mt-1">{projectName} System Architecture</h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Overview */}
          <div className="mt-4 rounded-xl border border-border/60 bg-secondary/50 p-4 font-sans text-sm text-muted-foreground leading-relaxed">
            {caseStudy.overview}
          </div>

          {/* Navigation Tabs */}
          <div className="mt-5 flex flex-wrap gap-2 border-b border-border/60 pb-3 font-mono text-xs">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 font-medium transition-all ${
                activeTab === 'architecture'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              <Cpu className="h-3.5 w-3.5" />
              <span>Architecture</span>
            </button>
            <button
              onClick={() => setActiveTab('schema')}
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 font-medium transition-all ${
                activeTab === 'schema'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              <Database className="h-3.5 w-3.5" />
              <span>DB Schema</span>
            </button>
            <button
              onClick={() => setActiveTab('aws')}
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 font-medium transition-all ${
                activeTab === 'aws'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              <Server className="h-3.5 w-3.5" />
              <span>AWS EC2 Setup</span>
            </button>
            <button
              onClick={() => setActiveTab('challenges')}
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 font-medium transition-all ${
                activeTab === 'challenges'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              <ShieldAlert className="h-3.5 w-3.5" />
              <span>Challenges &amp; Solutions</span>
            </button>
          </div>

          {/* Tab Contents */}
          <div className="mt-4 min-h-[180px]">
            {activeTab === 'architecture' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2.5">
                <h4 className="font-mono text-xs font-semibold text-primary">System Tiers &amp; Component Flow</h4>
                <ul className="space-y-2">
                  {caseStudy.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {activeTab === 'schema' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2.5">
                <h4 className="font-mono text-xs font-semibold text-primary">MongoDB Data Models &amp; Collections</h4>
                <div className="space-y-2 font-mono text-xs">
                  {caseStudy.databaseSchema.map((item, idx) => (
                    <div key={idx} className="rounded-lg border border-border bg-background p-3 text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'aws' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2.5">
                <h4 className="font-mono text-xs font-semibold text-primary">AWS Cloud Infrastructure &amp; Deployment</h4>
                <p className="text-sm leading-relaxed text-muted-foreground bg-background rounded-lg border border-border p-4">
                  {caseStudy.awsSetup}
                </p>
              </motion.div>
            )}

            {activeTab === 'challenges' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                <h4 className="font-mono text-xs font-semibold text-primary">Engineering Roadblocks &amp; Solutions</h4>
                {caseStudy.challenges.map((c, idx) => (
                  <div key={idx} className="rounded-xl border border-border bg-background p-4 space-y-1.5">
                    <div className="text-xs font-bold text-destructive">Problem: {c.problem}</div>
                    <div className="text-xs text-muted-foreground">Solution: {c.solution}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Footer CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-between border-t border-border/80 pt-4 gap-3">
            <div className="flex items-center gap-3">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-md hover:opacity-90 transition-opacity"
                >
                  <span>Launch Live Demo</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-4 py-2 text-xs font-semibold text-foreground hover:bg-card transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="rounded-lg border border-border px-4 py-2 font-mono text-xs text-muted-foreground hover:text-foreground"
            >
              Close Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
