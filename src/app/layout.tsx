import type { Metadata } from 'next';
import './globals.css';
import Header from '@/features/header/header';
import Menu from '@/features/menu/menu';
import SearchContextProvider from '@/context/context';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<Header />
				<SearchContextProvider>
					<Menu />
					{children}
				</SearchContextProvider>
			</body>
		</html>
	);
}
