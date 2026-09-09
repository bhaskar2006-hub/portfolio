'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Download, Check, Copy, Award, Calendar, ShieldCheck, Tag, Sparkles, Eye } from 'lucide-react'
import type { Certification } from '@/lib/resume'

interface CertificateModalProps {
  certificate: Certification | null
  isOpen: boolean
  onClose: () => void
}

export function CertificateModal({ certificate, isOpen, onClose }: CertificateModalProps) {
  const [copied, setCopied] = useState(false)

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const copyCredentialId = () => {
    if (certificate?.credentialId) {
      navigator.clipboard.writeText(certificate.credentialId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (!certificate) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-orange-500/30 bg-white shadow-2xl dark:bg-slate-900"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/80 px-6 py-4 bg-orange-500/[0.04]">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500/15 text-primary">
                  <Award className="h-4 w-4" />
                </span>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                    Verified Credential Preview
                  </span>
                  <p className="text-[11px] text-muted-foreground font-medium">
                    {certificate.issuer} &bull; {certificate.date}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="grid flex-1 overflow-y-auto lg:grid-cols-12">
              {/* Document / Image Preview Pane (7 cols) */}
              <div className="relative flex items-center justify-center bg-slate-950/90 p-4 sm:p-6 lg:col-span-7 min-h-[300px]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl group">
                  <Image
                    src={certificate.thumbnail}
                    alt={certificate.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                  <div className="absolute bottom-3 right-3 flex items-center gap-2">
                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-black/80 backdrop-blur-md px-3 py-1.5 text-xs font-mono font-bold text-white hover:bg-primary transition-colors shadow-lg"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>Open Full Document</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Details & Action Pane (5 cols) */}
              <div className="flex flex-col justify-between p-6 lg:col-span-5 bg-white dark:bg-slate-900">
                <div className="space-y-5">
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-0.5 text-xs font-mono font-bold text-primary">
                      {certificate.category}
                    </span>
                    {certificate.isMain && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-[11px] font-mono font-bold text-amber-600">
                        <Sparkles className="h-3 w-3" />
                        Main Course
                      </span>
                    )}
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3 className="text-xl font-bold leading-snug text-foreground">
                      {certificate.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-muted-foreground">
                      Issued by <span className="text-foreground">{certificate.issuer}</span>
                    </p>
                  </div>

                  {/* Metadata block */}
                  <div className="rounded-2xl border border-border/80 bg-slate-50/80 p-4 space-y-2.5 dark:bg-slate-800/50">
                    <div className="flex items-center justify-between text-xs">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground font-medium">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        Issue Date
                      </span>
                      <span className="font-mono font-bold text-foreground">{certificate.date}</span>
                    </div>

                    {certificate.credentialId && (
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-border/60">
                        <span className="inline-flex items-center gap-1.5 text-muted-foreground font-medium">
                          <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                          Credential ID
                        </span>
                        <div className="flex items-center gap-1.5">
                          <code className="rounded bg-white px-1.5 py-0.5 font-mono text-[11px] font-bold text-slate-700 border border-border/60 dark:bg-slate-900 dark:text-slate-300">
                            {certificate.credentialId}
                          </code>
                          <button
                            type="button"
                            onClick={copyCredentialId}
                            className="rounded p-1 text-slate-400 hover:text-primary transition-colors cursor-pointer"
                            title="Copy Credential ID"
                          >
                            {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {certificate.description && (
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Overview &amp; Competencies
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {certificate.description}
                      </p>
                    </div>
                  )}

                  {/* Tags */}
                  {certificate.tags && certificate.tags.length > 0 && (
                    <div>
                      <h4 className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        <Tag className="h-3 w-3 text-primary" />
                        Skills Verified
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {certificate.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-border bg-slate-100/80 px-2.5 py-1 font-mono text-[11px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions bottom */}
                <div className="mt-6 pt-5 border-t border-border/80 flex flex-wrap gap-2.5">
                  {certificate.url && (
                    <a
                      href={certificate.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 hover:bg-orange-600 transition-all cursor-pointer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Verify Credential</span>
                    </a>
                  )}

                  <a
                    href={certificate.file}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-bold text-foreground shadow-xs hover:border-primary/40 hover:text-primary transition-all dark:bg-slate-800 cursor-pointer"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
