/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // Firebase Hosting + Functions環境での最適化
  trailingSlash: true,
  // 画像最適化設定
  images: {
    domains: ['meltinghack.com'],
    formats: ['image/webp', 'image/avif'],
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
