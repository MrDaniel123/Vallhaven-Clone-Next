// async function getData() {
// 	const res = await fetch(
// 		'http://localhost:3000/images?purity=100&categories=100&sorting=hot&page=5&query=anime'
// 	);

// 	if (!res.ok) {
// 		// This will activate the closest `error.js` Error Boundary
// 		throw new Error('Failed to fetch data');
// 	}

// 	return res.json();
// }

import classes from './page.module.scss';

export default async function Page() {
	return <div className={classes.page}>Home Page</div>;
}
