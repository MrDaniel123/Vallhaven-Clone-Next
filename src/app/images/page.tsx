'use client';

import { useContext, useEffect, useState } from 'react';

import ScrollOnTop from '@/components/scrollOnTop/scrollOnTop';
import LoadMoreImages from '@/components/loadMoreImages/loadMoreImages';
import ImagesList from '@/components/imagesList/imagesList';

import { SearchContext } from '@/context/context';
import { ImagesType } from '@/types/imagesType';
import getImages from '@/actions/getImages';
import classes from './page.module.scss';

interface ImagesParams {
	categories: string;
	purity: string;
	sorting: string;
	query: string;
}

export default function ImagesPage({ searchParams }: { searchParams: ImagesParams }) {
	const [images, setImages] = useState<ImagesType[] | null>(null);
	const { state } = useContext(SearchContext);

	const loadImages = async () => {
		const images = await getImages(
			{
				categories: searchParams.categories,
				purity: searchParams.purity,
				sorting: searchParams.sorting,
				query: searchParams.query,
			},
			'1'
		);

		setImages(images.data);
	};

	useEffect(() => {
		setImages(null);
		loadImages();
	}, [searchParams, state.reloadCount]);

	return (
		<div className={classes.wrapper}>
			<ScrollOnTop />
			{images && (
				<>
					<ImagesList data={images} />
					<LoadMoreImages fetchedNextPage={images?.length > 24} searchParams={searchParams} />
				</>
			)}
		</div>
	);
}
