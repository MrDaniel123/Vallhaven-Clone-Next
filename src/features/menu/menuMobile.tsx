'use client';

import { useEffect, useState } from 'react';

import OptionBtn from './optionBtn';
import PurityButtons from '@/components/purityButtons/purityButtons';
import CategoryButtons from '@/components/categoryButtons/categoryButtons';
import SortingButtons from '@/components/sortingButtons/sortingButtons';
import ReloadButton from '@/components/reloadButton/reloadButton';

import classes from './menuMobile.module.scss';

type Props = {
	openMenuFn: () => void;
	menuIsOpen: boolean;
};

export default function MenuMobile({ openMenuFn, menuIsOpen }: Props) {
	const [menuIsHidden, setMenuIsHidden] = useState(true);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setMenuIsHidden(false);
		}, 200);
		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<div
			className={`${classes.menuWrapper} ${menuIsOpen && classes.menuOpen} ${
				!menuIsOpen && classes.menuHidden
			}  ${menuIsHidden && classes.hidden}`}>
			<div
				className={`${classes.categoryWrapper} ${
					menuIsOpen ? classes.opacityShowMenu : classes.opacityHiddenMenu
				}  ${menuIsHidden && classes.hidden}`}>
				<section className={`${classes.optionsWrapper} ${classes.isMobile} `}>
					<SortingButtons />
					<span className={`${classes.breakLine} `}></span>
					<CategoryButtons />
					<span className={classes.breakLine}></span>
					<PurityButtons />
				</section>
				<div className={`${classes.reloadButtonWrapper}`}>
					<ReloadButton hiddenMenuFn={openMenuFn} />
				</div>
			</div>
			<OptionBtn openCloseMenu={openMenuFn} isMenuOpen={menuIsOpen} />
		</div>
	);
}
