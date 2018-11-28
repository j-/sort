import { Comparison } from './comparison';

export interface ComparisonData {
	readonly [a: string]: {
		readonly [b: string]: Comparison | null;
	};
}

export const initialize = (items: string[]): ComparisonData => {
	const result = {};
	for (let a of items) {
		const objA = {};
		for (let b of items) {
			objA[b] = null;
		}
		objA[a] = Comparison.EQ;
		result[a] = objA;
	}
	return result;
};
