'use client';

import { useGetImages } from '@/hooks/useGetImages';
import { useSearchParams } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

import classes from './page.module.scss';
import { useEffect, useId } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollOnTop from '@/components/scrollOnTop/scrollOnTop';

export default function ImagesPage() {
	const searchParams = useSearchParams();
	const categories = searchParams.get('categories');
	const purity = searchParams.get('purity');
	const sorting = searchParams.get('sorting');

	const { data, fetchNextPage, isLoading, refetch } = useGetImages({ categories, purity, sorting });

	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView, fetchNextPage]);

	useEffect(() => {}, []);

	function scrollOfTheTop() {
		window.scrollTo(0, 0);
	}

	const renderData = data?.pages.map((images, index) => {
		return (
			// TODO The key To change IMPORTANT!

			<div className={classes.imagesWrapper} key={images[0].url}>
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

	// return <div className={classes.wrapper}>{/* <main>{renderImages}</main> */}</div>;
}
