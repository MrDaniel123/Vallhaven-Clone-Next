'use client';

import { ChangeEvent, useContext, useState } from 'react';
import Image from 'next/image';

import classes from './searchQuery.module.scss';
import loupe from '@/assets/Loupe.png';
import Link from 'next/link';
import { SearchContext } from '@/context/context';
import paramsGenerator from '@/helpes/paramsGenerator';

export default function SearchQuery({ isMobile }: { isMobile?: boolean }) {
	const { dispatch } = useContext(SearchContext);
	const [query, setQuery] = useState('');

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		setQuery(e.target.value);
	}

	function onCLickHandle(query: String) {
		dispatch({ type: 'SELECT-PARAMS-TAG', payload: query });
	}

	return (
		<div className={`${classes.searchQuery} ${isMobile ? classes.mobile : classes.desktop}`}>
			<input type='text' name='' id='' value={query} onChange={e => handleInputChange(e)} />
			<Link
				href={{
					pathname: '/images',
					query: {
						categories: '111',
						purity: '111',
						sorting: 'latest',
						query: query,
					},
				}}>
				<button onClick={() => onCLickHandle(query)}>
					<Image src={loupe} alt={'Loupe'}></Image>
				</button>
			</Link>
		</div>
	);
}
