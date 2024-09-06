import Image from 'next/image';
import Link from 'next/link';

import classes from './imagesList.module.scss';
import { ImagesType } from '@/types/imagesType';

export default function ImagesList({ data: images }: { data: ImagesType[] }) {
	return (
		<div className={classes.imagesWrapper}>
			{images.map((image, index, array) => {
				let animationDelay = index / array.length;

				if (animationDelay >= 0.5) {
					animationDelay = animationDelay / 2;
				}
				return (
					<Link
						className={`${classes.imageWrapper} ${classes.animation} ${
							image.purity === 'sfw' ? classes.outlineSFW : undefined
						} ${image.purity === 'sketchy' ? classes.outlineSKETCHY : undefined} ${
							image.purity === 'nsfw' ? classes.outlineNSFW : undefined
						}`}
						href={`/${image.id}`}
						key={image.id}
						style={{ animationDelay: `${animationDelay}s` }}>
						<Image
							src={image.thumbs.small.replace('//', '/')}
							alt={'Image'}
							fill={true}
							sizes={'100%'}
							quality={100}
						/>
					</Link>
				);
			})}
		</div>
	);
}
