/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production"
const basePath = isProduction ? "/14-february-card" : ""

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
