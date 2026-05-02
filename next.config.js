/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // 環境変数設定
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://melting-hack.tokyo',
  },
  // Firebase Hosting + Functions環境での最適化
  trailingSlash: true,
  // 画像最適化設定
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'melting-hack.tokyo', pathname: '/**' },
    ],
    formats: ['image/webp', 'image/avif'],
    qualities: [70, 75, 85],
    // Cache optimized image variants for 1 year. Pairs with the
    // /_next/image** header in firebase.json so the Cloud Function
    // is not re-invoked on every visit.
    minimumCacheTTL: 31536000,
  },
  // SEO最適化のためのヘッダー設定
  async headers() {
    return [
      {
        source: '/api/og-image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/api/og-image-simple',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
