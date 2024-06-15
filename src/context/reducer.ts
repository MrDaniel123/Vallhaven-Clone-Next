'use client';

import { ImageApiResponseType } from '@/types/imagesType';
import { ReducerType } from '@/types/reducerType';

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
	| { type: 'IS-RELOAD'; payload: boolean };

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
			return { ...state, reloadCount: state.reloadCount + 1 };
		case 'SELECT-SORTING':
			return { ...state, sorting: action.payload };
		case 'SAVEIMAGES':
			return { ...state, images: action.payload };
		case 'SET-QUERY':
			return { ...state, query: action.payload };
		default:
			return state;
	}
}
