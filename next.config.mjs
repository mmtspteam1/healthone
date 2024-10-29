/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        pathname: '/plus/img/logos/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true, // Enable if you trust the source of the SVGs
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Add security measure if needed
  },
}

export default nextConfig;
