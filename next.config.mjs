/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ZAPIER_WEBHOOK_URL: process.env.ZAPIER_WEBHOOK_URL,
  },
};

export default nextConfig;
