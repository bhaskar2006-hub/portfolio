'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Mail, MapPin, Phone, Sparkles, Heart, Code2, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '@/components/brand-icons'
import { profile } from '@/lib/resume'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: profile.links.github,
      icon: GithubIcon,
      color: 'hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-500/10',
    },
    {
      name: 'LinkedIn',
      href: profile.links.linkedin,
      icon: LinkedinIcon,
      color: 'hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10',
    },
    {
      name: 'LeetCode',
      href: profile.links.leetcode,
      icon: LeetcodeIcon,
      color: 'hover:text-amber-400 hover:border-amber-500/40 hover:bg-amber-500/10',
    },
    {
      name: 'Email',
      href: `mailto:${profile.email}`,
      icon: Mail,
      color: 'hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10',
    },
  ]

  return (
    <footer className="relative border-t border-border/60 bg-gradient-to-b from-background via-card/40 to-card/80 pt-16 pb-12 overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-40 w-full max-w-7xl bg-gradient-to-r from-primary/10 via-violet-500/10 to-emerald-500/10 blur-3xl opacity-60" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 pb-12 border-b border-border/50">
          {/* Brand & Bio Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 font-mono text-lg font-black text-primary shadow-[0_0_20px_rgba(45,212,191,0.2)]">
                  BR
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground tracking-tight">{profile.name}</h3>
                  <p className="font-mono text-xs text-muted-foreground">{profile.title}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-md">
                Full-Stack Developer building scalable web applications with React, Node.js, Express, MongoDB, and AWS EC2.
              </p>

              {/* Status Badge */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-medium tracking-wide">Available for full-time roles & internships</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-card text-muted-foreground transition-all duration-300 ${social.color}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="lg:col-span-3 sm:col-span-6">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="h-1 w-1 rounded-full bg-border transition-all group-hover:w-2 group-hover:bg-primary" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div className="lg:col-span-4 sm:col-span-6 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
                Get In Touch
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 group text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-card text-primary group-hover:border-primary/40 transition-colors">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="truncate">{profile.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 group text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-card text-primary group-hover:border-primary/40 transition-colors">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>{profile.phone}</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-card text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>{profile.location}</span>
                </li>
              </ul>
            </div>

            {/* Back to Top */}
            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card px-4 py-2.5 text-xs font-mono font-semibold text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <ArrowUp className="h-3.5 w-3.5" />
                <span>BACK TO TOP</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          </p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span className="flex items-center gap-1.5">
              <Code2 className="h-3.5 w-3.5 text-primary" />
              <span>Next.js 16 • Tailwind • Framer Motion</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
