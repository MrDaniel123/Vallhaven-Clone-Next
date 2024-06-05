import { useContext } from 'react';
import classes from './categoryButtons.module.scss';
import { SearchContext } from '@/context/context';
import SortingButton from '../sortingButton/sortingButton';

export default function CategoryButtons() {
	const { state, dispatch } = useContext(SearchContext);

	return (
		<div className={classes.buttonsWrapper}>
			<SortingButton
				onClickHandler={() =>
					dispatch({
						type: 'SELECT-CATEGORY-GENERAL',
					})
				}
				color={state.categoryGeneral ? '#274F58' : undefined}>
				General
			</SortingButton>
			<SortingButton
				onClickHandler={() =>
					dispatch({
						type: 'SELECT-CATEGORY-ANIME',
					})
				}
				color={state.categoryAnime ? '#772F2F' : undefined}>
				Anime
			</SortingButton>
			<SortingButton
				onClickHandler={() =>
					dispatch({
						type: 'SELECT-CATEGORY-PEOPLE',
					})
				}
				color={state.categoryPeople ? '#26134F' : undefined}>
				People
			</SortingButton>
		</div>
	);
}
