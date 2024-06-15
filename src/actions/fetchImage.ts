'use server';

import { ImageApiResponseType } from '@/types/imagesType';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const baseURL = 'https://wallhaven.cc/api/v1/search?';

interface ImagesParams {
	categories: string;
	purity: string;
	sorting: string;
	query: string;
}

export default async function fetchImages(
	{ categories, purity, sorting, query }: ImagesParams,
	page: string
): Promise<ImageApiResponseType> {
	const response = await fetch(
		`${baseURL}categories=${categories}&purity=${purity}&sorting=${sorting}&q=${query}&page=${page}&apikey=${API_KEY}`
	);

	return response.json() as Promise<ImageApiResponseType>;
}
