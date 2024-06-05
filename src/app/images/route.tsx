// import { NextRequest } from 'next/server';

// async function getImages({ categories, purity }: any) {
// 	const response = await fetch(
// 		`https://wallhaven.cc/api/v1/search?categories=${categories}&page=1&apikey=6cg5pjA6iyCXtbQHGKOeh5xeSjkH5cZU&purity=${purity}&q=cyberpunk2077&sorting=views`
// 	);

// 	if (!response.ok) {
// 		// This will activate the closest `error.js` Error Boundary
// 		throw new Error('Failed to fetch data');
// 	}
// 	return response.json();
// }

// export async function GET(request: NextRequest) {
// 	const searchParams = request.nextUrl.searchParams;
// 	const query = searchParams.get('query');
// 	const categories = searchParams.get('categories');
// 	const purity = searchParams.get('purity');
// 	const sorting = searchParams.get('sorting');
// 	const colors = searchParams.get('colors');

// 	console.log(query, categories, colors, purity, sorting);

// 	const response = await getImages({ categories, purity });

// 	return Response.json(response);
// }
