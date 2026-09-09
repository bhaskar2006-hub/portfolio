import { WelcomeScreen } from '@/components/welcome-screen'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About, Skills } from '@/components/about-skills'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { CursorSpotlight } from '@/components/cursor-spotlight'
import { ParticleBackground } from '@/components/particles'
import { FloatingDock } from '@/components/floating-dock'

export default function Page() {
  return (
    <main className="min-h-screen relative overflow-x-clip">
      <ScrollProgress />
      <CursorSpotlight />
      <ParticleBackground />
      <WelcomeScreen />
      <SiteNav />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingDock />
    </main>
  )
}


