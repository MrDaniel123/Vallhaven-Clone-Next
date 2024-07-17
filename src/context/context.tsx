'use client';

import { createContext, useReducer } from 'react';
import { reducer } from './reducer';
import { ReducerType } from '@/types/reducerType';
import { useSearchParams } from 'next/navigation';

type SearchContext = {
	state: ReducerType;
	dispatch: React.Dispatch<any>;
	//!!Any Type To Fix
};

interface ImagesParams {
	categories: string;
	purity: string;
	sorting: string;
	query: string;
}

type SearchContextProviderProps = {
	children: React.ReactNode;
};

const initialState: ReducerType = {
	categoryAnime: true,
	categoryPeople: false,
	categoryGeneral: true,
	puritySfw: true,
	purityNsfw: false,
	puritySketchy: false,
	sorting: 'topList',
	reloadCount: 0,
	images: undefined,
	query: '',
};

export const SearchContext = createContext<SearchContext>({
	state: initialState,
	dispatch: () => null,
});

export default function SearchContextProvider({ children }: SearchContextProviderProps) {
	const searchParams = useSearchParams();

	const categories = searchParams.get('categories');
	const purity = searchParams.get('purity');
	const sorting = searchParams.get('sorting');
	const query = searchParams.get('query');

	let initialState: ReducerType = {
		categoryGeneral: true,
		categoryAnime: true,
		categoryPeople: false,
		puritySfw: true,
		puritySketchy: false,
		purityNsfw: false,
		sorting: 'topList',
		reloadCount: 0,
		images: undefined,
		query: '',
	};

	if (categories && purity && sorting && query) {
		initialState = {
			categoryGeneral: categories[0] === '1' ? true : false,
			categoryAnime: categories[1] === '1' ? true : false,
			categoryPeople: categories[2] === '1' ? true : false,
			puritySfw: purity[0] === '1' ? true : false,
			puritySketchy: purity[1] === '1' ? true : false,
			purityNsfw: purity[2] === '1' ? true : false,
			sorting: sorting,
			reloadCount: 0,
			images: undefined,
			query: query,
		};
	}

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<SearchContext.Provider
			value={{
				state,
				dispatch,
			}}>
			{children}
		</SearchContext.Provider>
	);
}
