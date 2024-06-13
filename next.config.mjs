/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'th.wallhaven.cc',
			},
			{
				protocol: 'https',
				hostname: 'w.wallhaven.cc',
			},
			{
				protocol: 'https',
				hostname: 'wallhaven.cc',
			},
		],
	},
};

export default nextConfig;
