import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import ClientOnly from '@/components/ClientOnly'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <ClientOnly>
        <Contact />
      </ClientOnly>
    </>
  )
}
