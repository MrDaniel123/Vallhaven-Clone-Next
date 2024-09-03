'use client';

import Image from 'next/image';
import arrowIcon from '@/assets/ScrollArrow.png';

import classes from './scrollOnTop.module.scss';
import { useEffect, useState } from 'react';

export default function ScrollOnTop() {
	const [isVisible, setIsVisible] = useState(false);

	function scrollOfTheTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	useEffect(() => {
		// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<>
			{isVisible && (
				<button onClick={scrollOfTheTop} className={classes.buttonWrapper}>
					<Image src={arrowIcon} alt='Scroll arrow' />
				</button>
			)}
		</>
	);
}
