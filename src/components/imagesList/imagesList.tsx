import Image from 'next/image';
import Link from 'next/link';

import classes from './imagesList.module.scss';
import { ImagesType } from '@/types/imagesType';

export default function ImagesList({ data: images }: { data: ImagesType[] }) {
	return (
		<div className={classes.imagesWrapper}>
			{images.map(image => {
				return (
					<Link
						className={`${classes.imageWrapper} ${
							image.purity === 'sfw' ? classes.outlineSFW : undefined
						} ${image.purity === 'sketchy' ? classes.outlineSKETCHY : undefined} ${
							image.purity === 'nsfw' ? classes.outlineNSFW : undefined
						}`}
						href={`/${image.id}`}
						key={image.id}>
						<Image
							src={image.thumbs.small.replace('//', '/')}
							alt={'Image'}
							fill={true}
							objectFit={'cover'}
							quality={100}
						/>
					</Link>
				);
			})}
		</div>
	);
}
