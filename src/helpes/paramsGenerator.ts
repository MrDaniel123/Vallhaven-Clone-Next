import { ReducerType } from '@/types/reducerType';

export default function paramsGenerator(state: ReducerType) {
	let purityArray: string[] = [];
	let categoriesArray: string[] = [];

	purityArray.push(
		state.puritySfw ? '1' : '0',
		state.puritySketchy ? '1' : '0',
		state.purityNsfw ? '1' : '0'
	);
	categoriesArray.push(
		state.categoryGeneral ? '1' : '0',
		state.categoryAnime ? '1' : '0',
		state.categoryPeople ? '1' : '0'
	);

	return {
		purity: purityArray.join('').toString(),
		categories: categoriesArray.join('').toString(),
		sorting: state.sorting,
	};
}
