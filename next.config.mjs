/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
      return [
        {
          source: '/:path*',
          headers: [
            { key: 'X-Robots-Tag', value: 'noindex' },
          ],
        },
      ]
    }

    if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
      return [
        {
          source: '/:path*',
          headers: [
            { key: 'X-Robots-Tag', value: 'index, follow' },
          ],
        },
      ]
    }

    return []
  },
}

export default nextConfig
