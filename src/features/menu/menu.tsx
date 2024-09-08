'use client';

import { useEffect, useState } from 'react';
import SearchQuery from '@/components/searchQuery/searchQuery';
import MenuMobile from './menuMobile';
import MenuDesktop from './menuDesktop';

import classes from './menu.module.scss';

export default function Menu() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [showOnScroll, setShowOnScroll] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (window.scrollY > lastScrollY) {
			setShowOnScroll(false);
		} else {
			setShowOnScroll(true);
		}

		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, [lastScrollY]);

	const handleOpenMenu = () => {
		setMenuIsOpen(!menuIsOpen);
	};

	return (
		<>
			<div
				className={`${classes.menuWrapper}  ${
					showOnScroll ? classes.showOnScroll : classes.hiddenOnScroll
				}`}>
				<div className={classes.searchQueryWrapper}>
					<SearchQuery isMobile={true} />
				</div>
				<MenuDesktop />
				<MenuMobile openMenuFn={handleOpenMenu} menuIsOpen={menuIsOpen} />
			</div>
		</>
	);
}
