'use client';

import { Tags as TagsType } from '@/types/imageType';
import classes from './tags.module.scss';
import Link from 'next/link';
import { useContext } from 'react';
import { SearchContext } from '@/context/context';

export default function Tags({ tags }: { tags: TagsType[] }) {
	const { dispatch } = useContext(SearchContext);

	function onCLickHandle(query: String) {
		dispatch({ type: 'SELECT-PARAMS-TAG', payload: query });
	}

	return (
		<div className={classes.tagsWrapper}>
			{tags.map(tag => (
				<Link
					onClick={() => onCLickHandle(tag.name)}
					href={{
						pathname: '/images',
						query: {
							q: tag.name,
							categories: '111',
							purity: '111',
							sorting: 'latest',
						},
					}}
					key={tag.id}>
					<p className={classes.tag}>{`#${tag.name}`}</p>
				</Link>
			))}
		</div>
	);
}
