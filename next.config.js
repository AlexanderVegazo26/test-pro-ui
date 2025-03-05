/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  eslint: {
    // Disable the rule that requires escaping apostrophes
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 