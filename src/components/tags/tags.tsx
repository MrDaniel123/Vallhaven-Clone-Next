import { Tags as TagsType } from '@/types/imageType';
import classes from './tags.module.scss';
import Link from 'next/link';

export default function Tags({ tags }: { tags: TagsType[] }) {
	return (
		<div className={classes.tagsWrapper}>
			{tags.map(tag => (
				<Link href={`search/${tag.id}`} key={tag.id}>
					<p className={classes.tag}>{`#${tag.name}`}</p>
				</Link>
			))}
		</div>
	);
}
