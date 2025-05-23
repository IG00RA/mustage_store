/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/uk",
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
