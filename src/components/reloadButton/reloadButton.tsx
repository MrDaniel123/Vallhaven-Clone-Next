import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SearchContext } from '@/context/context';
import classes from './reloadButton.module.scss';
import { useRouter } from 'next/navigation';

import reloadIcon from '@/assets/Reload.png';
import urlQueysGenerator from '@/lib/urlQueysGenerator';

interface Props {
	hiddenMenuFn: () => void;
}

export default function ReloadButton({ hiddenMenuFn }: Props) {
	const { state, dispatch } = useContext(SearchContext);
	const { categories, purity, sorting } = urlQueysGenerator(state);

	const handleOnClick = () => {
		hiddenMenuFn();
		dispatch({ type: 'RELOAD' });
	};

	return (
		<Link
			href={{
				pathname: `/images`,
				query: {
					categories: categories,
					purity: purity,
					sorting: sorting,
					query: state.query,
				},
			}}>
			<button className={classes.button} onClick={handleOnClick}>
				<p>Reload</p>
				<Image src={reloadIcon} alt={'Reload icon'} />
			</button>
		</Link>
	);
}
