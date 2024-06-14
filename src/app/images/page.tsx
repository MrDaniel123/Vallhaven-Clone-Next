'use client';

import { useContext, useEffect, useState } from 'react';
import { useGetImages } from '@/hooks/useGetImages';
import { useSearchParams } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

import { SearchContext } from '@/context/context';
import ScrollOnTop from '@/components/scrollOnTop/scrollOnTop';
import classes from './page.module.scss';

export default function ImagesPage() {
	const searchParams = useSearchParams();
	const categories = searchParams.get('categories');
	const purity = searchParams.get('purity');
	const sorting = searchParams.get('sorting');
	const query = searchParams.get('q');

	const { ref, inView } = useInView();

	const { dispatch } = useContext(SearchContext);

	const [params, setParams] = useState({
		categories: categories,
		purity: purity,
		sorting: sorting,
		query: query,
	});

	const { data, fetchNextPage, isLoading, isFetchingNextPage } = useGetImages({
		params,
	});

	useEffect(() => {
		setParams({
			categories: categories,
			purity: purity,
			sorting: sorting,
			query: query,
		});
		dispatch({ type: 'RELOAD' });
	}, [categories, purity, sorting, query, dispatch]);

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView, fetchNextPage]);

	function scrollOfTheTop() {
		window.scrollTo(0, 0);
	}

	const renderData = data?.pages.map((images, index) => {
		if (images.length === 0) {
			return;
		}

		return (
			// TODO The key To change IMPORTANT!
			<div className={classes.imagesWrapper} key={`Page:${index}`}>
				{images.map(image => {
					return (
						<Link href={`/${image.id}`} key={image.id}>
							<div
								className={`${classes.imageWrapper} ${
									image.purity === 'sfw' ? classes.outlineSFW : undefined
								} ${image.purity === 'sketchy' ? classes.outlineSKETCHY : undefined} ${
									image.purity === 'nsfw' ? classes.outlineNSFW : undefined
								}`}>
								<Image
									src={image.thumbs.small.replace('//', '/')}
									alt={'Image'}
									width={300}
									height={200}
									quality={100}
								/>
							</div>
						</Link>
					);
				})}
				<span className={classes.pageBreakLine}>Page {index + 2}</span>
			</div>
		);
	});

	return (
		<div className={classes.wrapper}>
			<ScrollOnTop handleOnCLickFn={scrollOfTheTop} />
			{renderData}

			<div ref={ref}>
				<p>{isLoading ? 'Loading' : '...'}</p>
			</div>
		</div>
	);
}
