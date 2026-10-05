import { toolkit } from '@/lib/portfolio-data'
import { TiltCard } from '@/components/tilt-card'

export function Toolkit() {
  return (
    <section aria-label="Toolkit" className="mx-auto max-w-6xl px-4 md:px-6">
      <TiltCard className="grid gap-8 p-6 sm:grid-cols-2 md:p-8 lg:grid-cols-4">
        {toolkit.map((group) => (
          <div key={group.group} className="flex flex-col gap-3">
            <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
              {group.group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-glass-border bg-secondary px-3 py-1 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </TiltCard>
    </section>
  )
}
