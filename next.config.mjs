/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "escpos-usb": "commonjs escpos-usb",
      usb: "commonjs usb",
    });
    return config;
  },
    images: {
        domains: ['assets.aceternity.com','img.freepik.com'],
    },};

export default nextConfig;
