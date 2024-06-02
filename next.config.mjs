/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.the-boundary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
