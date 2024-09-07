'use server';

import { ImageApiResponseType } from '@/types/imagesType';
import axios from 'axios';

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
) {
	// console.log(
	// 	`Category: ${categories}, Purity: ${purity}, Sorting: ${sorting}, Query: ${query}, Page: ${page}`
	// );
	try {
		const response = await axios.get<ImageApiResponseType>(`${baseURL}`, {
			params: {
				categories: categories,
				purity: purity,
				sorting: sorting,
				q: query,
				page: page,
				apikey: API_KEY,
			},
		});

		return response.data;
	} catch (error: any) {
		throw new Error('Any fetch error:', error);
	}
}

// const response = await fetch(
// 	`${baseURL}categories=${categories}&purity=${purity}&sorting=${sorting}&q=${query}&page=${page}&apikey=${API_KEY}`
// );

// return response.json() as Promise<ImageApiResponseType>;
