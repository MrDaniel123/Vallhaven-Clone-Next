'use client';

import ScrollOnTop from '@/components/scrollOnTop/scrollOnTop';
import classes from './page.module.scss';
import LoadMoreImages from '@/components/loadMoreImages/loadMoreImages';
import paramsGenerator from '@/helpes/paramsGenerator';
import { SearchContext } from '@/context/context';
import { useContext, useEffect, useState } from 'react';
import getImages from '@/actions/getImages';
import ImagesList from '@/components/imagesList/imagesList';
import { ImagesType } from '@/types/imagesType';

interface ImagesParams {
	categories: string;
	purity: string;
	sorting: string;
	query: string;
}

export default function ImagesPage({ searchParams }: { searchParams: ImagesParams }) {
	const [images, setImages] = useState<ImagesType[] | null>(null);
	const { state } = useContext(SearchContext);

	useEffect(() => {
		setImages(null);
	}, [state.reloadCount]);

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
	}, [searchParams]);

	//TODO imagelist has on old data When click the TAGS button

	return (
		<div className={classes.wrapper}>
			<ScrollOnTop />
			{images && (
				<>
					<ImagesList data={images} />
					<LoadMoreImages fetchedNextPage={images?.length < 24} searchParams={searchParams} />
				</>
			)}
		</div>
	);
}
