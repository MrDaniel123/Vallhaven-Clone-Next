import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SearchContext } from '@/context/context';
import classes from './reloadButton.module.scss';
import { useRouter } from 'next/navigation';

import reloadIcon from '@/assets/Reload.png';
import paramsGenerator from '@/helpes/paramsGenerator';

interface Props {
	hiddenMenuFn: () => void;
}

export default function ReloadButton({ hiddenMenuFn }: Props) {
	const { state } = useContext(SearchContext);
	const { categories, purity, sorting } = paramsGenerator(state);

	const handleOnClick = () => {
		hiddenMenuFn();
	};

	return (
		<Link
			href={{
				pathname: `/images`,
				query: {
					categories: categories,
					purity: purity,
					sorting: sorting,
					query: '',
				},
			}}>
			<button className={classes.button} onClick={handleOnClick}>
				<p>Reload</p>
				<Image src={reloadIcon} alt={'Reload icon'} />
			</button>
		</Link>
	);
}
