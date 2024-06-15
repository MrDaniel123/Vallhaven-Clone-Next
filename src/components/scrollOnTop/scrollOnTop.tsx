'use client';

import Image from 'next/image';
import arrowIcon from '@/assets/ScrollArrow.png';

import classes from './scrollOnTop.module.scss';

export default function ScrollOnTop() {
	function scrollOfTheTop() {
		window.scrollTo(0, 0);
	}

	return (
		<button onClick={scrollOfTheTop} className={classes.buttonWrapper}>
			<Image src={arrowIcon} alt='Scroll arrow' />
		</button>
	);
}
