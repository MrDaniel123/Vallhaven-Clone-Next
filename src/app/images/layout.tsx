'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			retry: 1,
			staleTime: Infinity,
		},
	},
});

export default function ImagesPageLayout({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<div style={{ fontSize: '20px' }}>
				<ReactQueryDevtools initialIsOpen={false} />
			</div>

			{children}
		</QueryClientProvider>
	);
}
