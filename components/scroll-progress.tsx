'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 origin-left z-[100] shadow-[0_0_12px_rgba(255,91,0,0.8)]"
      style={{ scaleX }}
    />
  )
}
