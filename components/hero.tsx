import { ArrowRight, Check } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { LinkedInIcon, YouTubeIcon } from '@/components/brand-icons'
import { TiltCard } from '@/components/tilt-card'

const terminalLines = [
  { prefix: '$', text: 'flow inspect --source webex --target sharepoint', tone: 'command' },
  { prefix: '›', text: 'reading transcript text and review decision', tone: 'muted' },
  { prefix: '›', text: 'checking SOPKnowledgeBase / Shared Documents', tone: 'muted' },
  { prefix: '✓', text: 'decision: CREATE — source is ready for human review', tone: 'success' },
  { prefix: '✓', text: 'SOP draft queued with source attribution intact', tone: 'success' },
] as const

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-36 pb-20 md:px-6 lg:grid-cols-[1.1fr_1fr] lg:pt-44"
    >
      <div className="flex animate-rise-in flex-col gap-6">
        <p className="glass inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          {profile.role} · AI & Automation
        </p>
        <h1
          id="hero-title"
          className="text-4xl font-semibold leading-tight tracking-tight text-balance md:text-6xl"
        >
          {profile.tagline}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
          {profile.summary}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
          >
            See my projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={profile.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            <YouTubeIcon className="size-4 text-primary" />
            YouTube
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            <LinkedInIcon className="size-4 text-primary" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="animate-rise-in [animation-delay:150ms]">
      <TiltCard className="overflow-hidden">
        <div className="flex items-center justify-between border-b border-glass-border px-5 py-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="size-2.5 rounded-full bg-primary" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">noc — zsh</span>
        </div>
        <div className="flex flex-col gap-3 p-5 font-mono text-[13px] leading-relaxed md:p-6 md:text-sm">
          {terminalLines.map((line, i) => (
            <p
              key={line.text}
              className="flex animate-line-in gap-3"
              style={{ animationDelay: `${500 + i * 550}ms` }}
            >
              <span
                className={
                  line.tone === 'success'
                    ? 'text-primary'
                    : line.tone === 'command'
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                }
                aria-hidden="true"
              >
                {line.tone === 'success' ? (
                  <Check className="mt-1 size-3.5" strokeWidth={3} />
                ) : (
                  line.prefix
                )}
              </span>
              <span className={line.tone === 'muted' ? 'text-muted-foreground' : 'text-foreground'}>
                {line.text}
              </span>
            </p>
          ))}
          <p
            className="flex animate-line-in items-center gap-3"
            style={{ animationDelay: `${500 + terminalLines.length * 550}ms` }}
          >
            <span className="text-foreground" aria-hidden="true">
              $
            </span>
            <span className="h-4 w-2 animate-blink bg-primary" aria-hidden="true" />
          </p>
        </div>
        <div className="border-t border-glass-border px-5 py-4 md:px-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Currently: </span>
            {profile.currently}
          </p>
        </div>
      </TiltCard>
      </div>
    </section>
  )
}
