/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // GitHub Pages serves project sites below /<repository-name>.
  // Local development remains at http://localhost:3000.
  basePath: process.env.GITHUB_ACTIONS === 'true' ? '/portfolio' : undefined,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
