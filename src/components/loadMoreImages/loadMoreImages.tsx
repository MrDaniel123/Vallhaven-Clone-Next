'use client';

import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '@/context/context';
import { ImagesType } from '@/types/imagesType';
import { useInView } from 'react-intersection-observer';
import ImagesList from '../imagesList/imagesList';
import styled from './loadMoreImages.module.scss';

import getImages from '@/actions/getImages';
import paramsGenerator from '@/helpes/paramsGenerator';

interface ImagesParams {
	categories: string;
	purity: string;
	sorting: string;
	query: string;
}

export default function LoadMoreImages({
	searchParams,
	fetchedNextPage,
}: {
	searchParams: ImagesParams;
	fetchedNextPage: undefined | boolean;
}) {
	const [images, setImages] = useState<ImagesType[]>([]);
	const [page, setPage] = useState('2');
	const [hasNextPage, setHasNextPage] = useState(true);
	const { state } = useContext(SearchContext);

	const { ref, inView } = useInView();

	useEffect(() => {
		setImages([]);
		setHasNextPage(true);
	}, [state.reloadCount, searchParams]);

	//TODO use useCallback to  wrap this function
	const loadMoreImages = async () => {
		const nextPage = Number(page) + 1;
		// const newImages = (await fetchImages(searchParams, page)) ?? [];
		const { categories, purity, sorting } = paramsGenerator(state);

		const newImages = await getImages(
			{ categories: categories, purity: purity, sorting: sorting, query: state.query },
			page
		);

		if (newImages.data.length === 0) {
			setHasNextPage(false);
		}

		setImages((prevImages: ImagesType[]) => [...prevImages, ...newImages.data]);
		setPage(String(nextPage));
	};

	useEffect(() => {
		if (inView) {
			loadMoreImages();
		}
	}, [inView]);

	return (
		<>
			<ImagesList data={images} />

			{!fetchedNextPage && !hasNextPage ? (
				<div className={styled.observer}>
					<h1>There is nothing here</h1>
				</div>
			) : (
				<div className={styled.observer} ref={ref}>
					<div className={styled.loader}></div>
				</div>
			)}
		</>
	);
}
