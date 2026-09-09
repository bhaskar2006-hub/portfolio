'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Quote, Sparkles, Star, UserCheck } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { testimonials } from '@/lib/resume'

export function Testimonials() {
  return (
    <Section id="testimonials" className="relative bg-orange-500/[0.02] border-t border-border/60">
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
            className="relative flex flex-col justify-between rounded-3xl border border-border/80 bg-white/90 p-6 sm:p-8 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_15px_40px_rgba(255,91,0,0.1)] hover:translate-y-[-2px]"
          >
            <div>
              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-amber-500" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 font-mono text-[10px] text-orange-600 font-bold">
                  <UserCheck className="h-3 w-3" />
                  <span>VERIFIED COLLABORATOR</span>
                </div>
              </div>

              <div className="relative mt-5">
                <Quote className="absolute -left-2 -top-3 h-8 w-8 text-primary/20 -z-0" />
                <p className="relative z-10 font-sans text-sm sm:text-base leading-relaxed text-slate-700 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3.5 border-t border-border/80 pt-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-orange-500/10 font-mono text-sm font-black text-primary shadow-inner">
                {item.author[0]}
              </div>
              <div>
                <div className="font-bold text-sm text-foreground">{item.author}</div>
                <div className="text-xs text-muted-foreground">
                  {item.title} · <span className="text-primary font-mono font-semibold">{item.organization}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
