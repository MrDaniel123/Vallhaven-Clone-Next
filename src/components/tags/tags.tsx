'use client';

import { Tags as TagsType } from '@/types/imageType';
import classes from './tags.module.scss';
import Link from 'next/link';
import { useContext } from 'react';
import { SearchContext } from '@/context/context';
import paramsGenerator from '@/helpes/paramsGenerator';

export default function Tags({ tags }: { tags: TagsType[] }) {
	const { state, dispatch } = useContext(SearchContext);

	console.log(tags);

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
							categories: '111',
							purity: '110',
							sorting: 'latest',
							query: tag.name,
						},
					}}
					key={tag.id}>
					<p className={classes.tag}>{`#${tag.name}`}</p>
				</Link>
			))}
		</div>
	);
}
