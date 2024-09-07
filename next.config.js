/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jovianarchive.com',
        port: '',
        pathname: '/RaveChartGenerator.php',
      },
    ],
  },
}

module.exports = nextConfig
