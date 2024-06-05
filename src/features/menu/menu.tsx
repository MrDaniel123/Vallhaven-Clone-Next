'use client';

import { useContext, useState } from 'react';
import { SearchContext } from '@/context/context';

import SearchQuery from '@/components/searchQuery/searchQuery';
import MenuMobile from './menuMobile';
import MenuDesktop from './menuDesktop';

import classes from './menu.module.scss';

export default function Menu() {
	const { state } = useContext(SearchContext);
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	console.log(state);

	const handleOpenMenu = () => {
		setMenuIsOpen(!menuIsOpen);
	};

	return (
		<div className={classes.menuWrapper}>
			<div className={classes.searchQueryWrapper}>
				<SearchQuery isMobile={true} />
			</div>
			<MenuDesktop />
			<MenuMobile />
		</div>
	);
}
