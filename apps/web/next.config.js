/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for S3/CloudFront static hosting
  output: 'export',
  // If you use next/image, disable optimized loader for static export
  images: { unoptimized: true },
  // Optional but helps with S3 directory indexing
  // trailingSlash: true,
};

module.exports = nextConfig;
