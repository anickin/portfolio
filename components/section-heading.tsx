import type { ReactNode } from 'react'

export function SectionHeading({
  id,
  kicker,
  title,
  description,
  action,
}: {
  id: string
  kicker: string
  title: string
  description?: string
  action?: ReactNode
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="flex max-w-2xl flex-col gap-3">
        <p className="font-mono text-sm text-primary">{`// ${kicker}`}</p>
        <h2 id={id} className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="leading-relaxed text-pretty text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  )
}
