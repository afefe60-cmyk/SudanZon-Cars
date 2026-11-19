/** @type {import('next').NextConfig} */
const isExport = process.env.NEXT_EXPORT === "true";

const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  compress: true,
  output: isExport ? "export" : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.sudanzon.com",
      },
      {
        protocol: "https",
        hostname: "sudanzon.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  ...(isExport
    ? {}
    : {
        async rewrites() {
          return [
            {
              source: "/api/:path*",
              destination: "http://localhost:3001/api/:path*",
            },
            {
              source: "/uploads/:path*",
              destination: "http://localhost:3001/uploads/:path*",
            },
          ];
        },
      }),
};

module.exports = nextConfig;
