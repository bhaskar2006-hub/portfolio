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
        className="relative overflow-hidden rounded-3xl border border-border/80 bg-white/95 p-8 shadow-xl backdrop-blur-xl md:p-12"
      >
        {/* Ambient backlight glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-orange-500/10 blur-[100px]" />

        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-primary">06</span>
          <span className="h-px w-12 bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">Get In Touch</span>
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
                <div className="group flex items-center justify-between rounded-2xl border border-border/80 bg-slate-50/80 p-4 transition-all hover:border-primary/50 hover:bg-white shadow-sm">
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-3.5 flex-1 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-mono uppercase text-muted-foreground font-semibold">Direct Email</div>
                      <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">{profile.email}</div>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(profile.email)
                      setCopied(true)
                      setTimeout(() => setCopied(false), 2000)
                    }}
                    className="ml-2 flex items-center gap-1 rounded-xl border border-border bg-white px-2.5 py-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors shadow-sm cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-orange-600 font-bold" />
                        <span className="text-orange-600 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3.5 rounded-2xl border border-border/80 bg-slate-50/80 p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-muted-foreground font-semibold">Location</div>
                    <div className="text-sm font-bold text-foreground">{profile.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="mt-10 pt-6 border-t border-border/80">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 font-semibold">Connect on Social</div>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition-all hover:border-primary/50 hover:text-primary shadow-sm"
                >
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition-all hover:border-blue-500 hover:text-blue-500 shadow-sm"
                >
                  <LinkedinIcon className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={profile.links.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition-all hover:border-amber-500 hover:text-amber-500 shadow-sm"
                >
                  <Code2 className="h-4 w-4" /> LeetCode
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-slate-50/60 p-6 shadow-sm md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-1">Send a Message</h3>
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
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-primary mb-4 border border-orange-500/30">
                      <CheckCircle2 className="h-8 w-8 animate-bounce text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">Message Sent!</h4>
                    <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                      Thank you for reaching out. I have received your note and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 rounded-xl border border-border bg-white px-5 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-slate-100 shadow-sm"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono text-muted-foreground mb-1.5 font-semibold">
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
                            className="w-full rounded-xl border border-border bg-white pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-mono text-muted-foreground mb-1.5 font-semibold">
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
                            className="w-full rounded-xl border border-border bg-white pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-mono text-muted-foreground mb-1.5 font-semibold">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Project inquiry / Opportunity"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono text-muted-foreground mb-1.5 font-semibold">
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
                          className="w-full rounded-xl border border-border bg-white pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none shadow-sm"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-orange-600 active:scale-[0.99] disabled:opacity-50 shadow-md cursor-pointer"
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
    </Section>
  )
}

