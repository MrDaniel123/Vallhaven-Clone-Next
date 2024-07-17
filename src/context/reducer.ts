'use client';

import { ImageApiResponseType } from '@/types/imagesType';
import { ReducerType } from '@/types/reducerType';

type PayloadState = {
	categoryAnime: boolean;
	categoryGeneral: boolean;
	categoryPeople: boolean;
	purityNsfw: boolean;
	puritySfw: boolean;
	puritySketchy: boolean;
	reloadCount: number;
	sorting: string;
	query: string;
};

export type ReducerAction =
	| { type: 'SELECT-CATEGORY-ANIME' }
	| { type: 'SELECT-CATEGORY-PEOPLE' }
	| { type: 'SELECT-CATEGORY-GENERAL' }
	| { type: 'SELECT-PURITY-SFW' }
	| { type: 'SELECT-PURITY-NSFW' }
	| { type: 'SELECT-PURITY-SKETCHY' }
	| {
			type: 'SELECT-SORTING';
			payload: 'latest' | 'hot' | 'topList' | 'random' | 'topViews' | 'favorites' | 'reverence';
	  }
	| { type: 'RELOAD' }
	| { type: 'SAVEIMAGES'; payload: ImageApiResponseType }
	| { type: 'RELOAD-IMAGES' }
	| { type: 'SET-QUERY'; payload: string }
	| { type: 'IS-RELOAD'; payload: boolean }
	| { type: 'SELECT-PARAMS-TAG'; payload: string }
	| { type: 'SET-STATE'; payload: PayloadState };

export function reducer(state: ReducerType, action: ReducerAction) {
	switch (action.type) {
		case 'SELECT-CATEGORY-ANIME':
			return { ...state, categoryAnime: !state.categoryAnime };
		case 'SELECT-CATEGORY-GENERAL':
			return { ...state, categoryGeneral: !state.categoryGeneral };
		case 'SELECT-CATEGORY-PEOPLE':
			return { ...state, categoryPeople: !state.categoryPeople };
		case 'SELECT-PURITY-NSFW':
			return { ...state, purityNsfw: !state.purityNsfw };
		case 'SELECT-PURITY-SFW':
			return { ...state, puritySfw: !state.puritySfw };
		case 'SELECT-PURITY-SKETCHY':
			return { ...state, puritySketchy: !state.puritySketchy };

		case 'RELOAD':
			return { ...state, reloadCount: state.reloadCount + 1, query: '' };
		case 'SELECT-SORTING':
			return { ...state, sorting: action.payload };
		case 'SAVEIMAGES':
			return { ...state, images: action.payload };
		case 'SET-QUERY':
			return { ...state, query: action.payload };
		case 'SELECT-PARAMS-TAG':
			return {
				...state,
				categoryAnime: true,
				categoryGeneral: true,
				categoryPeople: true,
				purityNsfw: true,
				puritySfw: true,
				puritySketchy: true,
				reloadCount: state.reloadCount + 1,
				query: action.payload,
				sorting: 'latest',
			};
		case 'SET-STATE':
			return {
				...state,
				categoryAnime: action.payload.categoryAnime,
				categoryGeneral: action.payload.categoryGeneral,
				categoryPeople: action.payload.categoryPeople,
				purityNsfw: action.payload.purityNsfw,
				puritySfw: action.payload.puritySfw,
				puritySketchy: action.payload.puritySketchy,
				reloadCount: state.reloadCount + 1,
				query: action.payload.query,
				sorting: action.payload.query,
			};
		default:
			return state;
	}
}
