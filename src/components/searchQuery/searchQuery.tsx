'use client';

import { ChangeEvent, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import classes from './searchQuery.module.scss';
import loupe from '@/assets/Loupe.png';
import Link from 'next/link';
import { SearchContext } from '@/context/context';
import { useParams, useSearchParams } from 'next/navigation';

interface ImagesParams {
	categories: string;
	purity: string;
	sorting: string;
	query: string;
}

export default function SearchQuery({ isMobile }: { isMobile?: boolean }) {
	const { dispatch } = useContext(SearchContext);
	const [query, setQuery] = useState<string | null>('');

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
		console.log(query);

		dispatch({ type: 'SELECT-PARAMS-TAG', payload: query });
	}

	return (
		<div className={`${classes.searchQuery} ${isMobile ? classes.mobile : classes.desktop}`}>
			<input
				type='text'
				name=''
				id=''
				value={query ? query : ''}
				onChange={e => handleInputChange(e)}
				onKeyDown={e => {
					if (e.key === 'Enter') {
						onCLickHandle(query ? query : '');
						router.push(`/images?categories=111&purity=111&sorting=latest&query=${query}`);
					}
				}}
			/>
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
				<button onClick={() => onCLickHandle(query ? query : '')}>
					<Image src={loupe} alt={'Loupe'}></Image>
				</button>
			</Link>
		</div>
	);
}
