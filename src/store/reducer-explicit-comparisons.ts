import { Reducer } from 'redux';
import { isActionSetComparison } from './actions';

interface Comparison extends Array<string> {
	length: 2;
	0: string;
	1: string;
}

export interface ReducerState extends Array<Comparison> {

}

const DEFAULT_STATE: ReducerState = [];

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetComparison(action)) {
		const { a, b } = action.data;
		return [
			...state,
			[a, b],
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
