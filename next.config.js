/** @type {import('next').NextConfig} */
const nextConfig = {}


module.exports = {
    async rewrites() {
      return [
        {
          source: '/dashboard',
          destination: '/[type]',
        },
      ];
    },
  };