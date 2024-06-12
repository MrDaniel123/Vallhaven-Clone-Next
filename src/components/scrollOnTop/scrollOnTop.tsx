import Image from 'next/image';
import arrowIcon from '@/assets/ScrollArrow.png';

import classes from './scrollOnTop.module.scss';

export default function ScrollOnTop({ handleOnCLickFn }: { handleOnCLickFn: () => void }) {
	return (
		<button onClick={handleOnCLickFn} className={classes.buttonWrapper}>
			<Image src={arrowIcon} alt='Scroll arrow' />
		</button>
	);
}
