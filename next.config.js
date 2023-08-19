/** @type {import('next').NextConfig} */
const nextConfig = {}


module.exports = {
    distDir: 'build',
    async rewrites() {
      return [
        {
          source: '/dashboard',
          destination: '/[type]',
        },
      ];
    },
  };
