'use client';

import ScrollOnTop from '@/components/scrollOnTop/scrollOnTop';
import classes from './page.module.scss';
import LoadMoreImages from '@/components/loadMoreImages/loadMoreImages';
import { useContext, useEffect, useState } from 'react';
import getImages from '@/actions/getImages';
import ImagesList from '@/components/imagesList/imagesList';
import { ImagesType } from '@/types/imagesType';
import { SearchContext } from '@/context/context';
import paramsGenerator from '@/helpes/paramsGenerator';

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
		const { categories, purity } = paramsGenerator(state);
		const images = await getImages(
			{
				categories: categories,
				purity: purity,
				sorting: state.sorting,
				query: state.query,
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
					<LoadMoreImages fetchedNextPage={images?.length >= 24} searchParams={searchParams} />
				</>
			)}
		</div>
	);
}
