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
    <section id={id} className={`scroll-mt-20 px-6 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="font-mono text-sm text-primary">{index}</span>
        <span className="h-px w-12 bg-border" />
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
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
