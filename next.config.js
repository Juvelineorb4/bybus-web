/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@mui/x-charts"],
  images: {
    domains: ["s3storagebybus234733-prod.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
