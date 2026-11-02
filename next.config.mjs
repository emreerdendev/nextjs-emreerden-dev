/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/browser-extensions',
        destination: '/extensions',
        permanent: true,
      },
      {
        source: '/vscode-extensions',
        destination: '/extensions',
        permanent: true,
      },
    ]
  },
  images: {
    // Only this account's repo thumbnails. Every distinct image is a billable
    // Cloudflare Images transformation, so the optimizer must not accept
    // arbitrary GitHub URLs.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/emreerdendev/**',
      },
    ],
  },
}

export default nextConfig
