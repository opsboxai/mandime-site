/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cover images are committed into public/posts by the Curator, so no remote
  // image domains are needed. If you later reference remote images, add them here.
  images: {
    remotePatterns: [],
  },
}

export default nextConfig
