'use client';

import { createContext, useReducer } from 'react';
import { ReducerState, reducer } from './reducer';

type SearchContext = {
	state: ReducerState;
	dispatch: React.Dispatch<any>;
	//!!Any Type To Fix
};

type SearchContextProviderProps = {
	children: React.ReactNode;
};

const initialState: ReducerState = {
	categoryAnime: true,
	categoryPeople: false,
	categoryGeneral: true,
	puritySfw: true,
	purityNsfw: false,
	puritySketchy: false,
	sorting: 'topList',
	reloadCount: 0,
	images: undefined,
};

export const SearchContext = createContext<SearchContext>({
	state: initialState,
	dispatch: () => null,
});

export default function SearchContextProvider({ children }: SearchContextProviderProps) {
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
