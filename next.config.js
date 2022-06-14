/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ROOT: __dirname,
  },
  reactStrictMode: true,
  swcMinify: false,
};

module.exports = nextConfig;
