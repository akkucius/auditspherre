/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async rewrites() {
    // v1, v3 — SPA (single index.html, all inline)
    const spaVersions = ['v1', 'v3'];
    // v2 — multi-page (shared.css/js + sub-pages)
    const multiPageVersions = ['v2'];
    const subPages = ['services', 'about', 'contact'];

    const rewrites = [];

    for (const version of spaVersions) {
      rewrites.push({
        source: `/${version}`,
        destination: `/${version}/index.html`,
      });
    }

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
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
