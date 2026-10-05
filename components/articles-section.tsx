import { ArrowUpRight } from 'lucide-react'
import { articles, profile } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { TiltCard } from '@/components/tilt-card'
import { LinkedInIcon } from '@/components/brand-icons'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
})

export function ArticlesSection() {
  return (
    <section
      id="writing"
      aria-labelledby="writing-title"
      className="mx-auto flex max-w-6xl scroll-mt-28 flex-col gap-10 px-4 py-24 md:px-6"
    >
      <SectionHeading
        id="writing-title"
        kicker="writing"
        title="Notes from the field, published on LinkedIn"
        action={
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex w-fit shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            <LinkedInIcon className="size-4 text-primary" />
            Follow on LinkedIn
          </a>
        }
      />

      <ul className="flex flex-col gap-4">
        {articles.map((article) => (
          <li key={article.title}>
            <TiltCard className="group grid gap-3 p-6 md:grid-cols-[10rem_1fr_auto] md:items-center md:gap-8">
              <div className="flex gap-3 font-mono text-xs text-muted-foreground md:flex-col md:gap-1">
                <time dateTime={article.date}>{dateFormatter.format(new Date(article.date))}</time>
                <span>{article.readTime}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold tracking-tight text-balance">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="leading-relaxed text-pretty text-muted-foreground">
                  {article.excerpt}
                </p>
              </div>
              <span className="hidden size-10 items-center justify-center rounded-full border border-glass-border bg-secondary transition-colors group-hover:bg-primary group-hover:text-primary-foreground md:flex">
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </TiltCard>
          </li>
        ))}
      </ul>
    </section>
  )
}
