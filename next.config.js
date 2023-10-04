/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["github.com","fastly.picsum.photos", "picsum.photos"],
  },

};

module.exports = nextConfig;
