import Image from 'next/image'
import { Play } from 'lucide-react'
import { videoSeries } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { TiltCard } from '@/components/tilt-card'
import { YouTubeIcon } from '@/components/brand-icons'
import { withBasePath } from '@/lib/site-config'

export function VideoSeries() {
  return (
    <section
      id="videos"
      aria-labelledby="videos-title"
      className="mx-auto flex max-w-6xl scroll-mt-28 flex-col gap-10 px-4 py-24 md:px-6"
    >
      <SectionHeading
        id="videos-title"
        kicker="youtube series"
        title={videoSeries.title}
        description={videoSeries.description}
        action={
          <a
            href={videoSeries.playlist}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex w-fit shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            <YouTubeIcon className="size-4 text-primary" />
            Watch the full playlist
          </a>
        }
      />

      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {videoSeries.episodes.map((ep) => (
          <li key={ep.episode} className="flex">
            <TiltCard className="group flex w-full flex-col overflow-hidden p-2">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src={withBasePath(ep.thumbnail || '/placeholder.svg')}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="glass flex size-12 items-center justify-center rounded-full text-primary transition-transform group-hover:scale-110">
                    <Play className="size-5 translate-x-0.5 fill-current" aria-hidden="true" />
                  </span>
                </span>
                <span className="absolute right-2 bottom-2 rounded-md bg-foreground/80 px-1.5 py-0.5 font-mono text-xs text-background">
                  {ep.duration}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 p-3">
                <span className="font-mono text-xs text-primary">
                  {`EP ${String(ep.episode).padStart(2, '0')}`}
                </span>
                <h3 className="font-medium leading-snug text-pretty">
                  <a
                    href={ep.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
                  >
                    {ep.title}
                  </a>
                </h3>
              </div>
            </TiltCard>
          </li>
        ))}
      </ol>
    </section>
  )
}
