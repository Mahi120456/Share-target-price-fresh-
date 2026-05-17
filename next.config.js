/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "sharetargetprice.in" },
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "**.yahoo.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
