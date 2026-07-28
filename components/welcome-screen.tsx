'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Cpu, ShieldCheck } from 'lucide-react'
import { profile } from '@/lib/resume'

export function WelcomeScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const loadingMessages = [
    'Initializing portfolio core...',
    'Spinning 3D tech orbit...',
    'Fetching projects & experience...',
    'Welcome to Bhaskar Reddy J S Portfolio',
  ]

  useEffect(() => {
    // Lock scroll during welcome animation
    document.body.style.overflow = 'hidden'

    // Smooth loading counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setLoading(false)
            document.body.style.overflow = 'auto'
          }, 350)
          return 100
        }
        const diff = Math.floor(Math.random() * 16) + 10
        return Math.min(prev + diff, 100)
      })
    }, 130)

    // Message switcher timer
    const msgInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev < loadingMessages.length - 1 ? prev + 1 : prev))
    }, 500)

    return () => {
      clearInterval(interval)
      clearInterval(msgInterval)
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="welcome-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.06,
            filter: 'blur(16px)',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#04060c] px-6 py-10 text-foreground"
        >
          {/* Cyber Neon Radial Ambient Glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[150px]" />
            <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/20 blur-[150px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          {/* Top Bar Header */}
          <div className="relative z-10 flex w-full max-w-4xl items-center justify-between border-b border-violet-500/20 pb-4 font-mono text-xs text-muted-foreground">
            <div className="flex items-center gap-2.5">
              <Cpu className="h-4 w-4 text-violet-400 animate-pulse" />
              <span className="tracking-wider text-violet-300">PORTFOLIO_OS v2.4 // READY</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span className="font-semibold tracking-wide">SYSTEM OK</span>
            </div>
          </div>

          {/* Center Monogram Badge & Title */}
          <div className="relative z-10 my-auto flex flex-col items-center text-center">
            {/* Animated Dual Orbital Monogram */}
            <div className="relative mb-8 flex h-28 w-28 items-center justify-center">
              {/* Outer Counter-Rotating Orbit Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-violet-500/40"
              />
              {/* Inner Rotating Orbit Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 rounded-full border border-emerald-400/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              />

              {/* Monogram Glass Card */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 220 }}
                className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-violet-900/60 via-card/80 to-emerald-950/60 p-2 shadow-[0_0_50px_rgba(139,92,246,0.35)] backdrop-blur-2xl"
              >
                <span className="font-mono text-2xl font-black tracking-wider bg-gradient-to-r from-violet-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  BR
                </span>
              </motion.div>
            </div>

            {/* Name Reveal with Vibrant Gradient */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-balance text-3xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-emerald-300 bg-clip-text text-transparent sm:text-5xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-2.5 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-violet-400 sm:text-sm"
            >
              {profile.title}
            </motion.p>

            {/* Dynamic Status Message */}
            <div className="mt-8 h-8 font-mono text-xs text-slate-400 sm:text-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-center gap-2 rounded-full border border-violet-500/20 bg-violet-950/30 px-4 py-1.5 backdrop-blur-md"
                >
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '3s' }} />
                  <span className="text-slate-200">{loadingMessages[currentTextIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-3">
            <div className="flex w-full items-center justify-between font-mono text-xs">
              <span className="text-slate-400">LOADING_ASSETS</span>
              <span className="font-bold text-emerald-400">{progress}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full border border-violet-500/30 bg-slate-950/80 p-0.5 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 via-emerald-400 to-cyan-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

