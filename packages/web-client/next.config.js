/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/health',
        destination: 'http://localhost:3001/health',
      },
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },

  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
