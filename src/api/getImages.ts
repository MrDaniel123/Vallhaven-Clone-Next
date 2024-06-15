import { ImageApiResponseType } from '@/types/imagesType';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const baseURL = 'https://wallhaven.cc/api/v1/search?';

interface ImagesParams {
	categories: string;
	purity: string;
	sorting: string;
	query: string;
	page: string;
}

export default async function getImages({
	categories,
	purity,
	sorting,
	query,
	page,
}: ImagesParams): Promise<ImageApiResponseType> {
	const response = await fetch(
		`${baseURL}?categories=${categories}&purity=${purity}&sorting=${sorting}&page=${page}&apikey=${API_KEY}`
	);

	return response.json() as Promise<ImageApiResponseType>;
}

// q: query,
// categories: categories,
// page: pageParam,
// apikey: API_KEY,
// purity: purity,
// sorting: sorting,
