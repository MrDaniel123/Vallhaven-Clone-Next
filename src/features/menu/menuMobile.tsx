'use client';

import { useContext, useState } from 'react';
import { SearchContext } from '@/context/context';

import OptionBtn from './optionBtn';
import PurityButtons from '@/components/purityButtons/purityButtons';
import CategoryButtons from '@/components/categoryButtons/categoryButtons';
import SortingButtons from '@/components/sortingButtons/sortingButtons';
import ReloadButton from '@/components/reloadButton/reloadButton';

import classes from './menuMobile.module.scss';

export default function MenuMobile() {
	const { state } = useContext(SearchContext);
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const handleOpenMenu = () => {
		setMenuIsOpen(!menuIsOpen);
	};

	return (
		<>
			{menuIsOpen && (
				<>
					<section className={`${classes.optionsWrapper} ${classes.isMobile}`}>
						<SortingButtons />
						<span className={`${classes.breakLine} `}></span>
						<CategoryButtons />
						<span className={classes.breakLine}></span>
						<PurityButtons />
					</section>
					<div className={`${classes.reloadButtonWrapper}`}>
						<ReloadButton hiddenMenuFn={handleOpenMenu} />
					</div>
				</>
			)}
			<OptionBtn openCloseMenu={handleOpenMenu} isMenuOpen={menuIsOpen} />
		</>
	);
}
