export const profile = {
  name: 'NickolasInIT',
  initials: 'NI',
  role: 'Network engineering · automation · AI',
  tagline: 'I build, explain, and automate the network.',
  summary:
    'I’m building toward network engineering through practical labs, automation workflows, and AI-assisted tools that make operational knowledge easier to use.',
  currently:
    'Exploring how Webex capture, SharePoint workflows, and governed AI can turn working knowledge into reusable SOPs.',
  links: {
    youtube: 'https://www.youtube.com/',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
  },
}

export const toolkit = [
  { group: 'Automation', items: ['Python', 'Power Automate', 'Netmiko', 'Git', 'PowerShell'] },
  { group: 'AI workflows', items: ['AI-assisted workflows', 'RAG over docs', 'MCP tools', 'Redaction + review'] },
  { group: 'Network practice', items: ['Cisco IOS / IOS-XE', 'Packet Tracer', 'EVE-NG', 'Webex', 'SharePoint'] },
  { group: 'Web + delivery', items: ['TypeScript', 'React', 'Next.js', 'Cloudflare Workers', 'Supabase', 'Vite'] },
]

export type ProjectKind = 'Professional' | 'Personal'

export type Project = {
  title: string
  kind: ProjectKind
  visual: 'tdsource' | 'webex' | 'portfolio' | 'lab'
  description: string
  outcome: string
  tags: string[]
  repo?: string
  writeup?: string
}

export const projects: Project[] = [
  {
    title: 'TDSource Knowledge Assistant',
    kind: 'Professional',
    visual: 'tdsource',
    description:
      'A governed knowledge workflow that connects Webex capture, redaction, human review, searchable SOPs, and Knowledge Chat.',
    outcome:
      'A practical example of turning operational conversations into reusable, reviewable team knowledge.',
    tags: ['React', 'TypeScript', 'Cloudflare Workers', 'Supabase', 'Webex'],
  },
  {
    title: 'Webex → SharePoint SOP Workflow',
    kind: 'Professional',
    visual: 'webex',
    description:
      'An MVP automation path that turns transcript text and an AI review decision into a cleaned SOP file in the SharePoint knowledge library.',
    outcome:
      'The capture → inspect → decide → create path is visible, repeatable, and easier to improve one step at a time.',
    tags: ['Power Automate', 'Webex', 'SharePoint', 'SOP workflow'],
  },
  {
    title: 'NickolasInIT Portfolio',
    kind: 'Personal',
    visual: 'portfolio',
    description:
      'A living portfolio for documenting network-engineering learning, automation experiments, and the decisions behind each build.',
    outcome:
      'The site itself is part of the practice: build something useful, explain it clearly, and keep the claims grounded.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'v0.app'],
  },
  {
    title: 'Network Automation Lab',
    kind: 'Personal',
    visual: 'lab',
    description:
      'Small Cisco labs and automation exercises used to make packet flow, command purpose, and troubleshooting steps concrete.',
    outcome:
      'A focused place to practice Packet Tracer, EVE-NG, Python, Netmiko, ACLs, NAT, and API-oriented thinking.',
    tags: ['Packet Tracer', 'EVE-NG', 'Python', 'Netmiko', 'ACLs + NAT'],
  },
]

export const videoSeries = {
  title: 'Build · Explain · Reflect',
  description:
    'A grounded video direction for sharing network labs, automation experiments, and the lessons that make technical work easier to follow.',
  playlist: 'https://www.youtube.com/',
  episodes: [
    {
      episode: 1,
      title: 'Your first network script with Netmiko',
      duration: '18:42',
      thumbnail: '/videos/ep-1.png',
      url: 'https://www.youtube.com/',
    },
    {
      episode: 2,
      title: 'Turning a Webex transcript into an SOP workflow',
      duration: '24:10',
      thumbnail: '/videos/ep-2.png',
      url: 'https://www.youtube.com/',
    },
    {
      episode: 3,
      title: 'Human review in an AI-assisted knowledge workflow',
      duration: '31:05',
      thumbnail: '/videos/ep-3.png',
      url: 'https://www.youtube.com/',
    },
    {
      episode: 4,
      title: 'What a small network lab can teach you',
      duration: '27:38',
      thumbnail: '/videos/ep-4.png',
      url: 'https://www.youtube.com/',
    },
  ],
}

export const articles = [
  {
    title: 'From Webex capture to a searchable SOP',
    excerpt:
      'A practical look at the capture, review, and SharePoint steps that make an automation workflow understandable.',
    date: '2026-03-18',
    readTime: '6 min read',
    url: 'https://www.linkedin.com/',
  },
  {
    title: 'What human review adds to AI-assisted workflows',
    excerpt:
      'Why redaction, attribution, and approval belong in the workflow before generated knowledge becomes reusable.',
    date: '2026-02-04',
    readTime: '8 min read',
    url: 'https://www.linkedin.com/',
  },
  {
    title: 'Why small network labs make explanations better',
    excerpt:
      'How Packet Tracer, EVE-NG, and repeatable command-level practice turn abstract networking ideas into teachable moments.',
    date: '2025-12-11',
    readTime: '5 min read',
    url: 'https://www.linkedin.com/',
  },
]
