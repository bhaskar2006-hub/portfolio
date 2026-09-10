'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FolderGit2, Cpu, User, Award, MessageSquare, ArrowUp } from 'lucide-react'

const navItems = [
  { href: '#projects', icon: FolderGit2, label: 'Projects', shortLabel: 'Projects' },
  { href: '#skills', icon: Cpu, label: 'Skills', shortLabel: 'Skills' },
  { href: '#about', icon: User, label: 'About', shortLabel: 'About' },
  { href: '#experience', icon: Award, label: 'Certs & Exp', shortLabel: 'Certs' },
  { href: '#contact', icon: MessageSquare, label: 'Contact', shortLabel: 'Contact' },
]

export function FloatingDock() {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300)

      const sections = ['projects', 'skills', 'about', 'experience', 'contact']
      const scrollPos = window.scrollY + 250

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActive(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 sm:gap-1.5 rounded-full border border-orange-500/30 bg-white/90 p-1.5 sm:p-2 shadow-[0_10px_35px_rgba(255,91,0,0.18)] backdrop-blur-xl max-w-[94vw] sm:max-w-max"
        >
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = active === item.href.substring(1)
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-orange-500/10'
                }`}
                title={item.label}
                aria-label={item.label}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeDockPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-[0_0_15px_rgba(255,91,0,0.5)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className="relative z-10 h-4 w-4" />
              </a>
            )
          })}

          <div className="h-4 sm:h-5 w-px bg-border/80 mx-0.5 sm:mx-1" />

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-orange-500/10 transition-colors"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
