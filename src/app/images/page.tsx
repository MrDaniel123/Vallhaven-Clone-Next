'use client';

import { useGetImages } from '@/hooks/useGetImages';
import { useSearchParams } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

import classes from './page.module.scss';
import { useEffect } from 'react';

export default function ImagesPage() {
	const searchParams = useSearchParams();
	const categories = searchParams.get('categories');
	const purity = searchParams.get('purity');
	const sorting = searchParams.get('sorting');

	const { data, fetchNextPage, isLoading, refetch } = useGetImages({ categories, purity, sorting });

	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView, fetchNextPage]);

	const renderData = data?.pages.map(images => {
		return (
			<div className={classes.imagesWrapper} key={images[0].id}>
				{images.map(image => {
					return <img src={image.thumbs.small.replace('//', '/')} alt={'Image'} key={image.id} />;
				})}
			</div>
		);
	});

	return (
		<div className={classes.wrapper}>
			{renderData}
			<div ref={ref}>
				<p>{isLoading ? 'Loading' : '...'}</p>
			</div>
		</div>
	);

	// return <div className={classes.wrapper}>{/* <main>{renderImages}</main> */}</div>;
}
