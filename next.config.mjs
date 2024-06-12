/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'th.wallhaven.cc',
			},
		],
	},
};

export default nextConfig;
