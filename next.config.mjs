/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["api.sthg.ac.id"],
  },
};

export default nextConfig;
