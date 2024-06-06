import { ImageApiResponseType } from '@/types/imagesType';
import axios from 'axios';
const baseURL = 'https://wallhaven.cc/api/v1/search';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// sorting: 'latest' | 'hot' | 'topList' | 'random' | 'topViews' | 'favorites' | 'reverence';

type SearchingQueys = {
	purity: string | null;
	categories: string | null;
	sorting: string | null;
};

export const getImages = async ({
	searchingQueys,
	pageParam = 0,
}: {
	searchingQueys: SearchingQueys;
	pageParam: number;
}) => {
	const { categories, sorting, purity } = searchingQueys;
	const response = await axios.get<ImageApiResponseType>(`${baseURL}`, {
		params: {
			categories: categories,
			page: pageParam,
			apikey: API_KEY,
			purity: purity,
			sorting: sorting,
		},
	});
	return response.data.data;
};
