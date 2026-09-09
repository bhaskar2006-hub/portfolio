'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Quote, Sparkles, Star, UserCheck } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { testimonials } from '@/lib/resume'

export function Testimonials() {
  return (
    <Section id="testimonials" className="relative bg-card/20 border-t border-border/40">
      <SectionHeading
        index="05"
        title="Recommendations & Collaborative Impact"
        subtitle="Endorsements from academic advisors, mentors, and senior peer engineers."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item, i) => (
          <motion.div
            key={item.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex flex-col justify-between rounded-3xl border border-border/80 bg-gradient-to-b from-card/90 via-card/70 to-card/40 p-6 sm:p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
          >
            <div>
              <div className="flex items-center justify-between border-b border-border/50 pb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400 font-semibold">
                  <UserCheck className="h-3 w-3" />
                  <span>VERIFIED COLLABORATOR</span>
                </div>
              </div>

              <div className="relative mt-5">
                <Quote className="absolute -left-2 -top-3 h-8 w-8 text-primary/15 -z-0" />
                <p className="relative z-10 font-sans text-sm sm:text-base leading-relaxed text-foreground/90 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3.5 border-t border-border/50 pt-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 font-mono text-sm font-black text-primary shadow-inner">
                {item.author[0]}
              </div>
              <div>
                <div className="font-bold text-sm text-foreground">{item.author}</div>
                <div className="text-xs text-muted-foreground">
                  {item.title} · <span className="text-primary font-mono font-medium">{item.organization}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
