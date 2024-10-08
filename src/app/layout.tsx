import type { Metadata } from 'next';
import './globals.css';
import Header from '@/features/header/header';
import Menu from '@/features/menu/menu';
import SearchContextProvider from '@/context/context';
import classes from './page.module.scss';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

interface ImagesParams {
	categories: string;
	purity: string;
	sorting: string;
	query: string;
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<SearchContextProvider>
					<Header />
					<Menu />
					{children}
				</SearchContextProvider>
			</body>
		</html>
	);
}
