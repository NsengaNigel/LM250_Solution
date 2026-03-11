/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for catching potential issues early
  reactStrictMode: true,

  // Compress responses with gzip
  compress: true,

  // Allow optimizing images from these external domains if needed later
  images: {
    remotePatterns: [],
  },

  // Custom HTTP response headers applied to every route
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
