import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: "/custom",
	redirects: async () => {
		return [
			{
				source: "/",
				destination: "/custom",
				permanent: true,
				basePath: false,
			},
		];
	},
};

export default nextConfig;
