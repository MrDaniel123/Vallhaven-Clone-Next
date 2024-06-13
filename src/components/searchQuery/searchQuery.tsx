'use client';

import { ChangeEvent, useContext, useState } from 'react';
import Image from 'next/image';

import classes from './searchQuery.module.scss';
import loupe from '@/assets/Loupe.png';
import Link from 'next/link';
import { SearchContext } from '@/context/context';

export default function SearchQuery({ isMobile }: { isMobile?: boolean }) {
	const [query, setQuery] = useState('');
	const { dispatch } = useContext(SearchContext);

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		setQuery(e.target.value);
	}

	function handleReloadImages() {
		dispatch({ type: 'RELOAD' });
	}

	return (
		<div className={`${classes.searchQuery} ${isMobile ? classes.mobile : classes.desktop}`}>
			<input type='text' name='' id='' value={query} onChange={e => handleInputChange(e)} />
			<Link
				href={{
					pathname: '/images',
					query: {
						q: query,
						categories: '110',
						purity: '110',
						sorting: 'topViews',
					},
				}}>
				<button onClick={handleReloadImages}>
					<Image src={loupe} alt={'Loupe'}></Image>
				</button>
			</Link>
		</div>
	);
}
