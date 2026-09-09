'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export function CursorSpotlight() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  const mouseX = useSpring(0, { stiffness: 500, damping: 50 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 })

  useEffect(() => {
    // Only enable spotlight on non-touch desktop devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150)
      mouseY.set(e.clientY - 150)
      if (!visible) setVisible(true)
    }

    const handleMouseLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY, visible])

  if (!mounted || !visible) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-30 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-orange-500/10 via-amber-500/8 to-transparent blur-[80px]"
      style={{
        x: mouseX,
        y: mouseY,
      }}
    />
  )
}
