process.env.NEXT_DISABLE_SWC = '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
};

module.exports = nextConfig;
