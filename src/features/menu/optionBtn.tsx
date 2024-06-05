import Image from 'next/image';
import classes from './optionBtn.module.scss';
import arrow from '@/assets/BlackArrow.png';

interface Props {
	openCloseMenu: () => void;
	isMenuOpen: boolean;
}

export default function OptionBtn({ openCloseMenu, isMenuOpen }: Props) {
	return (
		<button className={classes.button} onClick={openCloseMenu}>
			<p>Options</p>
			<Image
				src={arrow}
				alt='Arrow '
				className={`${isMenuOpen ? classes.menuIsOpen : undefined}`}
			/>
		</button>
	);
}
