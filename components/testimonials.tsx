'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { testimonials } from '@/lib/resume'

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-card/20">
      <SectionHeading
        index="05"
        title="Recommendations & Social Proof"
        subtitle="Feedback from academic leads, technical mentors, and peer collaborators."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item, i) => (
          <motion.div
            key={item.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-lg hover:border-primary/40 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-primary" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-primary/30" />
              </div>

              <p className="mt-4 font-sans text-sm leading-relaxed text-foreground/90 italic">
                "{item.quote}"
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-border/40 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                {item.author[0]}
              </div>
              <div>
                <div className="font-semibold text-sm text-foreground">{item.author}</div>
                <div className="text-xs text-muted-foreground">
                  {item.title} · <span className="text-primary font-mono">{item.organization}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
