'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FolderGit2, Cpu, User, Briefcase, MessageSquare, ArrowUp } from 'lucide-react'

const navItems = [
  { href: '#projects', icon: FolderGit2, label: 'Projects' },
  { href: '#skills', icon: Cpu, label: 'Skills' },
  { href: '#about', icon: User, label: 'About' },
  { href: '#experience', icon: Briefcase, label: 'Experience' },
  { href: '#contact', icon: MessageSquare, label: 'Contact' },
]

export function FloatingDock() {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400)

      const sections = ['projects', 'skills', 'about', 'experience', 'contact']
      const scrollPos = window.scrollY + 300

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActive(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-1.5 rounded-full border border-border/80 bg-white/85 p-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.12)] backdrop-blur-xl"
        >
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = active === item.href.substring(1)
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
                title={item.label}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeDockPill"
                    className="absolute inset-0 rounded-full bg-primary shadow-[0_0_15px_rgba(255,91,0,0.4)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="relative z-10 h-4 w-4" />
              </a>
            )
          })}

          <div className="h-5 w-px bg-border mx-1" />

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-orange-500/10 transition-colors"
            title="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
