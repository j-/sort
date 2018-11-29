import { Reducer } from 'redux';
import { isActionSetComparison } from './actions';
import { Comparison } from 'src/comparison';

interface ComparisonRecord extends Array<string | Comparison> {
	length: 3;
	0: string;
	1: string;
	2: Comparison;
}

export interface ReducerState extends Array<ComparisonRecord> {

}

const DEFAULT_STATE: ReducerState = [];

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetComparison(action)) {
		const { a, b, value } = action.data;
		return [
			...state,
			[a, b, value],
		];
	}

	return state;
};

export default reducer;

export const isExplicitComparison = (state: ReducerState, a: string, b: string) => (
	state.some((comparison) => (
		comparison[0] === a &&
		comparison[1] === b
	))
);

export const isLastExplicitComparison = (state: ReducerState, a: string, b: string) => {
	const comparison = state[state.length - 1];
	return comparison && (
		comparison[0] === a &&
		comparison[1] === b
	);
};
