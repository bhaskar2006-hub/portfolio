'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Mail, MapPin, Send, CheckCircle2, Sparkles, User, MessageSquare, Copy, Check } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Section } from '@/components/section'
import { profile } from '@/lib/resume'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [copied, setCopied] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-card/90 via-card/70 to-card/40 p-8 shadow-2xl backdrop-blur-xl md:p-12"
      >
        {/* Ambient backlight glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />

        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-primary">05</span>
          <span className="h-px w-12 bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Get In Touch</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left Column: Info & Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Let&apos;s build something great together.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                I&apos;m currently available for full-stack internships, entry-level developer roles, and freelance projects. Send a message and I&apos;ll get back to you promptly.
              </p>

              <div className="mt-8 space-y-4">
                <div className="group flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 transition-all hover:border-primary/50">
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-3.5 flex-1 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-mono uppercase text-muted-foreground">Direct Email</div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">{profile.email}</div>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(profile.email)
                      setCopied(true)
                      setTimeout(() => setCopied(false), 2000)
                    }}
                    className="ml-2 flex items-center gap-1 rounded-lg border border-border bg-secondary px-2.5 py-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-muted-foreground">Location</div>
                    <div className="text-sm font-semibold text-foreground">{profile.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="mt-10 pt-6 border-t border-border/60">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">Connect on Social</div>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border/80 bg-card px-4 py-2.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
                >
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border/80 bg-card px-4 py-2.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
                >
                  <LinkedinIcon className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={profile.links.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border/80 bg-card px-4 py-2.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
                >
                  <Code2 className="h-4 w-4" /> LeetCode
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border/80 bg-background/80 p-6 shadow-inner md:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-1">Send a Message</h3>
              <p className="text-xs text-muted-foreground mb-6">Fill out the form below and I&apos;ll respond within 24 hours.</p>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-10 px-4"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 mb-4 border border-emerald-500/30">
                      <CheckCircle2 className="h-8 w-8 animate-bounce" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">Message Sent!</h4>
                    <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                      Thank you for reaching out. I have received your note and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 rounded-xl border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono text-muted-foreground mb-1.5">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground/60" />
                          <input
                            id="name"
                            type="text"
                            required
                            placeholder="John Doe"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full rounded-xl border border-border/80 bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-mono text-muted-foreground mb-1.5">
                          Your Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground/60" />
                          <input
                            id="email"
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full rounded-xl border border-border/80 bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-mono text-muted-foreground mb-1.5">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Project inquiry / Opportunity"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full rounded-xl border border-border/80 bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono text-muted-foreground mb-1.5">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground/60" />
                        <textarea
                          id="message"
                          required
                          rows={4}
                          placeholder="Tell me about your project or opportunity..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full rounded-xl border border-border/80 bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-50 shadow-md cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Sparkles className="h-4 w-4 animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

      <footer className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">Built with Next.js &amp; Framer Motion</p>
      </footer>
    </Section>
  )
}

