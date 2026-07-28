import { WelcomeScreen } from '@/components/welcome-screen'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About, Skills } from '@/components/about-skills'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main className="min-h-screen">
      <WelcomeScreen />
      <SiteNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}

