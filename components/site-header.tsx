import { profile } from '@/lib/portfolio-data'

const navItems = [
  { href: '#projects', label: 'Projects' },
  { href: '#videos', label: 'Videos' },
  { href: '#writing', label: 'Writing' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary"
        className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pr-2 pl-3"
      >
        <a href="#top" className="flex items-center gap-2 rounded-full">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary font-mono text-xs font-semibold text-primary-foreground">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold sm:inline">{profile.name}</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Get in touch
        </a>
      </nav>
    </header>
  )
}
