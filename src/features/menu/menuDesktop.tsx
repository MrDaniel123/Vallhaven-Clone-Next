'use client';

import { useContext } from 'react';
import { SearchContext } from '@/context/context';

import PurityButtons from '@/components/purityButtons/purityButtons';
import CategoryButtons from '@/components/categoryButtons/categoryButtons';
import ReloadButton from '@/components/reloadButton/reloadButton';

import classes from './menuDesktop.module.scss';
import DropDownMenu from '@/components/dropDownMenu/dropDownMenu';

//Is a list of sorting categories
const sortingCategories = [
	'latest',
	'hot',
	'topList',
	'random',
	'topViews',
	'favorites',
	'reverence',
];

export default function MenuDesktop() {
	const { state } = useContext(SearchContext);

	//TODO Reload Function On click TO DO
	const foo = () => {
		console.log('Reload');
	};

	return (
		<>
			<section className={`${classes.optionsWrapper} ${classes.isDesktop} `}>
				<CategoryButtons />
				<span className={classes.breakLine}></span>
				<PurityButtons />
				<span className={classes.breakLine}></span>
				<DropDownMenu
					categoriesList={sortingCategories}
					reducerActionName={'SELECT-SORTING'}
					actualSelectedCategory={state.sorting}
				/>
				<div className={classes.reloadButtonWrapper}>
					<ReloadButton hiddenMenuFn={foo} />
				</div>
			</section>
		</>
	);
}
