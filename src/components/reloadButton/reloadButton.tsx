import { useContext } from 'react';
import { SearchContext } from '@/context/context';
import Image from 'next/image';
import classes from './reloadButton.module.scss';

import reloadIcon from '@/assets/Reload.png';

interface Props {
	hiddenMenuFn: () => void;
}

export default function ReloadButton({ hiddenMenuFn }: Props) {
	const { dispatch } = useContext(SearchContext);

	const handleOnClick = () => {
		dispatch({ type: 'RELOAD' });
		hiddenMenuFn();
	};

	return (
		<button className={classes.button} onClick={handleOnClick}>
			<p>Reload</p>
			<Image src={reloadIcon} alt={'Reload icon'} />
		</button>
	);
}
