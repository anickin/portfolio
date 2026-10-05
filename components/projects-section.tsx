'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, Radio, Server, Workflow } from 'lucide-react'
import { projects, type Project, type ProjectKind } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { GitHubIcon } from '@/components/brand-icons'
import { cn } from '@/lib/utils'

const filters: Array<'All' | ProjectKind> = ['All', 'Professional', 'Personal']

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="project-visual-shell">
      <div className={cn('project-visual', `project-visual--${project.visual}`)} aria-hidden="true">
        <div className="project-window-bar">
          <span className="project-window-dot" />
          <span className="project-window-dot" />
          <span className="project-window-dot project-window-dot--active" />
          <span className="project-window-label">{project.title}</span>
        </div>

        {project.visual === 'tdsource' ? (
          <div className="project-dashboard">
            <div className="project-sidebar">
              <span className="project-sidebar-logo">T</span>
              <span className="project-sidebar-line project-sidebar-line--active" />
              <span className="project-sidebar-line" />
              <span className="project-sidebar-line" />
              <span className="project-sidebar-line project-sidebar-line--short" />
            </div>
            <div className="project-dashboard-body">
              <div className="project-dashboard-heading">
                <span>Knowledge library</span>
                <span className="project-status">● synced</span>
              </div>
              <div className="project-stat-row">
                <span><strong>24</strong> SOPs</span>
                <span><strong>08</strong> reviews</span>
              </div>
              <div className="project-list-row"><Radio /> Webex capture → review</div>
              <div className="project-list-row"><Workflow /> Published knowledge</div>
              <div className="project-list-row"><Server /> Knowledge Chat sources</div>
            </div>
          </div>
        ) : null}

        {project.visual === 'webex' ? (
          <div className="project-flow">
            <div className="project-flow-node"><Radio /><span>Webex<br /><small>capture</small></span></div>
            <span className="project-flow-connector" />
            <div className="project-flow-node project-flow-node--accent"><Workflow /><span>AI review<br /><small>decision</small></span></div>
            <span className="project-flow-connector" />
            <div className="project-flow-node"><Server /><span>SharePoint<br /><small>SOP library</small></span></div>
          </div>
        ) : null}

        {project.visual === 'portfolio' ? (
          <div className="project-browser">
            <div className="project-browser-hero"><span>build · explain · reflect</span><strong>Network work,<br />made visible.</strong></div>
            <div className="project-browser-grid"><span /><span /><span /></div>
          </div>
        ) : null}

        {project.visual === 'lab' ? (
          <div className="project-topology">
            <div className="project-topology-node">PC1</div>
            <span className="project-topology-link" />
            <div className="project-topology-node project-topology-node--core">SW1</div>
            <span className="project-topology-link" />
            <div className="project-topology-node">R1</div>
            <div className="project-topology-caption">packet flow · configs · verification</div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const [activeIndex, setActiveIndex] = useState(0)
  const visible = filter === 'All' ? projects : projects.filter((p) => p.kind === filter)
  const project = visible[Math.min(activeIndex, visible.length - 1)]

  useEffect(() => {
    setActiveIndex(0)
  }, [filter])

  function move(direction: number) {
    setActiveIndex((current) => (current + direction + visible.length) % visible.length)
  }

  if (!project) return null

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto flex max-w-6xl scroll-mt-28 flex-col gap-10 px-4 py-24 md:px-6"
    >
      <SectionHeading
        id="projects-title"
        kicker="projects"
        title="Work that connects networks, automation, and usable knowledge"
        description="A mix of professional work, learning labs, and the tools I am building to make technical ideas easier to understand."
        action={
          <div role="group" aria-label="Filter projects" className="glass flex w-fit gap-1 rounded-full p-1">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm transition-colors',
                  filter === f ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {f}
              </button>
            ))}
          </div>
        }
      />

      <div className="glass project-carousel overflow-hidden rounded-2xl p-3 md:p-5">
        <div className="grid items-stretch gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-0">
          <ProjectVisual project={project} />
          <div className="project-copy flex flex-col justify-center gap-5 px-3 py-4 md:px-7 lg:pl-10">
            <div className="flex items-center justify-between gap-4">
              <span className={cn(
                'rounded-full px-2.5 py-1 font-mono text-xs',
                project.kind === 'Professional' ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground',
              )}>
                {project.kind}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {String(activeIndex + 1).padStart(2, '0')} / {String(visible.length).padStart(2, '0')}
              </span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">{project.title}</h3>
            <p className="leading-relaxed text-pretty text-muted-foreground">{project.description}</p>
            <p className="border-l-2 border-primary pl-3 text-sm leading-relaxed text-foreground">{project.outcome}</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
              {project.tags.map((tag) => (
                <li key={tag} className="font-mono text-xs text-muted-foreground">{`#${tag.toLowerCase().replace(/\s+/g, '-')}`}</li>
              ))}
            </ul>
            <div className="flex items-center gap-2 pt-2">
              {project.repo ? (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm hover:text-primary">
                  <GitHubIcon className="size-4" /> Source <span className="sr-only">for {project.title}</span>
                </a>
              ) : null}
              {project.writeup ? (
                <a href={project.writeup} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm hover:text-primary">
                  Read more <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-glass-border pt-4">
          <p className="font-mono text-xs text-muted-foreground">Use the arrows to move through the project snapshots.</p>
          <div className="flex gap-2">
            <button type="button" onClick={() => move(-1)} aria-label="Previous project" className="glass flex size-10 items-center justify-center rounded-full hover:text-primary">
              <ChevronLeft className="size-4" />
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Next project" className="glass flex size-10 items-center justify-center rounded-full hover:text-primary">
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
