/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    happyHerdApi: 'https://happyherd.org/api/graphql',
  },
}

module.exports = nextConfig
