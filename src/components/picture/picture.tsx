'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import closeIcon from '@/assets/Close.png';

import classes from './picture.module.scss';

type Props = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

function Picture({ src, alt, width, height }: Props) {
	const [imagePopup, setImagePopup] = useState(false);

	return (
		<>
			<div className={`${classes.imageWrapper}`} onClick={() => setImagePopup(true)}>
				<Image src={src} alt={alt} width={width} height={height} priority={true} />
			</div>
			{imagePopup && (
				<div className={`${classes.imagePopupWrapper}`} onClick={() => setImagePopup(!imagePopup)}>
					<div className={classes.imageWrap}>
						<Link href={src} target={'_blank'}>
							<Image src={src} alt={alt} width={width} height={height} priority={true} />
						</Link>
						<div className={classes.close} onClick={() => setImagePopup(false)}>
							<Image src={closeIcon} alt={'Close image'} />
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Picture;

// {imagePopup && (
// 	<>
// 		<div className={classes.imagePopupWrapper}>
// 			<span
// 				className={`${classes.popUpBlur} ${isMaximize && classes.foo}`}
// 				onClick={() => {
// 					setImagePopup(false);
// 					setIsMaximize(false);
// 				}}></span>
// 			<div
// 				className={` ${imagePopup && classes.popupImageWrapper} ${
// 					isMaximize && classes.maximize
// 				}`}
// 				onClick={() => setIsMaximize(!isMaximize)}>
// 				<span className={classes.close} onClick={() => setImagePopup(false)}>
// 					X
// 				</span>
// 				<Image src={src} alt={alt} width={width} height={height} />;
// 			</div>
// 		</div>
// 	</>
// )}
