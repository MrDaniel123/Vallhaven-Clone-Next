import { ImageApiResponseType } from './imagesType';

export type ReducerType = {
	categoryAnime: boolean;
	categoryPeople: boolean;
	categoryGeneral: boolean;
	puritySfw: boolean;
	purityNsfw: boolean;
	puritySketchy: boolean;
	sorting: 'latest' | 'hot' | 'topList' | 'random' | 'topViews' | 'favorites' | 'reverence';
	reloadCount: number;
	images: ImageApiResponseType | undefined;
	query: string;
};
