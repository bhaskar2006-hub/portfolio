'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Server,
  Database,
  ShieldAlert,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  Workflow,
  Sparkles,
  ArrowDown,
  ArrowRight,
  ShieldCheck,
  Tag,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'

export interface CaseStudy {
  overview: string
  problem?: string
  solution?: string
  architecture: string[]
  architectureFlow?: string[]
  authFlow?: string[]
  databaseSchema: string[]
  databaseModelFlow?: string[]
  rbacRoles?: { role: string; access: string }[]
  issueStatuses?: string[]
  priorityLevels?: string[]
  deployment?: string
  awsSetup?: string
  whyItMatters?: string[]
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
  const [activeTab, setActiveTab] = useState<'architecture' | 'schema' | 'cloud' | 'impact'>('architecture')

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
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
          className="relative z-10 flex flex-col w-full max-w-3xl max-h-[90vh] rounded-3xl border border-orange-500/30 bg-white p-5 sm:p-7 shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/80 pb-4 shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs text-primary font-bold">TECHNICAL CASE STUDY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-foreground mt-1 tracking-tight">
                {projectName} System Architecture
              </h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-xl p-2 text-muted-foreground transition-colors hover:bg-slate-100 hover:text-foreground cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable Content Container */}
          <div className="overflow-y-auto pr-1 sm:pr-2 py-4 space-y-5 flex-1">
            {/* Overview / Context */}
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4 font-sans text-sm text-slate-700 leading-relaxed">
              {caseStudy.overview}
            </div>

            {/* Problem & Solution Breakdown (if available) */}
            {(caseStudy.problem || caseStudy.solution) && (
              <div className="grid gap-3 sm:grid-cols-2">
                {caseStudy.problem && (
                  <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-rose-600">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      <span>THE PROBLEM</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {caseStudy.problem}
                    </p>
                  </div>
                )}
                {caseStudy.solution && (
                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-600">
                      <Lightbulb className="h-3.5 w-3.5" />
                      <span>THE SOLUTION</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-border/80 pb-3 font-mono text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('architecture')}
                className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 font-semibold transition-all cursor-pointer ${
                  activeTab === 'architecture'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:text-foreground hover:bg-slate-200'
                }`}
              >
                <Cpu className="h-3.5 w-3.5" />
                <span>Architecture &amp; Flows</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('schema')}
                className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 font-semibold transition-all cursor-pointer ${
                  activeTab === 'schema'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:text-foreground hover:bg-slate-200'
                }`}
              >
                <Database className="h-3.5 w-3.5" />
                <span>Data Models &amp; RBAC</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('cloud')}
                className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 font-semibold transition-all cursor-pointer ${
                  activeTab === 'cloud'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:text-foreground hover:bg-slate-200'
                }`}
              >
                <Server className="h-3.5 w-3.5" />
                <span>Cloud &amp; Deployment</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('impact')}
                className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 font-semibold transition-all cursor-pointer ${
                  activeTab === 'impact'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:text-foreground hover:bg-slate-200'
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Impact &amp; Challenges</span>
              </button>
            </div>

            {/* Tab 1: Architecture & Flows */}
            {activeTab === 'architecture' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div>
                  <h4 className="font-mono text-xs font-bold text-primary uppercase mb-2">
                    System Architecture Layers
                  </h4>
                  <ul className="space-y-2">
                    {caseStudy.architecture.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture Flow Diagram */}
                {caseStudy.architectureFlow && (
                  <div className="rounded-2xl border border-border bg-slate-50 p-4 space-y-2.5">
                    <h5 className="font-mono text-xs font-bold text-foreground flex items-center gap-2">
                      <Workflow className="h-3.5 w-3.5 text-primary" />
                      <span>REQUEST ARCHITECTURE PIPELINE</span>
                    </h5>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-[11px]">
                      {caseStudy.architectureFlow.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                          <span className="rounded-lg border border-border bg-white px-2.5 py-1.5 text-slate-800 font-medium shadow-xs">
                            {step}
                          </span>
                          {idx < caseStudy.architectureFlow!.length - 1 && (
                            <span className="text-primary font-bold text-xs">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Authentication Flow Diagram */}
                {caseStudy.authFlow && (
                  <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4 space-y-2.5">
                    <h5 className="font-mono text-xs font-bold text-primary flex items-center gap-2">
                      <Lock className="h-3.5 w-3.5 text-primary" />
                      <span>AUTHENTICATION FLOW</span>
                    </h5>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-[11px]">
                      {caseStudy.authFlow.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                          <span className="rounded-lg border border-orange-500/30 bg-white px-2.5 py-1.5 text-slate-800 font-medium shadow-xs">
                            {step}
                          </span>
                          {idx < caseStudy.authFlow!.length - 1 && (
                            <span className="text-primary font-bold text-xs">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Tab 2: Data Models & RBAC */}
            {activeTab === 'schema' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                {/* Database Model Hierarchy */}
                {caseStudy.databaseModelFlow && (
                  <div className="rounded-2xl border border-border bg-slate-50 p-4 space-y-2.5">
                    <h5 className="font-mono text-xs font-bold text-foreground flex items-center gap-2">
                      <Database className="h-3.5 w-3.5 text-primary" />
                      <span>DATABASE MODEL HIERARCHY</span>
                    </h5>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-xs">
                      {caseStudy.databaseModelFlow.map((model, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                          <span className="rounded-lg border border-orange-500/30 bg-white px-3 py-1.5 text-slate-900 font-bold shadow-xs">
                            {model}
                          </span>
                          {idx < caseStudy.databaseModelFlow!.length - 1 && (
                            <span className="text-primary font-bold">↓</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* MongoDB Collections Schemas */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-primary uppercase mb-2">
                    MongoDB Data Models &amp; Collections
                  </h4>
                  <div className="space-y-2 font-mono text-xs">
                    {caseStudy.databaseSchema.map((item, idx) => (
                      <div key={idx} className="rounded-xl border border-border bg-slate-50 p-3 text-slate-700 leading-relaxed overflow-x-auto">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* RBAC Role Permissions Matrix */}
                {caseStudy.rbacRoles && (
                  <div className="rounded-2xl border border-border bg-slate-50 p-4 space-y-3">
                    <h5 className="font-mono text-xs font-bold text-primary flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      <span>ROLE-BASED ACCESS CONTROL (RBAC) MATRIX</span>
                    </h5>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {caseStudy.rbacRoles.map((r, idx) => (
                        <div key={idx} className="rounded-xl border border-border bg-white p-3 space-y-1 shadow-xs">
                          <span className="inline-block rounded-md bg-orange-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-orange-600 border border-orange-500/20">
                            {r.role}
                          </span>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {r.access}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Issue Statuses & Priorities */}
                {(caseStudy.issueStatuses || caseStudy.priorityLevels) && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {caseStudy.issueStatuses && (
                      <div className="rounded-xl border border-border bg-slate-50 p-3 space-y-2">
                        <span className="font-mono text-[11px] font-bold text-slate-700 uppercase">
                          Issue Status Lifecycles
                        </span>
                        <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                          {caseStudy.issueStatuses.map((st) => (
                            <span key={st} className="rounded-md border border-border bg-white px-2 py-0.5 text-slate-700 font-semibold">
                              {st}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {caseStudy.priorityLevels && (
                      <div className="rounded-xl border border-border bg-slate-50 p-3 space-y-2">
                        <span className="font-mono text-[11px] font-bold text-slate-700 uppercase">
                          Priority Levels
                        </span>
                        <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                          {caseStudy.priorityLevels.map((pr) => (
                            <span key={pr} className="rounded-md border border-border bg-white px-2 py-0.5 text-slate-700 font-semibold">
                              {pr}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {/* Tab 3: Cloud & Deployment */}
            {activeTab === 'cloud' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <h4 className="font-mono text-xs font-bold text-primary uppercase">
                  Deployment Architecture &amp; Infrastructure
                </h4>
                {caseStudy.deployment && (
                  <div className="rounded-xl border border-primary/30 bg-orange-500/5 p-3.5 font-mono text-xs text-slate-800 font-semibold">
                    {caseStudy.deployment}
                  </div>
                )}
                {caseStudy.awsSetup && (
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 bg-slate-50 rounded-xl border border-border p-4">
                    {caseStudy.awsSetup}
                  </p>
                )}
              </motion.div>
            )}

            {/* Tab 4: Impact & Challenges */}
            {activeTab === 'impact' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                {/* Why This Project Matters */}
                {caseStudy.whyItMatters && (
                  <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4 space-y-3">
                    <h4 className="font-mono text-xs font-bold text-primary uppercase flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-primary" />
                      <span>Why This Project Matters (Engineering Concepts)</span>
                    </h4>
                    <div className="grid gap-2 sm:grid-cols-2 font-sans text-xs text-slate-700">
                      {caseStudy.whyItMatters.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-white/80 rounded-lg p-2 border border-border/80">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Engineering Challenges & Solutions */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-primary uppercase mb-2.5">
                    Engineering Roadblocks &amp; Solutions
                  </h4>
                  <div className="space-y-3">
                    {caseStudy.challenges.map((c, idx) => (
                      <div key={idx} className="rounded-2xl border border-border bg-slate-50 p-4 space-y-1.5">
                        <div className="text-xs font-bold text-rose-600">Problem: {c.problem}</div>
                        <div className="text-xs text-slate-600 leading-relaxed">Solution: {c.solution}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer CTAs */}
          <div className="mt-4 flex flex-wrap items-center justify-between border-t border-border/80 pt-4 gap-3 shrink-0">
            <div className="flex items-center gap-3">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition-colors active:scale-95"
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
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-4 py-2 text-xs font-semibold text-foreground hover:bg-slate-50 transition-colors shadow-xs active:scale-95"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-border px-4 py-2 font-mono text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

