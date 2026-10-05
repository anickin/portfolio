export const siteBasePath = process.env.GITHUB_ACTIONS === 'true' ? '/portfolio' : ''

export function withBasePath(path: string) {
  return `${siteBasePath}${path}`
}
