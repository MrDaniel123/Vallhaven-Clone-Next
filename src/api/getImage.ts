import { ImageType } from '@/types/imageType';

const baseURL = 'https://wallhaven.cc/api/v1/';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function getImage(imageId: string): Promise<ImageType> {
	const response = await fetch(`${baseURL}w/${imageId}?apikey=${API_KEY}`);

	return response.json() as Promise<ImageType>;
}
