/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Enable image optimization for Cloudflare
  // Images will be optimized using Cloudflare's Image Resizing
  images: {
    // Remove unoptimized flag to enable Cloudflare image optimization
    // unoptimized: true,
  },
};

export default nextConfig;
