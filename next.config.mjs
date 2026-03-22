import { createMDX } from 'fumadocs-mdx/next';


/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      "@": "./src",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**",
      },
    ],
  },
  output: 'standalone',
};

const withMDX = createMDX({
  // customise the config file path
  rootContentPath: './src/content',
  configPath: "source.config.ts"
});

export default withMDX(nextConfig);
