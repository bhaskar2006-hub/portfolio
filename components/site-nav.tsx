'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code2, 
  Download, 
  Mail, 
  Menu, 
  X, 
  ArrowUpRight, 
  Sparkles,
  Award,
  FolderGit2,
  Cpu,
  User,
  Briefcase
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/resume'

const links = [
  { href: '#projects', label: 'Projects', icon: FolderGit2 },
  { href: '#skills', label: 'Skills', icon: Cpu },
  { href: '#about', label: 'About', icon: User },
  { href: '#experience', label: 'Certs & Exp', icon: Award },
  { href: '#testimonials', label: 'Testimonials', icon: Sparkles },
  { href: '#contact', label: 'Contact', icon: Mail },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = links.map((l) => l.href.substring(1))
      const scrollPos = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 sm:py-3 bg-white/90 backdrop-blur-xl border-b border-orange-500/20 shadow-[0_4px_25px_rgba(0,0,0,0.06)]'
          : 'py-4 sm:py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo Glyph */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 sm:gap-3 text-sm font-semibold transition-transform hover:scale-105"
        >
          <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 overflow-hidden items-center justify-center rounded-xl border border-primary/40 shadow-[0_0_15px_rgba(255,91,0,0.25)] transition-colors group-hover:border-primary">
            <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover object-top" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-background bg-orange-500 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {profile.name}
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-muted-foreground">
              Full-Stack · MERN · AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 rounded-full border border-border/80 bg-white/75 px-3 py-1.5 backdrop-blur-md lg:flex shadow-sm">
          {links.map((l) => {
            const isActive = activeSection === l.href.substring(1)
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-[0_0_15px_rgba(255,91,0,0.4)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </a>
            )
          })}
        </div>

        {/* Right CTA Actions (Desktop) */}
        <div className="hidden items-center gap-2.5 sm:flex">
          <a
            href="/Bhaskar_Reddy_Resume.pdf"
            download="Bhaskar_Reddy_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-primary/40 bg-orange-500/10 px-3.5 py-2 font-mono text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_15px_rgba(255,91,0,0.3)]"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-xs font-bold text-white transition-all hover:opacity-95 hover:shadow-[0_0_20px_rgba(255,91,0,0.4)] active:scale-95"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Action Buttons & Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="/Bhaskar_Reddy_Resume.pdf"
            download="Bhaskar_Reddy_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-primary/40 bg-orange-500/10 px-2.5 py-1.5 font-mono text-[11px] font-bold text-primary sm:hidden"
            aria-label="Download Resume"
          >
            <Download className="h-3 w-3" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-orange-500/30 bg-white/90 text-foreground transition-colors hover:bg-orange-500/10 active:scale-95 shadow-sm"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer with Quick Navigation Grid & Actions */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-orange-500/20 bg-white/95 backdrop-blur-2xl lg:hidden shadow-2xl"
          >
            <div className="flex flex-col px-4 py-4 space-y-3">
              {/* Quick Section Grid */}
              <div className="grid grid-cols-2 gap-2">
                {links.map((l) => {
                  const Icon = l.icon
                  const isActive = activeSection === l.href.substring(1)
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25 font-bold'
                          : 'bg-slate-50 border border-border/70 text-slate-700 hover:bg-orange-500/10 hover:border-primary/40 hover:text-primary'
                      }`}
                    >
                      <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-white' : 'text-primary'}`} />
                      <span className="truncate">{l.label}</span>
                    </a>
                  )
                })}
              </div>

              {/* Action Buttons inside Drawer */}
              <div className="pt-2 border-t border-border/80 flex flex-col gap-2">
                <a
                  href="/Bhaskar_Reddy_Resume.pdf"
                  download="Bhaskar_Reddy_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-primary/40 bg-orange-500/10 py-2.5 font-mono text-xs font-semibold text-primary active:bg-primary active:text-white transition-colors"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Resume PDF</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-2.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 active:opacity-90"
                >
                  <Mail className="h-4 w-4" />
                  <span>Get in Touch / Hire Me</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
