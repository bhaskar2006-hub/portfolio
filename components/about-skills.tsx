'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeading } from '@/components/section'
import { TechStack } from '@/components/tech-stack'
import { profile, skillGroups } from '@/lib/resume'

const stats = [
  { value: '9.33', label: 'CGPA / 10' },
  { value: '2+', label: 'MERN apps shipped' },
  { value: '4+', label: 'Certifications' },
]

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" title="About me" />
      <div className="grid gap-10 lg:grid-cols-12 items-center">
        {/* Profile Image & Quick Stats */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-4"
        >
          <div className="group relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-3 shadow-xl backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] border border-border">
              <img
                src="/profile.jpg"
                alt={profile.name}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Bio & Key Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="lg:col-span-8 flex flex-col justify-between"
        >
          <div>
            <p className="text-lg leading-relaxed text-foreground/90 font-normal">
              {profile.summary}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I care about writing maintainable code, designing solid database
              schemas, and shipping responsive interfaces that work everywhere.
              My strongest work lives at the intersection of clean REST APIs,
              secure authentication, and reliable cloud deployment on AWS EC2.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border/80 bg-card p-4 transition-colors hover:border-primary/40"
              >
                <div className="font-mono text-2xl font-bold text-primary">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" className="bg-card/30">
      <SectionHeading
        index="02"
        title="Technical skills"
        subtitle="The languages, frameworks, and tools I use to design and ship full-stack applications."
      />
      <TechStack />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="rounded-xl border border-border bg-card p-5"
          >
            <h3 className="mb-4 font-mono text-sm text-primary">{group.label}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 text-sm text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
