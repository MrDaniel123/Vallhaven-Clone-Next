'use client';

import { useContext } from 'react';
import { SearchContext } from '@/context/context';
import SortingButton from '../sortingButton/sortingButton';
import classes from './purityButtons.module.scss';

export default function PurityButtons() {
	const { state, dispatch } = useContext(SearchContext);
	return (
		<div className={classes.buttonsWrapper}>
			<SortingButton
				onClickHandler={() =>
					dispatch({
						type: 'SELECT-PURITY-SFW',
					})
				}
				color={state.puritySfw ? '#124306' : undefined}>
				SFW
			</SortingButton>
			<SortingButton
				onClickHandler={() =>
					dispatch({
						type: 'SELECT-PURITY-SKETCHY',
					})
				}
				color={state.puritySketchy ? '#657500' : undefined}>
				Sketchy
			</SortingButton>
			<SortingButton
				onClickHandler={() =>
					dispatch({
						type: 'SELECT-PURITY-NSFW',
					})
				}
				color={state.purityNsfw ? '#8F2626' : undefined}>
				NSFW
			</SortingButton>
		</div>
	);
}
