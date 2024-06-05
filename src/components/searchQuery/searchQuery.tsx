import Image from 'next/image';

import classes from './searchQuery.module.scss';
import loupe from '@/assets/Loupe.png';

export default function SearchQuery({ isMobile }: { isMobile?: boolean }) {
	return (
		<div className={`${classes.searchQuery} ${isMobile ? classes.mobile : classes.desktop}`}>
			<input type='text' name='' id='' />
			<button>
				<Image src={loupe} alt={'Loupe'}></Image>
			</button>
		</div>
	);
}
