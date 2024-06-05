import { useContext } from 'react';
import SortingButton from '../sortingButton/sortingButton';

import classes from './sortingButtons.module.scss';
import { SearchContext } from '@/context/context';

export default function SortingButtons() {
	const { state, dispatch } = useContext(SearchContext);

	return (
		<div className={`${classes.buttonsWrapper} ${classes.sortingWrapper}`}>
			<SortingButton
				onClickHandler={() => dispatch({ type: 'SELECT-SORTING', payload: 'topList' })}
				color={state.sorting === 'topList' ? '#570F63' : undefined}>
				Top List
			</SortingButton>
			<SortingButton
				onClickHandler={() => dispatch({ type: 'SELECT-SORTING', payload: 'latest' })}
				color={state.sorting === 'latest' ? '#570F63' : undefined}>
				Latest
			</SortingButton>
			<SortingButton
				onClickHandler={() => dispatch({ type: 'SELECT-SORTING', payload: 'topViews' })}
				color={state.sorting === 'topViews' ? '#570F63' : undefined}>
				Top Views
			</SortingButton>
			<SortingButton
				onClickHandler={() => dispatch({ type: 'SELECT-SORTING', payload: 'random' })}
				color={state.sorting === 'random' ? '#570F63' : undefined}>
				Random
			</SortingButton>
			<SortingButton
				onClickHandler={() => dispatch({ type: 'SELECT-SORTING', payload: 'favorites' })}
				color={state.sorting === 'favorites' ? '#570F63' : undefined}>
				Favorites
			</SortingButton>
			<SortingButton
				onClickHandler={() => dispatch({ type: 'SELECT-SORTING', payload: 'reverence' })}
				color={state.sorting === 'reverence' ? '#570F63' : undefined}>
				Relevance
			</SortingButton>
			<SortingButton
				onClickHandler={() => dispatch({ type: 'SELECT-SORTING', payload: 'hot' })}
				color={state.sorting === 'hot' ? '#570F63' : undefined}>
				Hot
			</SortingButton>
		</div>
	);
}
