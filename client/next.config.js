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
    happyHerdBaseURL: 'https://happyherd.org/wp-json/wp/v2',
    username: 'happyherd',
    applicationPassword: 'Vlur AaWl 73NQ PswA A5uS VtWv',
    MAILCHIMP_API_KEY: 'fc7b4b0fcb68bd109f092b8fd8d2e68b-us13',
    MAILCHIMP_API_SERVER: 'us13',
    MAILCHIMP_AUDIENCE_ID: 'd43ead7de5',
    NEXT_API_URL: 'http://localhost:3000'
  },
}

module.exports = nextConfig
