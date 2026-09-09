'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Section({
  id,
  children,
  className = '',
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className={`scroll-mt-20 px-6 py-20 md:py-28 relative ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </motion.section>
  )
}

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12"
    >
      <div className="mb-3 flex items-center gap-3">
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-mono text-sm font-bold text-primary"
        >
          {index}
        </motion.span>
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-px bg-gradient-to-r from-primary to-border"
        />
      </div>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
