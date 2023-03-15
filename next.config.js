/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone' // output file tracing for production builds: https://nextjs.org/docs/advanced-features/output-file-tracing
}

module.exports = nextConfig
