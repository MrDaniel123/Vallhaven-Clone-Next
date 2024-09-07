'use client';

import getImages from '@/actions/getImages';
import ImagesList from '@/components/imagesList/imagesList';
import { ImagesType } from '@/types/imagesType';

import classes from './page.module.scss';
import { useContext, useEffect, useState } from 'react';
import ScrollOnTop from '@/components/scrollOnTop/scrollOnTop';
import LoadMoreImages from '@/components/loadMoreImages/loadMoreImages';
import { SearchContext } from '@/context/context';

export default function Page() {
	const [images, setImages] = useState<ImagesType[] | null>(null);

	const loadImages = async () => {
		const images = await getImages(
			{
				categories: '111',
				purity: '100',
				sorting: 'random',
				query: '',
			},
			'1'
		);

		setImages(images.data);
	};

	useEffect(() => {
		setImages(null);
		loadImages();
	}, []);

	return (
		<div className={classes.page}>
			<ScrollOnTop />
			{images && (
				<>
					<ImagesList data={images} />
					<LoadMoreImages
						fetchedNextPage={images?.length < 24}
						searchParams={{
							categories: '111',
							purity: '100',
							sorting: 'random',
							query: '',
						}}
						staticLoad={true}
					/>
				</>
			)}
		</div>
	);
}
