/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "s3.amazonaws.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
