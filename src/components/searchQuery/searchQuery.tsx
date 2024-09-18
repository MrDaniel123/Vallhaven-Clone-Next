'use client';

import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { SearchContext } from '@/context/context';
import classes from './searchQuery.module.scss';
import loupe from '@/assets/Loupe.png';

import closeIcon from '@/assets/CloseRed.png';
import paramsGenerator from '@/helpes/paramsGenerator';

export default function SearchQuery({ isMobile }: { isMobile?: boolean }) {
	const { state, dispatch } = useContext(SearchContext);
	const [query, setQuery] = useState<string | null>('');

	const { purity, categories, sorting } = paramsGenerator(state);

	const searchParams = useSearchParams();
	const router = useRouter();
	const queryParam = searchParams.get('query');

	useEffect(() => {
		setQuery(queryParam);
	}, [queryParam]);

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		setQuery(e.target.value);
	}

	function onCLickHandle(query: String) {
		dispatch({ type: 'SET-QUERY', payload: query });
		dispatch({ type: 'RELOAD' });
		router.push(
			`/images?categories=${categories}&purity=${purity}&sorting=${sorting}&query=${query}`
		);
	}

	return (
		<div className={`${classes.searchQuery} ${isMobile ? classes.mobile : classes.desktop}`}>
			<div className={classes.inputWrapper}>
				{query && query.length >= 1 && (
					<button
						className={`${classes.clearQueryBtn}`}
						onClick={() => {
							setQuery('');
							dispatch({ type: 'SET-QUERY', payload: '' });
						}}>
						<Image src={closeIcon} alt={'Reset query button'} />
					</button>
				)}
				<input
					type='text'
					name=''
					id=''
					className={classes.input}
					value={query ? query : ''}
					onChange={e => handleInputChange(e)}
					onKeyDown={e => {
						if (e.key === 'Enter') {
							onCLickHandle(query ? query : '');
							router.push(
								`/images?categories=${categories}&purity=${purity}&sorting=${sorting}&query=${query}`
							);
						}
					}}
				/>
			</div>
			<button className={classes.searchButton} onClick={() => onCLickHandle(query ? query : '')}>
				<Image src={loupe} alt={'Loupe'}></Image>
			</button>
		</div>
	);
}
