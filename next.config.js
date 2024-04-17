/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@mui/x-charts"],
  images: {
    domains: ["s3storagebybus193751-stage.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
