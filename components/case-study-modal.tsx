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
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-3xl rounded-3xl border border-orange-500/30 bg-white p-6 sm:p-8 shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/80 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs text-primary font-bold">TECHNICAL CASE STUDY</span>
              </div>
              <h3 className="text-2xl font-black text-foreground mt-1">{projectName} System Architecture</h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-xl p-2 text-muted-foreground transition-colors hover:bg-slate-100 hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Overview */}
          <div className="mt-4 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4 font-sans text-sm text-slate-700 leading-relaxed">
            {caseStudy.overview}
          </div>

          {/* Navigation Tabs */}
          <div className="mt-5 flex flex-wrap gap-2 border-b border-border/80 pb-3 font-mono text-xs">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 font-semibold transition-all ${
                activeTab === 'architecture'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:text-foreground hover:bg-slate-200'
              }`}
            >
              <Cpu className="h-3.5 w-3.5" />
              <span>Architecture</span>
            </button>
            <button
              onClick={() => setActiveTab('schema')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 font-semibold transition-all ${
                activeTab === 'schema'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:text-foreground hover:bg-slate-200'
              }`}
            >
              <Database className="h-3.5 w-3.5" />
              <span>DB Schema</span>
            </button>
            <button
              onClick={() => setActiveTab('aws')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 font-semibold transition-all ${
                activeTab === 'aws'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:text-foreground hover:bg-slate-200'
              }`}
            >
              <Server className="h-3.5 w-3.5" />
              <span>AWS EC2 Setup</span>
            </button>
            <button
              onClick={() => setActiveTab('challenges')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 font-semibold transition-all ${
                activeTab === 'challenges'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:text-foreground hover:bg-slate-200'
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
                <h4 className="font-mono text-xs font-bold text-primary uppercase">System Tiers &amp; Component Flow</h4>
                <ul className="space-y-2">
                  {caseStudy.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {activeTab === 'schema' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2.5">
                <h4 className="font-mono text-xs font-bold text-primary uppercase">MongoDB Data Models &amp; Collections</h4>
                <div className="space-y-2 font-mono text-xs">
                  {caseStudy.databaseSchema.map((item, idx) => (
                    <div key={idx} className="rounded-xl border border-border bg-slate-50 p-3 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'aws' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2.5">
                <h4 className="font-mono text-xs font-bold text-primary uppercase">AWS Cloud Infrastructure &amp; Deployment</h4>
                <p className="text-sm leading-relaxed text-slate-700 bg-slate-50 rounded-xl border border-border p-4">
                  {caseStudy.awsSetup}
                </p>
              </motion.div>
            )}

            {activeTab === 'challenges' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                <h4 className="font-mono text-xs font-bold text-primary uppercase">Engineering Roadblocks &amp; Solutions</h4>
                {caseStudy.challenges.map((c, idx) => (
                  <div key={idx} className="rounded-2xl border border-border bg-slate-50 p-4 space-y-1.5">
                    <div className="text-xs font-bold text-red-600">Problem: {c.problem}</div>
                    <div className="text-xs text-slate-600">Solution: {c.solution}</div>
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
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition-colors"
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
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-4 py-2 text-xs font-semibold text-foreground hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="rounded-xl border border-border px-4 py-2 font-mono text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors"
            >
              Close Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
