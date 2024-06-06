'use client';

import { useGetImages } from '@/hooks/useGetImages';
import { useSearchParams } from 'next/navigation';

import classes from './page.module.scss';

export default function ImagesPage() {
	const searchParams = useSearchParams();
	const categories = searchParams.get('categories');
	const purity = searchParams.get('purity');
	const sorting = searchParams.get('sorting');

	const { data, refetch } = useGetImages({ categories, purity, sorting });

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
			<button onClick={() => refetch()}>Refetch page</button>
			{renderData}
		</div>
	);

	// return <div className={classes.wrapper}>{/* <main>{renderImages}</main> */}</div>;
}
