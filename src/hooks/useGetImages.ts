'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getImages } from '@/api/getImages';
import { useContext } from 'react';
import { SearchContext } from '../context/context';

import urlQueysGenerator from '@/lib/urlQueysGenerator';
import { ReducerType } from '@/types/reducerType';

type ParamsType = {
	purity: string;
	categories: string;
	sorting: string;
};

interface Props {
	categories: string | null;
	purity: string | null;
	sorting: string | null;
	query: string | null;
}

export const useGetImages = ({ categories, purity, sorting, query }: Props) => {
	const { state } = useContext(SearchContext);
	let searchingQueys: ParamsType;

	if (categories && purity && sorting) {
		searchingQueys = {
			categories: categories,
			purity: purity,
			sorting: sorting,
		};
	} else {
		searchingQueys = urlQueysGenerator(state);
	}

	const { data, isLoading, isError, fetchNextPage, refetch, hasNextPage, isFetchingNextPage } =
		useInfiniteQuery({
			queryKey: [`images-reload-${state.reloadCount}`],
			queryFn: ({ pageParam }) => getImages({ searchingQueys, pageParam, query }),
			initialPageParam: 1,
			getNextPageParam: (_, allPages) => {
				return allPages.length + 1;
			},
		});
	return { data, isError, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage };
};
