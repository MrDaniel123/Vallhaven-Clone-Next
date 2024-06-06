import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SearchContext } from '@/context/context';
import classes from './reloadButton.module.scss';

import reloadIcon from '@/assets/Reload.png';
import urlQueysGenerator from '@/lib/urlQueysGenerator';
import { useGetImages } from '@/hooks/useGetImages';
import { useSearchParams } from 'next/navigation';

interface Props {
	hiddenMenuFn: () => void;
}

export default function ReloadButton({ hiddenMenuFn }: Props) {
	const { dispatch, state } = useContext(SearchContext);
	const { categories, purity, sorting } = urlQueysGenerator(state);

	const handleOnClick = () => {
		dispatch({ type: 'RELOAD' });
		hiddenMenuFn();
	};

	return (
		<Link
			href={{
				pathname: '/images',
				query: {
					categories: categories,
					purity: purity,
					sorting: sorting,
				},
			}}>
			<button className={classes.button} onClick={handleOnClick}>
				<p>Reload</p>
				<Image src={reloadIcon} alt={'Reload icon'} />
			</button>
		</Link>
	);
}
