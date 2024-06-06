'use client';

import { useState } from 'react';
import SearchQuery from '@/components/searchQuery/searchQuery';
import MenuMobile from './menuMobile';
import MenuDesktop from './menuDesktop';

import classes from './menu.module.scss';

export default function Menu() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

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
