/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    happyHerdApi: process.env.happyHerdApi,
    happyHerdBaseURL: process.env.happyHerdBaseURL,
    username: process.env.username,
    applicationPassword: process.env.applicationPassword,
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_API_SERVER: process.env.MAILCHIMP_API_SERVER,
    MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID,
    NEXT_API_URL: process.env.NEXT_API_URL
  },
}

module.exports = nextConfig
