/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async rewrites() {
    const multiPageVersions = ['v1', 'v2', 'v3'];
    const spaVersions = ['v4', 'v5'];
    const subPages = ['services', 'about', 'contact'];

    const rewrites = [];

    for (const version of multiPageVersions) {
      rewrites.push({
        source: `/${version}`,
        destination: `/${version}/index.html`,
      });

      for (const page of subPages) {
        rewrites.push({
          source: `/${version}/${page}`,
          destination: `/${version}/${page}.html`,
        });
      }
    }

    for (const version of spaVersions) {
      rewrites.push({
        source: `/${version}`,
        destination: `/${version}/index.html`,
      });
    }

    return rewrites;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
