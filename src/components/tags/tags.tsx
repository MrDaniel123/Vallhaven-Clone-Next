import { Tags as TagsType } from '@/types/imageType';
import classes from './tags.module.scss';
import Link from 'next/link';

export default function Tags({ tags }: { tags: TagsType[] }) {
	return (
		<div className={classes.tagsWrapper}>
			{tags.map(tag => (
				<Link
					href={{
						pathname: '/images',
						query: {
							q: tag.name,
							categories: '110',
							purity: '110',
							sorting: 'topList',
						},
					}}
					key={tag.id}>
					<p className={classes.tag}>{`#${tag.name}`}</p>
				</Link>
			))}
		</div>
	);
}
