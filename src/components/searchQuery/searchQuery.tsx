'use client';

import { ChangeEvent, useContext, useState } from 'react';
import Image from 'next/image';

import classes from './searchQuery.module.scss';
import loupe from '@/assets/Loupe.png';
import Link from 'next/link';
import { SearchContext } from '@/context/context';
import urlQueysGenerator from '@/lib/urlQueysGenerator';

export default function SearchQuery({ isMobile }: { isMobile?: boolean }) {
	const { dispatch, state } = useContext(SearchContext);
	const { categories, purity, sorting } = urlQueysGenerator(state);

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		dispatch({ type: 'SET-QUERY', payload: e.target.value });
	}

	function handleReloadImages() {
		dispatch({ type: 'RELOAD' });
	}

	return (
		<div className={`${classes.searchQuery} ${isMobile ? classes.mobile : classes.desktop}`}>
			<input type='text' name='' id='' value={state.query} onChange={e => handleInputChange(e)} />
			<Link
				href={{
					pathname: '/images',
					query: {
						categories: categories,
						purity: purity,
						sorting: sorting,
						query: state.query,
					},
				}}>
				<button onClick={handleReloadImages}>
					<Image src={loupe} alt={'Loupe'}></Image>
				</button>
			</Link>
		</div>
	);
}
