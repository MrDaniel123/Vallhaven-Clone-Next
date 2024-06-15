import ScrollOnTop from '@/components/scrollOnTop/scrollOnTop';
import classes from './page.module.scss';
import LoadMoreImages from '@/components/loadMoreImages/loadMoreImages';

interface ImagesParams {
	categories: string;
	purity: string;
	sorting: string;
	query: string;
}

export default async function ImagesPage({ searchParams }: { searchParams: ImagesParams }) {
	return (
		<div className={classes.wrapper}>
			<ScrollOnTop />
			<LoadMoreImages searchParams={searchParams} />
		</div>
	);
}
