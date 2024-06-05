import { useContext, useState } from 'react';
import { SearchContext } from '@/context/context';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import classes from './dropDownMenu.module.scss';
import arrowIcon from '@/assets/WhiteArrow.png';

interface Props {
	categoriesList: string[];
	reducerActionName: string;
	actualSelectedCategory: string;
}

export default function DropDownMenu({
	categoriesList,
	reducerActionName,
	actualSelectedCategory,
}: Props) {
	const { state, dispatch } = useContext(SearchContext);
	const [isVisibility, setIsVisibility] = useState(false);

	return (
		<div className={`${classes.dropDownMenuWrapper} ${isVisibility && classes.isOpen}`}>
			<button className={classes.dropDownMenuButton} onClick={() => setIsVisibility(!isVisibility)}>
				<p>{state.sorting}</p>
				<Image
					src={arrowIcon}
					alt={'Arrow icon in drop down menu'}
					className={`${isVisibility && classes.iconRotate}`}
				/>
			</button>
			<AnimatePresence>
				{isVisibility && (
					<motion.div
						className={classes.hiddenButtonsWrapper}
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -30 }}
						transition={{ duration: 0.1 }}>
						{categoriesList.map(categoryName => {
							return (
								<button
									className={`${classes.dropDownMenuButton} ${classes.hiddenMenu} ${
										categoryName === actualSelectedCategory && classes.isSelected
									}`}
									key={categoryName}
									onClick={() => {
										dispatch({ type: reducerActionName, payload: categoryName });
										setIsVisibility(false);
									}}>
									<p>{categoryName}</p>
								</button>
							);
						})}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
