import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { TiltCard } from '@/components/tilt-card'
import { GitHubIcon, LinkedInIcon, YouTubeIcon } from '@/components/brand-icons'

const socials = [
  { label: 'YouTube', href: profile.links.youtube, Icon: YouTubeIcon },
  { label: 'LinkedIn', href: profile.links.linkedin, Icon: LinkedInIcon },
  { label: 'GitHub', href: profile.links.github, Icon: GitHubIcon },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24 md:px-6"
    >
      <TiltCard className="flex flex-col items-start gap-8 p-8 md:flex-row md:items-end md:justify-between md:p-12">
        <div className="flex max-w-xl flex-col gap-4">
          <p className="font-mono text-sm text-primary">{'// contact'}</p>
          <h2 id="contact-title" className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Have a network problem, lab idea, or automation story to share?
          </h2>
          <p className="leading-relaxed text-pretty text-muted-foreground">
            I’m building a public record of the work as I learn. Follow along on LinkedIn for project notes, experiments, and the next thing I’m testing.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
          >
            Follow on LinkedIn
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <ul className="flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-11 items-center justify-center rounded-full border border-glass-border bg-secondary transition-colors hover:text-primary"
                >
                  <Icon className="size-4" />
                  <span className="sr-only">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </TiltCard>
      <footer className="flex flex-col justify-between gap-2 pt-10 font-mono text-xs text-muted-foreground sm:flex-row">
        <p>{`© ${new Date().getFullYear()} ${profile.name}`}</p>
        <p>Automated with care. Reviewed by a human.</p>
      </footer>
    </section>
  )
}
