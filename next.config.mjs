/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/predict",
        destination: "http://0f0d-35-204-50-132.ngrok-free.app/predict",
      },
    ]
  },
}

export default nextConfig
