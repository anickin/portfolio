import { NetworkBackground } from '@/components/network-background'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Toolkit } from '@/components/toolkit'
import { ProjectsSection } from '@/components/projects-section'
import { VideoSeries } from '@/components/video-series'
import { ArticlesSection } from '@/components/articles-section'
import { ContactSection } from '@/components/contact-section'

export default function Page() {
  return (
    <>
      <NetworkBackground />
      <SiteHeader />
      <main>
        <Hero />
        <Toolkit />
        <ProjectsSection />
        <VideoSeries />
        <ArticlesSection />
        <ContactSection />
      </main>
    </>
  )
}
