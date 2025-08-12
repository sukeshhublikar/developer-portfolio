/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/developer-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/developer-portfolio/' : '',
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      }
    ]
  },
}

export default nextConfig
