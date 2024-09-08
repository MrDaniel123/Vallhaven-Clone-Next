'use client';

import { useEffect, useState } from 'react';

import ImagesList from '@/components/imagesList/imagesList';
import ScrollOnTop from '@/components/scrollOnTop/scrollOnTop';
import LoadMoreImages from '@/components/loadMoreImages/loadMoreImages';
import Tags from '@/components/tags/tags';

import classes from './page.module.scss';
import getImages from '@/actions/getImages';
import { ImagesType } from '@/types/imagesType';
import { tags } from '@/helpes/tags';

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
			<Tags tags={tags} />
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
