import getImage from '@/api/getImage';
import classes from './page.module.scss';
import Image from 'next/image';

import Picture from '@/components/picture/picture';
import Tags from '@/components/tags/tags';
import ColorsViews from '@/components/colorsView/colorsView';

export default async function ImagePage({ params }: { params: { imageId: string } }) {
	const data = await getImage(params.imageId);

	return (
		<div className={classes.wrapper}>
			<div className={classes.contentWrapper}>
				<Picture
					src={data.data.path}
					alt={'Image'}
					width={data.data.dimension_x}
					height={data.data.dimension_y}
				/>
				<div className={classes.sidebar}>
					<h2 className={classes.resolution}>{data.data.resolution}</h2>
					<div className={classes.breakLine}></div>
					<ColorsViews colors={data.data.colors} />
					<div className={classes.breakLine}></div>
					<Tags tags={data.data.tags} />
					<div className={classes.breakLine}></div>
					<div className={classes.properties}>
						<div className={classes.property}>
							<h3>Uploader</h3>
							<span className={classes.userColor}>{data.data.uploader.username}</span>
							<Image
								src={data.data.uploader.avatar['20px']}
								alt={'Image author avatar'}
								width={20}
								height={20}
							/>
						</div>
						<div className={classes.property}>
							<h3>Category</h3>
							<span className={classes.propertiesFont}>{data.data.category}</span>
						</div>
						<div className={classes.property}>
							<h3>Purity</h3>
							<span
								className={`${data.data.purity === 'sfw' ? classes.puritySFW : undefined} ${
									data.data.purity === 'nsfw' ? classes.purityNSFW : undefined
								} ${data.data.purity === 'sketchy' ? classes.puritySKETCHY : undefined}`}>
								{data.data.purity}
							</span>
						</div>
						<div className={classes.property}>
							<h3>Views</h3>
							<span className={classes.propertiesFont}>{data.data.views}</span>
						</div>
						<div className={classes.property}>
							<h3>Favorites</h3>
							<span className={classes.propertiesFont}>{data.data.favorites}</span>
						</div>
					</div>
					<div className={classes.breakLine}></div>
				</div>
			</div>
		</div>
	);
}
