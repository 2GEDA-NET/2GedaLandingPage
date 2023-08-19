/** @type {import('next').NextConfig} */
const nextConfig = {}


module.exports = {
    distDir: 'out',
    async rewrites() {
      return [
        {
          source: '/dashboard',
          destination: '/[type]',
        },
      ];
    },
  };
