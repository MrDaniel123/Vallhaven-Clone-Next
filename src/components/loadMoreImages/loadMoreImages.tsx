'use client';

import getImages from '@/api/getImages';
import { ImagesType } from '@/types/imagesType';
import { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ImagesList from '../imagesList/imagesList';
import fetchImages from '@/actions/fetchImage';
import { SearchContext } from '@/context/context';
import urlQueysGenerator from '@/lib/urlQueysGenerator';

interface ImagesParams {
	categories: string;
	purity: string;
	sorting: string;
	query: string;
}

export default function LoadMoreImages({ searchParams }: { searchParams: ImagesParams }) {
	const [images, setImages] = useState<ImagesType[]>([]);
	const [page, setPage] = useState('2');
	const { dispatch, state } = useContext(SearchContext);
	console.log(state);

	const { ref, inView } = useInView();

	useEffect(() => {
		setImages([]);
	}, [state.reloadCount]);

	//TODO use useCallback to  wrap this function
	const loadMoreImages = async () => {
		const nextPage = Number(page) + 1;
		// const newImages = (await fetchImages(searchParams, page)) ?? [];
		const { categories, purity, sorting } = urlQueysGenerator(state);

		const newImages = await fetchImages(
			{ categories: categories, purity: purity, sorting: sorting, query: state.query },
			page
		);

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
			<div ref={ref}>Observer</div>
		</>
	);
}
