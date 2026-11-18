import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Member photos are served from the private bucket through short-lived signed URLs.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tualrxilkmzqlxvrsjrz.supabase.co",
        pathname: "/storage/v1/object/sign/private-files/**",
      },
    ],
  },
};

export default nextConfig;
