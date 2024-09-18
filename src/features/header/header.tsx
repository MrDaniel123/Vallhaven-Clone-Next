import classes from './header.module.scss';
import Image from 'next/image';

import logoIcon from '@/assets/Logo.png';
import homeIcon from '@/assets/Home.png';
import userIcon from '@/assets/User.png';
import Link from 'next/link';
import SearchQuery from '@/components/searchQuery/searchQuery';

export default function Header() {
	return (
		<div className={classes.headerContainer}>
			<header className={classes.header}>
				<div className={classes.container}>
					<Link href={'/'}>
						<Image src={homeIcon} alt={'Home icon'} />
					</Link>
					<Link href={'/'}>
						<Image src={logoIcon} alt={'Application logo icon'} />
					</Link>
				</div>
				<div className={`${classes.container} ${classes.linkContainer}`}>
					<Link
						href={'/images?categories=111&purity=110&sorting=latest&query='}
						className={classes.link}>
						Latest
					</Link>
					<Link
						href={'/images?categories=111&purity=110&sorting=hot&query='}
						className={classes.link}>
						Hot
					</Link>
					<Link
						href={'/images?categories=111&purity=110&sorting=toplist&query='}
						className={classes.link}>
						TopList
					</Link>
					<Link
						href={'/images?categories=111&purity=110&sorting=random&query='}
						className={classes.link}>
						Random
					</Link>
				</div>
				<div className={classes.container}>
					<SearchQuery isMobile={false} />
					<Image src={userIcon} alt={'User icon'} />
				</div>
			</header>
		</div>
	);
}
