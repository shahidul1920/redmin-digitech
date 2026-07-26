/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "server.redmun.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "server.redmun.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
